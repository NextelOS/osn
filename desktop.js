// desktop.js – Рабочий стол, иконки, меню Пуск, поиск, трей, обои, виджеты

// SVG иконки (общая функция)
function iconSVG(type, className = '') {
  let inner = '';
  switch(type) {
    case 'folder': inner = '<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" fill="currentColor"/>'; break;
    case 'file': inner = '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="currentColor"/><path d="M14 2v6h6" fill="none" stroke="currentColor" stroke-width="2"/>'; break;
    case 'gear': inner = '<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="currentColor"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" fill="none" stroke="currentColor" stroke-width="2"/>'; break;
    case 'trash': inner = '<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-8 0v12m4-12v12M5 6l1 14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-14" fill="none" stroke="currentColor" stroke-width="2"/>'; break;
    case 'terminal': inner = '<path d="M4 5l6 7-6 7M16 19h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'; break;
    case 'calc': inner = '<rect x="4" y="2" width="16" height="20" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 6h8M8 10h8M8 14h4M16 14h-2M8 18h8" fill="none" stroke="currentColor" stroke-width="2"/>'; break;
    case 'home': inner = '<path d="M3 12l9-9 9 9M5 10v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10" fill="none" stroke="currentColor" stroke-width="2"/>'; break;
    case 'process': inner = '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2" fill="none" stroke="currentColor" stroke-width="2"/>'; break;
    case 'start': inner = '<path d="M4 4l16 8L4 20V4z" fill="currentColor"/>'; break;
    case 'collapse': inner = '<path d="M5 12h14M12 5v14" fill="none" stroke="currentColor" stroke-width="2"/>'; break;
    case 'search': inner = '<circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 16l5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'; break;
    case 'browser': inner = '<rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 4v16M3 8h18" fill="none" stroke="currentColor" stroke-width="2"/>'; break;
    case 'calendar-app': inner = '<rect x="4" y="6" width="16" height="15" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 11h18M8 4v3M16 4v3" fill="none" stroke="currentColor" stroke-width="2"/>'; break;
    case 'alarm': inner = '<circle cx="12" cy="13" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 9v4l2 2M8 4l-4 3M16 4l4 3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'; break;
    case 'notepad': inner = '<rect x="4" y="2" width="16" height="20" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 7h8M8 11h6M8 15h8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'; break;
    case 'password': inner = '<rect x="3" y="10" width="18" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="15" r="2" fill="currentColor"/><path d="M7 10v-3a5 5 0 0 1 10 0v3" fill="none" stroke="currentColor" stroke-width="2"/>'; break;
    case 'paint': inner = '<path d="M4 20l5-5M12 8l4 4M9 15l-4-4 4-4 4 4-4 4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M17 10l3-3-4-4-3 3" fill="none" stroke="currentColor" stroke-width="2"/>'; break;
    case 'volume': inner = '<path d="M3 10v4h4l5 5V5L7 10H3z" fill="currentColor"/><path d="M16 8a5 5 0 0 1 0 8M19 5a9 9 0 0 1 0 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'; break;
    case 'network': inner = '<path d="M4 16l4-4 4 4M8 12l4-4 4 4M12 8l4-4 4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'; break;
    case 'battery': inner = '<rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M21 10v4" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="8" width="12" height="8" rx="1" fill="currentColor"/>'; break;
    case 'pin': inner = '<circle cx="12" cy="12" r="4" fill="currentColor"/><path d="M12 2v4M12 18v4M4 12h4M16 12h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'; break;
    case 'snake': inner = '<path d="M12 2C9 2 7 4 7 7c0 2 1 3 2 4l-3 2 1 1 4-2c1 1 2 2 2 4 0 3-2 5-5 5s-5-2-5-5c0-1.5.7-3 2-4l-1-1c-2 1.5-3 3.5-3 6 0 4 3 7 7 7s7-3 7-7c0-3-1-5-3-7l3-2-1-1-3 2c-1-1-2-2-2-4 0-2 1-3 3-3 1 0 2 .5 3 1.5l1-1c-1-1.5-2.5-2.5-4-2.5z" fill="currentColor"/>'; break;
    case 'tetris': inner = '<rect x="3" y="3" width="4" height="4" fill="currentColor"/><rect x="9" y="3" width="4" height="4" fill="currentColor"/><rect x="15" y="3" width="4" height="4" fill="currentColor"/><rect x="3" y="9" width="4" height="4" fill="currentColor"/><rect x="9" y="9" width="4" height="4" fill="currentColor"/><rect x="15" y="9" width="4" height="4" fill="currentColor"/><rect x="3" y="15" width="4" height="4" fill="currentColor"/><rect x="9" y="15" width="4" height="4" fill="currentColor"/><rect x="15" y="15" width="4" height="4" fill="currentColor"/>'; break;
    case 'minesweeper': inner = '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="8" cy="8" r="1.5" fill="currentColor"/><circle cx="16" cy="8" r="1.5" fill="currentColor"/><path d="M9 16c0-2 3-3 3-3s3 1 3 3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'; break;
    case 'weather': inner = '<path d="M6 16c-2 0-4-2-4-4 0-2 2-4 4-4 1-3 3-5 6-5 3 0 5 2 6 5 2 0 4 2 4 4 0 2-2 4-4 4H6z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 12l2 2 4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'; break;
    case 'notes': inner = '<rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 8h8M8 12h6M8 16h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'; break;
    case 'player': inner = '<path d="M3 18V6l15 6-15 6z" fill="currentColor"/><circle cx="18" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/>'; break;
    case 'converter': inner = '<path d="M4 4v16h16M4 12l4-4 4 4M8 8v8M16 8v8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'; break;
    case 'todo': inner = '<rect x="4" y="6" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 10l3 3 5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'; break;
    case 'code': inner = '<path d="M7 8l-5 4 5 4M17 8l5 4-5 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="10" y="4" width="4" height="16" fill="none" stroke="currentColor" stroke-width="2"/>'; break;
    case 'chess': inner = '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 8l8 8M16 8l-8 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'; break;
    case 'tic': inner = '<path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/>'; break;
    case 'art': inner = '<rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="9" cy="9" r="2" fill="currentColor"/><path d="M4 16l4-4 4 4 4-4 4 4" fill="none" stroke="currentColor" stroke-width="2"/>'; break;
    case 'translate': inner = '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M5 12h14M12 5a15 15 0 0 1 0 14M12 5a15 15 0 0 0 0 14" fill="none" stroke="currentColor" stroke-width="2"/>'; break;
    case 'wiki': inner = '<path d="M4 4h16v16H4z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 8h8M8 12h6M8 16h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'; break;
    case 'currency': inner = '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 8l8 8M16 8l-8 8" fill="none" stroke="currentColor" stroke-width="2"/><text x="12" y="16" font-size="8" text-anchor="middle" fill="currentColor">$</text>'; break;
    case 'virucide': inner = '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 8l8 8M16 8l-8 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="12" r="3" fill="currentColor"/>'; break;
    case 'tabliq': inner = '<rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 12h16M12 4v16" fill="none" stroke="currentColor" stroke-width="2"/>'; break;
    case 'trader': inner = '<path d="M4 12h16M12 4v16M4 4h16v16H4z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M7 8h10M7 12h10M7 16h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'; break;
    case 'g2048': inner = '<rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><text x="12" y="18" font-size="10" text-anchor="middle" fill="currentColor">2048</text>'; break;
    case 'puzzle': inner = '<rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3"/>'; break;
    case 'pdf': inner = '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="currentColor"/><path d="M14 2v6h6" fill="none" stroke="currentColor" stroke-width="2"/><text x="8" y="16" font-size="6" fill="white">PDF</text>'; break;
    case 'radio': inner = '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 12a4 4 0 0 1 4-4M16 12a4 4 0 0 0-4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="12" r="2" fill="currentColor"/>'; break;
    case 'recipes': inner = '<path d="M4 6h16v12H4z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 10h8M8 14h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'; break;
    case 'map': inner = '<path d="M2 6l6 4 8-4 6 4v12l-6-4-8 4-6-4V6z" fill="none" stroke="currentColor" stroke-width="2"/>'; break;
    case 'lock': inner = '<rect x="5" y="10" width="14" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" stroke-width="2"/>'; break;
    case 'screenshot': inner = '<path d="M4 6h16v12H4z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="currentColor"/><path d="M4 6l4 4M20 6l-4 4M4 18l4-4M20 18l-4-4" fill="none" stroke="currentColor" stroke-width="2"/>'; break;
    default: inner = '<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>';
  }
  return `<svg viewBox="0 0 24 24" class="${className}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
}
function iconHTML(type, cls = '') { return iconSVG(type, cls); }
window.iconHTML = iconHTML;

// Рабочий стол и иконки
let iconPositions = {};
let selectedIcons = [];
let folderContents = {};
let slideshowTimer = null;

function loadIconPositions() {
  try { iconPositions = JSON.parse(localStorage.getItem('nextelos-icon-positions') || '{}'); } catch(e) { iconPositions = {}; }
}
function saveIconPositions() {
  localStorage.setItem('nextelos-icon-positions', JSON.stringify(iconPositions));
}

function loadFolders() {
  FS.get('/system/folders.json').then(data => {
    try { folderContents = data ? JSON.parse(data.content) : {}; } catch(e) { folderContents = {}; }
  });
}
function saveFolders() {
  FS.write('/system/folders.json', JSON.stringify(folderContents));
}

function arrangeIcons() {
  const icons = document.querySelectorAll('.desktop-icon');
  const cols = Math.ceil(Math.sqrt(icons.length));
  const spacing = 90;
  icons.forEach((icon, idx) => {
    const col = idx % cols, row = Math.floor(idx / cols);
    const left = 30 + col * spacing, top = 30 + row * spacing;
    icon.style.left = left + 'px';
    icon.style.top = top + 'px';
    const appId = icon.dataset.appId;
    if (appId) iconPositions[appId] = { left, top };
  });
  saveIconPositions();
  kernel.showNotification('Иконки упорядочены');
}

function renderDesktopIcons() {
  document.querySelectorAll('.desktop-icon').forEach(el => el.remove());
  let apps = getAllApps();
  const inFolder = Object.values(folderContents).flat();
  apps = apps.filter(app => !inFolder.includes(app.id));
  apps.forEach((app, idx) => {
    const pos = iconPositions[app.id] || { left: 30 + (idx % 6) * 100, top: 30 + Math.floor(idx / 6) * 110 };
    iconPositions[app.id] = pos;
    const icon = document.createElement('div');
    icon.className = 'desktop-icon' + (app.isFolder ? ' folder' : '');
    icon.dataset.appId = app.id;
    icon.style.left = pos.left + 'px';
    icon.style.top = pos.top + 'px';
    icon.innerHTML = `<span class="icon">${iconHTML(app.icon)}</span><span class="label">${app.label}</span>`;
    icon.addEventListener('click', (e) => {
      if (e.shiftKey) {
        icon.classList.toggle('selected');
        const idx = selectedIcons.indexOf(icon);
        if (idx === -1) selectedIcons.push(icon); else selectedIcons.splice(idx, 1);
        return;
      }
      if (!icon.classList.contains('selected')) {
        document.querySelectorAll('.desktop-icon.selected').forEach(el => el.classList.remove('selected'));
        selectedIcons = [];
      }
      app.action();
    });
    makeDraggable(icon, app.id);
    icon.addEventListener('contextmenu', (e) => {
      e.preventDefault(); e.stopPropagation();
      showContextMenuForIcon(e.clientX, e.clientY, app);
    });
    document.getElementById('desktop').appendChild(icon);
  });
  saveIconPositions();
}

function makeDraggable(icon, appId) {
  let isDragging = false, startX, startY, origTop, origLeft, clone = null, timeout = null;
  icon.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    const target = e.target.closest('.desktop-icon');
    if (!target) return;
    if (e.shiftKey) {
      target.classList.toggle('selected');
      const idx = selectedIcons.indexOf(target);
      if (idx === -1) selectedIcons.push(target); else selectedIcons.splice(idx, 1);
      return;
    }
    if (!target.classList.contains('selected')) {
      document.querySelectorAll('.desktop-icon.selected').forEach(el => el.classList.remove('selected'));
      selectedIcons = [];
      target.classList.add('selected');
      selectedIcons.push(target);
    }
    isDragging = true;
    const rect = target.getBoundingClientRect();
    startX = e.clientX; startY = e.clientY;
    origTop = parseInt(target.style.top) || 0;
    origLeft = parseInt(target.style.left) || 0;
    clone = target.cloneNode(true);
    clone.style.position = 'fixed';
    clone.style.width = target.offsetWidth + 'px';
    clone.style.height = target.offsetHeight + 'px';
    clone.style.left = (e.clientX - 20) + 'px';
    clone.style.top = (e.clientY - 20) + 'px';
    clone.style.pointerEvents = 'none';
    clone.style.opacity = '0.8';
    clone.style.zIndex = '1000';
    document.body.appendChild(clone);
    target.classList.add('dragging');
    const onDrag = (e) => {
      if (!isDragging) return;
      if (clone) {
        clone.style.left = (e.clientX - 20) + 'px';
        clone.style.top = (e.clientY - 20) + 'px';
      }
      const targetIcon = document.elementFromPoint(e.clientX, e.clientY);
      if (targetIcon && targetIcon.classList.contains('desktop-icon') && targetIcon !== icon) {
        targetIcon.style.border = '2px solid var(--accent)';
      } else {
        document.querySelectorAll('.desktop-icon').forEach(el => el.style.border = '');
      }
    };
    const stopDrag = (e) => {
      if (!isDragging) return;
      isDragging = false;
      if (clone) { clone.remove(); clone = null; }
      icon.classList.remove('dragging');
      document.removeEventListener('mousemove', onDrag);
      document.removeEventListener('mouseup', stopDrag);
      const targetIcon = document.elementFromPoint(e.clientX, e.clientY);
      if (targetIcon && targetIcon.classList.contains('desktop-icon') && targetIcon !== icon) {
        targetIcon.style.border = '';
        kernel.showDialog({
          title: 'Создать папку',
          message: 'Хотите создать папку из выбранных иконок?',
          input: true,
          placeholder: 'Введите имя папки',
          defaultValue: 'Новая папка'
        }).then(name => {
          if (name && name.trim()) createFolderFromIcons(name.trim(), [icon, targetIcon]);
        });
      } else {
        const dx = e.clientX - startX, dy = e.clientY - startY;
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
          selectedIcons.forEach(selIcon => {
            const left = parseInt(selIcon.style.left) || 0, top = parseInt(selIcon.style.top) || 0;
            selIcon.style.left = (left + dx) + 'px';
            selIcon.style.top = (top + dy) + 'px';
            const id = selIcon.dataset.appId;
            if (id) iconPositions[id] = { left: parseInt(selIcon.style.left), top: parseInt(selIcon.style.top) };
          });
          saveIconPositions();
        }
      }
      if (!e.shiftKey) {
        document.querySelectorAll('.desktop-icon.selected').forEach(el => el.classList.remove('selected'));
        selectedIcons = [];
      }
      clearTimeout(timeout);
    };
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag);
    e.preventDefault();
    timeout = setTimeout(() => {}, 200);
  });
}

function createFolderFromIcons(folderName, icons) {
  const folderId = 'folder_' + Date.now();
  const childIds = icons.map(icon => icon.dataset.appId);
  folderContents[folderId] = childIds;
  saveFolders();
  const folderApp = { id: folderId, label: folderName, icon: 'folder', action: () => openFolder(folderId, folderName), builtin: false, isFolder: true };
  installedApps.push(folderApp);
  saveAppRegistry().then(() => {
    icons.forEach(icon => {
      icon.remove();
      const id = icon.dataset.appId;
      if (id) delete iconPositions[id];
    });
    renderDesktopIcons();
    kernel.showNotification(`Папка "${folderName}" создана`);
  });
}

function openFolder(folderId, folderName) {
  const childIds = folderContents[folderId] || [];
  let content = '<div style="padding:8px;"><div style="display:flex;flex-wrap:wrap;gap:12px;">';
  childIds.forEach(appId => {
    const app = getAllApps().find(a => a.id === appId);
    if (app) {
      content += `<div style="width:80px;text-align:center;cursor:pointer;" onclick="const a = getAllApps().find(a => a.id==='${appId}'); if(a) a.action()"><span style="font-size:32px;">${iconHTML(app.icon)}</span><span style="font-size:11px;color:var(--text-primary);">${app.label}</span></div>`;
    }
  });
  content += '</div></div>';
  createWindow('Папка: ' + folderName, content, { width: 400, height: 350, iconType: 'folder' });
}

// Контекстное меню иконки
function showContextMenuForIcon(x, y, app) {
  const menu = document.getElementById('context-menu');
  menu.innerHTML = '';
  const addItem = (text, action, danger) => {
    const item = document.createElement('div');
    item.className = 'menu-item' + (danger ? ' danger' : '');
    item.textContent = text;
    if (action) item.addEventListener('click', (e) => { e.stopPropagation(); action(); hideContextMenu(); });
    else { item.style.cursor = 'default'; item.style.opacity = '0.6'; }
    menu.appendChild(item);
  };
  addItem('Запустить', () => app.action());
  if (!app.builtin) {
    addItem('Переименовать', () => {
      kernel.showDialog({ title: 'Переименовать', message: 'Новое имя:', input: true, defaultValue: app.label }).then(name => {
        if (name && name.trim()) {
          const inst = installedApps.find(a => a.id === app.id);
          if (inst) { inst.label = name.trim(); saveAppRegistry().then(() => { renderDesktopIcons(); kernel.showNotification('Имя изменено'); }); }
        }
      });
    });
    addItem('Удалить', () => {
      kernel.showDialog({ title: 'Удалить приложение', message: `Удалить "${app.label}"?` }).then(confirm => {
        if (confirm) {
          installedApps = installedApps.filter(a => a.id !== app.id);
          saveAppRegistry().then(() => {
            delete iconPositions[app.id];
            saveIconPositions();
            renderDesktopIcons();
            kernel.showNotification(`"${app.label}" удалён`);
          });
        }
      });
    }, true);
  } else {
    addItem('Встроенное приложение', null);
  }
  menu.style.display = 'block';
  menu.style.left = x + 'px'; menu.style.top = y + 'px';
  const rect = menu.getBoundingClientRect();
  if (rect.right > window.innerWidth) menu.style.left = (x - rect.width) + 'px';
  if (rect.bottom > window.innerHeight) menu.style.top = (y - rect.height) + 'px';
}

function hideContextMenu() {
  document.getElementById('context-menu').style.display = 'none';
}
document.addEventListener('click', hideContextMenu);
document.addEventListener('contextmenu', (e) => {
  if (e.target === document.getElementById('desktop') || e.target === document.body) {
    e.preventDefault();
    const menu = document.getElementById('context-menu');
    menu.innerHTML = '';
    const addItem = (text, action) => {
      const item = document.createElement('div');
      item.className = 'menu-item';
      item.textContent = text;
      if (action) item.addEventListener('click', (e) => { e.stopPropagation(); action(); hideContextMenu(); });
      menu.appendChild(item);
    };
    addItem('Создать папку', () => {
      kernel.showDialog({ title: 'Новая папка', message: 'Имя папки:', input: true, defaultValue: 'Новая папка' }).then(name => {
        if (name && name.trim()) FS.mkdir('/home/user/' + name.trim()).then(() => kernel.showNotification('Папка создана')).catch(e => kernel.showNotification(e.message, 'error'));
      });
    });
    addItem('Создать файл', () => {
      kernel.showDialog({ title: 'Новый файл', message: 'Имя файла:', input: true, defaultValue: 'новый.txt' }).then(name => {
        if (name && name.trim()) FS.touch('/home/user/' + name.trim(), '').then(() => kernel.showNotification('Файл создан')).catch(e => kernel.showNotification(e.message, 'error'));
      });
    });
    addItem('Упорядочить', () => arrangeIcons());
    addItem('Обновить', () => { renderDesktopIcons(); kernel.showNotification('Рабочий стол обновлён'); });
    addItem('Настройки', () => openSettings());
    menu.style.display = 'block';
    menu.style.left = e.clientX + 'px'; menu.style.top = e.clientY + 'px';
    const rect = menu.getBoundingClientRect();
    if (rect.right > window.innerWidth) menu.style.left = (e.clientX - rect.width) + 'px';
    if (rect.bottom > window.innerHeight) menu.style.top = (e.clientY - rect.height) + 'px';
  }
});

// Меню Пуск (выпадающее)
const startMenu = document.getElementById('start-menu');
document.getElementById('start-btn').addEventListener('click', (e) => {
  e.stopPropagation();
  const isVisible = startMenu.style.display === 'block';
  if (isVisible) {
    startMenu.style.display = 'none';
  } else {
    const apps = getAllApps();
    startMenu.innerHTML = '';
    apps.forEach(app => {
      const btn = document.createElement('button');
      btn.innerHTML = `<span style="margin-right:8px;">${iconHTML(app.icon)}</span>${app.label}`;
      btn.addEventListener('click', () => {
        startMenu.style.display = 'none';
        app.action();
      });
      startMenu.appendChild(btn);
    });
    startMenu.style.display = 'block';
  }
});
document.addEventListener('click', (e) => {
  if (!e.target.closest('#start-menu') && !e.target.closest('#start-btn')) {
    startMenu.style.display = 'none';
  }
});

// Поиск в панели задач
document.getElementById('taskbar-search').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const query = e.target.value.trim();
    if (query) {
      const searchApp = builtinApps.find(a => a.id === 'search');
      if (searchApp) {
        searchApp.action();
        setTimeout(() => {
          const input = document.getElementById('search-input');
          if (input) { input.value = query; input.dispatchEvent(new Event('input')); }
        }, 300);
      }
    }
  }
});

// Системный трей
const trayEl = document.getElementById('system-tray');
document.getElementById('tray-btn').addEventListener('click', (e) => {
  e.stopPropagation();
  trayEl.style.display = trayEl.style.display === 'flex' ? 'none' : 'flex';
});
document.getElementById('volume-slider').addEventListener('input', (e) => {
  document.getElementById('volume-label').textContent = Math.round(e.target.value * 100) + '%';
});
document.getElementById('do-not-disturb').checked = kernel.doNotDisturb;
document.getElementById('do-not-disturb').addEventListener('change', (e) => {
  kernel.doNotDisturb = e.target.checked;
  localStorage.setItem('nextelos-dnd', kernel.doNotDisturb);
  kernel.showNotification(kernel.doNotDisturb ? 'Режим "Не беспокоить" включён' : 'Режим "Не беспокоить" выключен');
});

// Виджеты
const cpuCtx = document.getElementById('cpu-chart').getContext('2d');
let cpuVal = 10, cpuHistory = [];
function updateSysInfo() {
  cpuVal += Math.round((Math.random() - 0.5) * 8);
  cpuVal = Math.min(95, Math.max(2, cpuVal));
  document.getElementById('widget-cpu').textContent = cpuVal + '%';
  document.getElementById('widget-memory').textContent = performance.memory ? Math.round(performance.memory.usedJSHeapSize / 1048576) + ' MB' : '-- MB';
  cpuHistory.push(cpuVal);
  if (cpuHistory.length > 50) cpuHistory.shift();
  cpuCtx.clearRect(0, 0, 200, 40);
  cpuCtx.strokeStyle = '#50fa7b';
  cpuCtx.lineWidth = 2;
  cpuCtx.beginPath();
  cpuHistory.forEach((v, i) => {
    const x = (i / cpuHistory.length) * 200, y = 40 - (v / 100) * 40;
    if (i === 0) cpuCtx.moveTo(x, y); else cpuCtx.lineTo(x, y);
  });
  cpuCtx.stroke();
}
setInterval(updateSysInfo, 1500);
updateSysInfo();

// Погода (без API-ключа, через Open-Meteo)
let weatherData = null, weatherCity = 'Moscow';
function fetchWeather(city) {
  weatherCity = city || 'Moscow';
  fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(weatherCity)}&format=json&limit=1`)
    .then(r => r.json())
    .then(data => {
      if (!data.length) throw new Error('Город не найден');
      const { lat, lon } = data[0];
      return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&forecast_days=1`);
    })
    .then(r => r.json())
    .then(data => {
      if (!data.current_weather) throw new Error('Нет данных');
      weatherData = {
        temp: Math.round(data.current_weather.temperature),
        wind: data.current_weather.windspeed,
        desc: getWeatherDesc(data.current_weather.weathercode),
        max_temp: data.daily ? Math.round(data.daily.temperature_2m_max[0]) : null,
        min_temp: data.daily ? Math.round(data.daily.temperature_2m_min[0]) : null,
        sunrise: data.daily ? data.daily.sunrise[0] : null,
        sunset: data.daily ? data.daily.sunset[0] : null,
        city: weatherCity, lat, lon
      };
      updateWeatherWidget();
      kernel.showNotification('Погода обновлена для ' + weatherCity);
    })
    .catch(e => {
      kernel.showNotification('Ошибка погоды: ' + e.message, 'error');
      document.getElementById('widget-weather').style.display = 'none';
    });
}
function getWeatherDesc(code) {
  const map = { 0:'Ясно', 1:'В основном ясно', 2:'Переменная облачность', 3:'Пасмурно', 45:'Туман', 48:'Иней', 51:'Морось', 53:'Морось', 55:'Морось', 61:'Дождь', 63:'Дождь', 65:'Дождь', 71:'Снег', 73:'Снег', 75:'Снег', 80:'Ливень', 81:'Ливень', 82:'Ливень', 95:'Гроза', 96:'Гроза', 99:'Гроза' };
  return map[code] || 'Неизвестно';
}
function updateWeatherWidget() {
  if (weatherData) {
    document.getElementById('widget-temp').textContent = weatherData.temp + '°C';
    document.getElementById('widget-desc').textContent = weatherData.desc;
    document.getElementById('widget-weather').style.display = 'block';
  }
}
setTimeout(() => fetchWeather('Moscow'), 1000);
setInterval(() => { if (weatherCity) fetchWeather(weatherCity); }, 600000);

// Перетаскивание виджетов
document.getElementById('widgets').addEventListener('mousedown', (e) => {
  const target = e.target.closest('.widget-clock, .widget-weather, .widget-sysinfo');
  if (!target) return;
  let isDragging = false, startX, startY, origLeft, origTop;
  target.style.cursor = 'grabbing';
  const onDrag = (e) => { if (!isDragging) return; target.style.left = (origLeft + e.clientX - startX) + 'px'; target.style.top = (origTop + e.clientY - startY) + 'px'; };
  const stopDrag = () => { isDragging = false; target.style.cursor = ''; document.removeEventListener('mousemove', onDrag); document.removeEventListener('mouseup', stopDrag); };
  startX = e.clientX; startY = e.clientY;
  origLeft = target.offsetLeft; origTop = target.offsetTop;
  isDragging = true;
  document.addEventListener('mousemove', onDrag);
  document.addEventListener('mouseup', stopDrag);
  e.preventDefault();
});

// Обои и слайд-шоу
function applyWallpaper(url, isUser = false) {
  const desktop = document.getElementById('desktop');
  if (url) {
    desktop.style.backgroundImage = `url("${url}")`;
    desktop.style.backgroundSize = 'cover';
    if (isUser) localStorage.setItem('nextelos-wallpaper', url);
  } else {
    desktop.style.backgroundImage = '';
    desktop.style.background = '#2c3e50';
    localStorage.removeItem('nextelos-wallpaper');
  }
  if (slideshowTimer) { clearInterval(slideshowTimer); slideshowTimer = null; }
}
function startSlideshow(interval) {
  if (slideshowTimer) clearInterval(slideshowTimer);
  if (interval > 0) {
    const wallpapers = [
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150"><rect width="200" height="150" fill="%231a1a2e"/><rect x="20" y="60" width="30" height="90" fill="%232c3e50"/><rect x="60" y="40" width="30" height="110" fill="%232c3e50"/><rect x="100" y="70" width="30" height="80" fill="%232c3e50"/><rect x="140" y="30" width="30" height="120" fill="%232c3e50"/><circle cx="50" cy="20" r="10" fill="%23f1c40f" opacity="0.8"/></svg>',
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150"><rect width="200" height="150" fill="%2327ae60"/><rect y="100" width="200" height="50" fill="%232d7d46"/><circle cx="30" cy="60" r="35" fill="%232d7d46"/><circle cx="100" cy="40" r="45" fill="%232d7d46"/><circle cx="170" cy="55" r="40" fill="%232d7d46"/></svg>',
      // ... ещё несколько обоев
    ];
    let idx = 0;
    applyWallpaper(wallpapers[0]);
    slideshowTimer = setInterval(() => {
      idx = (idx + 1) % wallpapers.length;
      applyWallpaper(wallpapers[idx]);
    }, interval * 1000);
  }
}
// Восстановление темы и обоев при старте
const savedWallpaper = localStorage.getItem('nextelos-wallpaper');
if (savedWallpaper) applyWallpaper(savedWallpaper, true);
const savedSlideshow = parseInt(localStorage.getItem('nextelos-slideshow-interval') || '0');
if (savedSlideshow > 0) startSlideshow(savedSlideshow);

// Выделение области
const selectionRect = document.getElementById('selection-rect');
let isSelecting = false, selectStartX, selectStartY;
document.getElementById('desktop').addEventListener('mousedown', (e) => {
  if (e.target !== e.currentTarget && e.target !== document.body) return;
  if (e.button !== 0) return;
  isSelecting = true;
  const rect = desktop.getBoundingClientRect();
  selectStartX = e.clientX - rect.left;
  selectStartY = e.clientY - rect.top;
  selectionRect.style.display = 'block';
  selectionRect.style.left = selectStartX + 'px'; selectionRect.style.top = selectStartY + 'px';
  selectionRect.style.width = '0px'; selectionRect.style.height = '0px';
  if (!e.shiftKey) {
    document.querySelectorAll('.desktop-icon.selected').forEach(el => el.classList.remove('selected'));
    selectedIcons = [];
  }
});
document.addEventListener('mousemove', (e) => {
  if (!isSelecting) return;
  const rect = desktop.getBoundingClientRect();
  const x = e.clientX - rect.left, y = e.clientY - rect.top;
  let width = x - selectStartX, height = y - selectStartY;
  if (width < 0) { selectionRect.style.left = (selectStartX + width) + 'px'; selectionRect.style.width = (-width) + 'px'; }
  else { selectionRect.style.left = selectStartX + 'px'; selectionRect.style.width = width + 'px'; }
  if (height < 0) { selectionRect.style.top = (selectStartY + height) + 'px'; selectionRect.style.height = (-height) + 'px'; }
  else { selectionRect.style.top = selectStartY + 'px'; selectionRect.style.height = height + 'px'; }
  const selRect = selectionRect.getBoundingClientRect();
  document.querySelectorAll('.desktop-icon').forEach(icon => {
    const ir = icon.getBoundingClientRect();
    if (!(ir.right < selRect.left || ir.left > selRect.right || ir.bottom < selRect.top || ir.top > selRect.bottom)) {
      icon.classList.add('selected');
      if (!selectedIcons.includes(icon)) selectedIcons.push(icon);
    } else {
      if (!e.shiftKey) {
        icon.classList.remove('selected');
        const idx = selectedIcons.indexOf(icon);
        if (idx !== -1) selectedIcons.splice(idx, 1);
      }
    }
  });
});
document.addEventListener('mouseup', () => {
  if (isSelecting) { isSelecting = false; selectionRect.style.display = 'none'; }
});

// Блокировка экрана
let lockPassword = localStorage.getItem('nextelos-lock-password') || '';
function setupLockScreen() {
  document.getElementById('lock-unlock').addEventListener('click', () => {
    if (document.getElementById('lock-password').value === lockPassword) {
      document.getElementById('lock-screen').style.display = 'none';
    } else {
      kernel.showNotification('Неверный пароль', 'error');
    }
  });
}
function openLockSettings() {
  const content = `<div style="padding:10px;"><input type="password" id="new-lock-password" placeholder="Новый пароль"><button id="set-lock-password">Установить</button></div>`;
  createWindow('Блокировка', content, { width: 300, height: 150, iconType: 'lock' });
  setTimeout(() => {
    document.getElementById('set-lock-password').addEventListener('click', () => {
      const pw = document.getElementById('new-lock-password').value;
      if (pw) { lockPassword = pw; localStorage.setItem('nextelos-lock-password', pw); kernel.showNotification('Пароль установлен'); }
    });
  }, 100);
}
// Скриншот (требуется html2canvas, загружается в index.html)
function takeScreenshot() {
  html2canvas(document.getElementById('desktop')).then(canvas => {
    const dataUrl = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl; a.download = 'screenshot.png'; a.click();
    kernel.showNotification('Скриншот сохранён');
  }).catch(() => kernel.showNotification('Ошибка скриншота', 'error'));
}

// Экспорт необходимых функций
window.renderDesktopIcons = renderDesktopIcons;
window.arrangeIcons = arrangeIcons;
window.loadIconPositions = loadIconPositions;
window.loadFolders = loadFolders;
window.applyWallpaper = applyWallpaper;
window.startSlideshow = startSlideshow;
window.setupLockScreen = setupLockScreen;
