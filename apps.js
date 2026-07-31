// apps.js – Все встроенные приложения

// Терминал
function openTerminal() { /* полный код из исходника, заменив showNotification */ }
// Файловый менеджер
function openFileManager() { /* ... */ }
// Редактор файлов
function openEditor(path, content) { /* ... */ }
// Калькулятор
function openCalculator() { /* ... */ }
// Настройки
function openSettings() { /* ... */ }
// Менеджер процессов
function openProcessManager() { /* ... */ }
// Корзина
function openTrash() { /* ... */ }
// Pigmo Pro (с изоляцией canvas)
function openPigmoPro() { /* ... */ }
// Поиск
function openSearch() { /* ... */ }
// Браузер
function openBrowser() { /* ... */ }
// Календарь
function openCalendar() { /* ... */ }
// Будильник
function openAlarm() { /* ... */ }
// Блокнот
function openNotepad() { /* ... */ }
// Пароли
function openPasswords() { /* ... */ }
// Презентация
function openPresentation() { /* ... */ }
// Плеер
function openPlayer() { /* ... */ }
// Конвертер
function openConverter() { /* ... */ }
// To-Do
function openTodo() { /* ... */ }
// Редактор кода
function openCodeEditor() { /* ... */ }
// Погода
function openWeatherApp() { /* ... */ }
// Курсы валют
function openCurrency() { /* ... */ }
// Википедия
function openWikipedia() { /* ... */ }
// Переводчик
function openTranslator() { /* ... */ }
// AI Art
function openArtGenerator() { /* ... */ }
// Virucide
function openVirucide() { /* ... */ }
// Tabliq
function openTabliq() { /* ... */ }
// Торговая платформа
function openTrader() { /* ... */ }

// Новые приложения
function openPDFReader() {
  const content = `<div><input type="file" id="pdf-file-input" accept=".pdf"><button id="pdf-load">Загрузить PDF</button></div><iframe id="pdf-frame" style="width:100%;height:300px;border:none;" src="about:blank"></iframe>`;
  const winId = createWindow('PDF Reader', content, { width: 600, height: 500, iconType: 'pdf' });
  setTimeout(() => {
    document.getElementById('pdf-load').addEventListener('click', () => {
      const file = document.getElementById('pdf-file-input').files[0];
      if (!file) { kernel.showNotification('Выберите файл', 'warning'); return; }
      const url = URL.createObjectURL(file);
      document.getElementById('pdf-frame').src = url;
    });
  }, 100);
}

function openRadio() {
  const streams = [
    { name: 'Radio Record', url: 'https://radiorecord.hostingradio.ru/rr_main96.aacp' },
    { name: 'Deep House', url: 'https://stream.deephouse.pro:8000/deephouse' }
  ];
  const content = `<div class="player-controls"><select id="radio-select">${streams.map((s,i)=>`<option value="${i}">${s.name}</option>`).join('')}</select><button id="radio-play">▶</button><button id="radio-stop">⏹</button></div><audio id="radio-audio"></audio>`;
  const winId = createWindow('Радио', content, { width: 400, height: 200, iconType: 'radio' });
  setTimeout(() => {
    const audio = document.getElementById('radio-audio');
    const select = document.getElementById('radio-select');
    document.getElementById('radio-play').addEventListener('click', () => {
      audio.src = streams[select.value].url;
      audio.play().catch(e => kernel.showNotification('Ошибка воспроизведения', 'error'));
    });
    document.getElementById('radio-stop').addEventListener('click', () => audio.pause());
  }, 100);
}

function openRecipes() {
  let recipes = JSON.parse(localStorage.getItem('nextelos-recipes') || '[]');
  const render = (container) => {
    container.innerHTML = recipes.map((r,idx) => `<div class="recipe-item"><b>${r.name}</b> <span>${r.desc}</span><button class="del-recipe" data-idx="${idx}">✕</button></div>`).join('');
    container.querySelectorAll('.del-recipe').forEach(btn => {
      btn.addEventListener('click', () => {
        recipes.splice(btn.dataset.idx, 1);
        localStorage.setItem('nextelos-recipes', JSON.stringify(recipes));
        render(container);
      });
    });
  };
  const content = `<div style="padding:8px;"><input type="text" id="recipe-name" placeholder="Название"><input type="text" id="recipe-desc" placeholder="Описание"><button id="recipe-add">Добавить</button></div><div id="recipe-list"></div>`;
  const winId = createWindow('Рецепты', content, { width: 400, height: 400, iconType: 'recipes' });
  setTimeout(() => {
    const list = document.getElementById('recipe-list');
    render(list);
    document.getElementById('recipe-add').addEventListener('click', () => {
      const name = document.getElementById('recipe-name').value.trim();
      const desc = document.getElementById('recipe-desc').value.trim();
      if (!name) return;
      recipes.push({ name, desc });
      localStorage.setItem('nextelos-recipes', JSON.stringify(recipes));
      render(list);
      document.getElementById('recipe-name').value = '';
      document.getElementById('recipe-desc').value = '';
    });
  }, 100);
}

function openMap() {
  const content = `<iframe style="width:100%;height:100%;border:none;" src="https://www.openstreetmap.org/export/embed.html?bbox=-180,-90,180,90&layer=mapnik"></iframe>`;
  createWindow('Карта мира', content, { width: 800, height: 600, iconType: 'map' });
}

// Экспорт функций в глобальную область
window.openTerminal = openTerminal;
window.openFileManager = openFileManager;
// ... экспорт всех функций
window.openPDFReader = openPDFReader;
window.openRadio = openRadio;
window.openRecipes = openRecipes;
window.openMap = openMap;
window.openLockSettings = openLockSettings;
window.takeScreenshot = takeScreenshot;
