// apps.js – Все встроенные приложения (без внешних зависимостей)

// ---------- Основные приложения ----------
function openTerminal() {
  const content = `<div style="height:200px;overflow-y:auto;font-family:monospace;background:#0a0a0a;color:#8be9fd;padding:8px;white-space:pre-wrap;" id="terminal-output-${Date.now()}">NextelOS Terminal v0.1.0\nType "help" for commands.\n</div>
    <div class="terminal-input-line"><span>$</span><input id="terminal-input" autofocus></div>`;
  const winId = createWindow('Терминал', content, { width: 600, height: 400, iconType: 'terminal' });
  setTimeout(() => {
    const output = document.querySelector(`#terminal-output-${winId}`);
    const input = document.getElementById('terminal-input');
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = input.value.trim();
        input.value = '';
        output.textContent += `\n$ ${cmd}`;
        // Простая обработка команд
        if (cmd === 'help') {
          output.textContent += '\nКоманды: help, ls, pwd, clear, echo, date, whoami';
        } else if (cmd === 'clear') {
          output.textContent = '';
        } else if (cmd === 'date') {
          output.textContent += '\n' + new Date().toString();
        } else if (cmd === 'whoami') {
          output.textContent += '\nuser';
        } else if (cmd.startsWith('echo ')) {
          output.textContent += '\n' + cmd.substring(5);
        } else if (cmd === 'ls') {
          FS.ls('/home/user').then(files => output.textContent += '\n' + files.join('  ')).catch(e => output.textContent += '\n' + e.message);
        } else if (cmd === 'pwd') {
          output.textContent += '\n/home/user';
        } else {
          output.textContent += `\nНеизвестная команда: ${cmd}`;
        }
        output.scrollTop = output.scrollHeight;
      }
    });
  }, 100);
}

function openFileManager() {
  let currentPath = '/home/user';
  const content = `<div class="fm-toolbar">
    <button id="fm-up">⬆ Наверх</button>
    <button id="fm-home">🏠 Домой</button>
    <button id="fm-new-folder">📁 Создать папку</button>
    <input type="file" id="fm-upload-file"><button id="fm-upload-btn">📤 Загрузить</button>
  </div>
  <div class="fm-path" id="fm-path">${currentPath}</div>
  <div class="fm-list" id="fm-list"></div>`;
  const winId = createWindow('Файлы', content, { width: 600, height: 450, iconType: 'folder' });
  function refresh() {
    document.getElementById('fm-path').textContent = currentPath;
    FS.ls(currentPath).then(items => {
      const list = document.getElementById('fm-list');
      list.innerHTML = '';
      items.forEach(name => {
        const fullPath = currentPath + '/' + name;
        FS.stat(fullPath).then(stat => {
          const isFolder = stat && stat.type === 'folder';
          const div = document.createElement('div');
          div.className = 'fm-item';
          div.innerHTML = `<span class="fm-icon">${iconHTML(isFolder ? 'folder' : 'file')}</span><span class="fm-name">${name}</span><span class="fm-actions"><button class="fm-delete">🗑</button></span>`;
          div.querySelector('.fm-name').addEventListener('click', () => {
            if (isFolder) { currentPath = fullPath; refresh(); }
            else FS.cat(fullPath).then(content => openEditor(fullPath, content)).catch(e => kernel.showNotification(e.message, 'error'));
          });
          div.querySelector('.fm-delete').addEventListener('click', (e) => { e.stopPropagation(); FS.rm(fullPath).then(() => refresh()).catch(e => kernel.showNotification(e.message, 'error')); });
          list.appendChild(div);
        });
      });
    }).catch(e => kernel.showNotification(e.message, 'error'));
  }
  setTimeout(() => {
    document.getElementById('fm-up').addEventListener('click', () => { currentPath = currentPath.substring(0, currentPath.lastIndexOf('/')) || '/'; refresh(); });
    document.getElementById('fm-home').addEventListener('click', () => { currentPath = '/home/user'; refresh(); });
    document.getElementById('fm-new-folder').addEventListener('click', () => {
      kernel.showDialog({ title: 'Новая папка', input: true, defaultValue: 'Новая папка' }).then(name => { if (name) FS.mkdir(currentPath + '/' + name).then(() => refresh()).catch(e => kernel.showNotification(e.message, 'error')); });
    });
    document.getElementById('fm-upload-btn').addEventListener('click', () => {
      const fileInput = document.getElementById('fm-upload-file');
      if (fileInput.files.length) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = () => FS.touch(currentPath + '/' + file.name, reader.result).then(() => refresh()).catch(e => kernel.showNotification(e.message, 'error'));
        reader.readAsText(file);
      }
    });
    refresh();
  }, 100);
}

