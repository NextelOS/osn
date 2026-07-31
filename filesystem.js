// filesystem.js – Виртуальная файловая система на IndexedDB

const FS = {
  dbName: 'NextelOS_FS',
  storeName: 'files',
  db: null,
  ready: false,

  init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 4);
      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: 'path' });
        }
      };
      request.onsuccess = (e) => {
        this.db = e.target.result;
        this.ensureRoot().then(() => { this.ready = true; resolve(); }).catch(reject);
      };
      request.onerror = reject;
    });
  },

  ensureRoot() {
    return this.get('/').then(root => {
      if (!root) {
        return this.set('/', { type: 'folder', children: {} })
          .then(() => this.set('/home', { type: 'folder', children: {} }))
          .then(() => this.set('/home/user', { type: 'folder', children: {} }))
          .then(() => this.set('/home/user/readme.txt', { type: 'file', content: 'Добро пожаловать в NextelOS v0.1.0!' }))
          .then(() => this.set('/system', { type: 'folder', children: {} }))
          .then(() => this.set('/system/trash', { type: 'folder', children: {} }))
          .then(() => this.set('/system/apps.json', { type: 'file', content: '[]' }))
          .then(() => this.set('/system/events.json', { type: 'file', content: '{}' }))
          .then(() => this.set('/system/alarms.json', { type: 'file', content: '[]' }))
          .then(() => this.set('/system/passwords.json', { type: 'file', content: '[]' }))
          .then(() => this.set('/system/notes.json', { type: 'file', content: '{}' }))
          .then(() => this.set('/system/bookmarks.json', { type: 'file', content: '[]' }))
          .then(() => this.set('/system/todo.json', { type: 'file', content: '[]' }))
          .then(() => this.set('/system/playlists.json', { type: 'file', content: '[]' }))
          .then(() => this.set('/system/folders.json', { type: 'file', content: '{}' }));
      }
    });
  },

  get(path) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(this.storeName, 'readonly');
      const store = tx.objectStore(this.storeName);
      const req = store.get(path);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = reject;
    });
  },

  set(path, data) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(this.storeName, 'readwrite');
      const store = tx.objectStore(this.storeName);
      const req = store.put({ path, type: data.type, content: data.content || '', children: data.children || {} });
      req.onsuccess = resolve;
      req.onerror = reject;
    });
  },

  delete(path) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(this.storeName, 'readwrite');
      const store = tx.objectStore(this.storeName);
      const req = store.delete(path);
      req.onsuccess = resolve;
      req.onerror = reject;
    });
  },

  mkdir(path) {
    let current = '';
    const parts = path.split('/').filter(Boolean);
    let chain = Promise.resolve();
    parts.forEach(part => {
      current = current ? `${current}/${part}` : `/${part}`;
      chain = chain.then(() => this.get(current).then(entry => {
        if (!entry) return this.set(current, { type: 'folder', children: {} });
        else if (entry.type !== 'folder') throw new Error(`"${current}" не папка`);
      }));
    });
    return chain;
  },

  touch(path, content = '') {
    return this.get(path).then(entry => {
      if (entry) throw new Error('Файл уже существует');
      return this.set(path, { type: 'file', content });
    });
  },

  cat(path) {
    return this.get(path).then(entry => {
      if (!entry) throw new Error('Файл не найден');
      if (entry.type !== 'file') throw new Error('Это не файл');
      return entry.content || '';
    });
  },

  write(path, content) {
    return this.get(path).then(entry => {
      if (!entry) throw new Error('Файл не найден');
      if (entry.type !== 'file') throw new Error('Это не файл');
      return this.set(path, { type: 'file', content });
    });
  },

  ls(path) {
    return this.get(path).then(entry => {
      if (!entry) throw new Error('Папка не найдена');
      if (entry.type !== 'folder') throw new Error('Это не папка');
      const prefix = path === '/' ? '/' : path + '/';
      return this.getAllKeys().then(keys => {
        const children = keys.filter(k => k.startsWith(prefix) && k !== path);
        const names = children.map(k => k.substring(prefix.length).split('/')[0]);
        return [...new Set(names)];
      });
    });
  },

  getAllKeys() {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(this.storeName, 'readonly');
      const store = tx.objectStore(this.storeName);
      const req = store.getAllKeys();
      req.onsuccess = () => resolve(req.result);
      req.onerror = reject;
    });
  },

  rm(path) {
    return this.get(path).then(entry => {
      if (!entry) throw new Error('Не найдено');
      if (entry.type === 'folder') {
        return this.ls(path).then(children => {
          let chain = Promise.resolve();
          children.forEach(child => {
            const childPath = path === '/' ? '/' + child : path + '/' + child;
            chain = chain.then(() => this.rm(childPath));
          });
          return chain.then(() => this.delete(path));
        });
      } else {
        return this.delete(path);
      }
    });
  },

  stat(path) {
    return this.get(path);
  }
};

window.FS = FS;
