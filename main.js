// main.js – Инициализация системы

window._startTime = new Date();

const builtinApps = [
  { id: 'terminal', label: 'Терминал', icon: 'terminal', action: openTerminal },
  { id: 'filemanager', label: 'Файлы', icon: 'folder', action: openFileManager },
  { id: 'calculator', label: 'Калькулятор', icon: 'calc', action: openCalculator },
  { id: 'settings', label: 'Настройки', icon: 'gear', action: openSettings },
  { id: 'search', label: 'Поиск', icon: 'search', action: openSearch },
  { id: 'browser', label: 'Браузер', icon: 'browser', action: openBrowser },
  { id: 'calendar', label: 'Календарь', icon: 'calendar-app', action: openCalendar },
  { id: 'alarm', label: 'Будильник', icon: 'alarm', action: openAlarm },
  { id: 'notepad', label: 'Блокнот', icon: 'notepad', action: openNotepad },
  { id: 'passwords', label: 'Пароли', icon: 'password', action: openPasswords },
  { id: 'presentation', label: 'Презентация', icon: 'file', action: openPresentation },
  { id: 'player', label: 'Плеер', icon: 'player', action: openPlayer },
  { id: 'converter', label: 'Конвертер', icon: 'converter', action: openConverter },
  { id: 'todo', label: 'Планировщик', icon: 'todo', action: openTodo },
  { id: 'codeeditor', label: 'Редактор кода', icon: 'code', action: openCodeEditor },
  { id: 'pigmo', label: 'Pigmo Pro', icon: 'paint', action: openPigmoPro },
  { id: 'snake', label: 'Змейка', icon: 'snake', action: openSnakeGame },
  { id: 'tetris', label: 'Тетрис', icon: 'tetris', action: openTetris },
  { id: 'minesweeper', label: 'Сапёр', icon: 'minesweeper', action: openMinesweeper },
  { id: 'chess', label: 'Шахматы', icon: 'chess', action: openChess },
  { id: 'tictac', label: 'Крестики-нолики', icon: 'tic', action: openTicTacToe },
  { id: 'weather', label: 'Погода', icon: 'weather', action: openWeatherApp },
  { id: 'currency', label: 'Курсы валют', icon: 'currency', action: openCurrency },
  { id: 'wiki', label: 'Википедия', icon: 'wiki', action: openWikipedia },
  { id: 'translate', label: 'Переводчик', icon: 'translate', action: openTranslator },
  { id: 'art', label: 'AI Art', icon: 'art', action: openArtGenerator },
  { id: 'virucide', label: 'Virucide', icon: 'virucide', action: openVirucide },
  { id: 'tabliq', label: 'Tabliq', icon: 'tabliq', action: openTabliq },
  { id: 'trader', label: 'Торговая платформа', icon: 'trader', action: openTrader },
  { id: 'g2048', label: '2048', icon: 'g2048', action: open2048 },
  { id: 'puzzle', label: 'Пятнашки', icon: 'puzzle', action: openPuzzle },
  { id: 'pdf', label: 'PDF Reader', icon: 'pdf', action: openPDFReader },
  { id: 'radio', label: 'Радио', icon: 'radio', action: openRadio },
  { id: 'recipes', label: 'Рецепты', icon: 'recipes', action: openRecipes },
  { id: 'map', label: 'Карта мира', icon: 'map', action: openMap },
  { id: 'lock', label: 'Блокировка', icon: 'lock', action: openLockSettings },
  { id: 'screenshot', label: 'Скриншот', icon: 'screenshot', action: takeScreenshot }
];

let installedApps = [];

function getAllApps() {
  return builtinApps.concat(installedApps);
}

function loadAppRegistry() {
  return FS.get('/system/apps.json').then(data => {
    installedApps = data && data.content ? JSON.parse(data.content) : [];
  }).catch(() => { installedApps = []; });
}

function saveAppRegistry() {
  return FS.write('/system/apps.json', JSON.stringify(installedApps));
}

function restoreSettings() {
  const savedTheme = localStorage.getItem('nextelos-theme') || 'dark';
  if (savedTheme !== 'dark') document.body.classList.add('theme-' + savedTheme);
  const showWidgets = localStorage.getItem('nextelos-show-widgets') !== 'false';
  document.getElementById('widgets').style.display = showWidgets ? 'flex' : 'none';
  const animLevel = localStorage.getItem('nextelos-anim-level') || 'medium';
  document.body.classList.add('anim-' + animLevel);
  const iconSize = localStorage.getItem('nextelos-icon-size') || '76';
  document.documentElement.style.setProperty('--desktop-icon-width', iconSize + 'px');
}

// Запуск
loadIconPositions();
loadFolders();
FS.init()
  .then(() => loadAppRegistry())
  .then(() => {
    restoreSettings();
    renderDesktopIcons();
    kernel.showNotification('NextelOS v0.1.0 загружена!');
    setTimeout(() => {
      createWindow('Привет', '👋 Добро пожаловать в <b>NextelOS v0.1.0</b>!<br>Прорывная версия с модулями, новыми приложениями и исправлениями.', { iconType: 'start' });
    }, 500);
  })
  .catch(err => {
    console.error(err);
    kernel.showNotification('Ошибка загрузки', 'error');
  });

// Сохранение сессии (открытые окна и позиции иконок) при закрытии
window.addEventListener('beforeunload', () => {
  saveIconPositions();
  // Можно сохранить список открытых окон, но для простоты опустим
});

// Экспорт
window.getAllApps = getAllApps;
window.installedApps = installedApps;
window.builtinApps = builtinApps;
window.loadAppRegistry = loadAppRegistry;
window.saveAppRegistry = saveAppRegistry;

setupLockScreen();
