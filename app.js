// ============================================================
//  NextelOS v0.0.5 – Полный JavaScript
// ============================================================

(function() {
  "use strict";

  // ============================================================
  //  1. SVG-ИКОНКИ (все иконки системы)
  // ============================================================
  function iconSVG(type, className) {
    className = className || '';
    var svg = '<svg viewBox="0 0 24 24" class="' + className + '" xmlns="http://www.w3.org/2000/svg">';
    var inner = '';
    switch (type) {
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
      // Новые иконки
      case 'snake': inner = '<path d="M12 2C9 2 7 4 7 7c0 2 1 3 2 4l-3 2 1 1 4-2c1 1 2 2 2 4 0 3-2 5-5 5s-5-2-5-5c0-1.5.7-3 2-4l-1-1c-2 1.5-3 3.5-3 6 0 4 3 7 7 7s7-3 7-7c0-3-1-5-3-7l3-2-1-1-3 2c-1-1-2-2-2-4 0-2 1-3 3-3 1 0 2 .5 3 1.5l1-1c-1-1.5-2.5-2.5-4-2.5z" fill="currentColor"/>'; break;
      case 'tetris': inner = '<rect x="3" y="3" width="4" height="4" fill="currentColor"/><rect x="9" y="3" width="4" height="4" fill="currentColor"/><rect x="15" y="3" width="4" height="4" fill="currentColor"/><rect x="3" y="9" width="4" height="4" fill="currentColor"/><rect x="9" y="9" width="4" height="4" fill="currentColor"/><rect x="15" y="9" width="4" height="4" fill="currentColor"/><rect x="3" y="15" width="4" height="4" fill="currentColor"/><rect x="9" y="15" width="4" height="4" fill="currentColor"/><rect x="15" y="15" width="4" height="4" fill="currentColor"/>'; break;
      case 'minesweeper': inner = '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="8" cy="8" r="1.5" fill="currentColor"/><circle cx="16" cy="8" r="1.5" fill="currentColor"/><path d="M9 16c0-2 3-3 3-3s3 1 3 3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'; break;
      case 'weather': inner = '<path d="M6 16c-2 0-4-2-4-4 0-2 2-4 4-4 1-3 3-5 6-5 3 0 5 2 6 5 2 0 4 2 4 4 0 2-2 4-4 4H6z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 12l2 2 4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'; break;
      case 'notes': inner = '<rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 8h8M8 12h6M8 16h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'; break;
      default: inner = '<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>';
    }
    return svg + inner + '</svg>';
  }
  function iconHTML(type, cls) { return iconSVG(type, cls); }

  // ============================================================
  //  2. ЯДРО (KERNEL) – управление окнами и процессами
  // ============================================================
  var kernel = {
    windows: [],
    activeWindowId: null,
    nextId: 1,
    zIndexCounter: 1000,
    pinnedWindows: [] // ID окон, закреплённых поверх
  };
  var desktop = document.getElementById('desktop');
  var taskbarWindows = document.getElementById('taskbar-windows');
  var clockEl = document.getElementById('taskbar-clock');

  // ============================================================
  //  3. ЗВУКОВЫЕ ЭФФЕКТЫ (Web Audio)
  // ============================================================
  var audioCtx = null;
  function playSound(type) {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      var osc = audioCtx.createOscillator();
      var gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      var now = audioCtx.currentTime;
      if (type === 'open') {
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.1);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
      } else if (type === 'close') {
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.1);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
      } else if (type === 'notification') {
        osc.frequency.setValueAtTime(1000, now);
        osc.frequency.setValueAtTime(800, now + 0.1);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      } else if (type === 'error') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.setValueAtTime(200, now + 0.15);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      }
    } catch(e) { /* игнорируем, если звук не поддерживается */ }
  }

  // Режим "Не беспокоить"
  var doNotDisturb = localStorage.getItem('nextelos-dnd') === 'true';

  // ============================================================
  //  4. ЧАСЫ
  // ============================================================
  function updateClock() {
    var now = new Date();
    var h = String(now.getHours()).padStart(2, '0');
    var m = String(now.getMinutes()).padStart(2, '0');
    var s = String(now.getSeconds()).padStart(2, '0');
    clockEl.textContent = h + ':' + m + ':' + s;
    clockEl.dataset.date = now.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
    document.getElementById('widget-time').textContent = h + ':' + m + ':' + s;
    document.getElementById('widget-date').textContent = now.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
    // Uptime
    if (window._startTime) {
      var uptime = Math.floor((now - window._startTime) / 1000);
      var hours = Math.floor(uptime / 3600);
      var minutes = Math.floor((uptime % 3600) / 60);
      var seconds = uptime % 60;
      document.getElementById('widget-uptime').textContent = String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
    }
  }
  window._startTime = new Date();
  updateClock();
  setInterval(updateClock, 1000);

  // ============================================================
  //  5. СОЗДАНИЕ ОКНА
  // ============================================================
  function createWindow(title, contentHTML, options) {
    options = options || {};
    var id = kernel.nextId++;
    var winObj = {
      id: id,
      title: title,
      contentHTML: contentHTML,
      element: null,
      isMinimized: false,
      isPinned: false,
      onClose: options.onClose || null,
      width: options.width || 400,
      height: options.height || 280,
      left: options.left || (100 + kernel.windows.length * 30),
      top: options.top || (80 + kernel.windows.length * 30)
    };
    // Корректировка позиции, чтобы окно не выходило за пределы экрана
    var maxLeft = window.innerWidth - winObj.width;
    var maxTop = window.innerHeight - winObj.height - 60; // учитываем панель задач
    if (winObj.left > maxLeft) winObj.left = Math.max(10, maxLeft - 20);
    if (winObj.top > maxTop) winObj.top = Math.max(10, maxTop - 20);
    if (winObj.left < 10) winObj.left = 10;
    if (winObj.top < 10) winObj.top = 10;

    var win = document.createElement('div');
    win.className = 'window';
    win.dataset.windowId = id;
    win.style.left = winObj.left + 'px';
    win.style.top = winObj.top + 'px';
    win.style.width = winObj.width + 'px';
    win.style.height = winObj.height + 'px';

    var header = document.createElement('div');
    header.className = 'window-header';
    header.innerHTML = '<span class="window-title"><span class="icon">' + iconHTML(options.iconType || 'file') + '</span>' + title + '</span><div class="window-controls"><button class="pin-btn" title="Закрепить">📌</button><button class="min-btn">─</button><button class="max-btn">⬜</button><button class="close-btn">✕</button></div>';
    win.appendChild(header);

    var contentDiv = document.createElement('div');
    contentDiv.className = 'window-content';
    contentDiv.innerHTML = contentHTML;
    win.appendChild(contentDiv);

    desktop.appendChild(win);
    winObj.element = win;

    var closeBtn = header.querySelector('.close-btn');
    var minBtn = header.querySelector('.min-btn');
    var maxBtn = header.querySelector('.max-btn');
    var pinBtn = header.querySelector('.pin-btn');

    closeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      closeWindow(id);
    });
    minBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMinimize(id);
    });
    maxBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMaximize(id);
    });
    pinBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      togglePin(id);
    });

    // Перетаскивание
    if (window.innerWidth > 768) {
      var isDragging = false;
      var startX, startY, origLeft, origTop;
      header.addEventListener('mousedown', function(e) {
        if (e.target.closest('.window-controls')) return;
        isDragging = true;
        var rect = win.getBoundingClientRect();
        startX = e.clientX;
        startY = e.clientY;
        origLeft = rect.left;
        origTop = rect.top;
        win.style.cursor = 'grabbing';
        bringToFront(id);
        document.addEventListener('mousemove', onDrag);
        document.addEventListener('mouseup', stopDrag);
        e.preventDefault();
      });
      function onDrag(e) {
        if (!isDragging) return;
        var dx = e.clientX - startX;
        var dy = e.clientY - startY;
        win.style.left = (origLeft + dx) + 'px';
        win.style.top = (origTop + dy) + 'px';
      }
      function stopDrag() {
        isDragging = false;
        win.style.cursor = '';
        document.removeEventListener('mousemove', onDrag);
        document.removeEventListener('mouseup', stopDrag);
      }
    }

    win.addEventListener('mousedown', function() {
      bringToFront(id);
    });

    kernel.windows.push(winObj);
    renderTaskbar();
    bringToFront(id);
    if (!doNotDisturb) playSound('open');
    showNotification('Окно "' + title + '" открыто');
    return id;
  }

  // ============================================================
  //  6. ЗАКРЫТИЕ ОКНА
  // ============================================================
  function closeWindow(id) {
    var idx = kernel.windows.findIndex(function(w) { return w.id === id; });
    if (idx === -1) return;
    var winObj = kernel.windows[idx];
    if (winObj.onClose) winObj.onClose();
    var el = winObj.element;
    el.classList.add('closing');
    if (!doNotDisturb) playSound('close');
    setTimeout(function() {
      el.remove();
      kernel.windows.splice(idx, 1);
      if (kernel.activeWindowId === id) kernel.activeWindowId = null;
      renderTaskbar();
      showNotification('Окно "' + winObj.title + '" закрыто');
    }, 300);
  }

  // ============================================================
  //  7. ЗАКРЕПЛЕНИЕ ОКНА
  // ============================================================
  function togglePin(id) {
    var winObj = kernel.windows.find(function(w) { return w.id === id; });
    if (!winObj) return;
    winObj.isPinned = !winObj.isPinned;
    if (winObj.isPinned) {
      winObj.element.style.zIndex = 99999;
      if (kernel.pinnedWindows.indexOf(id) === -1) kernel.pinnedWindows.push(id);
    } else {
      var idx = kernel.pinnedWindows.indexOf(id);
      if (idx !== -1) kernel.pinnedWindows.splice(idx, 1);
      bringToFront(id);
    }
    renderTaskbar();
    showNotification(winObj.isPinned ? 'Окно закреплено поверх' : 'Закрепление снято');
  }

  // ============================================================
  //  8. ОСТАЛЬНЫЕ ФУНКЦИИ ЯДРА
  // ============================================================
  function toggleMinimize(id) {
    var winObj = kernel.windows.find(function(w) { return w.id === id; });
    if (!winObj) return;
    winObj.isMinimized = !winObj.isMinimized;
    if (winObj.isMinimized) {
      winObj.element.classList.add('hidden');
    } else {
      winObj.element.classList.remove('hidden');
      bringToFront(id);
    }
    renderTaskbar();
  }

  function toggleMaximize(id) {
    var winObj = kernel.windows.find(function(w) { return w.id === id; });
    if (!winObj) return;
    var el = winObj.element;
    if (el.style.width === '100%') {
      el.style.width = winObj.width + 'px';
      el.style.height = winObj.height + 'px';
      el.style.left = winObj.left + 'px';
      el.style.top = winObj.top + 'px';
    } else {
      winObj.width = parseInt(el.style.width) || 400;
      winObj.height = parseInt(el.style.height) || 280;
      winObj.left = parseInt(el.style.left) || 100;
      winObj.top = parseInt(el.style.top) || 80;
      el.style.width = '100%';
      el.style.height = 'calc(100% - 50px)';
      el.style.left = '0';
      el.style.top = '0';
    }
    bringToFront(id);
  }

  function bringToFront(id) {
    var winObj = kernel.windows.find(function(w) { return w.id === id; });
    if (!winObj) return;
    if (winObj.isPinned) return;
    kernel.zIndexCounter++;
    winObj.element.style.zIndex = kernel.zIndexCounter;
    kernel.activeWindowId = id;
    document.querySelectorAll('.window').forEach(function(w) { w.classList.remove('active'); });
    winObj.element.classList.add('active');
    renderTaskbar();
  }

  function renderTaskbar() {
    taskbarWindows.innerHTML = '';
    kernel.windows.forEach(function(winObj) {
      var item = document.createElement('span');
      item.className = 'taskbar-item';
      if (kernel.activeWindowId === winObj.id && !winObj.isMinimized) {
        item.classList.add('active');
      }
      var displayTitle = winObj.title.length > 18 ? winObj.title.slice(0, 16) + '…' : winObj.title;
      item.innerHTML = '<span class="icon">' + iconHTML('file') + '</span>' + displayTitle;
      if (winObj.isPinned) {
        item.innerHTML += ' 📌';
      }
      item.addEventListener('click', function() {
        if (winObj.isMinimized) {
          toggleMinimize(winObj.id);
        } else {
          bringToFront(winObj.id);
        }
      });
      taskbarWindows.appendChild(item);
    });
  }

  document.getElementById('collapse-all-btn').addEventListener('click', function() {
    kernel.windows.forEach(function(w) {
      if (!w.isMinimized) toggleMinimize(w.id);
    });
    showNotification('Все окна свёрнуты');
  });

  function getProcessList() {
    return kernel.windows.map(function(w) { return { id: w.id, title: w.title }; });
  }
  function killProcess(id) {
    closeWindow(id);
  }

  // ============================================================
  //  9. ГОРЯЧИЕ КЛАВИШИ
  // ============================================================
  document.addEventListener('keydown', function(e) {
    // Alt+Tab – переключение окон
    if (e.altKey && e.key === 'Tab') {
      e.preventDefault();
      var windows = kernel.windows.filter(function(w) { return !w.isMinimized; });
      if (windows.length === 0) return;
      var currentIdx = windows.findIndex(function(w) { return w.id === kernel.activeWindowId; });
      var nextIdx = (currentIdx + 1) % windows.length;
      bringToFront(windows[nextIdx].id);
      showNotification('Переключено на: ' + windows[nextIdx].title);
    }
    // Ctrl+W – закрыть текущее окно
    if (e.ctrlKey && e.key === 'w') {
      e.preventDefault();
      if (kernel.activeWindowId) {
        closeWindow(kernel.activeWindowId);
      }
    }
    // Ctrl+Shift+D – режим "Не беспокоить"
    if (e.ctrlKey && e.shiftKey && e.key === 'D') {
      e.preventDefault();
      doNotDisturb = !doNotDisturb;
      localStorage.setItem('nextelos-dnd', String(doNotDisturb));
      showNotification(doNotDisturb ? 'Режим "Не беспокоить" включён' : 'Режим "Не беспокоить" выключен');
    }
    // Ctrl+Space – глобальный поиск
    if (e.ctrlKey && e.key === ' ') {
      e.preventDefault();
      var searchApp = builtinApps.find(function(a) { return a.id === 'search'; });
      if (searchApp) searchApp.action();
    }
  });

  // ============================================================
  //  10. ФАЙЛОВАЯ СИСТЕМА (VFS)
  // ============================================================
  var FS = {
    dbName: 'NextelOS_FS',
    storeName: 'files',
    db: null,
    init: function() {
      var self = this;
      return new Promise(function(resolve, reject) {
        var request = indexedDB.open(self.dbName, 2);
        request.onupgradeneeded = function(e) {
          var db = e.target.result;
          if (!db.objectStoreNames.contains(self.storeName)) {
            db.createObjectStore(self.storeName, { keyPath: 'path' });
          }
        };
        request.onsuccess = function(e) {
          self.db = e.target.result;
          self.ensureRoot().then(resolve).catch(reject);
        };
        request.onerror = reject;
      });
    },
    ensureRoot: function() {
      var self = this;
      return self.get('/').then(function(root) {
        if (!root) {
          return self.set('/', { type: 'folder', children: {} })
            .then(function() { return self.set('/home', { type: 'folder', children: {} }); })
            .then(function() { return self.set('/home/user', { type: 'folder', children: {} }); })
            .then(function() { return self.set('/home/user/readme.txt', { type: 'file', content: 'Добро пожаловать в NextelOS v0.0.5!' }); })
            .then(function() { return self.set('/system', { type: 'folder', children: {} }); })
            .then(function() { return self.set('/system/trash', { type: 'folder', children: {} }); })
            .then(function() { return self.set('/system/apps.json', { type: 'file', content: '[]' }); })
            .then(function() { return self.set('/system/events.json', { type: 'file', content: '{}' }); })
            .then(function() { return self.set('/system/alarms.json', { type: 'file', content: '[]' }); })
            .then(function() { return self.set('/system/passwords.json', { type: 'file', content: '[]' }); })
            .then(function() { return self.set('/system/notes.json', { type: 'file', content: '{}' }); })
            .then(function() { return self.set('/system/bookmarks.json', { type: 'file', content: '[]' }); });
        }
      });
    },
    get: function(path) {
      var self = this;
      return new Promise(function(resolve, reject) {
        var tx = self.db.transaction(self.storeName, 'readonly');
        var store = tx.objectStore(self.storeName);
        var req = store.get(path);
        req.onsuccess = function() { resolve(req.result || null); };
        req.onerror = reject;
      });
    },
    set: function(path, data) {
      var self = this;
      return new Promise(function(resolve, reject) {
        var tx = self.db.transaction(self.storeName, 'readwrite');
        var store = tx.objectStore(self.storeName);
        var req = store.put({ path: path, type: data.type, content: data.content || '', children: data.children || {} });
        req.onsuccess = resolve;
        req.onerror = reject;
      });
    },
    delete: function(path) {
      var self = this;
      return new Promise(function(resolve, reject) {
        var tx = self.db.transaction(self.storeName, 'readwrite');
        var store = tx.objectStore(self.storeName);
        var req = store.delete(path);
        req.onsuccess = resolve;
        req.onerror = reject;
      });
    },
    mkdir: function(path) {
      var self = this;
      var parts = path.split('/').filter(function(p) { return p !== ''; });
      var current = '/';
      var chain = Promise.resolve();
      parts.forEach(function(part) {
        chain = chain.then(function() {
          current = current === '/' ? '/' + part : current + '/' + part;
          return self.get(current).then(function(entry) {
            if (!entry) {
              return self.set(current, { type: 'folder', children: {} });
            } else if (entry.type !== 'folder') {
              throw new Error('"' + current + '" уже существует и не является папкой');
            }
          });
        });
      });
      return chain;
    },
    touch: function(path, content) {
      content = content || '';
      var self = this;
      return self.get(path).then(function(entry) {
        if (entry) throw new Error('Файл уже существует');
        return self.set(path, { type: 'file', content: content });
      });
    },
    cat: function(path) {
      var self = this;
      return self.get(path).then(function(entry) {
        if (!entry) throw new Error('Файл не найден');
        if (entry.type !== 'file') throw new Error('Это не файл');
        return entry.content || '';
      });
    },
    write: function(path, content) {
      var self = this;
      return self.get(path).then(function(entry) {
        if (!entry) throw new Error('Файл не найден');
        if (entry.type !== 'file') throw new Error('Это не файл');
        return self.set(path, { type: 'file', content: content });
      });
    },
    ls: function(path) {
      var self = this;
      return self.get(path).then(function(entry) {
        if (!entry) throw new Error('Папка не найдена');
        if (entry.type !== 'folder') throw new Error('Это не папка');
        var prefix = path === '/' ? '/' : path + '/';
        return self.getAllKeys().then(function(keys) {
          var children = keys.filter(function(k) { return k.startsWith(prefix) && k !== path; });
          var names = children.map(function(k) { return k.substring(prefix.length).split('/')[0]; });
          return Array.from(new Set(names));
        });
      });
    },
    getAllKeys: function() {
      var self = this;
      return new Promise(function(resolve, reject) {
        var tx = self.db.transaction(self.storeName, 'readonly');
        var store = tx.objectStore(self.storeName);
        var req = store.getAllKeys();
        req.onsuccess = function() { resolve(req.result); };
        req.onerror = reject;
      });
    },
    rm: function(path) {
      var self = this;
      return self.get(path).then(function(entry) {
        if (!entry) throw new Error('Не найдено');
        if (entry.type === 'folder') {
          return self.ls(path).then(function(children) {
            var chain = Promise.resolve();
            children.forEach(function(child) {
              var childPath = path === '/' ? '/' + child : path + '/' + child;
              chain = chain.then(function() { return self.rm(childPath); });
            });
            return chain.then(function() { return self.delete(path); });
          });
        } else {
          return self.delete(path);
        }
      });
    },
    stat: function(path) {
      return this.get(path);
    }
  };
  var fsReady = false;

  // ============================================================
  //  11. УВЕДОМЛЕНИЯ (с звуком)
  // ============================================================
  function showNotification(message, type, duration) {
    type = type || 'info';
    duration = duration || 3000;
    if (doNotDisturb) return;
    if (!doNotDisturb) playSound('notification');
    var container = document.getElementById('notifications');
    var toast = document.createElement('div');
    toast.className = 'toast';
    if (type === 'error') toast.classList.add('error');
    if (type === 'warning') toast.classList.add('warning');
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(function() {
      toast.style.opacity = '0';
      setTimeout(function() { toast.remove(); }, 300);
    }, duration);
  }

  // ============================================================
  //  12. ДИАЛОГ
  // ============================================================
  var dialogOverlay = document.getElementById('dialog-overlay');
  var dialogTitle = document.getElementById('dialog-title');
  var dialogMessage = document.getElementById('dialog-message');
  var dialogInput = document.getElementById('dialog-input');
  var dialogCancel = document.getElementById('dialog-cancel');
  var dialogConfirm = document.getElementById('dialog-confirm');
  var dialogResolve = null;

  function showDialog(options) {
    return new Promise(function(resolve) {
      dialogTitle.textContent = options.title || 'Подтверждение';
      dialogMessage.textContent = options.message || 'Вы уверены?';
      if (options.input) {
        dialogInput.style.display = 'block';
        dialogInput.value = options.defaultValue || '';
        dialogInput.placeholder = options.placeholder || '';
        dialogInput.focus();
      } else {
        dialogInput.style.display = 'none';
      }
      dialogOverlay.style.display = 'flex';
      dialogResolve = resolve;
    });
  }

  dialogCancel.addEventListener('click', function() {
    dialogOverlay.style.display = 'none';
    if (dialogResolve) dialogResolve(null);
    dialogResolve = null;
  });
  dialogConfirm.addEventListener('click', function() {
    var value = dialogInput.style.display !== 'none' ? dialogInput.value : true;
    dialogOverlay.style.display = 'none';
    if (dialogResolve) dialogResolve(value);
    dialogResolve = null;
  });
  dialogOverlay.addEventListener('click', function(e) {
    if (e.target === dialogOverlay) {
      dialogOverlay.style.display = 'none';
      if (dialogResolve) dialogResolve(null);
      dialogResolve = null;
    }
  });

  // ============================================================
  //  13. РЕЕСТР ПРИЛОЖЕНИЙ
  // ============================================================
  var builtinApps = [
    { id: 'terminal', label: 'Терминал', icon: 'terminal', action: openTerminal },
    { id: 'filemanager', label: 'Файлы', icon: 'folder', action: openFileManager },
    { id: 'editor', label: 'Редактор', icon: 'file', action: function() { openEditor(null, ''); } },
    { id: 'calculator', label: 'Калькулятор', icon: 'calc', action: openCalculator },
    { id: 'settings', label: 'Настройки', icon: 'gear', action: openSettings },
    { id: 'processes', label: 'Процессы', icon: 'process', action: openProcessManager },
    { id: 'trash', label: 'Корзина', icon: 'trash', action: openTrash },
    { id: 'store', label: 'Магазин', icon: 'folder', action: openStore },
    { id: 'pigmo', label: 'Pigmo Pro', icon: 'paint', action: openPigmoPro },
    { id: 'search', label: 'Поиск', icon: 'search', action: openSearch },
    { id: 'browser', label: 'Браузер', icon: 'browser', action: openBrowser },
    { id: 'calendar', label: 'Календарь', icon: 'calendar-app', action: openCalendar },
    { id: 'alarm', label: 'Будильник', icon: 'alarm', action: openAlarm },
    { id: 'notepad', label: 'Блокнот', icon: 'notepad', action: openNotepad },
    { id: 'passwords', label: 'Пароли', icon: 'password', action: openPasswords },
    { id: 'snake', label: 'Змейка', icon: 'snake', action: openSnakeGame },
    { id: 'tetris', label: 'Тетрис', icon: 'tetris', action: openTetris },
    { id: 'minesweeper', label: 'Сапёр', icon: 'minesweeper', action: openMinesweeper },
    { id: 'presentation', label: 'Презентация', icon: 'file', action: openPresentation }
  ];
  var installedApps = [];

  function getAllApps() {
    var builtin = builtinApps.map(function(a) {
      return { id: a.id, label: a.label, icon: a.icon, action: a.action, builtin: true };
    });
    var installed = installedApps.map(function(a) {
      return { id: a.id, label: a.label, icon: a.icon, action: a.action, builtin: false };
    });
    return builtin.concat(installed);
  }

  function loadAppRegistry() {
    return FS.get('/system/apps.json').then(function(data) {
      if (data && data.content) {
        try { installedApps = JSON.parse(data.content); } catch(e) { installedApps = []; }
      } else {
        installedApps = [];
      }
    }).catch(function() { installedApps = []; });
  }

  function saveAppRegistry() {
    return FS.write('/system/apps.json', JSON.stringify(installedApps));
  }

  // ============================================================
  //  14. ИКОНКИ РАБОЧЕГО СТОЛА
  // ============================================================
  var iconPositions = {};
  var selectedIcons = [];

  function loadIconPositions() {
    try {
      var data = localStorage.getItem('nextelos-icon-positions');
      if (data) iconPositions = JSON.parse(data);
      else iconPositions = {};
    } catch(e) { iconPositions = {}; }
  }
  function saveIconPositions() {
    localStorage.setItem('nextelos-icon-positions', JSON.stringify(iconPositions));
  }

  function arrangeIcons() {
    var icons = document.querySelectorAll('.desktop-icon');
    var cols = Math.ceil(Math.sqrt(icons.length));
    var spacing = 90;
    var startX = 30, startY = 30;
    icons.forEach(function(icon, idx) {
      var col = idx % cols;
      var row = Math.floor(idx / cols);
      var left = startX + col * spacing;
      var top = startY + row * spacing;
      icon.style.left = left + 'px';
      icon.style.top = top + 'px';
      var appId = icon.dataset.appId;
      if (appId) {
        iconPositions[appId] = { left: left, top: top };
      }
    });
    saveIconPositions();
    showNotification('Иконки упорядочены');
  }

  // Выделение прямоугольником
  var selectionRect = document.getElementById('selection-rect');
  var isSelecting = false;
  var selectStartX, selectStartY;

  desktop.addEventListener('mousedown', function(e) {
    if (e.target === desktop || e.target === document.getElementById('desktop')) {
      if (e.button === 0) {
        isSelecting = true;
        var rect = desktop.getBoundingClientRect();
        selectStartX = e.clientX - rect.left;
        selectStartY = e.clientY - rect.top;
        selectionRect.style.display = 'block';
        selectionRect.style.left = selectStartX + 'px';
        selectionRect.style.top = selectStartY + 'px';
        selectionRect.style.width = '0px';
        selectionRect.style.height = '0px';
        if (!e.shiftKey) {
          document.querySelectorAll('.desktop-icon.selected').forEach(function(el) {
            el.classList.remove('selected');
          });
          selectedIcons = [];
        }
      }
    }
  });

  document.addEventListener('mousemove', function(e) {
    if (!isSelecting) return;
    var rect = desktop.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    var width = x - selectStartX;
    var height = y - selectStartY;
    if (width < 0) {
      selectionRect.style.left = (selectStartX + width) + 'px';
      selectionRect.style.width = (-width) + 'px';
    } else {
      selectionRect.style.left = selectStartX + 'px';
      selectionRect.style.width = width + 'px';
    }
    if (height < 0) {
      selectionRect.style.top = (selectStartY + height) + 'px';
      selectionRect.style.height = (-height) + 'px';
    } else {
      selectionRect.style.top = selectStartY + 'px';
      selectionRect.style.height = height + 'px';
    }
    var rectSel = selectionRect.getBoundingClientRect();
    document.querySelectorAll('.desktop-icon').forEach(function(icon) {
      var iconRect = icon.getBoundingClientRect();
      var overlap = !(iconRect.right < rectSel.left || iconRect.left > rectSel.right ||
                      iconRect.bottom < rectSel.top || iconRect.top > rectSel.bottom);
      if (overlap) {
        icon.classList.add('selected');
        if (selectedIcons.indexOf(icon) === -1) selectedIcons.push(icon);
      } else {
        if (!e.shiftKey) {
          icon.classList.remove('selected');
          var idx = selectedIcons.indexOf(icon);
          if (idx !== -1) selectedIcons.splice(idx, 1);
        }
      }
    });
  });

  document.addEventListener('mouseup', function(e) {
    if (isSelecting) {
      isSelecting = false;
      selectionRect.style.display = 'none';
    }
  });

  // Перетаскивание иконок с созданием папок
  function makeDraggable(icon, appId) {
    var isDragging = false;
    var startX, startY, origTop, origLeft, clone = null;
    var timeout = null;

    icon.addEventListener('mousedown', function(e) {
      if (e.button !== 0) return;
      var target = e.target.closest('.desktop-icon');
      if (!target) return;
      if (e.shiftKey) {
        target.classList.toggle('selected');
        var idx = selectedIcons.indexOf(target);
        if (idx === -1) selectedIcons.push(target);
        else selectedIcons.splice(idx, 1);
        return;
      }
      if (!target.classList.contains('selected')) {
        document.querySelectorAll('.desktop-icon.selected').forEach(function(el) {
          el.classList.remove('selected');
        });
        selectedIcons = [];
        target.classList.add('selected');
        selectedIcons.push(target);
      }
      isDragging = true;
      var rect = target.getBoundingClientRect();
      startX = e.clientX;
      startY = e.clientY;
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
      document.addEventListener('mousemove', onDragMove);
      document.addEventListener('mouseup', onDragEnd);
      e.preventDefault();
      timeout = setTimeout(function() {}, 200);
    });

    function onDragMove(e) {
      if (!isDragging) return;
      if (clone) {
        clone.style.left = (e.clientX - 20) + 'px';
        clone.style.top = (e.clientY - 20) + 'px';
      }
      var targetIcon = document.elementFromPoint(e.clientX, e.clientY);
      if (targetIcon && targetIcon.classList && targetIcon.classList.contains('desktop-icon') && targetIcon !== icon) {
        targetIcon.style.border = '2px solid var(--accent)';
      } else {
        document.querySelectorAll('.desktop-icon').forEach(function(el) {
          el.style.border = '';
        });
      }
    }

    function onDragEnd(e) {
      if (!isDragging) return;
      isDragging = false;
      if (clone) { clone.remove(); clone = null; }
      icon.classList.remove('dragging');
      document.removeEventListener('mousemove', onDragMove);
      document.removeEventListener('mouseup', onDragEnd);
      var targetIcon = document.elementFromPoint(e.clientX, e.clientY);
      if (targetIcon && targetIcon.classList && targetIcon.classList.contains('desktop-icon') && targetIcon !== icon) {
        targetIcon.style.border = '';
        showDialog({
          title: 'Создать папку',
          message: 'Хотите создать папку из выбранных иконок?',
          input: true,
          placeholder: 'Введите имя папки',
          defaultValue: 'Новая папка'
        }).then(function(result) {
          if (result) {
            createFolderFromIcons(result, [icon, targetIcon]);
          }
        });
      } else {
        var dx = e.clientX - startX;
        var dy = e.clientY - startY;
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
          selectedIcons.forEach(function(selIcon) {
            var left = parseInt(selIcon.style.left) || 0;
            var top = parseInt(selIcon.style.top) || 0;
            selIcon.style.left = (left + dx) + 'px';
            selIcon.style.top = (top + dy) + 'px';
            var id = selIcon.dataset.appId;
            if (id) {
              iconPositions[id] = { left: parseInt(selIcon.style.left), top: parseInt(selIcon.style.top) };
            }
          });
          saveIconPositions();
        }
      }
      document.querySelectorAll('.desktop-icon').forEach(function(el) {
        el.style.border = '';
      });
      if (!e.shiftKey) {
        document.querySelectorAll('.desktop-icon.selected').forEach(function(el) {
          el.classList.remove('selected');
        });
        selectedIcons = [];
      }
      clearTimeout(timeout);
    }
  }

  function createFolderFromIcons(folderName, icons) {
    var folderApp = {
      id: 'folder_' + Date.now(),
      label: folderName,
      icon: 'folder',
      action: function() {
        showNotification('Папка "' + folderName + '" открыта (заглушка)', 'info');
      },
      builtin: false,
      isFolder: true,
      children: icons.map(function(icon) { return icon.dataset.appId; })
    };
    installedApps.push(folderApp);
    saveAppRegistry().then(function() {
      icons.forEach(function(icon) {
        icon.remove();
        var id = icon.dataset.appId;
        if (id) delete iconPositions[id];
      });
      renderDesktopIcons();
      showNotification('Папка "' + folderName + '" создана');
    });
  }

  function renderDesktopIcons() {
    document.querySelectorAll('.desktop-icon').forEach(function(el) { el.remove(); });
    var apps = getAllApps();
    var defaultPositions = [
      { top: 30, left: 30 }, { top: 30, left: 130 }, { top: 30, left: 230 },
      { top: 30, left: 330 }, { top: 30, left: 430 }, { top: 30, left: 530 },
      { top: 140, left: 30 }, { top: 140, left: 130 }, { top: 140, left: 230 },
      { top: 140, left: 330 }, { top: 140, left: 430 }, { top: 140, left: 530 }
    ];
    apps.forEach(function(app, idx) {
      var pos;
      if (iconPositions[app.id]) {
        pos = iconPositions[app.id];
      } else {
        var def = defaultPositions[idx] || { top: 30 + Math.floor(idx / 6) * 110, left: 30 + (idx % 6) * 100 };
        pos = { top: def.top, left: def.left };
        iconPositions[app.id] = pos;
      }
      var icon = document.createElement('div');
      icon.className = 'desktop-icon';
      icon.dataset.appId = app.id;
      icon.dataset.builtin = app.builtin ? 'true' : 'false';
      icon.style.top = pos.top + 'px';
      icon.style.left = pos.left + 'px';
      icon.innerHTML = '<span class="icon">' + iconHTML(app.icon) + '</span><span class="label">' + app.label + '</span>';
      icon.addEventListener('click', function(e) {
        if (e.shiftKey) {
          icon.classList.toggle('selected');
          var idx2 = selectedIcons.indexOf(icon);
          if (idx2 === -1) selectedIcons.push(icon);
          else selectedIcons.splice(idx2, 1);
          return;
        }
        if (!icon.classList.contains('selected')) {
          document.querySelectorAll('.desktop-icon.selected').forEach(function(el) {
            el.classList.remove('selected');
          });
          selectedIcons = [];
          app.action();
        } else {
          app.action();
        }
      });
      makeDraggable(icon, app.id);
      icon.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        e.stopPropagation();
        showContextMenuForIcon(e.clientX, e.clientY, app);
      });
      desktop.appendChild(icon);
    });
    saveIconPositions();
  }

  // ============================================================
  //  15. КОНТЕКСТНОЕ МЕНЮ (исправленное)
  // ============================================================
  function showContextMenuForIcon(x, y, app) {
    var menu = document.getElementById('context-menu');
    menu.innerHTML = '';
    addMenuItem('Запустить', function() { app.action(); hideContextMenu(); });
    if (!app.builtin) {
      addMenuItem('Переименовать', function() {
        showDialog({
          title: 'Переименовать',
          message: 'Введите новое имя:',
          input: true,
          defaultValue: app.label
        }).then(function(newName) {
          if (newName && newName.trim()) {
            var inst = installedApps.find(function(a) { return a.id === app.id; });
            if (inst) {
              inst.label = newName.trim();
              saveAppRegistry().then(function() {
                renderDesktopIcons();
                showNotification('Имя изменено');
              });
            }
          }
          hideContextMenu();
        });
      });
      addMenuItem('Удалить', function() {
        showDialog({
          title: 'Удалить приложение',
          message: 'Вы уверены, что хотите удалить "' + app.label + '"?',
          input: false
        }).then(function(confirm) {
          if (confirm) {
            installedApps = installedApps.filter(function(a) { return a.id !== app.id; });
            saveAppRegistry().then(function() {
              delete iconPositions[app.id];
              saveIconPositions();
              renderDesktopIcons();
              showNotification('"' + app.label + '" удалён');
            });
          }
          hideContextMenu();
        });
      }, true);
    } else {
      addMenuItem('Встроенное приложение', null, false);
    }
    menu.style.display = 'block';
    menu.style.left = x + 'px';
    menu.style.top = y + 'px';
    var rect = menu.getBoundingClientRect();
    if (rect.right > window.innerWidth) menu.style.left = (x - rect.width) + 'px';
    if (rect.bottom > window.innerHeight) menu.style.top = (y - rect.height) + 'px';

    function addMenuItem(text, action, danger) {
      danger = danger || false;
      var item = document.createElement('div');
      item.className = 'menu-item' + (danger ? ' danger' : '');
      item.textContent = text;
      if (action) {
        item.addEventListener('click', function(e) { e.stopPropagation(); action(); });
      } else {
        item.style.cursor = 'default';
        item.style.opacity = '0.6';
      }
      menu.appendChild(item);
    }
  }

  function hideContextMenu() {
    document.getElementById('context-menu').style.display = 'none';
  }

  document.addEventListener('click', function() { hideContextMenu(); });

  desktop.addEventListener('contextmenu', function(e) {
    if (e.target === desktop || e.target === document.getElementById('desktop')) {
      e.preventDefault();
      var menu = document.getElementById('context-menu');
      menu.innerHTML = '';
      addMenuItem2('Создать папку', function() {
        showDialog({
          title: 'Создать папку',
          message: 'Введите имя папки:',
          input: true,
          placeholder: 'Имя папки',
          defaultValue: 'Новая папка'
        }).then(function(name) {
          if (name && name.trim()) {
            FS.mkdir('/home/user/' + name.trim()).then(function() {
              showNotification('Папка "' + name.trim() + '" создана');
              hideContextMenu();
            }).catch(function(err) {
              showNotification('Ошибка: ' + err.message, 'error');
            });
          }
          hideContextMenu();
        });
      });
      addMenuItem2('Создать файл', function() {
        showDialog({
          title: 'Создать файл',
          message: 'Введите имя файла:',
          input: true,
          placeholder: 'Имя файла',
          defaultValue: 'новый_файл.txt'
        }).then(function(name) {
          if (name && name.trim()) {
            FS.touch('/home/user/' + name.trim(), '').then(function() {
              showNotification('Файл "' + name.trim() + '" создан');
              hideContextMenu();
            }).catch(function(err) {
              showNotification('Ошибка: ' + err.message, 'error');
            });
          }
          hideContextMenu();
        });
      });
      addDivider2();
      addMenuItem2('Упорядочить', function() {
        arrangeIcons();
        hideContextMenu();
      });
      addMenuItem2('Обновить', function() {
        renderDesktopIcons();
        hideContextMenu();
        showNotification('Рабочий стол обновлён');
      });
      addMenuItem2('Настройки', function() {
        openSettings();
        hideContextMenu();
      });
      menu.style.display = 'block';
      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
      var rect = menu.getBoundingClientRect();
      if (rect.right > window.innerWidth) menu.style.left = (e.clientX - rect.width) + 'px';
      if (rect.bottom > window.innerHeight) menu.style.top = (e.clientY - rect.height) + 'px';
    }
  });

  function addMenuItem2(text, action) {
    var item = document.createElement('div');
    item.className = 'menu-item';
    item.textContent = text;
    if (action) item.addEventListener('click', function(e) { e.stopPropagation(); action(); });
    document.getElementById('context-menu').appendChild(item);
  }
  function addDivider2() {
    var div = document.createElement('div');
    div.className = 'menu-divider';
    document.getElementById('context-menu').appendChild(div);
  }

  // ============================================================
  //  16. СИСТЕМНЫЙ ТРЕЙ
  // ============================================================
  var trayVisible = false;
  var trayEl = document.getElementById('system-tray');
  document.getElementById('tray-btn').addEventListener('click', function() {
    trayVisible = !trayVisible;
    trayEl.style.display = trayVisible ? 'flex' : 'none';
  });

  // Громкость
  document.getElementById('volume-slider').addEventListener('input', function() {
    var val = Math.round(this.value * 100);
    document.getElementById('volume-label').textContent = val + '%';
  });

  // Режим "Не беспокоить"
  document.getElementById('do-not-disturb').addEventListener('change', function() {
    doNotDisturb = this.checked;
    localStorage.setItem('nextelos-dnd', String(doNotDisturb));
    showNotification(doNotDisturb ? 'Режим "Не беспокоить" включён' : 'Режим "Не беспокоить" выключен');
  });
  document.getElementById('do-not-disturb').checked = doNotDisturb;

  // ============================================================
  //  17. ВИДЖЕТЫ (погода, системная информация, график CPU)
  // ============================================================
  var cpuVal = 10;
  var cpuHistory = [];
  var cpuChartCanvas = document.getElementById('cpu-chart');
  var cpuCtx = cpuChartCanvas.getContext('2d');

  function updateSysInfo() {
    cpuVal += Math.round((Math.random() - 0.5) * 8);
    cpuVal = Math.min(95, Math.max(2, cpuVal));
    document.getElementById('widget-cpu').textContent = cpuVal + '%';
    if (performance.memory) {
      var mem = Math.round(performance.memory.usedJSHeapSize / 1048576);
      document.getElementById('widget-memory').textContent = mem + ' MB';
    } else {
      document.getElementById('widget-memory').textContent = '-- MB';
    }
    // График CPU
    cpuHistory.push(cpuVal);
    if (cpuHistory.length > 50) cpuHistory.shift();
    cpuCtx.clearRect(0, 0, cpuChartCanvas.width, cpuChartCanvas.height);
    cpuCtx.strokeStyle = '#50fa7b';
    cpuCtx.lineWidth = 2;
    cpuCtx.beginPath();
    for (var i = 0; i < cpuHistory.length; i++) {
      var x = (i / cpuHistory.length) * cpuChartCanvas.width;
      var y = cpuChartCanvas.height - (cpuHistory[i] / 100) * cpuChartCanvas.height;
      if (i === 0) cpuCtx.moveTo(x, y);
      else cpuCtx.lineTo(x, y);
    }
    cpuCtx.stroke();
  }
  setInterval(updateSysInfo, 1500);
  updateSysInfo();

  var weatherKey = '';
  var weatherData = null;
  function fetchWeather(city) {
    city = city || 'Moscow';
    if (!weatherKey) {
      document.getElementById('widget-weather').style.display = 'none';
      return;
    }
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + weatherKey + '&units=metric&lang=ru')
      .then(function(resp) {
        if (!resp.ok) throw new Error('API ошибка');
        return resp.json();
      })
      .then(function(data) {
        weatherData = data;
        document.getElementById('widget-temp').textContent = Math.round(data.main.temp) + '°C';
        document.getElementById('widget-desc').textContent = data.weather[0].description;
        document.getElementById('widget-weather').style.display = 'block';
      })
      .catch(function() {
        document.getElementById('widget-weather').style.display = 'block';
        document.getElementById('widget-temp').textContent = '--°C';
        document.getElementById('widget-desc').textContent = 'Ошибка API';
      });
  }
  weatherKey = localStorage.getItem('nextelos-weather-key') || '';
  if (weatherKey) fetchWeather();
  setInterval(function() { if (weatherKey) fetchWeather(); }, 600000);

  // Виджеты перетаскиваемые
  var widgetsContainer = document.getElementById('widgets');
  widgetsContainer.addEventListener('mousedown', function(e) {
    var target = e.target.closest('.widget-clock, .widget-weather, .widget-sysinfo');
    if (!target) return;
    var isDragging = false;
    var startX, startY, origLeft, origTop;
    var rect = target.getBoundingClientRect();
    startX = e.clientX;
    startY = e.clientY;
    origLeft = target.offsetLeft;
    origTop = target.offsetTop;
    isDragging = true;
    target.style.cursor = 'grabbing';
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragEnd);
    e.preventDefault();

    function onDragMove(e2) {
      if (!isDragging) return;
      var dx = e2.clientX - startX;
      var dy = e2.clientY - startY;
      target.style.position = 'relative';
      target.style.left = (origLeft + dx) + 'px';
      target.style.top = (origTop + dy) + 'px';
    }
    function onDragEnd() {
      isDragging = false;
      target.style.cursor = '';
      document.removeEventListener('mousemove', onDragMove);
      document.removeEventListener('mouseup', onDragEnd);
    }
  });

  // Клик по виджетам
  document.getElementById('widget-clock').addEventListener('click', function() {
    openCalendar();
  });
  document.getElementById('widget-weather').addEventListener('click', function() {
    openWeatherMap();
  });
  document.getElementById('widget-sysinfo').addEventListener('click', function() {
    openProcessManager();
  });

  // ============================================================
  //  18. ПОГОДА С КАРТОЙ (OpenStreetMap)
  // ============================================================
  function openWeatherMap() {
    var content = '<div style="height:400px;display:flex;flex-direction:column;"><div style="display:flex;gap:8px;padding:6px;background:rgba(255,255,255,0.05);"><input id="weather-city" type="text" placeholder="Введите город..." value="Moscow" style="flex:1;padding:4px 8px;background:var(--bg-input);border:1px solid var(--border-light);border-radius:4px;color:var(--text-primary);"><button id="weather-fetch" style="padding:4px 16px;background:var(--accent);color:#fff;border-radius:4px;">Показать</button></div><div id="weather-map" style="flex:1;background:#1a1a2e;border-radius:6px;position:relative;overflow:hidden;"><div id="weather-info" style="position:absolute;top:10px;left:10px;background:rgba(0,0,0,0.7);padding:10px;border-radius:6px;color:#fff;z-index:10;font-size:14px;max-width:200px;"></div><iframe id="weather-iframe" style="width:100%;height:100%;border:none;" src="about:blank"></iframe></div></div>';
    var winId = createWindow('Погода', content, { width: 700, height: 500, iconType: 'weather' });
    setTimeout(function() {
      var cityInput = document.getElementById('weather-city');
      var fetchBtn = document.getElementById('weather-fetch');
      var infoDiv = document.getElementById('weather-info');
      var iframe = document.getElementById('weather-iframe');

      function loadWeather(city) {
        if (!weatherKey) {
          infoDiv.innerHTML = '❌ API-ключ не задан. Укажите его в настройках.';
          return;
        }
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + encodeURIComponent(city) + '&appid=' + weatherKey + '&units=metric&lang=ru')
          .then(function(resp) {
            if (!resp.ok) throw new Error('Город не найден');
            return resp.json();
          })
          .then(function(data) {
            var temp = Math.round(data.main.temp);
            var desc = data.weather[0].description;
            var lon = data.coord.lon;
            var lat = data.coord.lat;
            infoDiv.innerHTML = '<div style="font-size:20px;">' + temp + '°C</div><div>' + desc + '</div><div style="font-size:12px;opacity:0.7;">' + city + '</div>';
            var mapUrl = 'https://www.openstreetmap.org/export/embed.html?bbox=' + (lon - 0.5) + ',' + (lat - 0.5) + ',' + (lon + 0.5) + ',' + (lat + 0.5) + '&layer=mapnik&marker=' + lat + ',' + lon;
            iframe.src = mapUrl;
          })
          .catch(function(err) {
            infoDiv.innerHTML = '❌ ' + err.message;
          });
      }

      fetchBtn.addEventListener('click', function() {
        loadWeather(cityInput.value.trim() || 'Moscow');
      });
      cityInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') loadWeather(cityInput.value.trim() || 'Moscow');
      });
      loadWeather('Moscow');
    }, 100);
  }

  // ============================================================
  //  19. ПРИЛОЖЕНИЯ
  // ============================================================

  // ----- 19.1 Терминал -----
  function openTerminal() {
    var content = '<div id="terminal-output"></div><div class="terminal-input-line"><span>$</span><input id="terminal-input" type="text" autofocus></div>';
    var winId = createWindow('Терминал', content, { width: 600, height: 350, iconType: 'terminal' });
    setTimeout(function() {
      var output = document.getElementById('terminal-output');
      var input = document.getElementById('terminal-input');
      var currentDir = '/home/user';

      function append(text) {
        output.textContent += text + '\n';
        output.scrollTop = output.scrollHeight;
      }

      function processCommand(cmd) {
        var args = cmd.trim().split(/\s+/);
        var command = args[0];
        var params = args.slice(1);
        var p = FS;
        var cur = currentDir;
        try {
          switch (command) {
            case 'ls':
              p.ls(cur).then(function(files) {
                append(files.join('  '));
                promptAgain();
              }).catch(function(e) { append('Ошибка: ' + e.message); promptAgain(); });
              break;
            case 'cd':
              if (params.length === 0) {
                currentDir = '/home/user';
                promptAgain();
              } else {
                var newPath = params[0];
                if (!newPath.startsWith('/')) newPath = (cur === '/' ? '/' : cur + '/' + newPath);
                p.stat(newPath).then(function(entry) {
                  if (!entry || entry.type !== 'folder') {
                    append('cd: нет такой папки: ' + params[0]);
                  } else {
                    currentDir = newPath;
                  }
                  promptAgain();
                }).catch(function(e) { append('Ошибка: ' + e.message); promptAgain(); });
              }
              break;
            case 'mkdir':
              if (params.length === 0) { append('mkdir: нужен путь'); promptAgain(); return; }
              var newPath = params[0];
              if (!newPath.startsWith('/')) newPath = (cur === '/' ? '/' : cur + '/' + newPath);
              p.mkdir(newPath).then(function() {
                append('Папка создана');
                promptAgain();
              }).catch(function(e) { append('Ошибка: ' + e.message); promptAgain(); });
              break;
            case 'touch':
              if (params.length === 0) { append('touch: нужен путь'); promptAgain(); return; }
              var newPath = params[0];
              if (!newPath.startsWith('/')) newPath = (cur === '/' ? '/' : cur + '/' + newPath);
              p.touch(newPath, '').then(function() {
                append('Файл создан');
                promptAgain();
              }).catch(function(e) { append('Ошибка: ' + e.message); promptAgain(); });
              break;
            case 'cat':
              if (params.length === 0) { append('cat: нужен путь'); promptAgain(); return; }
              var filePath = params[0];
              if (!filePath.startsWith('/')) filePath = (cur === '/' ? '/' : cur + '/' + filePath);
              p.cat(filePath).then(function(content) {
                append(content || '(пусто)');
                promptAgain();
              }).catch(function(e) { append('Ошибка: ' + e.message); promptAgain(); });
              break;
            case 'rm':
              if (params.length === 0) { append('rm: нужен путь'); promptAgain(); return; }
              var filePath = params[0];
              if (!filePath.startsWith('/')) filePath = (cur === '/' ? '/' : cur + '/' + filePath);
              p.rm(filePath).then(function() {
                append('Удалено');
                promptAgain();
              }).catch(function(e) { append('Ошибка: ' + e.message); promptAgain(); });
              break;
            case 'clear':
              output.textContent = '';
              promptAgain();
              break;
            case 'echo':
              append(params.join(' '));
              promptAgain();
              break;
            case 'cp':
              if (params.length < 2) { append('cp: нужны два пути'); promptAgain(); return; }
              var src = params[0], dst = params[1];
              if (!src.startsWith('/')) src = (cur === '/' ? '/' : cur + '/' + src);
              if (!dst.startsWith('/')) dst = (cur === '/' ? '/' : cur + '/' + dst);
              p.cat(src).then(function(content) {
                return p.touch(dst, content);
              }).then(function() {
                append('Скопировано');
                promptAgain();
              }).catch(function(e) { append('Ошибка: ' + e.message); promptAgain(); });
              break;
            case 'mv':
              if (params.length < 2) { append('mv: нужны два пути'); promptAgain(); return; }
              var src = params[0], dst = params[1];
              if (!src.startsWith('/')) src = (cur === '/' ? '/' : cur + '/' + src);
              if (!dst.startsWith('/')) dst = (cur === '/' ? '/' : cur + '/' + dst);
              p.cat(src).then(function(content) {
                return p.touch(dst, content).then(function() { return p.rm(src); });
              }).then(function() {
                append('Перемещено');
                promptAgain();
              }).catch(function(e) { append('Ошибка: ' + e.message); promptAgain(); });
              break;
            case 'rmdir':
              if (params.length === 0) { append('rmdir: нужен путь'); promptAgain(); return; }
              var filePath = params[0];
              if (!filePath.startsWith('/')) filePath = (cur === '/' ? '/' : cur + '/' + filePath);
              p.rm(filePath).then(function() {
                append('Удалено');
                promptAgain();
              }).catch(function(e) { append('Ошибка: ' + e.message); promptAgain(); });
              break;
            case 'pwd':
              append(cur);
              promptAgain();
              break;
            case 'whoami':
              append('user');
              promptAgain();
              break;
            case 'help':
              append('Доступные команды:\nls, cd, mkdir, touch, cat, rm, clear, echo, cp, mv, rmdir, pwd, whoami, help');
              promptAgain();
              break;
            default:
              append('команда не найдена: ' + command);
              promptAgain();
          }
        } catch(e) {
          append('Ошибка: ' + e.message);
          promptAgain();
        }

        function promptAgain() {
          var promptStr = currentDir || '/';
          output.textContent += '\n' + promptStr + ' $ ';
          input.value = '';
          input.focus();
        }
      }

      append('Добро пожаловать в Терминал NextelOS v0.0.5');
      append('Введите help для списка команд.');
      append('\n' + currentDir + ' $ ');

      input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          var cmd = input.value.trim();
          if (cmd) {
            var lines = output.textContent.split('\n');
            var last = lines[lines.length - 1];
            if (last.endsWith('$ ')) {
              lines[lines.length - 1] = last + cmd;
              output.textContent = lines.join('\n');
            } else {
              append(cmd);
            }
            processCommand(cmd);
          } else {
            var promptStr = currentDir || '/';
            output.textContent += '\n' + promptStr + ' $ ';
            input.value = '';
            input.focus();
          }
        }
      });
      input.focus();
    }, 100);
  }

  // ----- 19.2 Файловый менеджер (с закладками и контекстным меню) -----
  var fmCurrentPath = '/home/user';
  var fmClipboard = null; // { path, type: 'copy'|'cut' }
  var fmBookmarks = [];

  function loadBookmarks() {
    FS.get('/system/bookmarks.json').then(function(data) {
      if (data && data.content) {
        try { fmBookmarks = JSON.parse(data.content); } catch(e) { fmBookmarks = []; }
      } else {
        fmBookmarks = ['/home/user', '/home', '/system'];
      }
      renderBookmarks();
    }).catch(function() { fmBookmarks = ['/home/user', '/home', '/system']; renderBookmarks(); });
  }
  function saveBookmarks() {
    FS.write('/system/bookmarks.json', JSON.stringify(fmBookmarks));
  }
  function renderBookmarks() {
    var container = document.querySelector('.fm-bookmarks');
    if (!container) return;
    container.innerHTML = '';
    fmBookmarks.forEach(function(bm) {
      var span = document.createElement('span');
      span.className = 'bookmark';
      span.textContent = bm;
      span.addEventListener('click', function() {
        fmCurrentPath = bm;
        renderFileList();
      });
      container.appendChild(span);
    });
  }

  function openFileManager() {
    var content = '<div class="fm-bookmarks"></div><div class="fm-toolbar"><button id="fm-back"><span class="icon">' + iconHTML('folder') + '</span>Назад</button><button id="fm-home"><span class="icon">' + iconHTML('home') + '</span>Домой</button><button id="fm-mkdir"><span class="icon">' + iconHTML('folder') + '</span>Создать папку</button><button id="fm-touch"><span class="icon">' + iconHTML('file') + '</span>Создать файл</button><button id="fm-refresh">🔄 Обновить</button><button id="fm-paste" style="display:none;">📋 Вставить</button></div><div class="fm-path" id="fm-path">' + fmCurrentPath + '</div><div class="fm-list" id="fm-list"></div>';
    var winId = createWindow('Файловый менеджер', content, { width: 550, height: 400, iconType: 'folder' });
    loadBookmarks();

    function renderFileList() {
      var list = document.getElementById('fm-list');
      if (!list) return;
      var pathEl = document.getElementById('fm-path');
      if (pathEl) pathEl.textContent = fmCurrentPath;
      var pasteBtn = document.getElementById('fm-paste');
      if (pasteBtn) pasteBtn.style.display = fmClipboard ? 'inline-block' : 'none';
      FS.ls(fmCurrentPath).then(function(items) {
        list.innerHTML = '';
        var folders = [], files = [];
        var promises = items.map(function(name) {
          var fullPath = fmCurrentPath === '/' ? '/' + name : fmCurrentPath + '/' + name;
          return FS.stat(fullPath).then(function(stat) {
            if (stat && stat.type === 'folder') folders.push(name);
            else files.push(name);
          });
        });
        Promise.all(promises).then(function() {
          var sorted = folders.sort().concat(files.sort());
          sorted.forEach(function(name) {
            var fullPath = fmCurrentPath === '/' ? '/' + name : fmCurrentPath + '/' + name;
            FS.stat(fullPath).then(function(stat) {
              var isFolder = stat && stat.type === 'folder';
              var div = document.createElement('div');
              div.className = 'fm-item';
              div.innerHTML = '<span class="fm-icon">' + iconHTML(isFolder ? 'folder' : 'file') + '</span><span class="fm-name">' + name + '</span><span class="fm-actions"><button class="fm-del" data-path="' + fullPath + '">' + iconHTML('trash') + '</button></span>';
              div.addEventListener('dblclick', function() {
                if (isFolder) {
                  fmCurrentPath = fullPath;
                  renderFileList();
                } else {
                  FS.cat(fullPath).then(function(content) {
                    openEditor(fullPath, content);
                  }).catch(function(e) {
                    showNotification('Не удалось открыть файл: ' + e.message, 'error');
                  });
                }
              });
              // Контекстное меню для файла
              div.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                e.stopPropagation();
                showFileContextMenu(e.clientX, e.clientY, fullPath, name, isFolder);
              });
              var delBtn = div.querySelector('.fm-del');
              delBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                if (confirm('Переместить "' + name + '" в корзину?')) {
                  var trashPath = '/system/trash/' + name;
                  FS.stat(trashPath).then(function(exists) {
                    if (exists) {
                      showNotification('Файл с таким именем уже есть в корзине', 'warning');
                      return;
                    }
                    return FS.stat(fullPath).then(function(stat) {
                      if (stat.type === 'file') {
                        return FS.cat(fullPath).then(function(content) {
                          return FS.touch(trashPath, content).then(function() {
                            return FS.rm(fullPath);
                          });
                        });
                      } else {
                        showNotification('Перемещение папок в корзину пока не поддерживается', 'warning');
                        return Promise.reject();
                      }
                    });
                  }).then(function() {
                    showNotification('"' + name + '" перемещён в корзину');
                    renderFileList();
                  }).catch(function(err) {
                    if (err) showNotification('Ошибка: ' + err.message, 'error');
                  });
                }
              });
              list.appendChild(div);
            });
          });
        });
      }).catch(function(e) {
        list.innerHTML = '<div style="color:#ff5555;">Ошибка: ' + e.message + '</div>';
      });
    }

    function showFileContextMenu(x, y, path, name, isFolder) {
      var menu = document.getElementById('context-menu');
      menu.innerHTML = '';
      addMenuItem('📋 Копировать', function() {
        fmClipboard = { path: path, type: 'copy' };
        showNotification('Файл скопирован');
        hideContextMenu();
        var pasteBtn = document.getElementById('fm-paste');
        if (pasteBtn) pasteBtn.style.display = 'inline-block';
      });
      addMenuItem('✂️ Вырезать', function() {
        fmClipboard = { path: path, type: 'cut' };
        showNotification('Файл вырезан');
        hideContextMenu();
        var pasteBtn = document.getElementById('fm-paste');
        if (pasteBtn) pasteBtn.style.display = 'inline-block';
      });
      if (fmClipboard) {
        addMenuItem('📋 Вставить', function() {
          var src = fmClipboard.path;
          var dest = fmCurrentPath === '/' ? '/' + name : fmCurrentPath + '/' + name;
          FS.cat(src).then(function(content) {
            return FS.touch(dest, content).then(function() {
              if (fmClipboard.type === 'cut') {
                return FS.rm(src);
              }
            });
          }).then(function() {
            showNotification('Вставлено');
            fmClipboard = null;
            renderFileList();
            var pasteBtn = document.getElementById('fm-paste');
            if (pasteBtn) pasteBtn.style.display = 'none';
            hideContextMenu();
          }).catch(function(err) {
            showNotification('Ошибка: ' + err.message, 'error');
          });
        });
      }
      addMenuItem('📌 Переименовать', function() {
        showDialog({
          title: 'Переименовать',
          message: 'Введите новое имя:',
          input: true,
          defaultValue: name
        }).then(function(newName) {
          if (newName && newName.trim() && newName.trim() !== name) {
            var newPath = fmCurrentPath === '/' ? '/' + newName.trim() : fmCurrentPath + '/' + newName.trim();
            FS.cat(path).then(function(content) {
              return FS.touch(newPath, content).then(function() {
                return FS.rm(path);
              });
            }).then(function() {
              showNotification('Переименовано');
              renderFileList();
              hideContextMenu();
            }).catch(function(err) {
              showNotification('Ошибка: ' + err.message, 'error');
            });
          }
          hideContextMenu();
        });
      });
      addMenuItem('ℹ Свойства', function() {
        FS.stat(path).then(function(stat) {
          var info = 'Имя: ' + name + '\n';
          info += 'Тип: ' + (isFolder ? 'Папка' : 'Файл') + '\n';
          if (!isFolder) {
            FS.cat(path).then(function(content) {
              info += 'Размер: ' + content.length + ' символов\n';
              info += 'Дата создания: ' + new Date().toLocaleString();
              showNotification(info, 'info', 5000);
            });
          } else {
            showNotification(info, 'info', 5000);
          }
          hideContextMenu();
        });
      });
      menu.style.display = 'block';
      menu.style.left = x + 'px';
      menu.style.top = y + 'px';
      var rect = menu.getBoundingClientRect();
      if (rect.right > window.innerWidth) menu.style.left = (x - rect.width) + 'px';
      if (rect.bottom > window.innerHeight) menu.style.top = (y - rect.height) + 'px';

      function addMenuItem(text, action) {
        var item = document.createElement('div');
        item.className = 'menu-item';
        item.textContent = text;
        if (action) {
          item.addEventListener('click', function(e) { e.stopPropagation(); action(); });
        }
        menu.appendChild(item);
      }
    }

    setTimeout(function() {
      var backBtn = document.getElementById('fm-back');
      var homeBtn = document.getElementById('fm-home');
      var mkdirBtn = document.getElementById('fm-mkdir');
      var touchBtn = document.getElementById('fm-touch');
      var refreshBtn = document.getElementById('fm-refresh');
      var pasteBtn = document.getElementById('fm-paste');

      if (backBtn) {
        backBtn.addEventListener('click', function() {
          if (fmCurrentPath !== '/') {
            var parts = fmCurrentPath.split('/').filter(function(p) { return p !== ''; });
            parts.pop();
            fmCurrentPath = '/' + parts.join('/');
            if (!fmCurrentPath) fmCurrentPath = '/';
            renderFileList();
          }
        });
      }
      if (homeBtn) {
        homeBtn.addEventListener('click', function() {
          fmCurrentPath = '/home/user';
          renderFileList();
        });
      }
      if (mkdirBtn) {
        mkdirBtn.addEventListener('click', function() {
          showDialog({
            title: 'Создать папку',
            message: 'Введите имя папки:',
            input: true,
            placeholder: 'Имя папки',
            defaultValue: 'Новая папка'
          }).then(function(name) {
            if (name && name.trim()) {
              var newPath = fmCurrentPath === '/' ? '/' + name.trim() : fmCurrentPath + '/' + name.trim();
              FS.mkdir(newPath).then(function() {
                showNotification('Папка "' + name.trim() + '" создана');
                renderFileList();
              }).catch(function(e) {
                showNotification('Ошибка: ' + e.message, 'error');
              });
            }
          });
        });
      }
      if (touchBtn) {
        touchBtn.addEventListener('click', function() {
          showDialog({
            title: 'Создать файл',
            message: 'Введите имя файла:',
            input: true,
            placeholder: 'Имя файла',
            defaultValue: 'новый_файл.txt'
          }).then(function(name) {
            if (name && name.trim()) {
              var newPath = fmCurrentPath === '/' ? '/' + name.trim() : fmCurrentPath + '/' + name.trim();
              FS.touch(newPath, '').then(function() {
                showNotification('Файл "' + name.trim() + '" создан');
                renderFileList();
              }).catch(function(e) {
                showNotification('Ошибка: ' + e.message, 'error');
              });
            }
          });
        });
      }
      if (refreshBtn) {
        refreshBtn.addEventListener('click', renderFileList);
      }
      if (pasteBtn) {
        pasteBtn.addEventListener('click', function() {
          if (fmClipboard) {
            var src = fmClipboard.path;
            var name = src.split('/').pop();
            var dest = fmCurrentPath === '/' ? '/' + name : fmCurrentPath + '/' + name;
            FS.cat(src).then(function(content) {
              return FS.touch(dest, content).then(function() {
                if (fmClipboard.type === 'cut') {
                  return FS.rm(src);
                }
              });
            }).then(function() {
              showNotification('Вставлено');
              fmClipboard = null;
              renderFileList();
              if (pasteBtn) pasteBtn.style.display = 'none';
            }).catch(function(err) {
              showNotification('Ошибка: ' + err.message, 'error');
            });
          }
        });
      }
      renderFileList();
    }, 100);
  }

  // ----- 19.3 Редактор (с Markdown-предпросмотром) -----
  function openEditor(filePath, initialContent) {
    initialContent = initialContent || '';
    var content = '<div class="editor-area"><div class="editor-toolbar"><button id="editor-save"><span class="icon">' + iconHTML('file') + '</span>Сохранить</button><button id="editor-open"><span class="icon">' + iconHTML('folder') + '</span>Открыть</button><button id="editor-preview">📄 Предпросмотр</button><span class="file-info" id="editor-fileinfo">' + (filePath || 'Новый файл') + '</span></div><div id="editor-container" style="display:flex;flex:1;height:calc(100% - 36px);"><textarea id="editor-textarea" style="flex:1;background:#111;color:#eee;border:none;padding:10px;font-family:\'Courier New\',monospace;font-size:13px;resize:none;outline:none;height:100%;">' + initialContent + '</textarea><div id="editor-preview-panel" style="flex:1;background:#fff;color:#222;padding:10px;overflow:auto;display:none;border-left:1px solid #333;"></div></div></div>';
    var winId = createWindow('Редактор', content, { width: 650, height: 450, iconType: 'file' });
    setTimeout(function() {
      var textarea = document.getElementById('editor-textarea');
      var saveBtn = document.getElementById('editor-save');
      var openBtn = document.getElementById('editor-open');
      var previewBtn = document.getElementById('editor-preview');
      var previewPanel = document.getElementById('editor-preview-panel');
      var fileInfo = document.getElementById('editor-fileinfo');
      var curPath = filePath;
      var previewVisible = false;
      if (curPath) fileInfo.textContent = curPath;

      function renderMarkdown(text) {
        var html = text;
        html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
        html = html.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        html = html.replace(/\*(.*?)\*/g, '<i>$1</i>');
        html = html.replace(/^\s*-\s(.*$)/gim, '<li>$1</li>');
        html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
        html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>');
        html = html.replace(/\n/g, '<br>');
        return html;
      }

      saveBtn.addEventListener('click', function() {
        var content = textarea.value;
        if (!curPath) {
          showDialog({
            title: 'Сохранить файл',
            message: 'Введите путь для сохранения:',
            input: true,
            placeholder: '/home/user/файл.txt',
            defaultValue: '/home/user/новый_файл.txt'
          }).then(function(newPath) {
            if (newPath && newPath.trim()) {
              FS.stat(newPath.trim()).then(function(stat) {
                if (stat) {
                  return showDialog({
                    title: 'Файл существует',
                    message: 'Перезаписать?',
                    input: false
                  }).then(function(confirm) {
                    if (confirm) {
                      return FS.write(newPath.trim(), content);
                    } else {
                      return Promise.reject('Отменено');
                    }
                  });
                } else {
                  return FS.touch(newPath.trim(), '').then(function() {
                    return FS.write(newPath.trim(), content);
                  });
                }
              }).then(function() {
                curPath = newPath.trim();
                fileInfo.textContent = curPath;
                showNotification('Файл сохранён');
              }).catch(function(err) {
                if (err !== 'Отменено') {
                  showNotification('Ошибка сохранения: ' + err.message, 'error');
                }
              });
            }
          });
        } else {
          FS.write(curPath, content).then(function() {
            showNotification('Файл сохранён');
          }).catch(function(e) {
            showNotification('Ошибка сохранения: ' + e.message, 'error');
          });
        }
      });

      openBtn.addEventListener('click', function() {
        showDialog({
          title: 'Открыть файл',
          message: 'Введите путь к файлу:',
          input: true,
          placeholder: '/home/user/файл.txt',
          defaultValue: '/home/user/'
        }).then(function(p) {
          if (p && p.trim()) {
            FS.cat(p.trim()).then(function(content) {
              textarea.value = content;
              curPath = p.trim();
              fileInfo.textContent = curPath;
              showNotification('Файл "' + p.trim() + '" открыт');
            }).catch(function(e) {
              showNotification('Ошибка открытия: ' + e.message, 'error');
            });
          }
        });
      });

      previewBtn.addEventListener('click', function() {
        previewVisible = !previewVisible;
        if (previewVisible) {
          previewPanel.style.display = 'block';
          previewBtn.textContent = '📄 Скрыть';
          var html = renderMarkdown(textarea.value);
          previewPanel.innerHTML = html;
        } else {
          previewPanel.style.display = 'none';
          previewBtn.textContent = '📄 Предпросмотр';
        }
      });

      textarea.addEventListener('input', function() {
        if (previewVisible) {
          var html = renderMarkdown(textarea.value);
          previewPanel.innerHTML = html;
        }
      });
    }, 100);
  }

  // ----- 19.4 Калькулятор (простой и научный) -----
  function openCalculator() {
    var content = '<div class="calc-mode-switch"><button id="calc-mode-simple" class="active">Простой</button><button id="calc-mode-scientific">Научный</button></div><div id="calc-simple"><div class="calc-grid"><div class="calc-display" id="calc-display">0</div><button class="calc-btn" data-value="7">7</button><button class="calc-btn" data-value="8">8</button><button class="calc-btn" data-value="9">9</button><button class="calc-btn op" data-value="+">+</button><button class="calc-btn" data-value="4">4</button><button class="calc-btn" data-value="5">5</button><button class="calc-btn" data-value="6">6</button><button class="calc-btn op" data-value="-">−</button><button class="calc-btn" data-value="1">1</button><button class="calc-btn" data-value="2">2</button><button class="calc-btn" data-value="3">3</button><button class="calc-btn op" data-value="*">×</button><button class="calc-btn" data-value="0">0</button><button class="calc-btn" data-value=".">.</button><button class="calc-btn equal" data-value="=">=</button><button class="calc-btn op" data-value="/">÷</button><button class="calc-btn" data-value="C" style="grid-column:span 2;">C</button></div></div><div id="calc-scientific" style="display:none;"><div class="calc-grid-scientific"><div class="calc-display" id="calc-display-sci" style="grid-column:span 5;">0</div><button class="calc-btn" data-value="sin">sin</button><button class="calc-btn" data-value="cos">cos</button><button class="calc-btn" data-value="tan">tan</button><button class="calc-btn" data-value="log">log</button><button class="calc-btn" data-value="ln">ln</button><button class="calc-btn" data-value="7">7</button><button class="calc-btn" data-value="8">8</button><button class="calc-btn" data-value="9">9</button><button class="calc-btn op" data-value="+">+</button><button class="calc-btn op" data-value="-">−</button><button class="calc-btn" data-value="4">4</button><button class="calc-btn" data-value="5">5</button><button class="calc-btn" data-value="6">6</button><button class="calc-btn op" data-value="*">×</button><button class="calc-btn op" data-value="/">÷</button><button class="calc-btn" data-value="1">1</button><button class="calc-btn" data-value="2">2</button><button class="calc-btn" data-value="3">3</button><button class="calc-btn" data-value="^">^</button><button class="calc-btn equal" data-value="=">=</button><button class="calc-btn" data-value="0">0</button><button class="calc-btn" data-value=".">.</button><button class="calc-btn" data-value="C" style="grid-column:span 2;">C</button></div></div><div class="calc-history" id="calc-history"></div>';
    var winId = createWindow('Калькулятор', content, { width: 350, height: 470, iconType: 'calc' });
    setTimeout(function() {
      // Простой режим
      var display = document.getElementById('calc-display');
      var history = document.getElementById('calc-history');
      var currentInput = '';
      var previousInput = '';
      var operation = null;
      var shouldResetDisplay = false;

      function updateDisplay() {
        display.textContent = currentInput || '0';
      }

      function handleNumber(value) {
        if (shouldResetDisplay) {
          currentInput = '';
          shouldResetDisplay = false;
        }
        if (value === '.' && currentInput.includes('.')) return;
        currentInput += value;
        updateDisplay();
      }

      function handleOperator(op) {
        if (currentInput === '' && previousInput === '') return;
        if (previousInput !== '' && currentInput !== '') {
          calculate();
        }
        previousInput = currentInput || previousInput;
        operation = op;
        shouldResetDisplay = true;
      }

      function calculate() {
        if (previousInput === '' || currentInput === '' || operation === null) return;
        var a = parseFloat(previousInput);
        var b = parseFloat(currentInput);
        var result;
        switch (operation) {
          case '+': result = a + b; break;
          case '-': result = a - b; break;
          case '*': result = a * b; break;
          case '/': result = a / b; break;
          default: return;
        }
        if (!isFinite(result)) {
          showNotification('Ошибка: деление на ноль', 'error');
          return;
        }
        var historyEntry = previousInput + ' ' + operation + ' ' + currentInput + ' = ' + result;
        var div = document.createElement('div');
        div.textContent = historyEntry;
        history.prepend(div);
        while (history.children.length > 10) history.removeChild(history.lastChild);
        currentInput = String(result);
        previousInput = '';
        operation = null;
        shouldResetDisplay = true;
        updateDisplay();
      }

      function clearAll() {
        currentInput = '';
        previousInput = '';
        operation = null;
        shouldResetDisplay = false;
        updateDisplay();
      }

      document.querySelectorAll('#calc-simple .calc-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var val = btn.dataset.value;
          if (val === 'C') {
            clearAll();
            return;
          }
          if (val === '=') {
            if (previousInput !== '' && currentInput !== '' && operation !== null) {
              calculate();
            } else {
              showNotification('Неполное выражение', 'warning');
            }
            return;
          }
          if (['+', '-', '*', '/'].indexOf(val) !== -1) {
            handleOperator(val);
            return;
          }
          handleNumber(val);
        });
      });
      updateDisplay();

      // Научный режим
      var sciDisplay = document.getElementById('calc-display-sci');
      var sciInput = '';
      var sciPrev = '';
      var sciOp = null;
      var sciReset = false;

      function updateSciDisplay() {
        sciDisplay.textContent = sciInput || '0';
      }

      function sciHandleNumber(value) {
        if (sciReset) {
          sciInput = '';
          sciReset = false;
        }
        if (value === '.' && sciInput.includes('.')) return;
        sciInput += value;
        updateSciDisplay();
      }

      function sciHandleOperator(op) {
        if (sciInput === '' && sciPrev === '') return;
        if (sciPrev !== '' && sciInput !== '') {
          sciCalculate();
        }
        sciPrev = sciInput || sciPrev;
        sciOp = op;
        sciReset = true;
      }

      function sciCalculate() {
        if (sciPrev === '' || sciInput === '' || sciOp === null) return;
        var a = parseFloat(sciPrev);
        var b = parseFloat(sciInput);
        var result;
        switch (sciOp) {
          case '+': result = a + b; break;
          case '-': result = a - b; break;
          case '*': result = a * b; break;
          case '/': result = a / b; break;
          case '^': result = Math.pow(a, b); break;
          default: return;
        }
        if (!isFinite(result)) {
          showNotification('Ошибка', 'error');
          return;
        }
        sciInput = String(result);
        sciPrev = '';
        sciOp = null;
        sciReset = true;
        updateSciDisplay();
      }

      function sciClear() {
        sciInput = '';
        sciPrev = '';
        sciOp = null;
        sciReset = false;
        updateSciDisplay();
      }

      document.querySelectorAll('#calc-scientific .calc-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var val = btn.dataset.value;
          if (val === 'C') {
            sciClear();
            return;
          }
          if (val === '=') {
            if (sciPrev !== '' && sciInput !== '' && sciOp !== null) {
              sciCalculate();
            } else {
              showNotification('Неполное выражение', 'warning');
            }
            return;
          }
          if (['+', '-', '*', '/', '^'].indexOf(val) !== -1) {
            sciHandleOperator(val);
            return;
          }
          if (['sin', 'cos', 'tan', 'log', 'ln'].indexOf(val) !== -1) {
            var num = parseFloat(sciInput) || 0;
            var result;
            switch (val) {
              case 'sin': result = Math.sin(num); break;
              case 'cos': result = Math.cos(num); break;
              case 'tan': result = Math.tan(num); break;
              case 'log': result = Math.log10(num); break;
              case 'ln': result = Math.log(num); break;
            }
            sciInput = String(result);
            sciReset = true;
            updateSciDisplay();
            return;
          }
          sciHandleNumber(val);
        });
      });
      updateSciDisplay();

      // Переключение режимов
      var simpleMode = document.getElementById('calc-simple');
      var scientificMode = document.getElementById('calc-scientific');
      var simpleBtn = document.getElementById('calc-mode-simple');
      var scientificBtn = document.getElementById('calc-mode-scientific');

      simpleBtn.addEventListener('click', function() {
        simpleBtn.classList.add('active');
        scientificBtn.classList.remove('active');
        simpleMode.style.display = 'block';
        scientificMode.style.display = 'none';
      });
      scientificBtn.addEventListener('click', function() {
        scientificBtn.classList.add('active');
        simpleBtn.classList.remove('active');
        simpleMode.style.display = 'none';
        scientificMode.style.display = 'block';
      });
    }, 100);
  }

  // ----- 19.5 Настройки (слайд-шоу обоев) -----
  var slideshowInterval = null;
  var slideshowIndex = 0;
  var slideshowWallpapers = [];
  var slideshowTimer = null;

  function openSettings() {
    var wallpapers = [
      { name: 'Город ночью', url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150"><rect width="200" height="150" fill="%231a1a2e"/><rect x="20" y="60" width="30" height="90" fill="%232c3e50"/><rect x="60" y="40" width="30" height="110" fill="%232c3e50"/><rect x="100" y="70" width="30" height="80" fill="%232c3e50"/><rect x="140" y="30" width="30" height="120" fill="%232c3e50"/><circle cx="50" cy="20" r="10" fill="%23f1c40f" opacity="0.8"/><circle cx="120" cy="15" r="6" fill="%23f1c40f" opacity="0.6"/></svg>' },
      { name: 'Лес', url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150"><rect width="200" height="150" fill="%2327ae60"/><rect y="100" width="200" height="50" fill="%232d7d46"/><circle cx="30" cy="60" r="35" fill="%232d7d46"/><circle cx="100" cy="40" r="45" fill="%232d7d46"/><circle cx="170" cy="55" r="40" fill="%232d7d46"/><circle cx="50" cy="15" r="10" fill="%23f39c12"/></svg>' },
      { name: 'Космос', url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150"><rect width="200" height="150" fill="%230b0b1a"/><circle cx="30" cy="30" r="5" fill="white"/><circle cx="80" cy="20" r="2" fill="white"/><circle cx="150" cy="40" r="4" fill="white"/><circle cx="170" cy="100" r="6" fill="white"/><circle cx="120" cy="120" r="3" fill="white"/><ellipse cx="100" cy="75" rx="40" ry="20" fill="%23f1c40f" opacity="0.3"/></svg>' },
      { name: 'Абстракция', url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150"><rect width="200" height="150" fill="%234a69bd"/><circle cx="50" cy="50" r="40" fill="%23f39c12" opacity="0.5"/><circle cx="150" cy="100" r="50" fill="%23e74c3c" opacity="0.4"/><rect x="80" y="20" width="60" height="60" fill="%232ecc71" opacity="0.3"/></svg>' },
      { name: 'Закат', url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150"><rect width="200" height="150" fill="%23f39c12"/><rect y="80" width="200" height="70" fill="%23e67e22"/><circle cx="100" cy="70" r="40" fill="%23e74c3c" opacity="0.6"/><circle cx="30" cy="130" r="20" fill="%23d35400" opacity="0.3"/></svg>' },
      { name: 'Горы', url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150"><rect width="200" height="150" fill="%235dade2"/><polygon points="0,120 60,40 120,120" fill="%232d7d46"/><polygon points="80,120 140,30 200,120" fill="%231f6182"/><rect y="120" width="200" height="30" fill="%231a4d3a"/></svg>' },
      { name: 'Цветы', url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150"><rect width="200" height="150" fill="%23f8c8d8"/><circle cx="40" cy="40" r="20" fill="%23e91e63" opacity="0.7"/><circle cx="80" cy="60" r="25" fill="%23ff4081" opacity="0.6"/><circle cx="140" cy="50" r="22" fill="%23f50057" opacity="0.5"/><circle cx="60" cy="100" r="18" fill="%23c2185b" opacity="0.4"/><circle cx="130" cy="110" r="20" fill="%23e91e63" opacity="0.4"/></svg>' },
      { name: 'Тёплые тона', url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150"><rect width="200" height="150" fill="%23ff8a65"/><rect x="0" y="0" width="100" height="75" fill="%23ffab91" opacity="0.5"/><rect x="100" y="75" width="100" height="75" fill="%23ff6e40" opacity="0.5"/><circle cx="150" cy="30" r="30" fill="%23ffccbc" opacity="0.3"/></svg>' },
      { name: 'Холодные тона', url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150"><rect width="200" height="150" fill="%234fc3f7"/><rect x="0" y="0" width="100" height="75" fill="%2381d4fa" opacity="0.5"/><rect x="100" y="75" width="100" height="75" fill="%2329b6f6" opacity="0.5"/><circle cx="50" cy="100" r="30" fill="%23b3e5fc" opacity="0.3"/></svg>' },
      { name: 'Градиент 1', url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150"><defs><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%234a69bd"/><stop offset="100%" stop-color="%23e74c3c"/></linearGradient></defs><rect width="200" height="150" fill="url(%23g1)"/></svg>' },
      { name: 'Градиент 2', url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150"><defs><linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="%232ecc71"/><stop offset="100%" stop-color="%23f1c40f"/></linearGradient></defs><rect width="200" height="150" fill="url(%23g2)"/></svg>' },
      { name: 'Градиент 3', url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150"><defs><linearGradient id="g3" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="%238e44ad"/><stop offset="100%" stop-color="%23f39c12"/></linearGradient></defs><rect width="200" height="150" fill="url(%23g3)"/></svg>' },
      { name: 'Обои по умолчанию', url: '' }
    ];
    var currentTheme = localStorage.getItem('nextelos-theme') || 'dark';
    var weatherKeySetting = localStorage.getItem('nextelos-weather-key') || '';
    var showWidgets = localStorage.getItem('nextelos-show-widgets') !== 'false';
    var iconSize = localStorage.getItem('nextelos-icon-size') || '76';
    var animLevel = localStorage.getItem('nextelos-anim-level') || 'medium';
    var slideshowIntervalSetting = localStorage.getItem('nextelos-slideshow-interval') || '0';

    var content = '<div class="settings-section"><h3>Обои рабочего стола</h3><div class="wallpaper-grid" id="wallpaper-grid"></div></div>' +
                  '<div class="settings-section"><h3>Загрузить свои обои</h3><input type="file" id="wallpaper-upload" accept="image/*"><button id="wallpaper-upload-btn">Загрузить</button></div>' +
                  '<div class="settings-section"><h3>Слайд-шоу обоев</h3><select id="slideshow-interval"><option value="0" ' + (slideshowIntervalSetting === '0' ? 'selected' : '') + '>Выкл</option><option value="5" ' + (slideshowIntervalSetting === '5' ? 'selected' : '') + '>5 сек</option><option value="10" ' + (slideshowIntervalSetting === '10' ? 'selected' : '') + '>10 сек</option><option value="30" ' + (slideshowIntervalSetting === '30' ? 'selected' : '') + '>30 сек</option><option value="60" ' + (slideshowIntervalSetting === '60' ? 'selected' : '') + '>1 мин</option></select></div>' +
                  '<div class="settings-section"><h3>Тема оформления</h3><div class="theme-buttons"><button data-theme="dark" class="' + (currentTheme === 'dark' ? 'active' : '') + '">Тёмная</button><button data-theme="light" class="' + (currentTheme === 'light' ? 'active' : '') + '">Светлая</button><button data-theme="ocean" class="' + (currentTheme === 'ocean' ? 'active' : '') + '">Океан</button><button data-theme="forest" class="' + (currentTheme === 'forest' ? 'active' : '') + '">Лес</button><button data-theme="sunset" class="' + (currentTheme === 'sunset' ? 'active' : '') + '">Закат</button><button data-theme="mono" class="' + (currentTheme === 'mono' ? 'active' : '') + '">Моно</button></div></div>' +
                  '<div class="settings-section"><h3>Анимации</h3><div class="theme-buttons"><button data-anim="off" class="' + (animLevel === 'off' ? 'active' : '') + '">Выкл</button><button data-anim="medium" class="' + (animLevel === 'medium' ? 'active' : '') + '">Средние</button><button data-anim="max" class="' + (animLevel === 'max' ? 'active' : '') + '">Максимум</button></div></div>' +
                  '<div class="settings-section"><h3>Виджеты</h3><label><input type="checkbox" id="show-widgets" ' + (showWidgets ? 'checked' : '') + '> Показывать виджеты</label></div>' +
                  '<div class="settings-section"><h3>Размер иконок</h3><input type="range" id="icon-size" min="60" max="100" value="' + iconSize + '"> <span id="icon-size-label">' + iconSize + 'px</span></div>' +
                  '<div class="settings-section"><h3>Погода (OpenWeatherMap)</h3><input type="text" id="weather-key-input" placeholder="API-ключ" value="' + weatherKeySetting + '"><button id="weather-key-save">Сохранить</button></div>' +
                  '<div class="settings-section"><h3>О системе</h3><p style="color:#888;">NextelOS v0.0.5<br>Ядро: JavaScript<br>Файловая система: IndexedDB</p></div>';
    var winId = createWindow('Настройки', content, { width: 500, height: 600, iconType: 'gear' });
    setTimeout(function() {
      // Обои
      var grid = document.getElementById('wallpaper-grid');
      if (grid) {
        wallpapers.forEach(function(wp) {
          var div = document.createElement('div');
          div.className = 'wallpaper-item';
          if (wp.url) {
            div.style.backgroundImage = 'url("' + wp.url + '")';
          } else {
            div.style.background = 'linear-gradient(135deg, #2c3e50, #1a1a2e)';
          }
          var currentBg = document.getElementById('desktop').style.backgroundImage;
          if (wp.url && currentBg.indexOf(wp.url) !== -1) {
            div.classList.add('active');
          } else if (!wp.url && !currentBg && !localStorage.getItem('nextelos-wallpaper')) {
            div.classList.add('active');
          }
          div.title = wp.name;
          div.addEventListener('click', function() {
            document.querySelectorAll('.wallpaper-item').forEach(function(el) { el.classList.remove('active'); });
            div.classList.add('active');
            var desktopEl = document.getElementById('desktop');
            if (wp.url) {
              desktopEl.style.backgroundImage = 'url("' + wp.url + '")';
              desktopEl.style.backgroundSize = 'cover';
              localStorage.setItem('nextelos-wallpaper', wp.url);
            } else {
              desktopEl.style.backgroundImage = '';
              desktopEl.style.background = '#2c3e50';
              localStorage.removeItem('nextelos-wallpaper');
            }
            if (slideshowTimer) {
              clearInterval(slideshowTimer);
              slideshowTimer = null;
            }
            showNotification('Обои изменены');
          });
          grid.appendChild(div);
        });
      }
      // Загрузка своих обоев
      var uploadInput = document.getElementById('wallpaper-upload');
      var uploadBtn = document.getElementById('wallpaper-upload-btn');
      if (uploadBtn) {
        uploadBtn.addEventListener('click', function() {
          if (!uploadInput.files || uploadInput.files.length === 0) {
            showNotification('Выберите файл', 'warning');
            return;
          }
          var file = uploadInput.files[0];
          if (!file.type.startsWith('image/')) {
            showNotification('Требуется изображение', 'error');
            return;
          }
          var reader = new FileReader();
          reader.onload = function(e) {
            var dataUrl = e.target.result;
            var desktopEl = document.getElementById('desktop');
            desktopEl.style.backgroundImage = 'url("' + dataUrl + '")';
            desktopEl.style.backgroundSize = 'cover';
            localStorage.setItem('nextelos-wallpaper', dataUrl);
            if (slideshowTimer) {
              clearInterval(slideshowTimer);
              slideshowTimer = null;
            }
            showNotification('Обои загружены');
          };
          reader.readAsDataURL(file);
        });
      }
      // Слайд-шоу
      var slideshowSelect = document.getElementById('slideshow-interval');
      if (slideshowSelect) {
        slideshowSelect.addEventListener('change', function() {
          var interval = parseInt(this.value);
          localStorage.setItem('nextelos-slideshow-interval', String(interval));
          if (slideshowTimer) {
            clearInterval(slideshowTimer);
            slideshowTimer = null;
          }
          if (interval > 0) {
            var allWallpapers = wallpapers.filter(function(w) { return w.url !== ''; });
            slideshowWallpapers = allWallpapers;
            slideshowIndex = 0;
            slideshowTimer = setInterval(function() {
              if (slideshowWallpapers.length === 0) return;
              slideshowIndex = (slideshowIndex + 1) % slideshowWallpapers.length;
              var wp = slideshowWallpapers[slideshowIndex];
              var desktopEl = document.getElementById('desktop');
              desktopEl.style.backgroundImage = 'url("' + wp.url + '")';
              desktopEl.style.backgroundSize = 'cover';
              localStorage.setItem('nextelos-wallpaper', wp.url);
              document.querySelectorAll('.wallpaper-item').forEach(function(el) {
                el.classList.remove('active');
                if (el.style.backgroundImage.indexOf(wp.url) !== -1) {
                  el.classList.add('active');
                }
              });
            }, interval * 1000);
            showNotification('Слайд-шоу запущено');
          } else {
            showNotification('Слайд-шоу остановлено');
          }
        });
        if (parseInt(slideshowIntervalSetting) > 0) {
          slideshowSelect.value = slideshowIntervalSetting;
          slideshowSelect.dispatchEvent(new Event('change'));
        }
      }
      // Темы
      var themeBtns = document.querySelectorAll('.theme-buttons button[data-theme]');
      themeBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
          themeBtns.forEach(function(b) { b.classList.remove('active'); });
          btn.classList.add('active');
          var theme = btn.dataset.theme;
          document.body.className = '';
          if (theme !== 'dark') document.body.classList.add('theme-' + theme);
          localStorage.setItem('nextelos-theme', theme);
          showNotification('Тема: ' + theme);
        });
      });
      // Анимации
      var animBtns = document.querySelectorAll('.theme-buttons button[data-anim]');
      animBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
          animBtns.forEach(function(b) { b.classList.remove('active'); });
          btn.classList.add('active');
          var level = btn.dataset.anim;
          applyAnimationLevel(level);
          showNotification('Анимации: ' + level);
        });
      });
      // Виджеты
      var widgetsCheck = document.getElementById('show-widgets');
      if (widgetsCheck) {
        widgetsCheck.addEventListener('change', function() {
          var show = widgetsCheck.checked;
          localStorage.setItem('nextelos-show-widgets', show ? 'true' : 'false');
          document.getElementById('widgets').style.display = show ? 'flex' : 'none';
        });
      }
      // Размер иконок
      var sizeSlider = document.getElementById('icon-size');
      var sizeLabel = document.getElementById('icon-size-label');
      if (sizeSlider) {
        sizeSlider.addEventListener('input', function() {
          var val = sizeSlider.value;
          sizeLabel.textContent = val + 'px';
          localStorage.setItem('nextelos-icon-size', val);
          document.querySelectorAll('.desktop-icon').forEach(function(el) {
            el.style.width = val + 'px';
          });
          renderDesktopIcons();
        });
      }
      // Погода
      var keyInput = document.getElementById('weather-key-input');
      var keySave = document.getElementById('weather-key-save');
      if (keySave) {
        keySave.addEventListener('click', function() {
          var key = keyInput.value.trim();
          if (key) {
            localStorage.setItem('nextelos-weather-key', key);
            weatherKey = key;
            showNotification('Ключ сохранён. Обновление погоды...');
            fetchWeather();
          } else {
            localStorage.removeItem('nextelos-weather-key');
            weatherKey = '';
            document.getElementById('widget-weather').style.display = 'none';
            showNotification('Ключ удалён');
          }
        });
      }
    }, 100);
  }

  function applyAnimationLevel(level) {
    document.body.classList.remove('anim-off', 'anim-medium', 'anim-max');
    if (level === 'off') document.body.classList.add('anim-off');
    else if (level === 'max') document.body.classList.add('anim-max');
    else document.body.classList.add('anim-medium');
    localStorage.setItem('nextelos-anim-level', level);
  }

  // ----- 19.6 Менеджер процессов -----
  function openProcessManager() {
    var content = '<div class="process-list" id="process-list"></div>';
    var winId = createWindow('Менеджер процессов', content, { width: 400, height: 300, iconType: 'process' });
    function render() {
      var list = document.getElementById('process-list');
      if (!list) return;
      var procs = getProcessList();
      list.innerHTML = '';
      if (procs.length === 0) {
        list.innerHTML = '<div style="color:#888;">Нет запущенных процессов</div>';
        return;
      }
      procs.forEach(function(p) {
        var div = document.createElement('div');
        div.className = 'process-item';
        div.innerHTML = '<span class="proc-name">' + p.title + '</span><span class="proc-id">PID: ' + p.id + '</span><button data-pid="' + p.id + '">Завершить</button>';
        var killBtn = div.querySelector('button');
        killBtn.addEventListener('click', function() {
          if (confirm('Завершить процесс "' + p.title + '"?')) {
            killProcess(p.id);
            render();
            showNotification('Процесс "' + p.title + '" завершён');
          }
        });
        list.appendChild(div);
      });
    }
    setTimeout(render, 100);
  }

  // ----- 19.7 Корзина -----
  function openTrash() {
    var content = '<div class="trash-toolbar"><button id="trash-empty"><span class="icon">' + iconHTML('trash') + '</span>Очистить</button><button id="trash-refresh">🔄 Обновить</button></div><div id="trash-list"></div>';
    var winId = createWindow('Корзина', content, { width: 500, height: 350, iconType: 'trash' });
    function render() {
      var list = document.getElementById('trash-list');
      if (!list) return;
      FS.ls('/system/trash').then(function(items) {
        list.innerHTML = '';
        if (items.length === 0) {
          list.innerHTML = '<div class="trash-empty">Корзина пуста</div>';
          return;
        }
        items.forEach(function(name) {
          var fullPath = '/system/trash/' + name;
          FS.stat(fullPath).then(function(stat) {
            var isFolder = stat && stat.type === 'folder';
            var div = document.createElement('div');
            div.className = 'trash-item';
            div.innerHTML = '<span class="trash-icon">' + iconHTML(isFolder ? 'folder' : 'file') + '</span><span class="trash-name">' + name + '</span><span class="trash-actions"><button class="restore-btn" data-path="' + fullPath + '" data-name="' + name + '">↩️ Восстановить</button><button class="delete-btn" data-path="' + fullPath + '" data-name="' + name + '">🗑 Удалить</button></span>';
            var restoreBtn = div.querySelector('.restore-btn');
            restoreBtn.addEventListener('click', function() {
              var destPath = '/home/user/' + name;
              FS.stat(destPath).then(function(exists) {
                if (exists) {
                  return showDialog({
                    title: 'Файл существует',
                    message: 'Файл "' + name + '" уже существует в домашней папке. Заменить?',
                    input: false
                  }).then(function(confirm) {
                    if (confirm) {
                      return FS.rm(destPath);
                    } else {
                      return Promise.reject('Отменено');
                    }
                  });
                }
              }).then(function() {
                if (stat.type === 'file') {
                  return FS.cat(fullPath).then(function(content) {
                    return FS.touch(destPath, content);
                  });
                } else {
                  showNotification('Восстановление папок не поддерживается', 'warning');
                  return Promise.reject();
                }
              }).then(function() {
                return FS.rm(fullPath);
              }).then(function() {
                showNotification('"' + name + '" восстановлен');
                render();
              }).catch(function(err) {
                if (err !== 'Отменено') {
                  showNotification('Ошибка: ' + err.message, 'error');
                }
              });
            });
            var deleteBtn = div.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', function() {
              if (confirm('Удалить "' + name + '" навсегда?')) {
                FS.rm(fullPath).then(function() {
                  showNotification('"' + name + '" удалён навсегда');
                  render();
                }).catch(function(err) {
                  showNotification('Ошибка: ' + err.message, 'error');
                });
              }
            });
            list.appendChild(div);
          });
        });
      }).catch(function(e) {
        list.innerHTML = '<div style="color:#ff5555;">Ошибка: ' + e.message + '</div>';
      });
    }
    setTimeout(function() {
      var emptyBtn = document.getElementById('trash-empty');
      var refreshBtn = document.getElementById('trash-refresh');
      if (emptyBtn) {
        emptyBtn.addEventListener('click', function() {
          if (confirm('Очистить корзину навсегда?')) {
            FS.ls('/system/trash').then(function(items) {
              var chain = Promise.resolve();
              items.forEach(function(name) {
                chain = chain.then(function() { return FS.rm('/system/trash/' + name); });
              });
              return chain;
            }).then(function() {
              showNotification('Корзина очищена');
              render();
            }).catch(function(e) {
              showNotification('Ошибка: ' + e.message, 'error');
            });
          }
        });
      }
      if (refreshBtn) refreshBtn.addEventListener('click', render);
      render();
    }, 100);
  }

  // ----- 19.8 Магазин приложений -----
  var storeCatalog = [
    { id: 'notes', name: 'Заметки', icon: 'notes', desc: 'Простые заметки.', install: function() {
      if (installedApps.find(function(a) { return a.id === 'notes'; })) {
        showNotification('Уже установлено', 'warning');
        return;
      }
      installedApps.push({
        id: 'notes',
        label: 'Заметки',
        icon: 'notes',
        action: function() {
          var c = '<textarea style="width:100%;height:300px;background:#111;color:#eee;border:none;padding:10px;font-family:inherit;resize:none;outline:none;" placeholder="Введите заметку..."></textarea>';
          createWindow('Заметки', c, { width: 400, height: 350, iconType: 'notes' });
        }
      });
      saveAppRegistry().then(function() {
        renderDesktopIcons();
        showNotification('Заметки установлены!');
      });
    } },
    { id: 'calendar_app', name: 'Календарь', icon: 'calendar-app', desc: 'Календарь (заглушка).', install: function() {
      if (installedApps.find(function(a) { return a.id === 'calendar_app'; })) {
        showNotification('Уже установлено', 'warning');
        return;
      }
      installedApps.push({
        id: 'calendar_app',
        label: 'Календарь',
        icon: 'calendar-app',
        action: function() {
          openCalendar();
        }
      });
      saveAppRegistry().then(function() {
        renderDesktopIcons();
        showNotification('Календарь установлен!');
      });
    } },
    { id: 'weather_app', name: 'Погода', icon: 'weather', desc: 'Отображает погоду из виджета.', install: function() {
      if (installedApps.find(function(a) { return a.id === 'weather_app'; })) {
        showNotification('Уже установлено', 'warning');
        return;
      }
      installedApps.push({
        id: 'weather_app',
        label: 'Погода',
        icon: 'weather',
        action: function() {
          var c = '<div style="text-align:center;padding:30px;color:#888;"><div style="font-size:64px;">🌡️</div><div style="font-size:24px;color:#ddd;margin:10px 0;">Погода</div><div style="font-size:16px;">Температура: <span id="app-temp">--</span>°C</div><div style="font-size:14px;color:#aaa;" id="app-desc">--</div></div>';
          var wid = createWindow('Погода', c, { width: 300, height: 280, iconType: 'weather' });
          setTimeout(function() {
            if (weatherData) {
              document.getElementById('app-temp').textContent = Math.round(weatherData.main.temp);
              document.getElementById('app-desc').textContent = weatherData.weather[0].description;
            }
          }, 200);
        }
      });
      saveAppRegistry().then(function() {
        renderDesktopIcons();
        showNotification('Погода установлена!');
      });
    } }
  ];

  function openStore() {
    var html = '<div class="store-grid">';
    storeCatalog.forEach(function(app) {
      var isInstalled = installedApps.some(function(a) { return a.id === app.id; });
      html += '<div class="store-item"><div class="app-icon">' + app.icon + '</div><div class="app-name">' + app.name + '</div><div class="app-desc">' + app.desc + '</div><div class="app-actions">' +
        (isInstalled ?
          '<span class="installed-badge">✅ Установлено</span><button class="uninstall-btn" data-id="' + app.id + '">Удалить</button>' :
          '<button class="install-btn" data-id="' + app.id + '">Установить</button>') +
        '</div></div>';
    });
    html += '</div>';
    var winId = createWindow('Магазин приложений', html, { width: 600, height: 500, iconType: 'folder' });
    setTimeout(function() {
      document.querySelectorAll('.install-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var id = btn.dataset.id;
          var catalogApp = storeCatalog.find(function(a) { return a.id === id; });
          if (catalogApp) {
            catalogApp.install();
            var el = document.querySelector('.window[data-window-id="' + winId + '"]');
            if (el) {
              var id2 = parseInt(el.dataset.windowId);
              if (id2) closeWindow(id2);
            }
            setTimeout(openStore, 300);
          }
        });
      });
      document.querySelectorAll('.uninstall-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var id = btn.dataset.id;
          if (confirm('Удалить приложение?')) {
            installedApps = installedApps.filter(function(a) { return a.id !== id; });
            saveAppRegistry().then(function() {
              renderDesktopIcons();
              showNotification('Приложение удалено');
              var el = document.querySelector('.window[data-window-id="' + winId + '"]');
              if (el) {
                var id2 = parseInt(el.dataset.windowId);
                if (id2) closeWindow(id2);
              }
              setTimeout(openStore, 300);
            });
          }
        });
      });
    }, 100);
  }

  // ----- 19.9 Pigmo Pro (рисовалка с улучшениями) -----
  function openPigmoPro() {
    var content = '<div class="pigmo-toolbar"><button id="pigmo-clear">Очистить</button><button id="pigmo-save">💾 Сохранить</button><input type="color" id="pigmo-color" value="#000000"><input type="range" id="pigmo-size" min="1" max="20" value="4"><label style="color:#aaa;font-size:12px;">Толщина: <span id="pigmo-size-label">4</span></label><button id="pigmo-eraser">Ластик</button><button id="pigmo-crop">Обрезать</button><button id="pigmo-resize">Изменить размер</button><button id="pigmo-rotate">Повернуть</button><button id="pigmo-fill">Заливка</button><select id="pigmo-shape"><option value="free">Рисование</option><option value="rect">Прямоугольник</option><option value="circle">Круг</option></select></div><canvas id="pigmo-canvas" width="600" height="400"></canvas>';
    var winId = createWindow('Pigmo Pro', content, { width: 660, height: 540, iconType: 'paint' });
    setTimeout(function() {
      var canvas = document.getElementById('pigmo-canvas');
      var ctx = canvas.getContext('2d');
      var colorPicker = document.getElementById('pigmo-color');
      var sizeSlider = document.getElementById('pigmo-size');
      var sizeLabel = document.getElementById('pigmo-size-label');
      var eraserBtn = document.getElementById('pigmo-eraser');
      var fillBtn = document.getElementById('pigmo-fill');
      var shapeSelect = document.getElementById('pigmo-shape');
      var isDrawing = false;
      var lastX, lastY;
      var eraseMode = false;
      var fillMode = false;
      var startX, startY;

      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      sizeSlider.addEventListener('input', function() {
        sizeLabel.textContent = sizeSlider.value;
      });

      eraserBtn.addEventListener('click', function() {
        eraseMode = !eraseMode;
        eraserBtn.style.background = eraseMode ? 'rgba(255,0,0,0.3)' : 'rgba(255,255,255,0.1)';
        colorPicker.disabled = eraseMode;
        if (eraseMode) fillMode = false;
        fillBtn.style.background = '';
      });

      fillBtn.addEventListener('click', function() {
        fillMode = !fillMode;
        fillBtn.style.background = fillMode ? 'rgba(0,255,0,0.3)' : '';
        if (fillMode) eraseMode = false;
        eraserBtn.style.background = '';
        colorPicker.disabled = false;
      });

      function startDrawing(e) {
        if (fillMode) {
          // Заливка всей области
          ctx.fillStyle = colorPicker.value;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          return;
        }
        isDrawing = true;
        var rect = canvas.getBoundingClientRect();
        var scaleX = canvas.width / rect.width;
        var scaleY = canvas.height / rect.height;
        var x = (e.clientX - rect.left) * scaleX;
        var y = (e.clientY - rect.top) * scaleY;
        lastX = x;
        lastY = y;
        if (shapeSelect.value === 'free') {
          drawPoint(lastX, lastY);
        } else {
          startX = x;
          startY = y;
        }
      }

      function draw(e) {
        if (!isDrawing || fillMode) return;
        var rect = canvas.getBoundingClientRect();
        var scaleX = canvas.width / rect.width;
        var scaleY = canvas.height / rect.height;
        var x = (e.clientX - rect.left) * scaleX;
        var y = (e.clientY - rect.top) * scaleY;
        var shape = shapeSelect.value;
        if (shape === 'free') {
          ctx.beginPath();
          ctx.moveTo(lastX, lastY);
          ctx.lineTo(x, y);
          ctx.strokeStyle = eraseMode ? '#fff' : colorPicker.value;
          ctx.lineWidth = eraseMode ? sizeSlider.value * 3 : sizeSlider.value;
          ctx.lineCap = 'round';
          ctx.stroke();
          lastX = x;
          lastY = y;
        } else {
          // Временное отображение фигуры (перерисовываем)
          var tempCanvas = document.createElement('canvas');
          tempCanvas.width = canvas.width;
          tempCanvas.height = canvas.height;
          var tempCtx = tempCanvas.getContext('2d');
          tempCtx.drawImage(canvas, 0, 0);
          tempCtx.strokeStyle = eraseMode ? '#fff' : colorPicker.value;
          tempCtx.lineWidth = sizeSlider.value;
          tempCtx.beginPath();
          if (shape === 'rect') {
            var w = x - startX;
            var h = y - startY;
            tempCtx.strokeRect(startX, startY, w, h);
          } else if (shape === 'circle') {
            var radius = Math.sqrt((x - startX) * (x - startX) + (y - startY) * (y - startY));
            tempCtx.arc(startX, startY, radius, 0, 2 * Math.PI);
            tempCtx.stroke();
          }
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(tempCanvas, 0, 0);
        }
      }

      function stopDrawing(e) {
        if (isDrawing && !fillMode && shapeSelect.value !== 'free') {
          var rect = canvas.getBoundingClientRect();
          var scaleX = canvas.width / rect.width;
          var scaleY = canvas.height / rect.height;
          var x = (e.clientX - rect.left) * scaleX;
          var y = (e.clientY - rect.top) * scaleY;
          var shape = shapeSelect.value;
          ctx.strokeStyle = eraseMode ? '#fff' : colorPicker.value;
          ctx.lineWidth = sizeSlider.value;
          ctx.beginPath();
          if (shape === 'rect') {
            var w = x - startX;
            var h = y - startY;
            ctx.strokeRect(startX, startY, w, h);
          } else if (shape === 'circle') {
            var radius = Math.sqrt((x - startX) * (x - startX) + (y - startY) * (y - startY));
            ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
            ctx.stroke();
          }
          isDrawing = false;
        } else {
          isDrawing = false;
        }
      }

      function drawPoint(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, eraseMode ? sizeSlider.value * 1.5 : sizeSlider.value, 0, 2 * Math.PI);
        ctx.fillStyle = eraseMode ? '#fff' : colorPicker.value;
        ctx.fill();
      }

      canvas.addEventListener('mousedown', startDrawing);
      canvas.addEventListener('mousemove', draw);
      canvas.addEventListener('mouseup', stopDrawing);
      canvas.addEventListener('mouseleave', stopDrawing);

      document.getElementById('pigmo-clear').addEventListener('click', function() {
        if (confirm('Очистить холст?')) {
          ctx.fillStyle = '#fff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      });

      document.getElementById('pigmo-save').addEventListener('click', function() {
        var dataUrl = canvas.toDataURL('image/png');
        showDialog({
          title: 'Сохранить рисунок',
          message: 'Введите имя файла:',
          input: true,
          placeholder: '/home/user/рисунок.png',
          defaultValue: '/home/user/рисунок.png'
        }).then(function(path) {
          if (path && path.trim()) {
            FS.touch(path.trim(), dataUrl).then(function() {
              showNotification('Рисунок сохранён');
            }).catch(function(e) {
              showNotification('Ошибка сохранения: ' + e.message, 'error');
            });
          }
        });
      });

      // Обрезка (как было)
      var cropMode = false;
      var cropStartX, cropStartY, cropEndX, cropEndY;
      document.getElementById('pigmo-crop').addEventListener('click', function() {
        cropMode = !cropMode;
        this.style.background = cropMode ? 'rgba(255,0,0,0.3)' : '';
        if (cropMode) {
          showNotification('Выделите область для обрезки', 'info');
        }
      });
      canvas.addEventListener('mousedown', function(e) {
        if (!cropMode) return;
        var rect = canvas.getBoundingClientRect();
        var scaleX = canvas.width / rect.width;
        var scaleY = canvas.height / rect.height;
        cropStartX = (e.clientX - rect.left) * scaleX;
        cropStartY = (e.clientY - rect.top) * scaleY;
      });
      canvas.addEventListener('mouseup', function(e) {
        if (!cropMode) return;
        var rect = canvas.getBoundingClientRect();
        var scaleX = canvas.width / rect.width;
        var scaleY = canvas.height / rect.height;
        cropEndX = (e.clientX - rect.left) * scaleX;
        cropEndY = (e.clientY - rect.top) * scaleY;
        var x = Math.min(cropStartX, cropEndX);
        var y = Math.min(cropStartY, cropEndY);
        var w = Math.abs(cropEndX - cropStartX);
        var h = Math.abs(cropEndY - cropStartY);
        if (w < 10 || h < 10) {
          showNotification('Область слишком мала', 'warning');
          return;
        }
        var imageData = ctx.getImageData(x, y, w, h);
        canvas.width = w;
        canvas.height = h;
        ctx.putImageData(imageData, 0, 0);
        cropMode = false;
        document.getElementById('pigmo-crop').style.background = '';
        showNotification('Обрезка выполнена');
      });

      // Изменение размера
      document.getElementById('pigmo-resize').addEventListener('click', function() {
        showDialog({
          title: 'Изменить размер',
          message: 'Введите новую ширину (пиксели):',
          input: true,
          defaultValue: canvas.width
        }).then(function(w) {
          if (w && parseInt(w) > 0) {
            showDialog({
              title: 'Изменить размер',
              message: 'Введите новую высоту (пиксели):',
              input: true,
              defaultValue: canvas.height
            }).then(function(h) {
              if (h && parseInt(h) > 0) {
                var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                var tempCanvas = document.createElement('canvas');
                tempCanvas.width = canvas.width;
                tempCanvas.height = canvas.height;
                var tempCtx = tempCanvas.getContext('2d');
                tempCtx.putImageData(imgData, 0, 0);
                canvas.width = parseInt(w);
                canvas.height = parseInt(h);
                ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
                showNotification('Размер изменён');
              }
            });
          }
        });
      });

      // Поворот
      document.getElementById('pigmo-rotate').addEventListener('click', function() {
        var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        var tempCtx = tempCanvas.getContext('2d');
        tempCtx.putImageData(imgData, 0, 0);
        canvas.width = canvas.height;
        canvas.height = tempCanvas.width;
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(90 * Math.PI / 180);
        ctx.drawImage(tempCanvas, -tempCanvas.width / 2, -tempCanvas.height / 2);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        showNotification('Поворот на 90°');
      });

      var closeHandler = function() {
        canvas.removeEventListener('mousedown', startDrawing);
        canvas.removeEventListener('mousemove', draw);
        canvas.removeEventListener('mouseup', stopDrawing);
        canvas.removeEventListener('mouseleave', stopDrawing);
      };
      var winObj = kernel.windows.find(function(w) { return w.id === winId; });
      if (winObj) winObj.onClose = closeHandler;
    }, 100);
  }

  // ----- 19.10 Глобальный поиск -----
  function openSearch() {
    var content = '<div id="search-window"><input class="search-input" id="search-input" type="text" placeholder="Поиск приложений и файлов..." autofocus><div id="search-results"></div></div>';
    var winId = createWindow('Поиск', content, { width: 500, height: 400, iconType: 'search' });
    setTimeout(function() {
      var input = document.getElementById('search-input');
      var results = document.getElementById('search-results');
      var allApps = getAllApps();
      var searchIndex = [];

      allApps.forEach(function(app) {
        searchIndex.push({ type: 'app', id: app.id, label: app.label, icon: app.icon, action: app.action, path: '' });
      });

      function indexFiles(path) {
        FS.ls(path).then(function(items) {
          items.forEach(function(name) {
            var fullPath = path === '/' ? '/' + name : path + '/' + name;
            FS.stat(fullPath).then(function(stat) {
              if (stat && stat.type === 'file') {
                searchIndex.push({ type: 'file', id: fullPath, label: name, icon: 'file', action: function() {
                  FS.cat(fullPath).then(function(content) {
                    openEditor(fullPath, content);
                  }).catch(function(e) {
                    showNotification('Не удалось открыть файл: ' + e.message, 'error');
                  });
                }, path: fullPath });
              } else if (stat && stat.type === 'folder') {
                indexFiles(fullPath);
              }
            });
          });
        }).catch(function() {});
      }
      indexFiles('/home/user');

      input.addEventListener('input', function() {
        var query = input.value.toLowerCase().trim();
        results.innerHTML = '';
        if (!query) return;
        var matches = searchIndex.filter(function(item) {
          return item.label.toLowerCase().indexOf(query) !== -1;
        });
        matches.slice(0, 10).forEach(function(item) {
          var div = document.createElement('div');
          div.className = 'search-result';
          div.innerHTML = '<span class="result-icon">' + iconHTML(item.icon) + '</span><span class="result-name">' + item.label + '</span><span class="result-path">' + (item.path || '') + '</span>';
          div.addEventListener('click', function() {
            item.action();
            closeWindow(winId);
          });
          results.appendChild(div);
        });
        if (matches.length === 0) {
          results.innerHTML = '<div style="color:#888;padding:10px;text-align:center;">Ничего не найдено</div>';
        }
      });
      input.focus();
    }, 100);
  }

  // ----- 19.11 Браузер (с DuckDuckGo Lite, поиск в новой вкладке) -----
  function openBrowser() {
    var content = '<div class="browser-toolbar"><button id="browser-back">◀</button><button id="browser-forward">▶</button><button id="browser-refresh">🔄</button><input id="browser-url" type="text" placeholder="Введите URL или поисковый запрос..." value=""><button id="browser-go">Перейти</button><button id="browser-search">🔍</button></div><iframe class="browser-frame" id="browser-frame" src="about:blank"></iframe>';
    var winId = createWindow('Браузер', content, { width: 800, height: 500, iconType: 'browser' });
    setTimeout(function() {
      var urlInput = document.getElementById('browser-url');
      var frame = document.getElementById('browser-frame');
      var backBtn = document.getElementById('browser-back');
      var forwardBtn = document.getElementById('browser-forward');
      var refreshBtn = document.getElementById('browser-refresh');
      var goBtn = document.getElementById('browser-go');
      var searchBtn = document.getElementById('browser-search');
      var history = [];
      var historyIndex = -1;

      function isURL(str) {
        return str.includes('.') && !str.includes(' ') || str.startsWith('http://') || str.startsWith('https://');
      }

      function navigate(url) {
        if (!url) return;
        if (!isURL(url)) {
          // Поисковый запрос – открываем в новой вкладке
          window.open('https://duckduckgo.com/?q=' + encodeURIComponent(url), '_blank');
          showNotification('Поиск открыт в новой вкладке', 'info');
          return;
        } else {
          if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
          }
        }
        urlInput.value = url;
        frame.src = url;
        history = history.slice(0, historyIndex + 1);
        history.push(url);
        historyIndex = history.length - 1;
      }

      goBtn.addEventListener('click', function() { navigate(urlInput.value); });
      urlInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') navigate(urlInput.value);
      });
      backBtn.addEventListener('click', function() {
        if (historyIndex > 0) {
          historyIndex--;
          frame.src = history[historyIndex];
          urlInput.value = history[historyIndex];
        }
      });
      forwardBtn.addEventListener('click', function() {
        if (historyIndex < history.length - 1) {
          historyIndex++;
          frame.src = history[historyIndex];
          urlInput.value = history[historyIndex];
        }
      });
      refreshBtn.addEventListener('click', function() {
        frame.src = frame.src;
      });
      searchBtn.addEventListener('click', function() {
        navigate(urlInput.value);
      });
      navigate('example.com');
    }, 100);
  }

  // ----- 19.12 Календарь (с событиями) -----
  function openCalendar() {
    var content = '<div class="calendar-nav"><button id="cal-prev">◀</button><span id="cal-month-year">Январь 2026</span><button id="cal-next">▶</button></div><div class="calendar-grid" id="calendar-grid"></div><div class="calendar-events-list" id="calendar-events"></div>';
    var winId = createWindow('Календарь', content, { width: 400, height: 450, iconType: 'calendar-app' });
    var currentDate = new Date();
    var events = {};

    function loadEvents() {
      FS.get('/system/events.json').then(function(data) {
        if (data && data.content) {
          try { events = JSON.parse(data.content); } catch(e) { events = {}; }
        } else { events = {}; }
      }).catch(function() { events = {}; });
    }
    loadEvents();

    function saveEvents() {
      FS.write('/system/events.json', JSON.stringify(events));
    }

    function renderCalendar(year, month) {
      var grid = document.getElementById('calendar-grid');
      var monthYear = document.getElementById('cal-month-year');
      var eventsList = document.getElementById('calendar-events');
      if (!grid) return;
      var firstDay = new Date(year, month, 1).getDay();
      var daysInMonth = new Date(year, month + 1, 0).getDate();
      var daysInPrevMonth = new Date(year, month, 0).getDate();
      var today = new Date();
      var monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
      monthYear.textContent = monthNames[month] + ' ' + year;
      grid.innerHTML = '';
      var headers = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
      headers.forEach(function(h) {
        var div = document.createElement('div');
        div.className = 'day-header';
        div.textContent = h;
        grid.appendChild(div);
      });
      var startOffset = (firstDay === 0) ? 6 : firstDay - 1;
      for (var i = 0; i < startOffset; i++) {
        var empty = document.createElement('div');
        empty.className = 'day-cell other-month';
        empty.textContent = daysInPrevMonth - startOffset + i + 1;
        grid.appendChild(empty);
      }
      for (var d = 1; d <= daysInMonth; d++) {
        var cell = document.createElement('div');
        cell.className = 'day-cell';
        cell.textContent = d;
        var dateKey = year + '-' + String(month + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
        if (events[dateKey] && events[dateKey].length > 0) {
          cell.classList.add('has-event');
        }
        if (d === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
          cell.style.border = '2px solid var(--accent)';
        }
        cell.addEventListener('click', function() {
          var day = parseInt(this.textContent);
          var dateKey2 = year + '-' + String(month + 1).padStart(2, '0') + '-' + String(day).padStart(2, '0');
          showDialog({
            title: 'Добавить событие',
            message: 'Введите описание события для ' + dateKey2 + ':',
            input: true,
            placeholder: 'Описание',
            defaultValue: ''
          }).then(function(desc) {
            if (desc && desc.trim()) {
              if (!events[dateKey2]) events[dateKey2] = [];
              events[dateKey2].push({ time: new Date().toLocaleTimeString(), text: desc.trim() });
              saveEvents();
              renderCalendar(year, month);
              showNotification('Событие добавлено');
            }
          });
        });
        grid.appendChild(cell);
      }
      var todayKey = year + '-' + String(month + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
      eventsList.innerHTML = '';
      if (events[todayKey] && events[todayKey].length > 0) {
        events[todayKey].forEach(function(ev, idx) {
          var div = document.createElement('div');
          div.className = 'calendar-event-item';
          div.innerHTML = '<span><span class="event-time">' + ev.time + '</span> ' + ev.text + '</span><span class="event-del" data-idx="' + idx + '" data-date="' + todayKey + '">✕</span>';
          var del = div.querySelector('.event-del');
          del.addEventListener('click', function() {
            var date = this.dataset.date;
            var idx2 = parseInt(this.dataset.idx);
            if (events[date]) {
              events[date].splice(idx2, 1);
              if (events[date].length === 0) delete events[date];
              saveEvents();
              renderCalendar(year, month);
              showNotification('Событие удалено');
            }
          });
          eventsList.appendChild(div);
        });
      } else {
        eventsList.innerHTML = '<div style="color:#888;text-align:center;padding:10px;">Нет событий на сегодня</div>';
      }
    }

    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    renderCalendar(currentYear, currentMonth);

    document.getElementById('cal-prev').addEventListener('click', function() {
      currentMonth--;
      if (currentMonth < 0) { currentMonth = 11; currentYear--; }
      renderCalendar(currentYear, currentMonth);
    });
    document.getElementById('cal-next').addEventListener('click', function() {
      currentMonth++;
      if (currentMonth > 11) { currentMonth = 0; currentYear++; }
      renderCalendar(currentYear, currentMonth);
    });
  }

  // ----- 19.13 Будильник -----
  function openAlarm() {
    var content = '<div><div style="display:flex;gap:10px;align-items:center;margin-bottom:12px;"><input type="number" id="alarm-hour" min="0" max="23" value="8" style="width:60px;padding:4px;background:var(--bg-input);border:1px solid var(--border-light);border-radius:4px;color:var(--text-primary);">:<input type="number" id="alarm-minute" min="0" max="59" value="0" style="width:60px;padding:4px;background:var(--bg-input);border:1px solid var(--border-light);border-radius:4px;color:var(--text-primary);"><button id="alarm-add" style="padding:4px 16px;background:var(--accent);color:#fff;border-radius:4px;">Добавить</button></div><div id="alarm-list"></div></div>';
    var winId = createWindow('Будильник', content, { width: 350, height: 350, iconType: 'alarm' });
    var alarms = [];

    function loadAlarms() {
      FS.get('/system/alarms.json').then(function(data) {
        if (data && data.content) {
          try { alarms = JSON.parse(data.content); } catch(e) { alarms = []; }
        } else { alarms = []; }
        renderAlarms();
      }).catch(function() { alarms = []; renderAlarms(); });
    }
    loadAlarms();

    function saveAlarms() {
      FS.write('/system/alarms.json', JSON.stringify(alarms));
    }

    function renderAlarms() {
      var list = document.getElementById('alarm-list');
      if (!list) return;
      list.innerHTML = '';
      alarms.forEach(function(alarm, idx) {
        var div = document.createElement('div');
        div.className = 'alarm-item';
        div.innerHTML = '<span class="alarm-time">' + String(alarm.hour).padStart(2, '0') + ':' + String(alarm.minute).padStart(2, '0') + '</span><span class="alarm-toggle ' + (alarm.active ? '' : 'off') + '" data-idx="' + idx + '">' + (alarm.active ? 'Вкл' : 'Выкл') + '</span><span class="alarm-del" data-idx="' + idx + '">✕</span>';
        var toggle = div.querySelector('.alarm-toggle');
        toggle.addEventListener('click', function() {
          var idx2 = parseInt(this.dataset.idx);
          alarms[idx2].active = !alarms[idx2].active;
          saveAlarms();
          renderAlarms();
        });
        var del = div.querySelector('.alarm-del');
        del.addEventListener('click', function() {
          var idx2 = parseInt(this.dataset.idx);
          alarms.splice(idx2, 1);
          saveAlarms();
          renderAlarms();
        });
        list.appendChild(div);
      });
    }

    document.getElementById('alarm-add').addEventListener('click', function() {
      var hour = parseInt(document.getElementById('alarm-hour').value) || 0;
      var minute = parseInt(document.getElementById('alarm-minute').value) || 0;
      if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
        showNotification('Неверное время', 'error');
        return;
      }
      alarms.push({ hour: hour, minute: minute, active: true });
      saveAlarms();
      renderAlarms();
      showNotification('Будильник добавлен');
    });

    setInterval(function() {
      var now = new Date();
      var h = now.getHours();
      var m = now.getMinutes();
      alarms.forEach(function(alarm) {
        if (alarm.active && alarm.hour === h && alarm.minute === m) {
          showNotification('⏰ Будильник! ' + String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0'), 'warning');
          try {
            var audioCtx2 = new (window.AudioContext || window.webkitAudioContext)();
            var osc2 = audioCtx2.createOscillator();
            var gain2 = audioCtx2.createGain();
            osc2.connect(gain2);
            gain2.connect(audioCtx2.destination);
            osc2.frequency.value = 800;
            osc2.type = 'square';
            gain2.gain.value = 0.3;
            osc2.start();
            setTimeout(function() { osc2.stop(); }, 1000);
          } catch(e) {}
        }
      });
    }, 10000);
  }

  // ----- 19.14 Блокнот с вкладками -----
  function openNotepad() {
    var content = '<div class="notepad-tabs" id="notepad-tabs"><div class="tab active" data-tab="0">Новая заметка <span class="tab-close" data-tab="0">✕</span></div></div><textarea class="notepad-editor" id="notepad-editor" placeholder="Введите текст..."></textarea>';
    var winId = createWindow('Блокнот', content, { width: 600, height: 400, iconType: 'notepad' });
    var tabs = [{ id: 'tab_' + Date.now(), name: 'Новая заметка', content: '' }];
    var activeTab = 0;

    function loadNotes() {
      FS.get('/system/notes.json').then(function(data) {
        if (data && data.content) {
          try { var notes = JSON.parse(data.content); if (notes && notes.tabs) { tabs = notes.tabs; activeTab = notes.activeTab || 0; } } catch(e) {}
        }
        renderTabs();
        loadTab(activeTab);
      }).catch(function() { renderTabs(); loadTab(0); });
    }
    loadNotes();

    function saveNotes() {
      FS.write('/system/notes.json', JSON.stringify({ tabs: tabs, activeTab: activeTab }));
    }

    function renderTabs() {
      var container = document.getElementById('notepad-tabs');
      if (!container) return;
      container.innerHTML = '';
      tabs.forEach(function(tab, idx) {
        var div = document.createElement('div');
        div.className = 'tab' + (idx === activeTab ? ' active' : '');
        div.dataset.tab = idx;
        div.innerHTML = tab.name + ' <span class="tab-close" data-tab="' + idx + '">✕</span>';
        div.addEventListener('click', function(e) {
          if (e.target.classList.contains('tab-close')) return;
          activeTab = parseInt(this.dataset.tab);
          renderTabs();
          loadTab(activeTab);
          saveNotes();
        });
        var closeSpan = div.querySelector('.tab-close');
        closeSpan.addEventListener('click', function(e) {
          e.stopPropagation();
          var idx2 = parseInt(this.dataset.tab);
          if (tabs.length > 1) {
            tabs.splice(idx2, 1);
            if (activeTab >= tabs.length) activeTab = tabs.length - 1;
            renderTabs();
            loadTab(activeTab);
            saveNotes();
          } else {
            showNotification('Нельзя удалить последнюю вкладку', 'warning');
          }
        });
        container.appendChild(div);
      });
      var addBtn = document.createElement('div');
      addBtn.className = 'tab';
      addBtn.textContent = '+';
      addBtn.style.cursor = 'pointer';
      addBtn.addEventListener('click', function() {
        tabs.push({ id: 'tab_' + Date.now(), name: 'Новая заметка', content: '' });
        activeTab = tabs.length - 1;
        renderTabs();
        loadTab(activeTab);
        saveNotes();
      });
      container.appendChild(addBtn);
    }

    function loadTab(idx) {
      var editor = document.getElementById('notepad-editor');
      if (!editor) return;
      if (tabs[idx]) {
        editor.value = tabs[idx].content || '';
        editor.dataset.tabId = tabs[idx].id;
      }
    }

    var editor = document.getElementById('notepad-editor');
    if (editor) {
      editor.addEventListener('input', function() {
        var tabId = this.dataset.tabId;
        var tab = tabs.find(function(t) { return t.id === tabId; });
        if (tab) {
          tab.content = this.value;
          saveNotes();
        }
      });
    }

    var closeHandler = function() { saveNotes(); };
    var winObj = kernel.windows.find(function(w) { return w.id === winId; });
    if (winObj) winObj.onClose = closeHandler;
  }

  // ----- 19.15 Менеджер паролей -----
  function openPasswords() {
    var content = '<div style="display:flex;gap:8px;margin-bottom:12px;"><button id="pass-add" style="background:var(--accent);color:#fff;padding:4px 16px;border-radius:4px;">Добавить</button></div><div id="pass-list"></div>';
    var winId = createWindow('Менеджер паролей', content, { width: 450, height: 400, iconType: 'password' });
    var passwords = [];

    function loadPasswords() {
      FS.get('/system/passwords.json').then(function(data) {
        if (data && data.content) {
          try { passwords = JSON.parse(data.content); } catch(e) { passwords = []; }
        } else { passwords = []; }
        renderPasswords();
      }).catch(function() { passwords = []; renderPasswords(); });
    }
    loadPasswords();

    function savePasswords() {
      FS.write('/system/passwords.json', JSON.stringify(passwords));
    }

    function renderPasswords() {
      var list = document.getElementById('pass-list');
      if (!list) return;
      list.innerHTML = '';
      passwords.forEach(function(pw, idx) {
        var div = document.createElement('div');
        div.className = 'password-item';
        div.innerHTML = '<span class="pass-site">' + pw.site + '</span><span class="pass-login">' + pw.login + '</span><span class="pass-actions"><button class="copy-btn" data-idx="' + idx + '">Копировать</button><button class="del-btn" data-idx="' + idx + '">✕</button></span>';
        var copy = div.querySelector('.copy-btn');
        copy.addEventListener('click', function() {
          var idx2 = parseInt(this.dataset.idx);
          navigator.clipboard.writeText(passwords[idx2].password).then(function() {
            showNotification('Пароль скопирован');
          }).catch(function() {
            var ta = document.createElement('textarea');
            ta.value = passwords[idx2].password;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            ta.remove();
            showNotification('Пароль скопирован');
          });
        });
        var del = div.querySelector('.del-btn');
        del.addEventListener('click', function() {
          var idx2 = parseInt(this.dataset.idx);
          passwords.splice(idx2, 1);
          savePasswords();
          renderPasswords();
        });
        list.appendChild(div);
      });
    }

    document.getElementById('pass-add').addEventListener('click', function() {
      showDialog({
        title: 'Добавить пароль',
        message: 'Введите сайт:',
        input: true,
        placeholder: 'example.com'
      }).then(function(site) {
        if (site && site.trim()) {
          showDialog({
            title: 'Добавить пароль',
            message: 'Введите логин:',
            input: true,
            placeholder: 'user'
          }).then(function(login) {
            if (login && login.trim()) {
              showDialog({
                title: 'Добавить пароль',
                message: 'Введите пароль:',
                input: true,
                placeholder: 'password'
              }).then(function(password) {
                if (password && password.trim()) {
                  passwords.push({ site: site.trim(), login: login.trim(), password: password.trim() });
                  savePasswords();
                  renderPasswords();
                  showNotification('Пароль добавлен');
                }
              });
            }
          });
        }
      });
    });
  }

  // ----- 19.16 Презентация -----
  function openPresentation() {
    var content = '<div style="display:flex;flex-direction:column;height:100%;"><div style="display:flex;gap:6px;padding:6px;background:rgba(255,255,255,0.05);"><button id="slide-add" style="padding:4px 12px;background:var(--accent);color:#fff;border-radius:4px;">+ Слайд</button><button id="slide-del" style="padding:4px 12px;background:rgba(255,0,0,0.2);color:#ff5e5e;border-radius:4px;">Удалить</button><button id="slide-prev" style="padding:4px 12px;background:rgba(255,255,255,0.1);color:var(--text-primary);border-radius:4px;">◀</button><button id="slide-next" style="padding:4px 12px;background:rgba(255,255,255,0.1);color:var(--text-primary);border-radius:4px;">▶</button><span id="slide-counter" style="color:var(--text-primary);padding:4px 8px;">1 / 1</span></div><div id="slide-editor" style="flex:1;display:flex;flex-direction:column;padding:10px;"><textarea id="slide-text" style="flex:1;background:#111;color:#eee;border:none;padding:10px;font-size:16px;resize:none;outline:none;" placeholder="Введите текст слайда..."></textarea></div></div>';
    var winId = createWindow('Презентация', content, { width: 600, height: 400, iconType: 'file' });
    var slides = [{ text: 'Добро пожаловать!' }];
    var currentSlide = 0;

    function renderSlide() {
      var textarea = document.getElementById('slide-text');
      var counter = document.getElementById('slide-counter');
      if (!textarea) return;
      if (slides[currentSlide]) {
        textarea.value = slides[currentSlide].text || '';
        counter.textContent = (currentSlide + 1) + ' / ' + slides.length;
      }
    }

    setTimeout(function() {
      var addBtn = document.getElementById('slide-add');
      var delBtn = document.getElementById('slide-del');
      var prevBtn = document.getElementById('slide-prev');
      var nextBtn = document.getElementById('slide-next');
      var textarea = document.getElementById('slide-text');

      addBtn.addEventListener('click', function() {
        slides.push({ text: '' });
        currentSlide = slides.length - 1;
        renderSlide();
        showNotification('Слайд добавлен');
      });
      delBtn.addEventListener('click', function() {
        if (slides.length > 1) {
          slides.splice(currentSlide, 1);
          if (currentSlide >= slides.length) currentSlide = slides.length - 1;
          renderSlide();
          showNotification('Слайд удалён');
        } else {
          showNotification('Нельзя удалить последний слайд', 'warning');
        }
      });
      prevBtn.addEventListener('click', function() {
        if (currentSlide > 0) {
          slides[currentSlide].text = textarea.value;
          currentSlide--;
          renderSlide();
        }
      });
      nextBtn.addEventListener('click', function() {
        if (currentSlide < slides.length - 1) {
          slides[currentSlide].text = textarea.value;
          currentSlide++;
          renderSlide();
        }
      });
      textarea.addEventListener('input', function() {
        if (slides[currentSlide]) {
          slides[currentSlide].text = this.value;
        }
      });
      renderSlide();
    }, 100);
  }

  // ----- 19.17 Игры -----
  function openSnakeGame() {
    var content = '<div class="game-score">Счёт: <span id="snake-score">0</span></div><div class="game-level">Уровень: <span id="snake-level">1</span> (скорость <span id="snake-speed">150</span>ms)</div><div class="game-canvas-wrapper"><canvas id="snake-canvas" width="400" height="400"></canvas></div>';
    var winId = createWindow('Змейка', content, { width: 440, height: 500, iconType: 'snake' });
    setTimeout(function() {
      var canvas = document.getElementById('snake-canvas');
      var ctx = canvas.getContext('2d');
      var scoreSpan = document.getElementById('snake-score');
      var levelSpan = document.getElementById('snake-level');
      var speedSpan = document.getElementById('snake-speed');
      var box = 20;
      var cols = canvas.width / box;
      var rows = canvas.height / box;
      var snake = [{ x: 5, y: 5 }];
      var direction = 'RIGHT';
      var nextDirection = 'RIGHT';
      var food = { x: 8, y: 8 };
      var score = 0;
      var level = 1;
      var gameOver = false;
      var speed = 150;
      var interval = null;
      var highScore = parseInt(localStorage.getItem('snake-highscore')) || 0;

      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'rgba(255,255,255,0.05)';
        for (var i = 0; i <= cols; i++) {
          ctx.beginPath();
          ctx.moveTo(i * box, 0);
          ctx.lineTo(i * box, canvas.height);
          ctx.stroke();
        }
        for (var j = 0; j <= rows; j++) {
          ctx.beginPath();
          ctx.moveTo(0, j * box);
          ctx.lineTo(canvas.width, j * box);
          ctx.stroke();
        }
        ctx.fillStyle = '#50fa7b';
        snake.forEach(function(seg, idx) {
          ctx.fillRect(seg.x * box, seg.y * box, box - 2, box - 2);
          if (idx === 0) {
            ctx.fillStyle = '#8be9fd';
            ctx.fillRect(seg.x * box, seg.y * box, box - 2, box - 2);
            ctx.fillStyle = '#50fa7b';
          }
        });
        ctx.fillStyle = '#ff5555';
        ctx.beginPath();
        ctx.arc(food.x * box + box / 2, food.y * box + box / 2, box / 2 - 2, 0, 2 * Math.PI);
        ctx.fill();
      }

      function move() {
        if (gameOver) return;
        direction = nextDirection;
        var head = { x: snake[0].x, y: snake[0].y };
        switch (direction) {
          case 'UP': head.y--; break;
          case 'DOWN': head.y++; break;
          case 'LEFT': head.x--; break;
          case 'RIGHT': head.x++; break;
        }
        if (head.x === food.x && head.y === food.y) {
          snake.unshift(head);
          score++;
          scoreSpan.textContent = score;
          if (score > highScore) {
            highScore = score;
            localStorage.setItem('snake-highscore', String(highScore));
          }
          if (score % 5 === 0) {
            level++;
            levelSpan.textContent = level;
            speed = Math.max(60, 150 - (level - 1) * 10);
            speedSpan.textContent = speed;
            clearInterval(interval);
            interval = setInterval(move, speed);
          }
          generateFood();
        } else {
          snake.pop();
          snake.unshift(head);
        }
        if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows ||
            snake.slice(1).some(function(seg) { return seg.x === head.x && seg.y === head.y; })) {
          gameOver = true;
          clearInterval(interval);
          showDialog({
            title: 'Игра окончена',
            message: 'Ваш счёт: ' + score + '. Рекорд: ' + highScore + '. Хотите сыграть ещё раз?',
            input: false
          }).then(function(result) {
            if (result) {
              // Перезапуск
              snake = [{ x: 5, y: 5 }];
              direction = 'RIGHT';
              nextDirection = 'RIGHT';
              score = 0;
              level = 1;
              speed = 150;
              gameOver = false;
              scoreSpan.textContent = '0';
              levelSpan.textContent = '1';
              speedSpan.textContent = '150';
              generateFood();
              if (interval) clearInterval(interval);
              interval = setInterval(move, speed);
              draw();
            }
          });
        }
        draw();
      }

      function generateFood() {
        var pos;
        do {
          pos = { x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) };
        } while (snake.some(function(seg) { return seg.x === pos.x && seg.y === pos.y; }));
        food = pos;
      }

      function keyHandler(e) {
        var key = e.key;
        e.preventDefault();
        if (gameOver) return;
        if (key === 'ArrowUp' && direction !== 'DOWN') nextDirection = 'UP';
        else if (key === 'ArrowDown' && direction !== 'UP') nextDirection = 'DOWN';
        else if (key === 'ArrowLeft' && direction !== 'RIGHT') nextDirection = 'LEFT';
        else if (key === 'ArrowRight' && direction !== 'LEFT') nextDirection = 'RIGHT';
        if (key === ' ' || key === 'p') {
          if (interval) {
            clearInterval(interval);
            interval = null;
          } else {
            interval = setInterval(move, speed);
          }
        }
      }

      window.addEventListener('keydown', keyHandler);
      var closeHandler = function() {
        clearInterval(interval);
        window.removeEventListener('keydown', keyHandler);
      };
      var winObj = kernel.windows.find(function(w) { return w.id === winId; });
      if (winObj) winObj.onClose = closeHandler;

      generateFood();
      interval = setInterval(move, speed);
      draw();
      canvas.focus();
      canvas.setAttribute('tabindex', '0');
    }, 100);
  }

  function openTetris() {
    var content = '<div class="game-score">Счёт: <span id="tetris-score">0</span></div><div class="game-level">Уровень: <span id="tetris-level">1</span></div><div class="game-canvas-wrapper"><canvas id="tetris-canvas" width="300" height="480"></canvas></div>';
    var winId = createWindow('Тетрис', content, { width: 340, height: 560, iconType: 'tetris' });
    setTimeout(function() {
      var canvas = document.getElementById('tetris-canvas');
      var ctx = canvas.getContext('2d');
      var scoreSpan = document.getElementById('tetris-score');
      var levelSpan = document.getElementById('tetris-level');
      var COLS = 10, ROWS = 16, BLOCK = 30;
      var board = Array.from({ length: ROWS }, function() { return Array(COLS).fill(0); });
      var score = 0, level = 1, gameOver = false, interval = null;
      var pieces = [
        [[1,1,1,1]],
        [[1,1],[1,1]],
        [[0,1,0],[1,1,1]],
        [[1,0,0],[1,1,1]],
        [[0,0,1],[1,1,1]],
        [[0,1,1],[1,1,0]],
        [[1,1,0],[0,1,1]]
      ];
      var currentPiece = null, pieceX = 0, pieceY = 0;

      function randomPiece() {
        return pieces[Math.floor(Math.random() * pieces.length)].map(function(row) { return row.slice(); });
      }

      function spawnPiece() {
        var piece = randomPiece();
        currentPiece = piece;
        pieceX = Math.floor((COLS - piece[0].length) / 2);
        pieceY = 0;
        if (collision(piece, pieceX, pieceY)) {
          gameOver = true;
          clearInterval(interval);
          showDialog({
            title: 'Игра окончена',
            message: 'Ваш счёт: ' + score + '. Хотите сыграть ещё раз?',
            input: false
          }).then(function(result) {
            if (result) {
              board = Array.from({ length: ROWS }, function() { return Array(COLS).fill(0); });
              score = 0;
              level = 1;
              gameOver = false;
              scoreSpan.textContent = '0';
              levelSpan.textContent = '1';
              spawnPiece();
              if (interval) clearInterval(interval);
              interval = setInterval(moveDown, 400);
              draw();
            }
          });
        }
      }

      function collision(piece, offX, offY) {
        for (var r = 0; r < piece.length; r++) {
          for (var c = 0; c < piece[0].length; c++) {
            if (piece[r][c]) {
              var x = offX + c;
              var y = offY + r;
              if (x < 0 || x >= COLS || y >= ROWS || y < 0) return true;
              if (y >= 0 && board[y][x]) return true;
            }
          }
        }
        return false;
      }

      function mergePiece() {
        for (var r = 0; r < currentPiece.length; r++) {
          for (var c = 0; c < currentPiece[0].length; c++) {
            if (currentPiece[r][c]) {
              var y = pieceY + r;
              if (y >= 0) board[y][pieceX + c] = 1;
            }
          }
        }
        clearLines();
        spawnPiece();
      }

      function clearLines() {
        var cleared = 0;
        for (var r = ROWS - 1; r >= 0; ) {
          var full = true;
          for (var c = 0; c < COLS; c++) {
            if (!board[r][c]) { full = false; break; }
          }
          if (full) {
            board.splice(r, 1);
            board.unshift(Array(COLS).fill(0));
            cleared++;
          } else {
            r--;
          }
        }
        if (cleared > 0) {
          var points = [0, 100, 300, 500, 800];
          score += points[Math.min(cleared, 4)] * level;
          scoreSpan.textContent = score;
          if (score >= level * 1000) {
            level++;
            levelSpan.textContent = level;
          }
        }
      }

      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var r = 0; r < ROWS; r++) {
          for (var c = 0; c < COLS; c++) {
            if (board[r][c]) {
              ctx.fillStyle = '#3498db';
              ctx.fillRect(c * BLOCK, r * BLOCK, BLOCK - 1, BLOCK - 1);
            }
          }
        }
        if (currentPiece) {
          for (var r = 0; r < currentPiece.length; r++) {
            for (var c = 0; c < currentPiece[0].length; c++) {
              if (currentPiece[r][c]) {
                var x = (pieceX + c) * BLOCK;
                var y = (pieceY + r) * BLOCK;
                ctx.fillStyle = '#e74c3c';
                ctx.fillRect(x, y, BLOCK - 1, BLOCK - 1);
              }
            }
          }
        }
      }

      function moveDown() {
        if (gameOver) return;
        if (!collision(currentPiece, pieceX, pieceY + 1)) {
          pieceY++;
        } else {
          mergePiece();
        }
        draw();
      }

      function moveLeft() {
        if (gameOver || !currentPiece) return;
        if (!collision(currentPiece, pieceX - 1, pieceY)) {
          pieceX--;
          draw();
        }
      }

      function moveRight() {
        if (gameOver || !currentPiece) return;
        if (!collision(currentPiece, pieceX + 1, pieceY)) {
          pieceX++;
          draw();
        }
      }

      function rotatePiece() {
        if (gameOver || !currentPiece) return;
        var rotated = currentPiece[0].map(function(_, i) {
          return currentPiece.map(function(row) { return row[i]; }).reverse();
        });
        if (!collision(rotated, pieceX, pieceY)) {
          currentPiece = rotated;
          draw();
        }
      }

      function keyHandler(e) {
        var key = e.key;
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].indexOf(key) !== -1) e.preventDefault();
        if (key === 'ArrowDown') moveDown();
        else if (key === 'ArrowLeft') moveLeft();
        else if (key === 'ArrowRight') moveRight();
        else if (key === 'ArrowUp') rotatePiece();
        else if (key === ' ') {
          while (!collision(currentPiece, pieceX, pieceY + 1)) { pieceY++; }
          mergePiece();
          draw();
        }
      }

      window.addEventListener('keydown', keyHandler);
      var closeHandler = function() {
        clearInterval(interval);
        window.removeEventListener('keydown', keyHandler);
      };
      var winObj = kernel.windows.find(function(w) { return w.id === winId; });
      if (winObj) winObj.onClose = closeHandler;

      spawnPiece();
      interval = setInterval(moveDown, 400);
      draw();
      canvas.focus();
      canvas.setAttribute('tabindex', '0');
    }, 100);
  }

  function openMinesweeper() {
    var content = '<div style="text-align:center;margin-bottom:8px;color:#ddd;">Флаг: 💣</div><div class="game-canvas-wrapper"><canvas id="minesweeper-canvas" width="360" height="360"></canvas></div>';
    var winId = createWindow('Сапёр', content, { width: 380, height: 420, iconType: 'minesweeper' });
    setTimeout(function() {
      var canvas = document.getElementById('minesweeper-canvas');
      var ctx = canvas.getContext('2d');
      var SIZE = 9, MINE_COUNT = 12, CELL = 40;
      var board = [], revealed = [], flagged = [];
      var gameOver = false, firstClick = true;

      function init() {
        board = Array.from({ length: SIZE }, function() { return Array(SIZE).fill(0); });
        revealed = Array.from({ length: SIZE }, function() { return Array(SIZE).fill(false); });
        flagged = Array.from({ length: SIZE }, function() { return Array(SIZE).fill(false); });
        gameOver = false;
        firstClick = true;
        draw();
      }

      function placeMines(excludeX, excludeY) {
        var placed = 0;
        while (placed < MINE_COUNT) {
          var x = Math.floor(Math.random() * SIZE);
          var y = Math.floor(Math.random() * SIZE);
          if (board[y][x] !== -1 && !(x === excludeX && y === excludeY)) {
            board[y][x] = -1;
            placed++;
          }
        }
        for (var y = 0; y < SIZE; y++) {
          for (var x = 0; x < SIZE; x++) {
            if (board[y][x] === -1) continue;
            var count = 0;
            for (var dy = -1; dy <= 1; dy++) {
              for (var dx = -1; dx <= 1; dx++) {
                var nx = x + dx, ny = y + dy;
                if (nx >= 0 && nx < SIZE && ny >= 0 && ny < SIZE && board[ny][nx] === -1) count++;
              }
            }
            board[y][x] = count;
          }
        }
      }

      function reveal(x, y) {
        if (gameOver) return;
        if (flagged[y][x]) return;
        if (revealed[y][x]) return;
        if (firstClick) {
          placeMines(x, y);
          firstClick = false;
        }
        if (board[y][x] === -1) {
          gameOver = true;
          showDialog({
            title: 'Игра окончена',
            message: 'Вы подорвались! Хотите сыграть ещё раз?',
            input: false
          }).then(function(result) {
            if (result) {
              init();
            }
          });
          draw();
          return;
        }
        flood(x, y);
        draw();
        checkWin();
      }

      function flood(x, y) {
        if (x < 0 || x >= SIZE || y < 0 || y >= SIZE) return;
        if (revealed[y][x]) return;
        if (flagged[y][x]) return;
        if (board[y][x] === -1) return;
        revealed[y][x] = true;
        if (board[y][x] === 0) {
          for (var dy = -1; dy <= 1; dy++) {
            for (var dx = -1; dx <= 1; dx++) {
              flood(x + dx, y + dy);
            }
          }
        }
      }

      function toggleFlag(x, y) {
        if (gameOver) return;
        if (revealed[y][x]) return;
        flagged[y][x] = !flagged[y][x];
        draw();
      }

      function checkWin() {
        var allRevealed = true;
        for (var y = 0; y < SIZE; y++) {
          for (var x = 0; x < SIZE; x++) {
            if (board[y][x] !== -1 && !revealed[y][x]) {
              allRevealed = false;
              break;
            }
          }
        }
        if (allRevealed) {
          gameOver = true;
          showDialog({
            title: 'Победа!',
            message: 'Вы нашли все мины! Хотите сыграть ещё раз?',
            input: false
          }).then(function(result) {
            if (result) {
              init();
            }
          });
        }
      }

      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var y = 0; y < SIZE; y++) {
          for (var x = 0; x < SIZE; x++) {
            var value = board[y][x];
            var isRevealed = revealed[y][x];
            var isFlagged = flagged[y][x];
            ctx.fillStyle = isRevealed ? '#ddd' : '#aaa';
            ctx.fillRect(x * CELL, y * CELL, CELL - 1, CELL - 1);
            if (isRevealed && value !== -1 && value > 0) {
              ctx.fillStyle = '#222';
              ctx.font = 'bold 18px sans-serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText(value, x * CELL + CELL / 2, y * CELL + CELL / 2);
            } else if (isRevealed && value === -1) {
              ctx.fillStyle = 'red';
              ctx.beginPath();
              ctx.arc(x * CELL + CELL / 2, y * CELL + CELL / 2, 12, 0, 2 * Math.PI);
              ctx.fill();
            } else if (isFlagged) {
              ctx.fillStyle = 'red';
              ctx.font = '24px sans-serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText('💣', x * CELL + CELL / 2, y * CELL + CELL / 2);
            }
            ctx.strokeStyle = '#888';
            ctx.strokeRect(x * CELL, y * CELL, CELL, CELL);
          }
        }
      }

      canvas.addEventListener('click', function(e) {
        if (gameOver) return;
        var rect = canvas.getBoundingClientRect();
        var x = Math.floor((e.clientX - rect.left) / (rect.width / SIZE));
        var y = Math.floor((e.clientY - rect.top) / (rect.height / SIZE));
        if (x >= 0 && x < SIZE && y >= 0 && y < SIZE) reveal(x, y);
      });
      canvas.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        if (gameOver) return;
        var rect = canvas.getBoundingClientRect();
        var x = Math.floor((e.clientX - rect.left) / (rect.width / SIZE));
        var y = Math.floor((e.clientY - rect.top) / (rect.height / SIZE));
        if (x >= 0 && x < SIZE && y >= 0 && y < SIZE) toggleFlag(x, y);
      });

      init();
      var winObj = kernel.windows.find(function(w) { return w.id === winId; });
      if (winObj) winObj.onClose = function() {};
      canvas.focus();
      canvas.setAttribute('tabindex', '0');
    }, 100);
  }

  // ============================================================
  //  20. МЕНЮ ПУСК
  // ============================================================
  document.getElementById('start-btn').addEventListener('click', function() {
    var apps = getAllApps();
    var html = '<div id="start-menu" style="display:flex;flex-direction:column;gap:6px;"></div>';
    var winId = createWindow('Пуск', html, { width: 250, height: 400, left: 10, top: 80, iconType: 'start' });
    setTimeout(function() {
      var container = document.getElementById('start-menu');
      if (!container) return;
      apps.forEach(function(app) {
        var btn = document.createElement('button');
        btn.style.cssText = 'background:rgba(255,255,255,0.05);border:none;color:white;padding:8px 12px;border-radius:4px;text-align:left;font-size:14px;transition:background .2s;cursor:pointer;display:flex;align-items:center;gap:10px;';
        btn.innerHTML = '<span style="width:24px;height:24px;">' + iconHTML(app.icon) + '</span> ' + app.label;
        if (document.body.classList.contains('light-theme') || document.body.classList.contains('theme-ocean') || document.body.classList.contains('theme-forest') || document.body.classList.contains('theme-sunset') || document.body.classList.contains('theme-mono')) {
          btn.style.color = '#222';
          btn.style.background = 'rgba(0,0,0,0.05)';
        }
        btn.addEventListener('mouseenter', function() {
          btn.style.background = document.body.classList.contains('light-theme') || document.body.classList.contains('theme-ocean') || document.body.classList.contains('theme-forest') || document.body.classList.contains('theme-sunset') || document.body.classList.contains('theme-mono') ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.15)';
        });
        btn.addEventListener('mouseleave', function() {
          btn.style.background = document.body.classList.contains('light-theme') || document.body.classList.contains('theme-ocean') || document.body.classList.contains('theme-forest') || document.body.classList.contains('theme-sunset') || document.body.classList.contains('theme-mono') ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)';
        });
        btn.addEventListener('click', function() {
          var el = document.querySelector('.window[data-window-id="' + winId + '"]');
          if (el) {
            var id = parseInt(el.dataset.windowId);
            if (id) closeWindow(id);
          }
          app.action();
        });
        container.appendChild(btn);
      });
    }, 100);
  });

  // ============================================================
  //  21. ВОССТАНОВЛЕНИЕ НАСТРОЕК И ЗАПУСК
  // ============================================================
  function restoreSettings() {
    var savedTheme = localStorage.getItem('nextelos-theme') || 'dark';
    if (savedTheme !== 'dark') document.body.classList.add('theme-' + savedTheme);
    var savedWallpaper = localStorage.getItem('nextelos-wallpaper');
    if (savedWallpaper) {
      document.getElementById('desktop').style.backgroundImage = 'url("' + savedWallpaper + '")';
      document.getElementById('desktop').style.backgroundSize = 'cover';
    }
    var showWidgets = localStorage.getItem('nextelos-show-widgets') !== 'false';
    document.getElementById('widgets').style.display = showWidgets ? 'flex' : 'none';
    var animLevel = localStorage.getItem('nextelos-anim-level') || 'medium';
    applyAnimationLevel(animLevel);
    var iconSize = localStorage.getItem('nextelos-icon-size') || '76';
    setTimeout(function() {
      document.querySelectorAll('.desktop-icon').forEach(function(el) {
        el.style.width = iconSize + 'px';
      });
    }, 100);
  }

  loadIconPositions();
  FS.init()
    .then(function() {
      fsReady = true;
      return loadAppRegistry();
    })
    .then(function() {
      restoreSettings();
      renderDesktopIcons();
      showNotification('NextelOS v0.0.5 загружена!');
      setTimeout(function() {
        createWindow('Привет', '👋 Добро пожаловать в <b>NextelOS v0.0.5</b>!<br>Все функции работают: терминал, файлы, редактор с Markdown, калькулятор, настройки с слайд-шоу, процессы, корзина, магазин, Pigmo Pro, поиск, браузер, календарь, будильник, блокнот, пароли, презентации, игры, системный трей, график CPU, анимации, звуки, закрепление окон, горячие клавиши, DND.', { iconType: 'start' });
      }, 500);
    })
    .catch(function(err) {
      console.error(err);
      showNotification('Ошибка загрузки', 'error');
    });

  window.closeWindow = closeWindow;
  window.renderDesktopIcons = renderDesktopIcons;
  window.showNotification = showNotification;
  console.log('NextelOS v0.0.5 загружена!');
})();