function openEditor(path, content) {
  const winId = createWindow('Редактор: ' + (path || 'новый'), `<textarea style="width:100%;height:calc(100% - 30px);background:#111;color:#eee;border:none;padding:10px;font-family:monospace;resize:none;outline:none" id="editor-textarea">${content || ''}</textarea>`, { width: 600, height: 450, iconType: 'file' });
  setTimeout(() => {
    const textarea = document.getElementById('editor-textarea');
    const win = kernel.windows.find(w => w.id === winId);
    if (win) win.onClose = () => {
      if (path) FS.write(path, textarea.value).catch(e => kernel.showNotification(e.message, 'error'));
    };
  }, 100);
}

function openCalculator() { /* аналогично из исходного кода */ }
function openSettings() { /* ... */ }
function openSearch() { /* ... */ }
function openBrowser() { /* ... */ }
function openCalendar() { /* ... */ }
function openAlarm() { /* ... */ }
function openNotepad() { /* ... */ }
function openPasswords() { /* ... */ }
function openPresentation() { /* ... */ }
function openPlayer() { /* ... */ }
function openConverter() { /* ... */ }
function openTodo() { /* ... */ }
function openCodeEditor() { /* ... */ }
function openWeatherApp() { /* ... */ }
function openCurrency() { /* ... */ }
function openWikipedia() { /* ... */ }
function openTranslator() { /* ... */ }
function openArtGenerator() { /* ... */ }
function openVirucide() { /* ... */ }
function openTabliq() { /* ... */ }
function openTrader() { /* ... */ }
function openPigmoPro() { /* ... */ }

// Новые приложения (добавляем с заглушками, если нет полных реализаций)
function openPDFReader() { createWindow('PDF Reader', '<p>Загрузка PDF пока недоступна</p>', { iconType: 'pdf' }); }
function openRadio() { createWindow('Радио', '<p>Радио временно недоступно</p>', { iconType: 'radio' }); }
function openRecipes() { createWindow('Рецепты', '<p>Книга рецептов пуста</p>', { iconType: 'recipes' }); }
function openMap() { createWindow('Карта мира', '<iframe style="width:100%;height:100%;border:none;" src="https://www.openstreetmap.org/export/embed.html?bbox=-180,-90,180,90&layer=mapnik"></iframe>', { width: 800, height: 600, iconType: 'map' }); }
function openLockSettings() { createWindow('Блокировка', '<p>Настройки блокировки</p>', { iconType: 'lock' }); }
function takeScreenshot() { kernel.showNotification('Скриншот сохранён (демо)'); }

// Экспорт
window.openTerminal = openTerminal;
window.openFileManager = openFileManager;
window.openEditor = openEditor;
window.openCalculator = openCalculator;
window.openSettings = openSettings;
window.openSearch = openSearch;
window.openBrowser = openBrowser;
window.openCalendar = openCalendar;
window.openAlarm = openAlarm;
window.openNotepad = openNotepad;
window.openPasswords = openPasswords;
window.openPresentation = openPresentation;
window.openPlayer = openPlayer;
window.openConverter = openConverter;
window.openTodo = openTodo;
window.openCodeEditor = openCodeEditor;
window.openWeatherApp = openWeatherApp;
window.openCurrency = openCurrency;
window.openWikipedia = openWikipedia;
window.openTranslator = openTranslator;
window.openArtGenerator = openArtGenerator;
window.openVirucide = openVirucide;
window.openTabliq = openTabliq;
window.openTrader = openTrader;
window.openPigmoPro = openPigmoPro;
window.openPDFReader = openPDFReader;
window.openRadio = openRadio;
window.openRecipes = openRecipes;
window.openMap = openMap;
window.openLockSettings = openLockSettings;
window.takeScreenshot = takeScreenshot;
