// main.js
let installedApps = [];

// Все функции приложений уже объявлены глобально (в apps.js и games.js)
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
  { id: 'weather', label: 'Погода', icon: 'weather', action: openWeatherApp },
  { id: 'currency', label: 'Курсы валют', icon: 'currency', action: openCurrency },
  { id: 'wiki', label: 'Википедия', icon: 'wiki', action: openWikipedia },
  { id: 'translate', label: 'Переводчик', icon: 'translate', action: openTranslator },
  { id: 'art', label: 'AI Art', icon: 'art', action: openArtGenerator },
  { id: 'virucide', label: 'Virucide', icon: 'virucide', action: openVirucide },
  { id: 'tabliq', label: 'Tabliq', icon: 'tabliq', action: openTabliq },
  { id: 'trader', label: 'Торговая платформа', icon: 'trader', action: openTrader },
  { id: 'snake', label: 'Змейка', icon: 'snake', action: openSnakeGame },
  { id: 'tetris', label: 'Тетрис', icon: 'tetris', action: openTetris },
  { id: 'minesweeper', label: 'Сапёр', icon: 'minesweeper', action: openMinesweeper },
  { id: 'chess', label: 'Шахматы', icon: 'chess', action: openChess },
  { id: 'tictac', label: 'Крестики-нолики', icon: 'tic', action: openTicTacToe },
  { id: 'g2048', label: '2048', icon: 'g2048', action: open2048 },
  { id: 'puzzle', label: 'Пятнашки', icon: 'puzzle', action: openPuzzle },
  { id: 'pdf', label: 'PDF Reader', icon: 'pdf', action: openPDFReader },
  { id: 'radio', label: 'Радио', icon: 'radio', action: openRadio },
  { id: 'recipes', label: 'Рецепты', icon: 'recipes', action: openRecipes },
  { id: 'map', label: 'Карта мира', icon: 'map', action: openMap },
  { id: 'lock', label: 'Блокировка', icon: 'lock', action: openLockSettings },
  { id: 'screenshot', label: 'Скриншот', icon: 'screenshot', action: takeScreenshot }
];

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
  const savedWallpaper = localStorage.getItem('nextelos-wallpaper');
  if (savedWallpaper) {
    document.getElementById('desktop').style.backgroundImage = `url(${savedWallpaper})`;
    document.getElementById('desktop').style.backgroundSize = 'cover';
  }
}

// Главный старт – все вызовы, зависящие от файловой системы, идут после FS.init()
FS.init()
  .then(() => loadAppRegistry())
  .then(() => {
    loadIconPositions();
    loadFolders();
    restoreSettings();
    renderDesktopIcons();
    kernel.showNotification('NextelOS v0.1.0 загружена!');
    setTimeout(() => {
      createWindow('Привет', '👋 Добро пожаловать в <b>NextelOS v0.1.0</b>!', { iconType: 'start' });
    }, 500);
  })
  .catch(err => {
    console.error(err);
    kernel.showNotification('Ошибка загрузки', 'error');
  });

window.getAllApps = getAllApps;
window.installedApps = installedApps;
window.builtinApps = builtinApps;
window.loadAppRegistry = loadAppRegistry;
window.saveAppRegistry = saveAppRegistry;
