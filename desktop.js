// desktop.js
// В этом файле предполагается, что getAllApps и builtinApps уже объявлены глобально (в main.js).

// Иконки SVG (iconSVG, iconHTML) – те же, что и раньше
function iconSVG(type, className = '') { /* ... */ }
function iconHTML(type, cls = '') { return iconSVG(type, cls); }

let iconPositions = {}, selectedIcons = [], folderContents = {}, slideshowTimer = null;

function loadIconPositions() { /* ... */ }
function saveIconPositions() { /* ... */ }
function loadFolders() { /* ... */ }
function saveFolders() { /* ... */ }
function arrangeIcons() { /* ... */ }
function renderDesktopIcons() {
  document.querySelectorAll('.desktop-icon').forEach(el => el.remove());
  let apps = getAllApps(); // теперь эта функция доступна
  const inFolder = Object.values(folderContents).flat();
  apps = apps.filter(app => !inFolder.includes(app.id));
  apps.forEach((app, idx) => {
    const pos = iconPositions[app.id] || { left: 30 + (idx % 6) * 100, top: 30 + Math.floor(idx / 6) * 110 };
    iconPositions[app.id] = pos;
    const icon = document.createElement('div');
    icon.className = 'desktop-icon' + (app.isFolder ? ' folder' : '');
    icon.dataset.appId = app.id;
    icon.style.left = pos.left + 'px'; icon.style.top = pos.top + 'px';
    icon.innerHTML = `<span class="icon">${iconHTML(app.icon)}</span><span class="label">${app.label}</span>`;
    icon.addEventListener('click', (e) => { /* ... */ app.action(); });
    makeDraggable(icon, app.id);
    icon.addEventListener('contextmenu', (e) => { showContextMenuForIcon(e.clientX, e.clientY, app); });
    document.getElementById('desktop').appendChild(icon);
  });
  saveIconPositions();
}

// ... остальные функции: makeDraggable, createFolderFromIcons, openFolder, контекстное меню, меню Пуск, поиск в таскбаре, системный трей, виджеты, обои, выделение области, блокировка экрана.
// Меню Пуск теперь вызывает getAllApps() при клике, а не при старте, поэтому ошибок нет.

// Запуск системного трея и прочих обработчиков
document.getElementById('start-btn').addEventListener('click', (e) => {
  e.stopPropagation();
  const menu = document.getElementById('start-menu');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    const apps = getAllApps();
    menu.innerHTML = '';
    apps.forEach(app => {
      const btn = document.createElement('button');
      btn.innerHTML = `<span style="margin-right:8px;">${iconHTML(app.icon)}</span>${app.label}`;
      btn.addEventListener('click', () => { menu.style.display = 'none'; app.action(); });
      menu.appendChild(btn);
    });
    menu.style.display = 'block';
  }
});
document.addEventListener('click', (e) => {
  if (!e.target.closest('#start-menu') && !e.target.closest('#start-btn')) {
    document.getElementById('start-menu').style.display = 'none';
  }
});

// ... (остальные функции из предыдущего desktop.js)
