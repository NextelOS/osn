// ============================================================
//  NextelOS v0.0.8 – Полный JavaScript (Часть 1)
//  Ядро, FS, виджеты, трей, погода, терминал, файлы, редактор
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
      default: inner = '<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>';
    }
    return svg + inner + '</svg>';
  }
  function iconHTML(type, cls) { return iconSVG(type, cls); }

  // ============================================================
  //  2. ЯДРО (KERNEL)
  // ============================================================
  var kernel = {
    windows: [],
    activeWindowId: null,
    nextId: 1,
    zIndexCounter: 1000,
    pinnedWindows: []
  };
  var desktop = document.getElementById('desktop');
  var taskbarWindows = document.getElementById('taskbar-windows');
  var clockEl = document.getElementById('taskbar-clock');

  // ============================================================
  //  3. ЗВУКОВЫЕ ЭФФЕКТЫ (исправлены)
  // ============================================================
  var audioCtx = null;
  var audioInitialized = false;

  function initAudio() {
    if (!audioInitialized) {
      try {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        audioInitialized = true;
      } catch(e) {}
    }
  }

  function playSound(type) {
    try {
      if (!audioCtx) initAudio();
      if (!audioCtx || audioCtx.state === 'closed') return;
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
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
    } catch(e) {}
  }

  // Инициализация AudioContext при первом клике пользователя
  document.addEventListener('click', function() {
    if (!audioInitialized) {
      initAudio();
    }
  }, { once: false });

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
    var maxLeft = window.innerWidth - winObj.width;
    var maxTop = window.innerHeight - winObj.height - 60;
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
    if (e.altKey && e.key === 'Tab') {
      e.preventDefault();
      var windows = kernel.windows.filter(function(w) { return !w.isMinimized; });
      if (windows.length === 0) return;
      var currentIdx = windows.findIndex(function(w) { return w.id === kernel.activeWindowId; });
      var nextIdx = (currentIdx + 1) % windows.length;
      bringToFront(windows[nextIdx].id);
      showNotification('Переключено на: ' + windows[nextIdx].title);
    }
    if (e.ctrlKey && e.key === 'w') {
      e.preventDefault();
      if (kernel.activeWindowId) {
        closeWindow(kernel.activeWindowId);
      }
    }
    if (e.ctrlKey && e.shiftKey && e.key === 'D') {
      e.preventDefault();
      doNotDisturb = !doNotDisturb;
      localStorage.setItem('nextelos-dnd', String(doNotDisturb));
      showNotification(doNotDisturb ? 'Режим "Не беспокоить" включён' : 'Режим "Не беспокоить" выключен');
    }
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
        var request = indexedDB.open(self.dbName, 4);
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
            .then(function() { return self.set('/home/user/readme.txt', { type: 'file', content: 'Добро пожаловать в NextelOS v0.0.8!' }); })
            .then(function() { return self.set('/system', { type: 'folder', children: {} }); })
            .then(function() { return self.set('/system/trash', { type: 'folder', children: {} }); })
            .then(function() { return self.set('/system/apps.json', { type: 'file', content: '[]' }); })
            .then(function() { return self.set('/system/events.json', { type: 'file', content: '{}' }); })
            .then(function() { return self.set('/system/alarms.json', { type: 'file', content: '[]' }); })
            .then(function() { return self.set('/system/passwords.json', { type: 'file', content: '[]' }); })
            .then(function() { return self.set('/system/notes.json', { type: 'file', content: '{}' }); })
            .then(function() { return self.set('/system/bookmarks.json', { type: 'file', content: '[]' }); })
            .then(function() { return self.set('/system/todo.json', { type: 'file', content: '[]' }); })
            .then(function() { return self.set('/system/playlists.json', { type: 'file', content: '[]' }); })
            .then(function() { return self.set('/system/folders.json', { type: 'file', content: '{}' }); });
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
  //  11. УВЕДОМЛЕНИЯ
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
  //  13. РЕЕСТР ПРИЛОЖЕНИЙ (встроенные и магазин)
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
    { id: 'presentation', label: 'Презентация', icon: 'file', action: openPresentation },
    { id: 'player', label: 'Плеер', icon: 'player', action: openPlayer },
    { id: 'converter', label: 'Конвертер', icon: 'converter', action: openConverter },
    { id: 'todo', label: 'Планировщик', icon: 'todo', action: openTodo },
    { id: 'codeeditor', label: 'Редактор кода', icon: 'code', action: openCodeEditor },
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
    { id: 'puzzle', label: 'Пятнашки', icon: 'puzzle', action: openPuzzle }
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
  //  14. ИКОНКИ РАБОЧЕГО СТОЛА (с папками)
  // ============================================================
  var iconPositions = {};
  var selectedIcons = [];
  var folderContents = {}; // { folderId: [appId1, appId2, ...] }

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

  function loadFolders() {
    FS.get('/system/folders.json').then(function(data) {
      if (data && data.content) {
        try { folderContents = JSON.parse(data.content); } catch(e) { folderContents = {}; }
      } else {
        folderContents = {};
      }
    }).catch(function() { folderContents = {}; });
  }

  function saveFolders() {
    FS.write('/system/folders.json', JSON.stringify(folderContents));
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
    var folderId = 'folder_' + Date.now();
    var childIds = icons.map(function(icon) { return icon.dataset.appId; });
    // Создаём запись в folderContents
    folderContents[folderId] = childIds;
    saveFolders();
    // Создаём приложение-папку
    var folderApp = {
      id: folderId,
      label: folderName,
      icon: 'folder',
      action: function() {
        openFolder(folderId, folderName);
      },
      builtin: false,
      isFolder: true
    };
    installedApps.push(folderApp);
    saveAppRegistry().then(function() {
      // Удаляем иконки, которые переместили в папку
      icons.forEach(function(icon) {
        icon.remove();
        var id = icon.dataset.appId;
        if (id) delete iconPositions[id];
      });
      renderDesktopIcons();
      showNotification('Папка "' + folderName + '" создана');
    });
  }

  function openFolder(folderId, folderName) {
    var childIds = folderContents[folderId] || [];
    var content = '<div style="padding:8px;"><div style="display:flex;flex-wrap:wrap;gap:12px;">';
    childIds.forEach(function(appId) {
      var app = getAllApps().find(function(a) { return a.id === appId; });
      if (app) {
        content += '<div style="width:80px;text-align:center;cursor:pointer;" onclick="(function(){ var app = getAllApps().find(function(a){return a.id===\'' + appId + '\';}); if(app) app.action(); })()"><span style="font-size:32px;display:block;">' + app.icon + '</span><span style="font-size:11px;color:var(--text-primary);">' + app.label + '</span></div>';
      }
    });
    content += '</div></div>';
    createWindow('Папка: ' + folderName, content, { width: 400, height: 350, iconType: 'folder' });
  }

  function renderDesktopIcons() {
    document.querySelectorAll('.desktop-icon').forEach(function(el) { el.remove(); });
    var apps = getAllApps();
    // Фильтруем: показываем только те, что не в папках
    var inFolder = [];
    for (var key in folderContents) {
      inFolder = inFolder.concat(folderContents[key]);
    }
    apps = apps.filter(function(app) {
      return inFolder.indexOf(app.id) === -1;
    });
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
      icon.className = 'desktop-icon' + (app.isFolder ? ' folder' : '');
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
  //  15. КОНТЕКСТНОЕ МЕНЮ
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
      addMenuItem2('Создать презентацию', function() {
        var name = prompt('Введите имя презентации:', 'Новая презентация');
        if (name && name.trim()) {
          // Создаём файл презентации (заглушка, просто открываем приложение)
          openPresentation();
          hideContextMenu();
        }
      });
      addMenuItem2('Создать таблицу', function() {
        openTabliq();
        hideContextMenu();
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

  document.getElementById('volume-slider').addEventListener('input', function() {
    var val = Math.round(this.value * 100);
    document.getElementById('volume-label').textContent = val + '%';
  });

  document.getElementById('do-not-disturb').addEventListener('change', function() {
    doNotDisturb = this.checked;
    localStorage.setItem('nextelos-dnd', String(doNotDisturb));
    showNotification(doNotDisturb ? 'Режим "Не беспокоить" включён' : 'Режим "Не беспокоить" выключен');
  });
  document.getElementById('do-not-disturb').checked = doNotDisturb;

  // Поиск в панели задач
  document.getElementById('taskbar-search').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      var query = this.value.trim();
      if (query) {
        var searchApp = builtinApps.find(function(a) { return a.id === 'search'; });
        if (searchApp) {
          searchApp.action();
          // Передаём запрос в поиск
          setTimeout(function() {
            var input = document.getElementById('search-input');
            if (input) {
              input.value = query;
              input.dispatchEvent(new Event('input'));
            }
          }, 300);
        }
      }
    }
  });

  // ============================================================
  //  17. ВИДЖЕТЫ
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

  // ============================================================
  //  18. ПОГОДА (без API-ключа, через Open-Meteo)
  // ============================================================
  var weatherData = null;
  var weatherCity = 'Moscow';

  function fetchWeather(city) {
    weatherCity = city || 'Moscow';
    fetch('https://nominatim.openstreetmap.org/search?q=' + encodeURIComponent(weatherCity) + '&format=json&limit=1')
      .then(function(resp) { return resp.json(); })
      .then(function(data) {
        if (data && data.length > 0) {
          var lat = data[0].lat;
          var lon = data[0].lon;
          return fetch('https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lon + '&current_weather=true&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&forecast_days=1');
        } else {
          throw new Error('Город не найден');
        }
      })
      .then(function(resp) { return resp.json(); })
      .then(function(data) {
        if (data && data.current_weather) {
          weatherData = {
            temp: Math.round(data.current_weather.temperature),
            wind: data.current_weather.windspeed,
            wind_dir: data.current_weather.winddirection,
            desc: data.current_weather.weathercode ? getWeatherDesc(data.current_weather.weathercode) : 'Ясно',
            max_temp: data.daily ? Math.round(data.daily.temperature_2m_max[0]) : null,
            min_temp: data.daily ? Math.round(data.daily.temperature_2m_min[0]) : null,
            sunrise: data.daily ? data.daily.sunrise[0] : null,
            sunset: data.daily ? data.daily.sunset[0] : null,
            city: weatherCity
          };
          updateWeatherWidget();
          showNotification('Погода обновлена для ' + weatherCity);
        } else {
          throw new Error('Нет данных о погоде');
        }
      })
      .catch(function(err) {
        console.error('Ошибка погоды:', err);
        showNotification('Не удалось получить погоду: ' + err.message, 'error');
        document.getElementById('widget-weather').style.display = 'none';
      });
  }

  function getWeatherDesc(code) {
    var map = {
      0: 'Ясно',
      1: 'В основном ясно',
      2: 'Переменная облачность',
      3: 'Пасмурно',
      45: 'Туман',
      48: 'Иней',
      51: 'Морось',
      53: 'Морось',
      55: 'Морось',
      61: 'Дождь',
      63: 'Дождь',
      65: 'Дождь',
      71: 'Снег',
      73: 'Снег',
      75: 'Снег',
      80: 'Ливень',
      81: 'Ливень',
      82: 'Ливень',
      95: 'Гроза',
      96: 'Гроза',
      99: 'Гроза'
    };
    return map[code] || 'Неизвестно';
  }

  function updateWeatherWidget() {
    if (weatherData) {
      document.getElementById('widget-temp').textContent = weatherData.temp + '°C';
      document.getElementById('widget-desc').textContent = weatherData.desc;
      document.getElementById('widget-weather').style.display = 'block';
    }
  }

  setTimeout(function() {
    fetchWeather('Moscow');
  }, 1000);

  setInterval(function() {
    if (weatherCity) fetchWeather(weatherCity);
  }, 600000);

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

  document.getElementById('widget-clock').addEventListener('click', function() {
    openCalendar();
  });
  document.getElementById('widget-weather').addEventListener('click', function() {
    openWeatherApp();
  });
  document.getElementById('widget-sysinfo').addEventListener('click', function() {
    openProcessManager();
  });

  // ============================================================
  //  19. ПОГОДА (полноценное приложение)
  // ============================================================
  function openWeatherApp() {
    var content = '<div class="weather-search"><input id="weather-search-input" type="text" placeholder="Введите город..." value="' + weatherCity + '"><button id="weather-search-btn">Найти</button></div><div class="weather-full" id="weather-full"><div class="weather-main"><div class="temp" id="weather-main-temp">--°C</div><div class="desc" id="weather-main-desc">--</div><div style="font-size:14px;color:var(--text-secondary);margin-top:4px;" id="weather-main-city">--</div></div><div class="weather-detail"><div class="label">Макс</div><div class="value" id="weather-max">--°C</div></div><div class="weather-detail"><div class="label">Мин</div><div class="value" id="weather-min">--°C</div></div><div class="weather-detail"><div class="label">Ветер</div><div class="value" id="weather-wind">-- м/с</div></div><div class="weather-detail"><div class="label">Влажность</div><div class="value" id="weather-humidity">--%</div></div><div class="weather-detail"><div class="label">Восход</div><div class="value" id="weather-sunrise">--:--</div></div><div class="weather-detail"><div class="label">Закат</div><div class="value" id="weather-sunset">--:--</div></div><div class="weather-map"><iframe id="weather-map-frame" src="about:blank"></iframe></div></div>';
    var winId = createWindow('Погода', content, { width: 500, height: 550, iconType: 'weather' });
    setTimeout(function() {
      var searchInput = document.getElementById('weather-search-input');
      var searchBtn = document.getElementById('weather-search-btn');

      function updateWeatherUI(data) {
        if (!data) return;
        document.getElementById('weather-main-temp').textContent = data.temp + '°C';
        document.getElementById('weather-main-desc').textContent = data.desc;
        document.getElementById('weather-main-city').textContent = data.city || weatherCity;
        document.getElementById('weather-max').textContent = data.max_temp !== null ? data.max_temp + '°C' : '--°C';
        document.getElementById('weather-min').textContent = data.min_temp !== null ? data.min_temp + '°C' : '--°C';
        document.getElementById('weather-wind').textContent = data.wind !== undefined ? data.wind + ' м/с' : '-- м/с';
        document.getElementById('weather-humidity').textContent = data.humidity !== undefined ? data.humidity + '%' : '--%';
        document.getElementById('weather-sunrise').textContent = data.sunrise ? data.sunrise.split('T')[1] || data.sunrise : '--:--';
        document.getElementById('weather-sunset').textContent = data.sunset ? data.sunset.split('T')[1] || data.sunset : '--:--';
        var mapFrame = document.getElementById('weather-map-frame');
        if (data.lat && data.lon) {
          mapFrame.src = 'https://www.openstreetmap.org/export/embed.html?bbox=' + (data.lon - 0.5) + ',' + (data.lat - 0.5) + ',' + (data.lon + 0.5) + ',' + (data.lat + 0.5) + '&layer=mapnik&marker=' + data.lat + ',' + data.lon;
        }
      }

      function loadWeatherForApp(city) {
        weatherCity = city;
        fetch('https://nominatim.openstreetmap.org/search?q=' + encodeURIComponent(city) + '&format=json&limit=1')
          .then(function(resp) { return resp.json(); })
          .then(function(data) {
            if (data && data.length > 0) {
              var lat = parseFloat(data[0].lat);
              var lon = parseFloat(data[0].lon);
              return fetch('https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lon + '&current_weather=true&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&forecast_days=1');
            } else {
              throw new Error('Город не найден');
            }
          })
          .then(function(resp) { return resp.json(); })
          .then(function(data) {
            if (data && data.current_weather) {
              var wData = {
                temp: Math.round(data.current_weather.temperature),
                wind: data.current_weather.windspeed,
                wind_dir: data.current_weather.winddirection,
                desc: data.current_weather.weathercode ? getWeatherDesc(data.current_weather.weathercode) : 'Ясно',
                max_temp: data.daily ? Math.round(data.daily.temperature_2m_max[0]) : null,
                min_temp: data.daily ? Math.round(data.daily.temperature_2m_min[0]) : null,
                sunrise: data.daily ? data.daily.sunrise[0] : null,
                sunset: data.daily ? data.daily.sunset[0] : null,
                city: city,
                lat: lat,
                lon: lon,
                humidity: data.current_weather.relativehumidity || null
              };
              weatherData = wData;
              updateWeatherUI(wData);
              updateWeatherWidget();
              showNotification('Погода обновлена для ' + city);
            } else {
              throw new Error('Нет данных о погоде');
            }
          })
          .catch(function(err) {
            showNotification('Ошибка: ' + err.message, 'error');
          });
      }

      searchBtn.addEventListener('click', function() {
        var city = searchInput.value.trim();
        if (city) loadWeatherForApp(city);
      });
      searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          var city = searchInput.value.trim();
          if (city) loadWeatherForApp(city);
        }
      });
      if (weatherData) {
        updateWeatherUI(weatherData);
      } else {
        loadWeatherForApp('Moscow');
      }
    }, 100);
  }
  // ============================================================
  //  20. МАГАЗИН ПРИЛОЖЕНИЙ (обновлённый с поиском и категориями)
  // ============================================================
  var storeCategories = ['Все', 'Инструменты', 'Игры', 'Творчество', 'Образование', 'Безопасность'];
  var storeApps = [
    { id: 'notes', name: 'Заметки', icon: '📝', desc: 'Простые заметки.', category: 'Инструменты', install: function() {
      if (installedApps.find(function(a) { return a.id === 'notes'; })) {
        showNotification('Уже установлено', 'warning');
        return;
      }
      installedApps.push({
        id: 'notes',
        label: 'Заметки',
        icon: '📝',
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
    { id: 'calendar_app', name: 'Календарь', icon: '📅', desc: 'Календарь с событиями.', category: 'Инструменты', install: function() {
      if (installedApps.find(function(a) { return a.id === 'calendar_app'; })) {
        showNotification('Уже установлено', 'warning');
        return;
      }
      installedApps.push({
        id: 'calendar_app',
        label: 'Календарь',
        icon: '📅',
        action: function() {
          openCalendar();
        }
      });
      saveAppRegistry().then(function() {
        renderDesktopIcons();
        showNotification('Календарь установлен!');
      });
    } },
    { id: 'weather_app', name: 'Погода', icon: '🌤️', desc: 'Полноценная погода без ключа.', category: 'Инструменты', install: function() {
      if (installedApps.find(function(a) { return a.id === 'weather_app'; })) {
        showNotification('Уже установлено', 'warning');
        return;
      }
      installedApps.push({
        id: 'weather_app',
        label: 'Погода',
        icon: '🌤️',
        action: function() {
          openWeatherApp();
        }
      });
      saveAppRegistry().then(function() {
        renderDesktopIcons();
        showNotification('Погода установлена!');
      });
    } },
    { id: 'player', name: 'Музыкальный плеер', icon: '🎵', desc: 'Загружайте и слушайте MP3.', category: 'Инструменты', install: function() {
      if (installedApps.find(function(a) { return a.id === 'player'; })) {
        showNotification('Уже установлено', 'warning');
        return;
      }
      installedApps.push({
        id: 'player',
        label: 'Плеер',
        icon: '🎵',
        action: openPlayer
      });
      saveAppRegistry().then(function() {
        renderDesktopIcons();
        showNotification('Плеер установлен!');
      });
    } },
    { id: 'converter', name: 'Конвертер величин', icon: '📐', desc: 'Перевод единиц: длина, вес, объём, температура, скорость, валюта.', category: 'Инструменты', install: function() {
      if (installedApps.find(function(a) { return a.id === 'converter'; })) {
        showNotification('Уже установлено', 'warning');
        return;
      }
      installedApps.push({
        id: 'converter',
        label: 'Конвертер',
        icon: '📐',
        action: openConverter
      });
      saveAppRegistry().then(function() {
        renderDesktopIcons();
        showNotification('Конвертер установлен!');
      });
    } },
    { id: 'todo', name: 'Планировщик задач', icon: '✅', desc: 'Список задач с датами и приоритетами.', category: 'Инструменты', install: function() {
      if (installedApps.find(function(a) { return a.id === 'todo'; })) {
        showNotification('Уже установлено', 'warning');
        return;
      }
      installedApps.push({
        id: 'todo',
        label: 'Планировщик',
        icon: '✅',
        action: openTodo
      });
      saveAppRegistry().then(function() {
        renderDesktopIcons();
        showNotification('Планировщик установлен!');
      });
    } },
    { id: 'codeeditor', name: 'Редактор кода', icon: '💻', desc: 'Подсветка синтаксиса, нумерация строк, поиск/замена.', category: 'Инструменты', install: function() {
      if (installedApps.find(function(a) { return a.id === 'codeeditor'; })) {
        showNotification('Уже установлено', 'warning');
        return;
      }
      installedApps.push({
        id: 'codeeditor',
        label: 'Редактор кода',
        icon: '💻',
        action: openCodeEditor
      });
      saveAppRegistry().then(function() {
        renderDesktopIcons();
        showNotification('Редактор кода установлен!');
      });
    } },
    { id: 'tabliq', name: 'Tabliq (таблицы)', icon: '📊', desc: 'Создание таблиц как в Excel.', category: 'Инструменты', install: function() {
      if (installedApps.find(function(a) { return a.id === 'tabliq'; })) {
        showNotification('Уже установлено', 'warning');
        return;
      }
      installedApps.push({
        id: 'tabliq',
        label: 'Tabliq',
        icon: '📊',
        action: openTabliq
      });
      saveAppRegistry().then(function() {
        renderDesktopIcons();
        showNotification('Tabliq установлен!');
      });
    } },
    { id: 'virucide', name: 'Virucide (антивирус)', icon: '🛡️', desc: 'Сканирование файлов на угрозы.', category: 'Безопасность', install: function() {
      if (installedApps.find(function(a) { return a.id === 'virucide'; })) {
        showNotification('Уже установлено', 'warning');
        return;
      }
      installedApps.push({
        id: 'virucide',
        label: 'Virucide',
        icon: '🛡️',
        action: openVirucide
      });
      saveAppRegistry().then(function() {
        renderDesktopIcons();
        showNotification('Virucide установлен!');
      });
    } },
    { id: 'art', name: 'AI Art Generator', icon: '🎨', desc: 'Генерация изображений по описанию (Pollinations.ai).', category: 'Творчество', install: function() {
      if (installedApps.find(function(a) { return a.id === 'art'; })) {
        showNotification('Уже установлено', 'warning');
        return;
      }
      installedApps.push({
        id: 'art',
        label: 'AI Art',
        icon: '🎨',
        action: openArtGenerator
      });
      saveAppRegistry().then(function() {
        renderDesktopIcons();
        showNotification('AI Art установлен!');
      });
    } },
    { id: 'translate', name: 'Переводчик', icon: '🌐', desc: 'Перевод текста между языками.', category: 'Образование', install: function() {
      if (installedApps.find(function(a) { return a.id === 'translate'; })) {
        showNotification('Уже установлено', 'warning');
        return;
      }
      installedApps.push({
        id: 'translate',
        label: 'Переводчик',
        icon: '🌐',
        action: openTranslator
      });
      saveAppRegistry().then(function() {
        renderDesktopIcons();
        showNotification('Переводчик установлен!');
      });
    } },
    { id: 'wiki', name: 'Википедия', icon: '📚', desc: 'Офлайн-ридер статей Википедии.', category: 'Образование', install: function() {
      if (installedApps.find(function(a) { return a.id === 'wiki'; })) {
        showNotification('Уже установлено', 'warning');
        return;
      }
      installedApps.push({
        id: 'wiki',
        label: 'Википедия',
        icon: '📚',
        action: openWikipedia
      });
      saveAppRegistry().then(function() {
        renderDesktopIcons();
        showNotification('Википедия установлена!');
      });
    } },
    { id: 'currency', name: 'Курсы валют', icon: '💰', desc: 'Реальные курсы с графиком.', category: 'Инструменты', install: function() {
      if (installedApps.find(function(a) { return a.id === 'currency'; })) {
        showNotification('Уже установлено', 'warning');
        return;
      }
      installedApps.push({
        id: 'currency',
        label: 'Курсы валют',
        icon: '💰',
        action: openCurrency
      });
      saveAppRegistry().then(function() {
        renderDesktopIcons();
        showNotification('Курсы валют установлены!');
      });
    } },
    { id: 'snake_game', name: 'Змейка', icon: '🐍', desc: 'Классическая игра со счётом и уровнями.', category: 'Игры', install: function() {
      if (installedApps.find(function(a) { return a.id === 'snake_game'; })) {
        showNotification('Уже установлено', 'warning');
        return;
      }
      installedApps.push({
        id: 'snake_game',
        label: 'Змейка',
        icon: '🐍',
        action: openSnakeGame
      });
      saveAppRegistry().then(function() {
        renderDesktopIcons();
        showNotification('Змейка установлена!');
      });
    } },
    { id: 'tetris_game', name: 'Тетрис', icon: '🧩', desc: 'Падающие фигуры.', category: 'Игры', install: function() {
      if (installedApps.find(function(a) { return a.id === 'tetris_game'; })) {
        showNotification('Уже установлено', 'warning');
        return;
      }
      installedApps.push({
        id: 'tetris_game',
        label: 'Тетрис',
        icon: '🧩',
        action: openTetris
      });
      saveAppRegistry().then(function() {
        renderDesktopIcons();
        showNotification('Тетрис установлен!');
      });
    } },
    { id: 'minesweeper_game', name: 'Сапёр', icon: '💣', desc: 'Найди все мины.', category: 'Игры', install: function() {
      if (installedApps.find(function(a) { return a.id === 'minesweeper_game'; })) {
        showNotification('Уже установлено', 'warning');
        return;
      }
      installedApps.push({
        id: 'minesweeper_game',
        label: 'Сапёр',
        icon: '💣',
        action: openMinesweeper
      });
      saveAppRegistry().then(function() {
        renderDesktopIcons();
        showNotification('Сапёр установлен!');
      });
    } },
    { id: 'chess_game', name: 'Шахматы', icon: '♟️', desc: 'Классические шахматы с ИИ.', category: 'Игры', install: function() {
      if (installedApps.find(function(a) { return a.id === 'chess_game'; })) {
        showNotification('Уже установлено', 'warning');
        return;
      }
      installedApps.push({
        id: 'chess_game',
        label: 'Шахматы',
        icon: '♟️',
        action: openChess
      });
      saveAppRegistry().then(function() {
        renderDesktopIcons();
        showNotification('Шахматы установлены!');
      });
    } },
    { id: 'tictac_game', name: 'Крестики-нолики', icon: '⭕❌', desc: 'Игра против ИИ с тремя уровнями.', category: 'Игры', install: function() {
      if (installedApps.find(function(a) { return a.id === 'tictac_game'; })) {
        showNotification('Уже установлено', 'warning');
        return;
      }
      installedApps.push({
        id: 'tictac_game',
        label: 'Крестики-нолики',
        icon: '⭕❌',
        action: openTicTacToe
      });
      saveAppRegistry().then(function() {
        renderDesktopIcons();
        showNotification('Крестики-нолики установлены!');
      });
    } },
    { id: 'g2048_game', name: '2048', icon: '🔢', desc: 'Собери 2048!', category: 'Игры', install: function() {
      if (installedApps.find(function(a) { return a.id === 'g2048_game'; })) {
        showNotification('Уже установлено', 'warning');
        return;
      }
      installedApps.push({
        id: 'g2048_game',
        label: '2048',
        icon: '🔢',
        action: open2048
      });
      saveAppRegistry().then(function() {
        renderDesktopIcons();
        showNotification('2048 установлена!');
      });
    } },
    { id: 'puzzle_game', name: 'Пятнашки', icon: '🧩', desc: 'Собери картинку за минимальное число ходов.', category: 'Игры', install: function() {
      if (installedApps.find(function(a) { return a.id === 'puzzle_game'; })) {
        showNotification('Уже установлено', 'warning');
        return;
      }
      installedApps.push({
        id: 'puzzle_game',
        label: 'Пятнашки',
        icon: '🧩',
        action: openPuzzle
      });
      saveAppRegistry().then(function() {
        renderDesktopIcons();
        showNotification('Пятнашки установлены!');
      });
    } },
    { id: 'trader_game', name: 'Торговая платформа', icon: '📈', desc: 'Симулятор владельца галактического маркетплейса.', category: 'Игры', install: function() {
      if (installedApps.find(function(a) { return a.id === 'trader_game'; })) {
        showNotification('Уже установлено', 'warning');
        return;
      }
      installedApps.push({
        id: 'trader_game',
        label: 'Торговая платформа',
        icon: '📈',
        action: openTrader
      });
      saveAppRegistry().then(function() {
        renderDesktopIcons();
        showNotification('Торговая платформа установлена!');
      });
    } }
  ];

  function openStore() {
    var html = '<div class="store-header"><input type="text" id="store-search" placeholder="Поиск приложений..."><select id="store-category"><option value="all">Все категории</option>';
    storeCategories.forEach(function(cat) {
      html += '<option value="' + cat + '">' + cat + '</option>';
    });
    html += '</select></div><div class="store-grid" id="store-grid"></div>';
    var winId = createWindow('Магазин приложений', html, { width: 700, height: 550, iconType: 'folder' });

    function renderStore() {
      var grid = document.getElementById('store-grid');
      if (!grid) return;
      var search = document.getElementById('store-search').value.toLowerCase();
      var category = document.getElementById('store-category').value;
      var filtered = storeApps.filter(function(app) {
        var matchSearch = app.name.toLowerCase().includes(search) || app.desc.toLowerCase().includes(search);
        var matchCategory = category === 'all' || app.category === category;
        return matchSearch && matchCategory;
      });
      grid.innerHTML = '';
      filtered.forEach(function(app) {
        var isInstalled = installedApps.some(function(a) { return a.id === app.id; });
        var div = document.createElement('div');
        div.className = 'store-item';
        div.innerHTML = '<span class="app-icon">' + app.icon + '</span><div class="app-name">' + app.name + '</div><div class="app-desc">' + app.desc + '</div><div class="app-actions">' +
          (isInstalled ?
            '<span class="installed-badge">✅ Установлено</span><button class="uninstall-btn" data-id="' + app.id + '">Удалить</button>' :
            '<button class="install-btn" data-id="' + app.id + '">Установить</button>') +
          '</div>';
        grid.appendChild(div);
      });
      // Обработчики
      grid.querySelectorAll('.install-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var id = btn.dataset.id;
          var catalogApp = storeApps.find(function(a) { return a.id === id; });
          if (catalogApp) {
            catalogApp.install();
            setTimeout(renderStore, 300);
          }
        });
      });
      grid.querySelectorAll('.uninstall-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var id = btn.dataset.id;
          if (confirm('Удалить приложение?')) {
            installedApps = installedApps.filter(function(a) { return a.id !== id; });
            saveAppRegistry().then(function() {
              renderDesktopIcons();
              showNotification('Приложение удалено');
              renderStore();
            });
          }
        });
      });
    }

    setTimeout(function() {
      renderStore();
      document.getElementById('store-search').addEventListener('input', renderStore);
      document.getElementById('store-category').addEventListener('change', renderStore);
    }, 100);
  }

  // ============================================================
  //  21. НАСТРОЙКИ (обновлены, обои и слайд-шоу работают)
  // ============================================================
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
                  '<div class="settings-section"><h3>О системе</h3><p style="color:#888;">NextelOS v0.0.8<br>Ядро: JavaScript<br>Файловая система: IndexedDB</p></div>';
    var winId = createWindow('Настройки', content, { width: 500, height: 600, iconType: 'gear' });
    setTimeout(function() {
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
            var idx = 0;
            slideshowTimer = setInterval(function() {
              if (allWallpapers.length === 0) return;
              var wp = allWallpapers[idx % allWallpapers.length];
              idx++;
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
      var widgetsCheck = document.getElementById('show-widgets');
      if (widgetsCheck) {
        widgetsCheck.addEventListener('change', function() {
          var show = widgetsCheck.checked;
          localStorage.setItem('nextelos-show-widgets', show ? 'true' : 'false');
          document.getElementById('widgets').style.display = show ? 'flex' : 'none';
        });
      }
      var sizeSlider = document.getElementById('icon-size');
      var sizeLabel = document.getElementById('icon-size-label');
      if (sizeSlider) {
        sizeSlider.value = iconSize;
        sizeLabel.textContent = iconSize + 'px';
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
    }, 100);
  }

  function applyAnimationLevel(level) {
    document.body.classList.remove('anim-off', 'anim-medium', 'anim-max');
    if (level === 'off') document.body.classList.add('anim-off');
    else if (level === 'max') document.body.classList.add('anim-max');
    else document.body.classList.add('anim-medium');
    localStorage.setItem('nextelos-anim-level', level);
  }

  // ============================================================
  //  22. МЕНЕДЖЕР ПРОЦЕССОВ
  // ============================================================
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

  // ============================================================
  //  23. КОРЗИНА
  // ============================================================
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

  // ============================================================
  //  24. PIGMO PRO (улучшенный: слои, экспорт SVG, текст, фигуры)
  // ============================================================
  function openPigmoPro() {
    var content = '<div class="pigmo-toolbar"><button id="pigmo-clear">Очистить</button><button id="pigmo-save">💾 Сохранить</button><input type="color" id="pigmo-color" value="#000000"><input type="range" id="pigmo-size" min="1" max="20" value="4"><label style="color:#aaa;font-size:12px;">Толщина: <span id="pigmo-size-label">4</span></label><button id="pigmo-eraser">Ластик</button><button id="pigmo-undo">↩ Отмена</button><button id="pigmo-redo">↪ Повтор</button><button id="pigmo-fill">Заливка</button><select id="pigmo-shape"><option value="free">Рисование</option><option value="rect">Прямоугольник</option><option value="circle">Круг</option><option value="line">Линия</option></select><button id="pigmo-text">Текст</button><button id="pigmo-export-svg">📤 SVG</button></div><div class="pigmo-layers" id="pigmo-layers"><div class="layer active" data-layer="0">Слой 1 <span class="layer-del">✕</span></div></div><canvas id="pigmo-canvas" width="600" height="400"></canvas>';
    var winId = createWindow('Pigmo Pro', content, { width: 660, height: 580, iconType: 'paint' });
    setTimeout(function() {
      var canvas = document.getElementById('pigmo-canvas');
      var ctx = canvas.getContext('2d');
      var colorPicker = document.getElementById('pigmo-color');
      var sizeSlider = document.getElementById('pigmo-size');
      var sizeLabel = document.getElementById('pigmo-size-label');
      var eraserBtn = document.getElementById('pigmo-eraser');
      var fillBtn = document.getElementById('pigmo-fill');
      var shapeSelect = document.getElementById('pigmo-shape');
      var undoBtn = document.getElementById('pigmo-undo');
      var redoBtn = document.getElementById('pigmo-redo');
      var textBtn = document.getElementById('pigmo-text');
      var exportSvgBtn = document.getElementById('pigmo-export-svg');
      var isDrawing = false;
      var lastX, lastY;
      var eraseMode = false;
      var fillMode = false;
      var startX, startY;
      var history = [];
      var historyIndex = -1;
      var maxHistory = 30;
      var layers = [{ id: 0, visible: true }];
      var currentLayer = 0;
      var isTextMode = false;

      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      saveHistory();

      function saveHistory() {
        history = history.slice(0, historyIndex + 1);
        var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        history.push(imgData);
        if (history.length > maxHistory) history.shift();
        historyIndex = history.length - 1;
        updateUndoButtons();
      }

      function undo() {
        if (historyIndex > 0) {
          historyIndex--;
          ctx.putImageData(history[historyIndex], 0, 0);
          updateUndoButtons();
        }
      }

      function redo() {
        if (historyIndex < history.length - 1) {
          historyIndex++;
          ctx.putImageData(history[historyIndex], 0, 0);
          updateUndoButtons();
        }
      }

      function updateUndoButtons() {
        undoBtn.style.opacity = historyIndex > 0 ? '1' : '0.4';
        redoBtn.style.opacity = historyIndex < history.length - 1 ? '1' : '0.4';
      }

      function renderLayers() {
        var container = document.getElementById('pigmo-layers');
        if (!container) return;
        container.innerHTML = '';
        layers.forEach(function(layer, idx) {
          var div = document.createElement('div');
          div.className = 'layer' + (idx === currentLayer ? ' active' : '');
          div.dataset.layer = idx;
          div.innerHTML = 'Слой ' + (idx + 1) + ' <span class="layer-del" data-layer="' + idx + '">✕</span>';
          div.addEventListener('click', function(e) {
            if (e.target.classList.contains('layer-del')) return;
            currentLayer = parseInt(this.dataset.layer);
            renderLayers();
          });
          var del = div.querySelector('.layer-del');
          del.addEventListener('click', function(e) {
            e.stopPropagation();
            if (layers.length > 1) {
              layers.splice(idx, 1);
              if (currentLayer >= layers.length) currentLayer = layers.length - 1;
              renderLayers();
              showNotification('Слой удалён');
            } else {
              showNotification('Нельзя удалить последний слой', 'warning');
            }
          });
          container.appendChild(div);
        });
        var addBtn = document.createElement('div');
        addBtn.className = 'layer';
        addBtn.textContent = '+ Слой';
        addBtn.style.cursor = 'pointer';
        addBtn.addEventListener('click', function() {
          layers.push({ id: Date.now(), visible: true });
          currentLayer = layers.length - 1;
          renderLayers();
          showNotification('Слой добавлен');
        });
        container.appendChild(addBtn);
      }
      renderLayers();

      eraserBtn.addEventListener('click', function() {
        eraseMode = !eraseMode;
        eraserBtn.style.background = eraseMode ? 'rgba(255,0,0,0.3)' : '';
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
        if (fillMode) {
          ctx.fillStyle = colorPicker.value;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          saveHistory();
          fillMode = false;
          fillBtn.style.background = '';
        }
      });

      textBtn.addEventListener('click', function() {
        isTextMode = !isTextMode;
        textBtn.style.background = isTextMode ? 'rgba(0,150,255,0.3)' : '';
        if (isTextMode) {
          showDialog({
            title: 'Добавить текст',
            message: 'Введите текст:',
            input: true,
            placeholder: 'Ваш текст',
            defaultValue: 'Текст'
          }).then(function(text) {
            if (text && text.trim()) {
              var size = sizeSlider.value * 2 || 20;
              ctx.font = size + 'px sans-serif';
              ctx.fillStyle = colorPicker.value;
              ctx.textBaseline = 'top';
              ctx.fillText(text.trim(), 50, 50);
              saveHistory();
            }
            isTextMode = false;
            textBtn.style.background = '';
          });
        }
      });

      exportSvgBtn.addEventListener('click', function() {
        var dataUrl = canvas.toDataURL('image/png');
        var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + canvas.width + '" height="' + canvas.height + '">';
        svg += '<image href="' + dataUrl + '" width="' + canvas.width + '" height="' + canvas.height + '"/>';
        svg += '</svg>';
        var blob = new Blob([svg], { type: 'image/svg+xml' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'рисунок.svg';
        a.click();
        URL.revokeObjectURL(url);
        showNotification('SVG экспортирован');
      });

      undoBtn.addEventListener('click', undo);
      redoBtn.addEventListener('click', redo);

      sizeSlider.addEventListener('input', function() {
        sizeLabel.textContent = sizeSlider.value;
      });

      function startDrawing(e) {
        isDrawing = true;
        var rect = canvas.getBoundingClientRect();
        var scaleX = canvas.width / rect.width;
        var scaleY = canvas.height / rect.height;
        var x = (e.clientX - rect.left) * scaleX;
        var y = (e.clientY - rect.top) * scaleY;
        lastX = x;
        lastY = y;
        if (shapeSelect.value === 'free') {
          ctx.beginPath();
          ctx.arc(x, y, eraseMode ? sizeSlider.value * 1.5 : sizeSlider.value, 0, 2 * Math.PI);
          ctx.fillStyle = eraseMode ? '#fff' : colorPicker.value;
          ctx.fill();
        } else {
          startX = x;
          startY = y;
        }
      }

      function draw(e) {
        if (!isDrawing) return;
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
          var tempCanvas = document.createElement('canvas');
          tempCanvas.width = canvas.width;
          tempCanvas.height = canvas.height;
          var tempCtx = tempCanvas.getContext('2d');
          tempCtx.drawImage(canvas, 0, 0);
          tempCtx.strokeStyle = eraseMode ? '#fff' : colorPicker.value;
          tempCtx.lineWidth = sizeSlider.value;
          tempCtx.beginPath();
          if (shape === 'rect') {
            tempCtx.strokeRect(startX, startY, x - startX, y - startY);
          } else if (shape === 'circle') {
            var radius = Math.sqrt((x - startX) * (x - startX) + (y - startY) * (y - startY));
            tempCtx.arc(startX, startY, radius, 0, 2 * Math.PI);
            tempCtx.stroke();
          } else if (shape === 'line') {
            tempCtx.moveTo(startX, startY);
            tempCtx.lineTo(x, y);
            tempCtx.stroke();
          }
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(tempCanvas, 0, 0);
        }
      }

      function stopDrawing(e) {
        if (isDrawing && shapeSelect.value !== 'free') {
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
            ctx.strokeRect(startX, startY, x - startX, y - startY);
          } else if (shape === 'circle') {
            var radius = Math.sqrt((x - startX) * (x - startX) + (y - startY) * (y - startY));
            ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
            ctx.stroke();
          } else if (shape === 'line') {
            ctx.moveTo(startX, startY);
            ctx.lineTo(x, y);
            ctx.stroke();
          }
          saveHistory();
          isDrawing = false;
        } else if (isDrawing) {
          saveHistory();
          isDrawing = false;
        }
      }

      canvas.addEventListener('mousedown', startDrawing);
      canvas.addEventListener('mousemove', draw);
      canvas.addEventListener('mouseup', stopDrawing);
      canvas.addEventListener('mouseleave', stopDrawing);

      document.getElementById('pigmo-clear').addEventListener('click', function() {
        if (confirm('Очистить холст?')) {
          ctx.fillStyle = '#fff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          saveHistory();
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

      // Обрезка (кнопка добавлена в DOM)
      var cropMode = false;
      var cropStartX, cropStartY, cropEndX, cropEndY;
      var cropBtn = document.createElement('button');
      cropBtn.textContent = 'Обрезать';
      cropBtn.addEventListener('click', function() {
        cropMode = !cropMode;
        cropBtn.style.background = cropMode ? 'rgba(255,0,0,0.3)' : '';
        if (cropMode) {
          showNotification('Выделите область для обрезки', 'info');
        }
      });
      document.querySelector('.pigmo-toolbar').appendChild(cropBtn);

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
        cropBtn.style.background = '';
        showNotification('Обрезка выполнена');
        saveHistory();
      });

      // Изменение размера
      var resizeBtn = document.createElement('button');
      resizeBtn.textContent = 'Изменить размер';
      resizeBtn.addEventListener('click', function() {
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
                saveHistory();
              }
            });
          }
        });
      });
      document.querySelector('.pigmo-toolbar').appendChild(resizeBtn);

      // Поворот
      var rotateBtn = document.createElement('button');
      rotateBtn.textContent = 'Повернуть 90°';
      rotateBtn.addEventListener('click', function() {
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
        saveHistory();
      });
      document.querySelector('.pigmo-toolbar').appendChild(rotateBtn);

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
  // ============================================================
  //  25. ГЛОБАЛЬНЫЙ ПОИСК (с поиском по файлам и приложениям)
  // ============================================================
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

  // ============================================================
  //  26. БРАУЗЕР (с закладками)
  // ============================================================
  function openBrowser() {
    var content = '<div class="browser-toolbar"><button id="browser-back">◀</button><button id="browser-forward">▶</button><button id="browser-refresh">🔄</button><input id="browser-url" type="text" placeholder="Введите URL или поисковый запрос..." value=""><button id="browser-go">Перейти</button><button id="browser-bookmark">⭐</button></div><div class="browser-bookmarks" id="browser-bookmarks"></div><iframe class="browser-frame" id="browser-frame" src="about:blank"></iframe>';
    var winId = createWindow('Браузер', content, { width: 800, height: 500, iconType: 'browser' });
    setTimeout(function() {
      var urlInput = document.getElementById('browser-url');
      var frame = document.getElementById('browser-frame');
      var backBtn = document.getElementById('browser-back');
      var forwardBtn = document.getElementById('browser-forward');
      var refreshBtn = document.getElementById('browser-refresh');
      var goBtn = document.getElementById('browser-go');
      var bookmarkBtn = document.getElementById('browser-bookmark');
      var bookmarksContainer = document.getElementById('browser-bookmarks');
      var history = [];
      var historyIndex = -1;
      var browserBookmarks = [];

      function loadBrowserBookmarks() {
        FS.get('/system/bookmarks.json').then(function(data) {
          if (data && data.content) {
            try { browserBookmarks = JSON.parse(data.content); } catch(e) { browserBookmarks = []; }
          } else {
            browserBookmarks = [];
          }
          renderBookmarks();
        }).catch(function() { browserBookmarks = []; renderBookmarks(); });
      }

      function saveBrowserBookmarks() {
        FS.write('/system/bookmarks.json', JSON.stringify(browserBookmarks));
      }

      function renderBookmarks() {
        bookmarksContainer.innerHTML = '';
        browserBookmarks.forEach(function(bm) {
          var span = document.createElement('span');
          span.className = 'bookmark';
          span.textContent = bm;
          span.addEventListener('click', function() {
            navigate(bm);
          });
          bookmarksContainer.appendChild(span);
        });
      }

      function isURL(str) {
        return str.includes('.') && !str.includes(' ') || str.startsWith('http://') || str.startsWith('https://');
      }

      function navigate(url) {
        if (!url) return;
        if (!isURL(url)) {
          window.open('https://yandex.ru/search/?text=' + encodeURIComponent(url), '_blank');
          showNotification('Поиск открыт в новой вкладке Яндекс', 'info');
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
      bookmarkBtn.addEventListener('click', function() {
        var url = urlInput.value;
        if (url && url !== 'https://example.com' && url !== 'about:blank') {
          if (browserBookmarks.indexOf(url) === -1) {
            browserBookmarks.push(url);
            saveBrowserBookmarks();
            renderBookmarks();
            showNotification('Закладка добавлена: ' + url);
          } else {
            showNotification('Закладка уже существует', 'warning');
          }
        } else {
          showNotification('Невозможно добавить закладку', 'warning');
        }
      });
      loadBrowserBookmarks();
      navigate('example.com');
    }, 100);
  }

  // ============================================================
  //  27. КАЛЕНДАРЬ (с импортом/экспортом ICS)
  // ============================================================
  function openCalendar() {
    var content = '<div class="calendar-nav"><button id="cal-prev">◀</button><span id="cal-month-year">Январь 2026</span><button id="cal-next">▶</button><button id="cal-export">📤 Экспорт ICS</button><button id="cal-import">📥 Импорт ICS</button></div><div class="calendar-grid" id="calendar-grid"></div><div class="calendar-events-list" id="calendar-events"></div>';
    var winId = createWindow('Календарь', content, { width: 450, height: 500, iconType: 'calendar-app' });
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

    function exportICS() {
      var ics = 'BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//NextelOS//Calendar//RU\n';
      for (var date in events) {
        if (events[date]) {
          for (var i = 0; i < events[date].length; i++) {
            var ev = events[date][i];
            var dt = date.replace(/-/g, '');
            var time = ev.time ? ev.time.replace(/:/g, '') : '000000';
            ics += 'BEGIN:VEVENT\nDTSTART:' + dt + 'T' + time + '\nSUMMARY:' + ev.text + '\nEND:VEVENT\n';
          }
        }
      }
      ics += 'END:VCALENDAR';
      var blob = new Blob([ics], { type: 'text/calendar' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'calendar.ics';
      a.click();
      URL.revokeObjectURL(url);
      showNotification('ICS экспортирован');
    }

    function importICS(file) {
      var reader = new FileReader();
      reader.onload = function(e) {
        var text = e.target.result;
        var lines = text.split('\n');
        var eventData = {};
        var currentEvent = {};
        for (var i = 0; i < lines.length; i++) {
          var line = lines[i].trim();
          if (line === 'BEGIN:VEVENT') {
            currentEvent = {};
          } else if (line === 'END:VEVENT') {
            if (currentEvent.DTSTART && currentEvent.SUMMARY) {
              var dt = currentEvent.DTSTART.replace(/T.*/, '');
              var dateKey = dt.slice(0,4) + '-' + dt.slice(4,6) + '-' + dt.slice(6,8);
              if (!eventData[dateKey]) eventData[dateKey] = [];
              eventData[dateKey].push({ time: '12:00', text: currentEvent.SUMMARY });
            }
          } else if (line.startsWith('DTSTART:')) {
            currentEvent.DTSTART = line.substring(8);
          } else if (line.startsWith('SUMMARY:')) {
            currentEvent.SUMMARY = line.substring(8);
          }
        }
        for (var dateKey in eventData) {
          if (!events[dateKey]) events[dateKey] = [];
          events[dateKey] = events[dateKey].concat(eventData[dateKey]);
        }
        saveEvents();
        renderCalendar(currentYear, currentMonth);
        showNotification('ICS импортирован');
      };
      reader.readAsText(file);
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
    document.getElementById('cal-export').addEventListener('click', exportICS);
    document.getElementById('cal-import').addEventListener('click', function() {
      var input = document.createElement('input');
      input.type = 'file';
      input.accept = '.ics';
      input.onchange = function(e) {
        var file = e.target.files[0];
        if (file) importICS(file);
      };
      input.click();
    });
  }

  // ============================================================
  //  28. БУДИЛЬНИК
  // ============================================================
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

  // ============================================================
  //  29. БЛОКНОТ С ВКЛАДКАМИ
  // ============================================================
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

  // ============================================================
  //  30. МЕНЕДЖЕР ПАРОЛЕЙ
  // ============================================================
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

  // ============================================================
  //  31. ПРЕЗЕНТАЦИЯ
  // ============================================================
  function openPresentation() {
    var content = '<div class="slide-container"><div class="slide-content" id="slide-content"><div id="slide-text-display" style="font-size:32px;font-weight:300;padding:20px;">Добро пожаловать!</div></div><div class="slide-controls"><button id="slide-prev">◀ Предыдущий</button><button id="slide-next">Следующий ▶</button><button id="slide-add">+ Добавить слайд</button><button id="slide-del">Удалить слайд</button><button id="slide-edit">✏️ Редактировать</button></div><div class="slide-counter" id="slide-counter">1 / 1</div></div>';
    var winId = createWindow('Презентация', content, { width: 650, height: 450, iconType: 'file' });
    var slides = [{ text: 'Добро пожаловать!' }];
    var currentSlide = 0;
    var editMode = false;

    function renderSlide() {
      var display = document.getElementById('slide-text-display');
      var counter = document.getElementById('slide-counter');
      if (!display) return;
      if (slides[currentSlide]) {
        if (slides[currentSlide].text) {
          display.textContent = slides[currentSlide].text;
        } else if (slides[currentSlide].image) {
          display.innerHTML = '<img src="' + slides[currentSlide].image + '" style="max-width:100%;max-height:300px;border-radius:4px;">';
        }
        counter.textContent = (currentSlide + 1) + ' / ' + slides.length;
      }
    }

    setTimeout(function() {
      var prevBtn = document.getElementById('slide-prev');
      var nextBtn = document.getElementById('slide-next');
      var addBtn = document.getElementById('slide-add');
      var delBtn = document.getElementById('slide-del');
      var editBtn = document.getElementById('slide-edit');

      prevBtn.addEventListener('click', function() {
        if (currentSlide > 0) {
          currentSlide--;
          renderSlide();
        }
      });
      nextBtn.addEventListener('click', function() {
        if (currentSlide < slides.length - 1) {
          currentSlide++;
          renderSlide();
        }
      });
      addBtn.addEventListener('click', function() {
        slides.push({ text: 'Новый слайд' });
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
      editBtn.addEventListener('click', function() {
        editMode = !editMode;
        editBtn.style.background = editMode ? 'rgba(0,150,255,0.3)' : '';
        if (editMode) {
          showDialog({
            title: 'Редактировать слайд',
            message: 'Введите текст или URL изображения:',
            input: true,
            defaultValue: slides[currentSlide].text || ''
          }).then(function(result) {
            if (result !== null) {
              if (result.startsWith('http') && (result.includes('.jpg') || result.includes('.png') || result.includes('.gif') || result.includes('.jpeg') || result.includes('.svg'))) {
                slides[currentSlide] = { image: result };
              } else {
                slides[currentSlide] = { text: result || 'Пустой слайд' };
              }
              renderSlide();
              editMode = false;
              editBtn.style.background = '';
              showNotification('Слайд обновлён');
            } else {
              editMode = false;
              editBtn.style.background = '';
            }
          });
        }
      });
      renderSlide();
    }, 100);
  }

  // ============================================================
  //  32. МУЗЫКАЛЬНЫЙ ПЛЕЕР (с плейлистами)
  // ============================================================
  var playerAudio = null;
  var playerTracks = [];
  var playerPlaylist = [];

  function openPlayer() {
    var content = '<div class="player-info"><div class="track-name" id="player-track">Нет трека</div><div class="track-status" id="player-status">Загрузите MP3 файл</div></div><div class="player-progress"><div class="progress-fill" id="player-progress-fill"></div></div><div class="player-controls"><button id="player-play">▶</button><button id="player-pause">⏸</button><button id="player-stop">⏹</button><button id="player-prev">⏮</button><button id="player-next">⏭</button><button id="player-shuffle">🔀</button></div><div class="player-upload"><input type="file" id="player-file" accept="audio/mpeg"><button id="player-load">Загрузить MP3</button></div><div class="player-playlist" id="player-playlist"></div>';
    var winId = createWindow('Музыкальный плеер', content, { width: 400, height: 450, iconType: 'player' });
    setTimeout(function() {
      var playBtn = document.getElementById('player-play');
      var pauseBtn = document.getElementById('player-pause');
      var stopBtn = document.getElementById('player-stop');
      var prevBtn = document.getElementById('player-prev');
      var nextBtn = document.getElementById('player-next');
      var shuffleBtn = document.getElementById('player-shuffle');
      var fileInput = document.getElementById('player-file');
      var loadBtn = document.getElementById('player-load');
      var trackName = document.getElementById('player-track');
      var status = document.getElementById('player-status');
      var progressFill = document.getElementById('player-progress-fill');
      var playlistContainer = document.getElementById('player-playlist');
      var currentTrackIndex = -1;
      var shuffle = false;

      function loadPlaylist() {
        FS.get('/system/playlists.json').then(function(data) {
          if (data && data.content) {
            try { playerPlaylist = JSON.parse(data.content); } catch(e) { playerPlaylist = []; }
          } else {
            playerPlaylist = [];
          }
          renderPlaylist();
        }).catch(function() { playerPlaylist = []; renderPlaylist(); });
      }

      function savePlaylist() {
        FS.write('/system/playlists.json', JSON.stringify(playerPlaylist));
      }

      function renderPlaylist() {
        playlistContainer.innerHTML = '';
        playerPlaylist.forEach(function(item, idx) {
          var div = document.createElement('div');
          div.className = 'playlist-item';
          div.innerHTML = '<span>' + item.name + '</span><span class="playlist-del" data-idx="' + idx + '">✕</span>';
          div.addEventListener('click', function(e) {
            if (e.target.classList.contains('playlist-del')) return;
            loadTrack(idx);
          });
          var del = div.querySelector('.playlist-del');
          del.addEventListener('click', function(e) {
            e.stopPropagation();
            playerPlaylist.splice(idx, 1);
            savePlaylist();
            renderPlaylist();
            showNotification('Трек удалён из плейлиста');
          });
          playlistContainer.appendChild(div);
        });
      }

      if (!playerAudio) {
        playerAudio = new Audio();
      }

      function loadTrack(index) {
        if (index < 0 || index >= playerPlaylist.length) return;
        currentTrackIndex = index;
        var track = playerPlaylist[index];
        playerAudio.src = track.data;
        playerAudio.load();
        trackName.textContent = track.name;
        status.textContent = 'Загружено';
        playBtn.textContent = '▶';
        showNotification('Загружено: ' + track.name);
      }

      function updateProgress() {
        if (playerAudio && playerAudio.duration) {
          var pct = (playerAudio.currentTime / playerAudio.duration) * 100;
          progressFill.style.width = pct + '%';
        }
      }

      playerAudio.addEventListener('timeupdate', updateProgress);
      playerAudio.addEventListener('ended', function() {
        if (shuffle) {
          var idx = Math.floor(Math.random() * playerPlaylist.length);
          loadTrack(idx);
          playerAudio.play();
          playBtn.textContent = '⏸';
        } else if (currentTrackIndex < playerPlaylist.length - 1) {
          loadTrack(currentTrackIndex + 1);
          playerAudio.play();
          playBtn.textContent = '⏸';
        } else {
          status.textContent = 'Воспроизведение завершено';
          playBtn.textContent = '▶';
          progressFill.style.width = '0%';
        }
      });

      playBtn.addEventListener('click', function() {
        if (playerPlaylist.length === 0) {
          showNotification('Сначала загрузите MP3 файл', 'warning');
          return;
        }
        if (playerAudio.paused) {
          playerAudio.play();
          playBtn.textContent = '⏸';
          status.textContent = 'Воспроизведение';
        } else {
          playerAudio.pause();
          playBtn.textContent = '▶';
          status.textContent = 'Пауза';
        }
      });

      pauseBtn.addEventListener('click', function() {
        if (playerAudio) {
          playerAudio.pause();
          playBtn.textContent = '▶';
          status.textContent = 'Пауза';
        }
      });

      stopBtn.addEventListener('click', function() {
        if (playerAudio) {
          playerAudio.pause();
          playerAudio.currentTime = 0;
          playBtn.textContent = '▶';
          status.textContent = 'Остановлено';
          progressFill.style.width = '0%';
        }
      });

      prevBtn.addEventListener('click', function() {
        if (currentTrackIndex > 0) {
          loadTrack(currentTrackIndex - 1);
          playerAudio.play();
          playBtn.textContent = '⏸';
        } else {
          showNotification('Это первый трек', 'warning');
        }
      });

      nextBtn.addEventListener('click', function() {
        if (shuffle) {
          var idx = Math.floor(Math.random() * playerPlaylist.length);
          loadTrack(idx);
          playerAudio.play();
          playBtn.textContent = '⏸';
        } else if (currentTrackIndex < playerPlaylist.length - 1) {
          loadTrack(currentTrackIndex + 1);
          playerAudio.play();
          playBtn.textContent = '⏸';
        } else {
          showNotification('Это последний трек', 'warning');
        }
      });

      shuffleBtn.addEventListener('click', function() {
        shuffle = !shuffle;
        shuffleBtn.style.background = shuffle ? 'rgba(0,150,255,0.3)' : '';
        showNotification(shuffle ? 'Перемешивание включено' : 'Перемешивание выключено');
      });

      loadBtn.addEventListener('click', function() {
        if (!fileInput.files || fileInput.files.length === 0) {
          showNotification('Выберите MP3 файл', 'warning');
          return;
        }
        var file = fileInput.files[0];
        if (!file.type.startsWith('audio/')) {
          showNotification('Требуется аудиофайл', 'error');
          return;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
          var dataUrl = e.target.result;
          playerPlaylist.push({ name: file.name, data: dataUrl });
          savePlaylist();
          renderPlaylist();
          if (currentTrackIndex === -1) {
            loadTrack(0);
          }
          showNotification('Файл "' + file.name + '" загружен');
          fileInput.value = '';
          status.textContent = 'Треков: ' + playerPlaylist.length;
        };
        reader.readAsDataURL(file);
      });

      loadPlaylist();
      status.textContent = 'Загрузите MP3 файл';
    }, 100);
  }

  // ============================================================
  //  33. КОНВЕРТЕР ВЕЛИЧИН
  // ============================================================
  function openConverter() {
    var categories = {
      'Длина': { units: ['м', 'км', 'см', 'мм', 'миля', 'фут', 'дюйм'], factors: [1, 0.001, 100, 1000, 0.000621371, 3.28084, 39.3701] },
      'Вес': { units: ['кг', 'г', 'мг', 'тонна', 'фунт', 'унция'], factors: [1, 1000, 1000000, 0.001, 2.20462, 35.274] },
      'Объём': { units: ['л', 'мл', 'галлон', 'куб.м'], factors: [1, 1000, 0.264172, 0.001] },
      'Температура': { units: ['°C', '°F', 'K'], factors: null },
      'Скорость': { units: ['км/ч', 'м/с', 'миль/ч'], factors: [1, 0.277778, 0.621371] },
      'Валюта': { units: ['USD', 'EUR', 'RUB', 'GBP', 'JPY'], factors: [1, 0.85, 75, 0.75, 110] }
    };
    var content = '<div class="converter-container"><div class="conv-row"><label>Категория</label><select id="conv-category"><option value="Длина">Длина</option><option value="Вес">Вес</option><option value="Объём">Объём</option><option value="Температура">Температура</option><option value="Скорость">Скорость</option><option value="Валюта">Валюта (заглушка)</option></select></div><div class="conv-row"><label>Из</label><select id="conv-from"></select><label>В</label><select id="conv-to"></select></div><div class="conv-row"><label>Значение</label><input type="number" id="conv-value" value="1" step="any"></div><div class="conv-result" id="conv-result">1</div></div>';
    var winId = createWindow('Конвертер величин', content, { width: 400, height: 350, iconType: 'converter' });
    setTimeout(function() {
      var categorySelect = document.getElementById('conv-category');
      var fromSelect = document.getElementById('conv-from');
      var toSelect = document.getElementById('conv-to');
      var valueInput = document.getElementById('conv-value');
      var resultDiv = document.getElementById('conv-result');

      function updateUnits() {
        var cat = categorySelect.value;
        var data = categories[cat];
        fromSelect.innerHTML = '';
        toSelect.innerHTML = '';
        data.units.forEach(function(u) {
          var opt1 = document.createElement('option');
          opt1.value = u;
          opt1.textContent = u;
          fromSelect.appendChild(opt1);
          var opt2 = document.createElement('option');
          opt2.value = u;
          opt2.textContent = u;
          toSelect.appendChild(opt2);
        });
        if (data.units.length > 1) {
          toSelect.selectedIndex = 1;
        }
        convert();
      }

      function convert() {
        var cat = categorySelect.value;
        var data = categories[cat];
        var from = fromSelect.value;
        var to = toSelect.value;
        var val = parseFloat(valueInput.value) || 0;
        var result = 0;
        if (cat === 'Температура') {
          if (from === '°C' && to === '°F') result = val * 9/5 + 32;
          else if (from === '°F' && to === '°C') result = (val - 32) * 5/9;
          else if (from === '°C' && to === 'K') result = val + 273.15;
          else if (from === 'K' && to === '°C') result = val - 273.15;
          else if (from === '°F' && to === 'K') result = (val - 32) * 5/9 + 273.15;
          else if (from === 'K' && to === '°F') result = (val - 273.15) * 9/5 + 32;
          else result = val;
        } else {
          var fromIdx = data.units.indexOf(from);
          var toIdx = data.units.indexOf(to);
          if (fromIdx !== -1 && toIdx !== -1 && data.factors) {
            result = val * (data.factors[toIdx] / data.factors[fromIdx]);
          } else {
            result = val;
          }
        }
        resultDiv.textContent = result.toFixed(4) + ' ' + to;
      }

      categorySelect.addEventListener('change', function() {
        updateUnits();
      });
      fromSelect.addEventListener('change', convert);
      toSelect.addEventListener('change', convert);
      valueInput.addEventListener('input', convert);
      updateUnits();
    }, 100);
  }

  // ============================================================
  //  34. ПЛАНИРОВЩИК ЗАДАЧ (To-Do)
  // ============================================================
  var todoItems = [];

  function openTodo() {
    var content = '<div class="todo-container"><div class="todo-input-row"><input type="text" id="todo-input" placeholder="Новая задача..."><select id="todo-priority"><option value="low">Низкий</option><option value="medium" selected>Средний</option><option value="high">Высокий</option></select><button id="todo-add">Добавить</button></div><div class="todo-filters"><button class="active" data-filter="all">Все</button><button data-filter="active">Активные</button><button data-filter="done">Выполненные</button></div><div id="todo-list"></div><div class="todo-stats" id="todo-stats"></div></div>';
    var winId = createWindow('Планировщик задач', content, { width: 450, height: 400, iconType: 'todo' });
    setTimeout(function() {
      var input = document.getElementById('todo-input');
      var prioritySelect = document.getElementById('todo-priority');
      var addBtn = document.getElementById('todo-add');
      var list = document.getElementById('todo-list');
      var stats = document.getElementById('todo-stats');
      var filterButtons = document.querySelectorAll('.todo-filters button');
      var currentFilter = 'all';

      function loadTodo() {
        FS.get('/system/todo.json').then(function(data) {
          if (data && data.content) {
            try { todoItems = JSON.parse(data.content); } catch(e) { todoItems = []; }
          } else {
            todoItems = [];
          }
          renderTodo();
        }).catch(function() { todoItems = []; renderTodo(); });
      }

      function saveTodo() {
        FS.write('/system/todo.json', JSON.stringify(todoItems));
      }

      function renderTodo() {
        var filtered = todoItems;
        if (currentFilter === 'active') filtered = todoItems.filter(function(item) { return !item.done; });
        else if (currentFilter === 'done') filtered = todoItems.filter(function(item) { return item.done; });
        list.innerHTML = '';
        filtered.forEach(function(item, idx) {
          var div = document.createElement('div');
          div.className = 'todo-item';
          div.innerHTML = '<input type="checkbox" class="todo-check" data-idx="' + idx + '" ' + (item.done ? 'checked' : '') + '><span class="todo-text ' + (item.done ? 'done' : '') + '">' + item.text + '</span><span class="todo-priority ' + item.priority + '">' + item.priority + '</span><span style="font-size:11px;color:#888;">' + (item.date || '') + '</span><span class="todo-del" data-idx="' + idx + '">✕</span>';
          var check = div.querySelector('.todo-check');
          check.addEventListener('change', function() {
            var idx2 = parseInt(this.dataset.idx);
            todoItems[idx2].done = this.checked;
            saveTodo();
            renderTodo();
          });
          var del = div.querySelector('.todo-del');
          del.addEventListener('click', function() {
            var idx2 = parseInt(this.dataset.idx);
            todoItems.splice(idx2, 1);
            saveTodo();
            renderTodo();
          });
          list.appendChild(div);
        });
        var total = todoItems.length;
        var done = todoItems.filter(function(item) { return item.done; }).length;
        stats.textContent = 'Всего: ' + total + ' | Выполнено: ' + done + ' | Осталось: ' + (total - done);
      }

      addBtn.addEventListener('click', function() {
        var text = input.value.trim();
        if (!text) { showNotification('Введите задачу', 'warning'); return; }
        var priority = prioritySelect.value;
        todoItems.push({ text: text, priority: priority, done: false, date: new Date().toLocaleDateString() });
        saveTodo();
        renderTodo();
        input.value = '';
      });
      input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') addBtn.click();
      });
      filterButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
          filterButtons.forEach(function(b) { b.classList.remove('active'); });
          btn.classList.add('active');
          currentFilter = btn.dataset.filter;
          renderTodo();
        });
      });
      loadTodo();
    }, 100);
  }

  // ============================================================
  //  35. РЕДАКТОР КОДА (исправлена нумерация строк)
  // ============================================================
  function openCodeEditor() {
    var content = '<div class="code-editor-container"><div class="code-toolbar"><select id="code-lang"><option value="javascript">JavaScript</option><option value="html">HTML</option><option value="css">CSS</option><option value="python">Python</option><option value="json">JSON</option></select><input type="text" id="code-search" placeholder="Поиск..."><button id="code-search-btn">🔍</button><button id="code-replace-btn">Заменить</button><button id="code-find-btn">Найти</button></div><div class="code-wrapper"><div class="code-line-numbers" id="code-line-numbers"></div><textarea class="code-textarea" id="code-textarea" spellcheck="false"></textarea></div></div>';
    var winId = createWindow('Редактор кода', content, { width: 700, height: 500, iconType: 'code' });
    setTimeout(function() {
      var textarea = document.getElementById('code-textarea');
      var lineNumbers = document.getElementById('code-line-numbers');
      var searchInput = document.getElementById('code-search');
      var searchBtn = document.getElementById('code-search-btn');
      var replaceBtn = document.getElementById('code-replace-btn');
      var findBtn = document.getElementById('code-find-btn');

      function updateLineNumbers() {
        var lines = textarea.value.split('\n').length;
        var html = '';
        for (var i = 1; i <= lines; i++) {
          html += i + '\n';
        }
        lineNumbers.textContent = html;
        // Синхронизируем скролл
        lineNumbers.scrollTop = textarea.scrollTop;
      }

      textarea.addEventListener('input', updateLineNumbers);
      textarea.addEventListener('scroll', function() {
        lineNumbers.scrollTop = textarea.scrollTop;
      });
      updateLineNumbers();

      // Поиск
      findBtn.addEventListener('click', function() {
        var query = searchInput.value;
        if (!query) { showNotification('Введите текст для поиска', 'warning'); return; }
        var content = textarea.value;
        var idx = content.indexOf(query);
        if (idx !== -1) {
          textarea.focus();
          textarea.setSelectionRange(idx, idx + query.length);
          showNotification('Найдено', 'info');
        } else {
          showNotification('Не найдено', 'warning');
        }
      });

      // Замена
      replaceBtn.addEventListener('click', function() {
        var query = searchInput.value;
        if (!query) { showNotification('Введите текст для замены', 'warning'); return; }
        var replaceWith = prompt('Введите текст для замены:');
        if (replaceWith !== null) {
          var content = textarea.value;
          var newContent = content.replaceAll(query, replaceWith);
          textarea.value = newContent;
          updateLineNumbers();
          showNotification('Замена выполнена');
        }
      });
    }, 100);
  }
  // ============================================================
  //  25. ГЛОБАЛЬНЫЙ ПОИСК
  // ============================================================
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

  // ============================================================
  //  26. БРАУЗЕР (с закладками)
  // ============================================================
  function openBrowser() {
    var content = '<div class="browser-toolbar"><button id="browser-back">◀</button><button id="browser-forward">▶</button><button id="browser-refresh">🔄</button><input id="browser-url" type="text" placeholder="Введите URL или поисковый запрос..." value=""><button id="browser-go">Перейти</button><button id="browser-bookmark">⭐</button></div><div class="browser-bookmarks" id="browser-bookmarks"></div><iframe class="browser-frame" id="browser-frame" src="about:blank"></iframe>';
    var winId = createWindow('Браузер', content, { width: 800, height: 500, iconType: 'browser' });
    setTimeout(function() {
      var urlInput = document.getElementById('browser-url');
      var frame = document.getElementById('browser-frame');
      var backBtn = document.getElementById('browser-back');
      var forwardBtn = document.getElementById('browser-forward');
      var refreshBtn = document.getElementById('browser-refresh');
      var goBtn = document.getElementById('browser-go');
      var bookmarkBtn = document.getElementById('browser-bookmark');
      var bookmarksContainer = document.getElementById('browser-bookmarks');
      var history = [];
      var historyIndex = -1;
      var browserBookmarks = [];

      function loadBrowserBookmarks() {
        FS.get('/system/bookmarks.json').then(function(data) {
          if (data && data.content) {
            try { browserBookmarks = JSON.parse(data.content); } catch(e) { browserBookmarks = []; }
          } else {
            browserBookmarks = [];
          }
          renderBookmarks();
        }).catch(function() { browserBookmarks = []; renderBookmarks(); });
      }

      function saveBrowserBookmarks() {
        FS.write('/system/bookmarks.json', JSON.stringify(browserBookmarks));
      }

      function renderBookmarks() {
        bookmarksContainer.innerHTML = '';
        browserBookmarks.forEach(function(bm) {
          var span = document.createElement('span');
          span.className = 'bookmark';
          span.textContent = bm;
          span.addEventListener('click', function() {
            navigate(bm);
          });
          bookmarksContainer.appendChild(span);
        });
      }

      function isURL(str) {
        return str.includes('.') && !str.includes(' ') || str.startsWith('http://') || str.startsWith('https://');
      }

      function navigate(url) {
        if (!url) return;
        if (!isURL(url)) {
          window.open('https://yandex.ru/search/?text=' + encodeURIComponent(url), '_blank');
          showNotification('Поиск открыт в новой вкладке Яндекс', 'info');
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
      bookmarkBtn.addEventListener('click', function() {
        var url = urlInput.value;
        if (url && url !== 'https://example.com' && url !== 'about:blank') {
          if (browserBookmarks.indexOf(url) === -1) {
            browserBookmarks.push(url);
            saveBrowserBookmarks();
            renderBookmarks();
            showNotification('Закладка добавлена: ' + url);
          } else {
            showNotification('Закладка уже существует', 'warning');
          }
        } else {
          showNotification('Невозможно добавить закладку', 'warning');
        }
      });
      loadBrowserBookmarks();
      navigate('example.com');
    }, 100);
  }

  // ============================================================
  //  27. КАЛЕНДАРЬ (с импортом/экспортом ICS)
  // ============================================================
  function openCalendar() {
    var content = '<div class="calendar-nav"><button id="cal-prev">◀</button><span id="cal-month-year">Январь 2026</span><button id="cal-next">▶</button><button id="cal-export">📤 Экспорт ICS</button><button id="cal-import">📥 Импорт ICS</button></div><div class="calendar-grid" id="calendar-grid"></div><div class="calendar-events-list" id="calendar-events"></div>';
    var winId = createWindow('Календарь', content, { width: 450, height: 500, iconType: 'calendar-app' });
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

    function exportICS() {
      var ics = 'BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//NextelOS//Calendar//RU\n';
      for (var date in events) {
        if (events[date]) {
          for (var i = 0; i < events[date].length; i++) {
            var ev = events[date][i];
            var dt = date.replace(/-/g, '');
            var time = ev.time ? ev.time.replace(/:/g, '') : '000000';
            ics += 'BEGIN:VEVENT\nDTSTART:' + dt + 'T' + time + '\nSUMMARY:' + ev.text + '\nEND:VEVENT\n';
          }
        }
      }
      ics += 'END:VCALENDAR';
      var blob = new Blob([ics], { type: 'text/calendar' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'calendar.ics';
      a.click();
      URL.revokeObjectURL(url);
      showNotification('ICS экспортирован');
    }

    function importICS(file) {
      var reader = new FileReader();
      reader.onload = function(e) {
        var text = e.target.result;
        var lines = text.split('\n');
        var eventData = {};
        var currentEvent = {};
        for (var i = 0; i < lines.length; i++) {
          var line = lines[i].trim();
          if (line === 'BEGIN:VEVENT') {
            currentEvent = {};
          } else if (line === 'END:VEVENT') {
            if (currentEvent.DTSTART && currentEvent.SUMMARY) {
              var dt = currentEvent.DTSTART.replace(/T.*/, '');
              var dateKey = dt.slice(0,4) + '-' + dt.slice(4,6) + '-' + dt.slice(6,8);
              if (!eventData[dateKey]) eventData[dateKey] = [];
              eventData[dateKey].push({ time: '12:00', text: currentEvent.SUMMARY });
            }
          } else if (line.startsWith('DTSTART:')) {
            currentEvent.DTSTART = line.substring(8);
          } else if (line.startsWith('SUMMARY:')) {
            currentEvent.SUMMARY = line.substring(8);
          }
        }
        for (var dateKey in eventData) {
          if (!events[dateKey]) events[dateKey] = [];
          events[dateKey] = events[dateKey].concat(eventData[dateKey]);
        }
        saveEvents();
        renderCalendar(currentYear, currentMonth);
        showNotification('ICS импортирован');
      };
      reader.readAsText(file);
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
    document.getElementById('cal-export').addEventListener('click', exportICS);
    document.getElementById('cal-import').addEventListener('click', function() {
      var input = document.createElement('input');
      input.type = 'file';
      input.accept = '.ics';
      input.onchange = function(e) {
        var file = e.target.files[0];
        if (file) importICS(file);
      };
      input.click();
    });
  }

  // ============================================================
  //  28. БУДИЛЬНИК
  // ============================================================
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

  // ============================================================
  //  29. БЛОКНОТ С ВКЛАДКАМИ
  // ============================================================
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

  // ============================================================
  //  30. МЕНЕДЖЕР ПАРОЛЕЙ
  // ============================================================
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

  // ============================================================
  //  31. ПРЕЗЕНТАЦИЯ
  // ============================================================
  function openPresentation() {
    var content = '<div class="slide-container"><div class="slide-content" id="slide-content"><div id="slide-text-display" style="font-size:32px;font-weight:300;padding:20px;">Добро пожаловать!</div></div><div class="slide-controls"><button id="slide-prev">◀ Предыдущий</button><button id="slide-next">Следующий ▶</button><button id="slide-add">+ Добавить слайд</button><button id="slide-del">Удалить слайд</button><button id="slide-edit">✏️ Редактировать</button></div><div class="slide-counter" id="slide-counter">1 / 1</div></div>';
    var winId = createWindow('Презентация', content, { width: 650, height: 450, iconType: 'file' });
    var slides = [{ text: 'Добро пожаловать!' }];
    var currentSlide = 0;
    var editMode = false;

    function renderSlide() {
      var display = document.getElementById('slide-text-display');
      var counter = document.getElementById('slide-counter');
      if (!display) return;
      if (slides[currentSlide]) {
        if (slides[currentSlide].text) {
          display.textContent = slides[currentSlide].text;
        } else if (slides[currentSlide].image) {
          display.innerHTML = '<img src="' + slides[currentSlide].image + '" style="max-width:100%;max-height:300px;border-radius:4px;">';
        }
        counter.textContent = (currentSlide + 1) + ' / ' + slides.length;
      }
    }

    setTimeout(function() {
      var prevBtn = document.getElementById('slide-prev');
      var nextBtn = document.getElementById('slide-next');
      var addBtn = document.getElementById('slide-add');
      var delBtn = document.getElementById('slide-del');
      var editBtn = document.getElementById('slide-edit');

      prevBtn.addEventListener('click', function() {
        if (currentSlide > 0) {
          currentSlide--;
          renderSlide();
        }
      });
      nextBtn.addEventListener('click', function() {
        if (currentSlide < slides.length - 1) {
          currentSlide++;
          renderSlide();
        }
      });
      addBtn.addEventListener('click', function() {
        slides.push({ text: 'Новый слайд' });
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
      editBtn.addEventListener('click', function() {
        editMode = !editMode;
        editBtn.style.background = editMode ? 'rgba(0,150,255,0.3)' : '';
        if (editMode) {
          showDialog({
            title: 'Редактировать слайд',
            message: 'Введите текст или URL изображения:',
            input: true,
            defaultValue: slides[currentSlide].text || ''
          }).then(function(result) {
            if (result !== null) {
              if (result.startsWith('http') && (result.includes('.jpg') || result.includes('.png') || result.includes('.gif') || result.includes('.jpeg') || result.includes('.svg'))) {
                slides[currentSlide] = { image: result };
              } else {
                slides[currentSlide] = { text: result || 'Пустой слайд' };
              }
              renderSlide();
              editMode = false;
              editBtn.style.background = '';
              showNotification('Слайд обновлён');
            } else {
              editMode = false;
              editBtn.style.background = '';
            }
          });
        }
      });
      renderSlide();
    }, 100);
  }

  // ============================================================
  //  32. МУЗЫКАЛЬНЫЙ ПЛЕЕР (с плейлистами)
  // ============================================================
  var playerAudio = null;
  var playerTracks = [];
  var playerPlaylist = [];

  function openPlayer() {
    var content = '<div class="player-info"><div class="track-name" id="player-track">Нет трека</div><div class="track-status" id="player-status">Загрузите MP3 файл</div></div><div class="player-progress"><div class="progress-fill" id="player-progress-fill"></div></div><div class="player-controls"><button id="player-play">▶</button><button id="player-pause">⏸</button><button id="player-stop">⏹</button><button id="player-prev">⏮</button><button id="player-next">⏭</button><button id="player-shuffle">🔀</button></div><div class="player-upload"><input type="file" id="player-file" accept="audio/mpeg"><button id="player-load">Загрузить MP3</button></div><div class="player-playlist" id="player-playlist"></div>';
    var winId = createWindow('Музыкальный плеер', content, { width: 400, height: 450, iconType: 'player' });
    setTimeout(function() {
      var playBtn = document.getElementById('player-play');
      var pauseBtn = document.getElementById('player-pause');
      var stopBtn = document.getElementById('player-stop');
      var prevBtn = document.getElementById('player-prev');
      var nextBtn = document.getElementById('player-next');
      var shuffleBtn = document.getElementById('player-shuffle');
      var fileInput = document.getElementById('player-file');
      var loadBtn = document.getElementById('player-load');
      var trackName = document.getElementById('player-track');
      var status = document.getElementById('player-status');
      var progressFill = document.getElementById('player-progress-fill');
      var playlistContainer = document.getElementById('player-playlist');
      var currentTrackIndex = -1;
      var shuffle = false;

      function loadPlaylist() {
        FS.get('/system/playlists.json').then(function(data) {
          if (data && data.content) {
            try { playerPlaylist = JSON.parse(data.content); } catch(e) { playerPlaylist = []; }
          } else {
            playerPlaylist = [];
          }
          renderPlaylist();
        }).catch(function() { playerPlaylist = []; renderPlaylist(); });
      }

      function savePlaylist() {
        FS.write('/system/playlists.json', JSON.stringify(playerPlaylist));
      }

      function renderPlaylist() {
        playlistContainer.innerHTML = '';
        playerPlaylist.forEach(function(item, idx) {
          var div = document.createElement('div');
          div.className = 'playlist-item';
          div.innerHTML = '<span>' + item.name + '</span><span class="playlist-del" data-idx="' + idx + '">✕</span>';
          div.addEventListener('click', function(e) {
            if (e.target.classList.contains('playlist-del')) return;
            loadTrack(idx);
          });
          var del = div.querySelector('.playlist-del');
          del.addEventListener('click', function(e) {
            e.stopPropagation();
            playerPlaylist.splice(idx, 1);
            savePlaylist();
            renderPlaylist();
            showNotification('Трек удалён из плейлиста');
          });
          playlistContainer.appendChild(div);
        });
      }

      if (!playerAudio) {
        playerAudio = new Audio();
      }

      function loadTrack(index) {
        if (index < 0 || index >= playerPlaylist.length) return;
        currentTrackIndex = index;
        var track = playerPlaylist[index];
        playerAudio.src = track.data;
        playerAudio.load();
        trackName.textContent = track.name;
        status.textContent = 'Загружено';
        playBtn.textContent = '▶';
        showNotification('Загружено: ' + track.name);
      }

      function updateProgress() {
        if (playerAudio && playerAudio.duration) {
          var pct = (playerAudio.currentTime / playerAudio.duration) * 100;
          progressFill.style.width = pct + '%';
        }
      }

      playerAudio.addEventListener('timeupdate', updateProgress);
      playerAudio.addEventListener('ended', function() {
        if (shuffle) {
          var idx = Math.floor(Math.random() * playerPlaylist.length);
          loadTrack(idx);
          playerAudio.play();
          playBtn.textContent = '⏸';
        } else if (currentTrackIndex < playerPlaylist.length - 1) {
          loadTrack(currentTrackIndex + 1);
          playerAudio.play();
          playBtn.textContent = '⏸';
        } else {
          status.textContent = 'Воспроизведение завершено';
          playBtn.textContent = '▶';
          progressFill.style.width = '0%';
        }
      });

      playBtn.addEventListener('click', function() {
        if (playerPlaylist.length === 0) {
          showNotification('Сначала загрузите MP3 файл', 'warning');
          return;
        }
        if (playerAudio.paused) {
          playerAudio.play();
          playBtn.textContent = '⏸';
          status.textContent = 'Воспроизведение';
        } else {
          playerAudio.pause();
          playBtn.textContent = '▶';
          status.textContent = 'Пауза';
        }
      });

      pauseBtn.addEventListener('click', function() {
        if (playerAudio) {
          playerAudio.pause();
          playBtn.textContent = '▶';
          status.textContent = 'Пауза';
        }
      });

      stopBtn.addEventListener('click', function() {
        if (playerAudio) {
          playerAudio.pause();
          playerAudio.currentTime = 0;
          playBtn.textContent = '▶';
          status.textContent = 'Остановлено';
          progressFill.style.width = '0%';
        }
      });

      prevBtn.addEventListener('click', function() {
        if (currentTrackIndex > 0) {
          loadTrack(currentTrackIndex - 1);
          playerAudio.play();
          playBtn.textContent = '⏸';
        } else {
          showNotification('Это первый трек', 'warning');
        }
      });

      nextBtn.addEventListener('click', function() {
        if (shuffle) {
          var idx = Math.floor(Math.random() * playerPlaylist.length);
          loadTrack(idx);
          playerAudio.play();
          playBtn.textContent = '⏸';
        } else if (currentTrackIndex < playerPlaylist.length - 1) {
          loadTrack(currentTrackIndex + 1);
          playerAudio.play();
          playBtn.textContent = '⏸';
        } else {
          showNotification('Это последний трек', 'warning');
        }
      });

      shuffleBtn.addEventListener('click', function() {
        shuffle = !shuffle;
        shuffleBtn.style.background = shuffle ? 'rgba(0,150,255,0.3)' : '';
        showNotification(shuffle ? 'Перемешивание включено' : 'Перемешивание выключено');
      });

      loadBtn.addEventListener('click', function() {
        if (!fileInput.files || fileInput.files.length === 0) {
          showNotification('Выберите MP3 файл', 'warning');
          return;
        }
        var file = fileInput.files[0];
        if (!file.type.startsWith('audio/')) {
          showNotification('Требуется аудиофайл', 'error');
          return;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
          var dataUrl = e.target.result;
          playerPlaylist.push({ name: file.name, data: dataUrl });
          savePlaylist();
          renderPlaylist();
          if (currentTrackIndex === -1) {
            loadTrack(0);
          }
          showNotification('Файл "' + file.name + '" загружен');
          fileInput.value = '';
          status.textContent = 'Треков: ' + playerPlaylist.length;
        };
        reader.readAsDataURL(file);
      });

      loadPlaylist();
      status.textContent = 'Загрузите MP3 файл';
    }, 100);
  }

  // ============================================================
  //  33. КОНВЕРТЕР ВЕЛИЧИН (исправлен)
  // ============================================================
  function openConverter() {
    var categories = {
      'Длина': { units: ['м', 'км', 'см', 'мм', 'миля', 'фут', 'дюйм'], factors: [1, 0.001, 100, 1000, 0.000621371, 3.28084, 39.3701] },
      'Вес': { units: ['кг', 'г', 'мг', 'тонна', 'фунт', 'унция'], factors: [1, 1000, 1000000, 0.001, 2.20462, 35.274] },
      'Объём': { units: ['л', 'мл', 'галлон', 'куб.м'], factors: [1, 1000, 0.264172, 0.001] },
      'Температура': { units: ['°C', '°F', 'K'], factors: null },
      'Скорость': { units: ['км/ч', 'м/с', 'миль/ч'], factors: [1, 0.277778, 0.621371] },
      'Валюта': { units: ['USD', 'EUR', 'RUB', 'GBP', 'JPY'], factors: [1, 0.85, 75, 0.75, 110] }
    };
    var content = '<div class="converter-container"><div class="conv-row"><label>Категория</label><select id="conv-category"><option value="Длина">Длина</option><option value="Вес">Вес</option><option value="Объём">Объём</option><option value="Температура">Температура</option><option value="Скорость">Скорость</option><option value="Валюта">Валюта (заглушка)</option></select></div><div class="conv-row"><label>Из</label><select id="conv-from"></select><label>В</label><select id="conv-to"></select></div><div class="conv-row"><label>Значение</label><input type="number" id="conv-value" value="1" step="any"></div><div class="conv-result" id="conv-result">1</div></div>';
    var winId = createWindow('Конвертер величин', content, { width: 400, height: 350, iconType: 'converter' });
    setTimeout(function() {
      var categorySelect = document.getElementById('conv-category');
      var fromSelect = document.getElementById('conv-from');
      var toSelect = document.getElementById('conv-to');
      var valueInput = document.getElementById('conv-value');
      var resultDiv = document.getElementById('conv-result');

      function updateUnits() {
        var cat = categorySelect.value;
        var data = categories[cat];
        fromSelect.innerHTML = '';
        toSelect.innerHTML = '';
        data.units.forEach(function(u) {
          var opt1 = document.createElement('option');
          opt1.value = u;
          opt1.textContent = u;
          fromSelect.appendChild(opt1);
          var opt2 = document.createElement('option');
          opt2.value = u;
          opt2.textContent = u;
          toSelect.appendChild(opt2);
        });
        if (data.units.length > 1) {
          toSelect.selectedIndex = 1;
        }
        convert();
      }

      function convert() {
        var cat = categorySelect.value;
        var data = categories[cat];
        var from = fromSelect.value;
        var to = toSelect.value;
        var val = parseFloat(valueInput.value) || 0;
        var result = 0;
        if (cat === 'Температура') {
          if (from === '°C' && to === '°F') result = val * 9/5 + 32;
          else if (from === '°F' && to === '°C') result = (val - 32) * 5/9;
          else if (from === '°C' && to === 'K') result = val + 273.15;
          else if (from === 'K' && to === '°C') result = val - 273.15;
          else if (from === '°F' && to === 'K') result = (val - 32) * 5/9 + 273.15;
          else if (from === 'K' && to === '°F') result = (val - 273.15) * 9/5 + 32;
          else result = val;
        } else {
          var fromIdx = data.units.indexOf(from);
          var toIdx = data.units.indexOf(to);
          if (fromIdx !== -1 && toIdx !== -1 && data.factors) {
            result = val * (data.factors[toIdx] / data.factors[fromIdx]);
          } else {
            result = val;
          }
        }
        resultDiv.textContent = result.toFixed(4) + ' ' + to;
      }

      categorySelect.addEventListener('change', function() {
        updateUnits();
      });
      fromSelect.addEventListener('change', convert);
      toSelect.addEventListener('change', convert);
      valueInput.addEventListener('input', convert);
      updateUnits();
    }, 100);
  }

  // ============================================================
  //  34. ПЛАНИРОВЩИК ЗАДАЧ (To-Do)
  // ============================================================
  var todoItems = [];

  function openTodo() {
    var content = '<div class="todo-container"><div class="todo-input-row"><input type="text" id="todo-input" placeholder="Новая задача..."><select id="todo-priority"><option value="low">Низкий</option><option value="medium" selected>Средний</option><option value="high">Высокий</option></select><button id="todo-add">Добавить</button></div><div class="todo-filters"><button class="active" data-filter="all">Все</button><button data-filter="active">Активные</button><button data-filter="done">Выполненные</button></div><div id="todo-list"></div><div class="todo-stats" id="todo-stats"></div></div>';
    var winId = createWindow('Планировщик задач', content, { width: 450, height: 400, iconType: 'todo' });
    setTimeout(function() {
      var input = document.getElementById('todo-input');
      var prioritySelect = document.getElementById('todo-priority');
      var addBtn = document.getElementById('todo-add');
      var list = document.getElementById('todo-list');
      var stats = document.getElementById('todo-stats');
      var filterButtons = document.querySelectorAll('.todo-filters button');
      var currentFilter = 'all';

      function loadTodo() {
        FS.get('/system/todo.json').then(function(data) {
          if (data && data.content) {
            try { todoItems = JSON.parse(data.content); } catch(e) { todoItems = []; }
          } else {
            todoItems = [];
          }
          renderTodo();
        }).catch(function() { todoItems = []; renderTodo(); });
      }

      function saveTodo() {
        FS.write('/system/todo.json', JSON.stringify(todoItems));
      }

      function renderTodo() {
        var filtered = todoItems;
        if (currentFilter === 'active') filtered = todoItems.filter(function(item) { return !item.done; });
        else if (currentFilter === 'done') filtered = todoItems.filter(function(item) { return item.done; });
        list.innerHTML = '';
        filtered.forEach(function(item, idx) {
          var div = document.createElement('div');
          div.className = 'todo-item';
          div.innerHTML = '<input type="checkbox" class="todo-check" data-idx="' + idx + '" ' + (item.done ? 'checked' : '') + '><span class="todo-text ' + (item.done ? 'done' : '') + '">' + item.text + '</span><span class="todo-priority ' + item.priority + '">' + item.priority + '</span><span style="font-size:11px;color:#888;">' + (item.date || '') + '</span><span class="todo-del" data-idx="' + idx + '">✕</span>';
          var check = div.querySelector('.todo-check');
          check.addEventListener('change', function() {
            var idx2 = parseInt(this.dataset.idx);
            todoItems[idx2].done = this.checked;
            saveTodo();
            renderTodo();
          });
          var del = div.querySelector('.todo-del');
          del.addEventListener('click', function() {
            var idx2 = parseInt(this.dataset.idx);
            todoItems.splice(idx2, 1);
            saveTodo();
            renderTodo();
          });
          list.appendChild(div);
        });
        var total = todoItems.length;
        var done = todoItems.filter(function(item) { return item.done; }).length;
        stats.textContent = 'Всего: ' + total + ' | Выполнено: ' + done + ' | Осталось: ' + (total - done);
      }

      addBtn.addEventListener('click', function() {
        var text = input.value.trim();
        if (!text) { showNotification('Введите задачу', 'warning'); return; }
        var priority = prioritySelect.value;
        todoItems.push({ text: text, priority: priority, done: false, date: new Date().toLocaleDateString() });
        saveTodo();
        renderTodo();
        input.value = '';
      });
      input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') addBtn.click();
      });
      filterButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
          filterButtons.forEach(function(b) { b.classList.remove('active'); });
          btn.classList.add('active');
          currentFilter = btn.dataset.filter;
          renderTodo();
        });
      });
      loadTodo();
    }, 100);
  }

  // ============================================================
  //  35. РЕДАКТОР КОДА (исправлена нумерация строк)
  // ============================================================
  function openCodeEditor() {
    var content = '<div class="code-editor-container"><div class="code-toolbar"><select id="code-lang"><option value="javascript">JavaScript</option><option value="html">HTML</option><option value="css">CSS</option><option value="python">Python</option><option value="json">JSON</option></select><input type="text" id="code-search" placeholder="Поиск..."><button id="code-search-btn">🔍</button><button id="code-replace-btn">Заменить</button><button id="code-find-btn">Найти</button></div><div class="code-wrapper"><div class="code-line-numbers" id="code-line-numbers"></div><textarea class="code-textarea" id="code-textarea" spellcheck="false"></textarea></div></div>';
    var winId = createWindow('Редактор кода', content, { width: 700, height: 500, iconType: 'code' });
    setTimeout(function() {
      var textarea = document.getElementById('code-textarea');
      var lineNumbers = document.getElementById('code-line-numbers');
      var searchInput = document.getElementById('code-search');
      var searchBtn = document.getElementById('code-search-btn');
      var replaceBtn = document.getElementById('code-replace-btn');
      var findBtn = document.getElementById('code-find-btn');

      function updateLineNumbers() {
        var lines = textarea.value.split('\n').length;
        var html = '';
        for (var i = 1; i <= lines; i++) {
          html += i + '\n';
        }
        lineNumbers.textContent = html;
      }

      textarea.addEventListener('input', updateLineNumbers);
      textarea.addEventListener('scroll', function() {
        lineNumbers.scrollTop = textarea.scrollTop;
      });
      updateLineNumbers();

      // Поиск
      findBtn.addEventListener('click', function() {
        var query = searchInput.value;
        if (!query) { showNotification('Введите текст для поиска', 'warning'); return; }
        var content = textarea.value;
        var idx = content.indexOf(query);
        if (idx !== -1) {
          textarea.focus();
          textarea.setSelectionRange(idx, idx + query.length);
          showNotification('Найдено', 'info');
        } else {
          showNotification('Не найдено', 'warning');
        }
      });

      // Замена
      replaceBtn.addEventListener('click', function() {
        var query = searchInput.value;
        if (!query) { showNotification('Введите текст для замены', 'warning'); return; }
        var replaceWith = prompt('Введите текст для замены:');
        if (replaceWith !== null) {
          var content = textarea.value;
          var newContent = content.replaceAll(query, replaceWith);
          textarea.value = newContent;
          updateLineNumbers();
          showNotification('Замена выполнена');
        }
      });
    }, 100);
  }

  // ============================================================
  //  36. ШАХМАТЫ (с ИИ)
  // ============================================================
  function openChess() {
    var content = '<div class="chess-container"><div class="chess-board" id="chess-board"></div><div class="chess-status" id="chess-status">Ход белых</div><div class="chess-controls"><button id="chess-new">Новая игра</button><button id="chess-undo">Отменить</button></div></div>';
    var winId = createWindow('Шахматы', content, { width: 450, height: 500, iconType: 'chess' });
    setTimeout(function() {
      var boardEl = document.getElementById('chess-board');
      var statusEl = document.getElementById('chess-status');
      var newBtn = document.getElementById('chess-new');
      var undoBtn = document.getElementById('chess-undo');
      var board = [];
      var currentPlayer = 'white';
      var selected = null;
      var validMoves = [];
      var history = [];

      function initBoard() {
        board = [
          ['bR','bN','bB','bQ','bK','bB','bN','bR'],
          ['bP','bP','bP','bP','bP','bP','bP','bP'],
          ['','','','','','','',''],
          ['','','','','','','',''],
          ['','','','','','','',''],
          ['','','','','','','',''],
          ['wP','wP','wP','wP','wP','wP','wP','wP'],
          ['wR','wN','wB','wQ','wK','wB','wN','wR']
        ];
        currentPlayer = 'white';
        selected = null;
        validMoves = [];
        history = [];
        renderBoard();
        statusEl.textContent = 'Ход белых';
      }

      function renderBoard() {
        boardEl.innerHTML = '';
        for (var y = 0; y < 8; y++) {
          for (var x = 0; x < 8; x++) {
            var cell = document.createElement('div');
            cell.className = 'chess-cell ' + ((x + y) % 2 === 0 ? 'light' : 'dark');
            cell.dataset.x = x;
            cell.dataset.y = y;
            var piece = board[y][x];
            if (piece) {
              var symbol = piece[1] === 'K' ? '♔' : piece[1] === 'Q' ? '♕' : piece[1] === 'R' ? '♖' : piece[1] === 'B' ? '♗' : piece[1] === 'N' ? '♘' : piece[1] === 'P' ? '♙' : '';
              if (piece[0] === 'b') {
                symbol = symbol === '♔' ? '♚' : symbol === '♕' ? '♛' : symbol === '♖' ? '♜' : symbol === '♗' ? '♝' : symbol === '♘' ? '♞' : symbol === '♙' ? '♟' : '';
              }
              cell.textContent = symbol;
              cell.style.color = piece[0] === 'w' ? '#fff' : '#000';
            }
            if (selected && selected.x === x && selected.y === y) {
              cell.classList.add('selected');
            }
            if (validMoves.some(function(m) { return m.x === x && m.y === y; })) {
              cell.classList.add('valid');
            }
            cell.addEventListener('click', function(e) {
              var x = parseInt(this.dataset.x);
              var y = parseInt(this.dataset.y);
              onCellClick(x, y);
            });
            boardEl.appendChild(cell);
          }
        }
      }

      function onCellClick(x, y) {
        var piece = board[y][x];
        if (selected) {
          if (validMoves.some(function(m) { return m.x === x && m.y === y; })) {
            var move = { from: selected, to: { x: x, y: y }, piece: board[selected.y][selected.x], captured: board[y][x] };
            board[y][x] = board[selected.y][selected.x];
            board[selected.y][selected.x] = '';
            history.push(move);
            selected = null;
            validMoves = [];
            currentPlayer = (currentPlayer === 'white' ? 'black' : 'white');
            renderBoard();
            statusEl.textContent = 'Ход ' + (currentPlayer === 'white' ? 'белых' : 'чёрных');
            if (isCheckmate()) {
              statusEl.textContent = 'Мат! Победили ' + (currentPlayer === 'white' ? 'чёрные' : 'белые');
            } else if (isStalemate()) {
              statusEl.textContent = 'Пат! Ничья';
            } else if (isCheck()) {
              statusEl.textContent = 'Шах! ' + (currentPlayer === 'white' ? 'белым' : 'чёрным');
            }
            if (currentPlayer === 'black' && !isCheckmate() && !isStalemate()) {
              setTimeout(function() { aiMove(); }, 300);
            }
            return;
          } else {
            selected = null;
            validMoves = [];
            renderBoard();
            return;
          }
        }
        if (piece && piece[0] === (currentPlayer === 'white' ? 'w' : 'b')) {
          selected = { x: x, y: y };
          validMoves = getValidMoves(x, y);
          renderBoard();
        }
      }

      function getValidMoves(x, y) {
        var piece = board[y][x];
        if (!piece) return [];
        var color = piece[0];
        var type = piece[1];
        var moves = [];
        var dir = (color === 'w') ? -1 : 1;
        if (type === 'P') {
          var ny = y + dir;
          if (ny >= 0 && ny < 8 && board[ny][x] === '') {
            moves.push({ x: x, y: ny });
            if ((color === 'w' && y === 6) || (color === 'b' && y === 1)) {
              var ny2 = y + 2*dir;
              if (board[ny2][x] === '') moves.push({ x: x, y: ny2 });
            }
          }
          for (var dx = -1; dx <= 1; dx += 2) {
            var nx = x + dx;
            if (nx >= 0 && nx < 8) {
              var ny = y + dir;
              if (ny >= 0 && ny < 8 && board[ny][nx] !== '' && board[ny][nx][0] !== color) {
                moves.push({ x: nx, y: ny });
              }
            }
          }
        } else if (type === 'N') {
          var offsets = [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];
          offsets.forEach(function(o) {
            var nx = x + o[0], ny = y + o[1];
            if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8 && (board[ny][nx] === '' || board[ny][nx][0] !== color)) {
              moves.push({ x: nx, y: ny });
            }
          });
        } else if (type === 'B' || type === 'Q') {
          var dirsB = [[-1,-1],[-1,1],[1,-1],[1,1]];
          dirsB.forEach(function(d) {
            for (var i = 1; i < 8; i++) {
              var nx = x + i*d[0], ny = y + i*d[1];
              if (nx < 0 || nx >= 8 || ny < 0 || ny >= 8) break;
              if (board[ny][nx] === '') moves.push({ x: nx, y: ny });
              else {
                if (board[ny][nx][0] !== color) moves.push({ x: nx, y: ny });
                break;
              }
            }
          });
        }
        if (type === 'R' || type === 'Q') {
          var dirsR = [[-1,0],[1,0],[0,-1],[0,1]];
          dirsR.forEach(function(d) {
            for (var i = 1; i < 8; i++) {
              var nx = x + i*d[0], ny = y + i*d[1];
              if (nx < 0 || nx >= 8 || ny < 0 || ny >= 8) break;
              if (board[ny][nx] === '') moves.push({ x: nx, y: ny });
              else {
                if (board[ny][nx][0] !== color) moves.push({ x: nx, y: ny });
                break;
              }
            }
          });
        }
        if (type === 'K') {
          for (var dy = -1; dy <= 1; dy++) {
            for (var dx = -1; dx <= 1; dx++) {
              if (dx === 0 && dy === 0) continue;
              var nx = x + dx, ny = y + dy;
              if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8 && (board[ny][nx] === '' || board[ny][nx][0] !== color)) {
                moves.push({ x: nx, y: ny });
              }
            }
          }
        }
        return moves;
      }

      function isCheck() {
        var king = (currentPlayer === 'white' ? 'wK' : 'bK');
        var kingPos = null;
        for (var y = 0; y < 8; y++) {
          for (var x = 0; x < 8; x++) {
            if (board[y][x] === king) kingPos = { x: x, y: y };
          }
        }
        if (!kingPos) return true;
        var enemyColor = (currentPlayer === 'white' ? 'b' : 'w');
        for (var y2 = 0; y2 < 8; y2++) {
          for (var x2 = 0; x2 < 8; x2++) {
            var piece = board[y2][x2];
            if (piece && piece[0] === enemyColor) {
              var moves = getValidMoves(x2, y2);
              if (moves.some(function(m) { return m.x === kingPos.x && m.y === kingPos.y; })) {
                return true;
              }
            }
          }
        }
        return false;
      }

      function isCheckmate() {
        if (!isCheck()) return false;
        for (var y = 0; y < 8; y++) {
          for (var x = 0; x < 8; x++) {
            var piece = board[y][x];
            if (piece && piece[0] === (currentPlayer === 'white' ? 'w' : 'b')) {
              var moves = getValidMoves(x, y);
              for (var i = 0; i < moves.length; i++) {
                var move = moves[i];
                var captured = board[move.y][move.x];
                board[move.y][move.x] = piece;
                board[y][x] = '';
                var check = isCheck();
                board[y][x] = piece;
                board[move.y][move.x] = captured;
                if (!check) return false;
              }
            }
          }
        }
        return true;
      }

      function isStalemate() {
        if (isCheck()) return false;
        for (var y = 0; y < 8; y++) {
          for (var x = 0; x < 8; x++) {
            var piece = board[y][x];
            if (piece && piece[0] === (currentPlayer === 'white' ? 'w' : 'b')) {
              var moves = getValidMoves(x, y);
              for (var i = 0; i < moves.length; i++) {
                var move = moves[i];
                var captured = board[move.y][move.x];
                board[move.y][move.x] = piece;
                board[y][x] = '';
                var check = isCheck();
                board[y][x] = piece;
                board[move.y][move.x] = captured;
                if (!check) return false;
              }
            }
          }
        }
        return true;
      }

      function aiMove() {
        var moves = [];
        for (var y = 0; y < 8; y++) {
          for (var x = 0; x < 8; x++) {
            var piece = board[y][x];
            if (piece && piece[0] === 'b') {
              var m = getValidMoves(x, y);
              if (m.length) {
                m.forEach(function(move) {
                  moves.push({ from: { x: x, y: y }, to: move });
                });
              }
            }
          }
        }
        if (moves.length === 0) return;
        var move = moves[Math.floor(Math.random() * moves.length)];
        board[move.to.y][move.to.x] = board[move.from.y][move.from.x];
        board[move.from.y][move.from.x] = '';
        currentPlayer = 'white';
        renderBoard();
        statusEl.textContent = 'Ход белых';
        if (isCheckmate()) {
          statusEl.textContent = 'Мат! Победили чёрные';
        } else if (isStalemate()) {
          statusEl.textContent = 'Пат! Ничья';
        } else if (isCheck()) {
          statusEl.textContent = 'Шах белым!';
        }
      }

      newBtn.addEventListener('click', initBoard);
      undoBtn.addEventListener('click', function() {
        if (history.length === 0) return;
        var move = history.pop();
        board[move.from.y][move.from.x] = move.piece;
        board[move.to.y][move.to.x] = move.captured || '';
        currentPlayer = (currentPlayer === 'white' ? 'black' : 'white');
        renderBoard();
        statusEl.textContent = 'Ход ' + (currentPlayer === 'white' ? 'белых' : 'чёрных');
      });

      initBoard();
    }, 100);
  }

  // ============================================================
  //  37. КРЕСТИКИ-НОЛИКИ (с ИИ)
  // ============================================================
  function openTicTacToe() {
    var content = '<div class="tic-container"><div class="tic-board" id="tic-board"></div><div class="tic-status" id="tic-status">Ваш ход (X)</div><div class="tic-controls"><select id="tic-difficulty"><option value="easy">Лёгкий</option><option value="medium">Средний</option><option value="hard">Сложный</option></select><button id="tic-new">Новая игра</button></div></div>';
    var winId = createWindow('Крестики-нолики', content, { width: 350, height: 450, iconType: 'tic' });
    setTimeout(function() {
      var boardEl = document.getElementById('tic-board');
      var statusEl = document.getElementById('tic-status');
      var diffSelect = document.getElementById('tic-difficulty');
      var newBtn = document.getElementById('tic-new');
      var board = Array(9).fill('');
      var currentPlayer = 'X';
      var gameOver = false;

      function initGame() {
        board = Array(9).fill('');
        currentPlayer = 'X';
        gameOver = false;
        renderBoard();
        statusEl.textContent = 'Ваш ход (X)';
      }

      function renderBoard() {
        boardEl.innerHTML = '';
        for (var i = 0; i < 9; i++) {
          var cell = document.createElement('div');
          cell.className = 'tic-cell';
          cell.textContent = board[i];
          if (board[i] === 'X') cell.style.color = '#4a69bd';
          else if (board[i] === 'O') cell.style.color = '#e74c3c';
          cell.addEventListener('click', function() {
            var idx = parseInt(this.dataset.idx);
            if (gameOver || board[idx] !== '' || currentPlayer !== 'X') return;
            makeMove(idx, 'X');
          });
          cell.dataset.idx = i;
          boardEl.appendChild(cell);
        }
      }

      function makeMove(idx, player) {
        board[idx] = player;
        renderBoard();
        var winner = checkWinner();
        if (winner) {
          gameOver = true;
          statusEl.textContent = (winner === 'X' ? 'Вы победили!' : 'ИИ победил!');
          return;
        }
        if (board.every(function(c) { return c !== ''; })) {
          gameOver = true;
          statusEl.textContent = 'Ничья!';
          return;
        }
        if (player === 'X') {
          currentPlayer = 'O';
          statusEl.textContent = 'Ход ИИ (O)...';
          setTimeout(function() { aiMove(); }, 300);
        } else {
          currentPlayer = 'X';
          statusEl.textContent = 'Ваш ход (X)';
        }
      }

      function checkWinner() {
        var lines = [
          [0,1,2],[3,4,5],[6,7,8],
          [0,3,6],[1,4,7],[2,5,8],
          [0,4,8],[2,4,6]
        ];
        for (var i = 0; i < lines.length; i++) {
          var a = lines[i][0], b = lines[i][1], c = lines[i][2];
          if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
          }
        }
        return null;
      }

      function aiMove() {
        var difficulty = diffSelect.value;
        var bestScore = -Infinity;
        var bestMove = null;
        var empty = [];
        board.forEach(function(cell, idx) { if (cell === '') empty.push(idx); });
        if (empty.length === 0) return;
        if (difficulty === 'easy') {
          bestMove = empty[Math.floor(Math.random() * empty.length)];
        } else {
          for (var i = 0; i < empty.length; i++) {
            var idx = empty[i];
            board[idx] = 'O';
            var score = minimax(board, 0, false);
            board[idx] = '';
            if (score > bestScore) {
              bestScore = score;
              bestMove = idx;
            }
          }
        }
        if (bestMove !== null) {
          makeMove(bestMove, 'O');
        }
      }

      function minimax(board, depth, isMaximizing) {
        var winner = checkWinner();
        if (winner === 'O') return 10 - depth;
        if (winner === 'X') return depth - 10;
        if (board.every(function(c) { return c !== ''; })) return 0;
        var empty = [];
        board.forEach(function(cell, idx) { if (cell === '') empty.push(idx); });
        if (isMaximizing) {
          var best = -Infinity;
          for (var i = 0; i < empty.length; i++) {
            board[empty[i]] = 'O';
            var score = minimax(board, depth + 1, false);
            board[empty[i]] = '';
            best = Math.max(best, score);
          }
          return best;
        } else {
          var best = Infinity;
          for (var i = 0; i < empty.length; i++) {
            board[empty[i]] = 'X';
            var score = minimax(board, depth + 1, true);
            board[empty[i]] = '';
            best = Math.min(best, score);
          }
          return best;
        }
      }

      newBtn.addEventListener('click', initGame);
      initGame();
    }, 100);
  }

  // ============================================================
  //  38. AI ART GENERATOR (Pollinations.ai)
  // ============================================================
  function openArtGenerator() {
    var content = '<div class="art-container"><div class="art-input-row"><input type="text" id="art-prompt" placeholder="Опишите изображение..." value="красивый закат над морем"><button id="art-generate">Сгенерировать</button></div><div class="art-result" id="art-result"><div class="art-placeholder">Введите описание и нажмите "Сгенерировать"</div></div></div>';
    var winId = createWindow('AI Art Generator', content, { width: 500, height: 450, iconType: 'art' });
    setTimeout(function() {
      var promptInput = document.getElementById('art-prompt');
      var generateBtn = document.getElementById('art-generate');
      var resultDiv = document.getElementById('art-result');

      generateBtn.addEventListener('click', function() {
        var prompt = promptInput.value.trim();
        if (!prompt) { showNotification('Введите описание', 'warning'); return; }
        resultDiv.innerHTML = '<div class="art-loading">⏳ Генерация изображения...</div>';
        // Используем Pollinations.ai (бесплатно, без ключа)
        var url = 'https://image.pollinations.ai/prompt/' + encodeURIComponent(prompt) + '?width=512&height=512&nologo=true';
        var img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function() {
          resultDiv.innerHTML = '<img src="' + url + '" alt="Сгенерированное изображение"><br><button onclick="(function(){var link=document.createElement(\'a\');link.href=\'' + url + '\';link.download=\'ai_art.png\';link.click();})()" style="margin-top:8px;padding:4px 16px;background:var(--accent);color:#fff;border-radius:4px;">💾 Скачать</button>';
          showNotification('Изображение сгенерировано');
        };
        img.onerror = function() {
          resultDiv.innerHTML = '<div style="color:#ff5555;text-align:center;padding:20px;">Ошибка генерации. Попробуйте другой запрос.</div>';
          showNotification('Ошибка генерации', 'error');
        };
        img.src = url;
      });
    }, 100);
  }

  // ============================================================
  //  39. ПЕРЕВОДЧИК (LibreTranslate)
  // ============================================================
  function openTranslator() {
    var content = '<div class="translate-container"><div class="translate-row"><select id="translate-from"><option value="ru">Русский</option><option value="en">Английский</option><option value="de">Немецкий</option><option value="fr">Французский</option><option value="es">Испанский</option></select><select id="translate-to"><option value="en">Английский</option><option value="ru">Русский</option><option value="de">Немецкий</option><option value="fr">Французский</option><option value="es">Испанский</option></select><button id="translate-btn">Перевести</button></div><div class="translate-row"><textarea id="translate-input" placeholder="Введите текст..."></textarea></div><div class="translate-result" id="translate-result">Перевод...</div></div>';
    var winId = createWindow('Переводчик', content, { width: 450, height: 400, iconType: 'translate' });
    setTimeout(function() {
      var from = document.getElementById('translate-from');
      var to = document.getElementById('translate-to');
      var input = document.getElementById('translate-input');
      var result = document.getElementById('translate-result');
      var btn = document.getElementById('translate-btn');

      btn.addEventListener('click', function() {
        var text = input.value.trim();
        if (!text) { showNotification('Введите текст', 'warning'); return; }
        result.textContent = 'Перевод...';
        // Используем бесплатный API LibreTranslate
        fetch('https://libretranslate.de/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ q: text, source: from.value, target: to.value, format: 'text' })
        })
        .then(function(resp) { return resp.json(); })
        .then(function(data) {
          if (data && data.translatedText) {
            result.textContent = data.translatedText;
          } else {
            result.textContent = 'Ошибка перевода';
          }
        })
        .catch(function(err) {
          result.textContent = 'Ошибка: ' + err.message;
          showNotification('Ошибка соединения с сервером', 'error');
        });
      });
    }, 100);
  }

  // ============================================================
  //  40. ВИКИПЕДИЯ (офлайн-ридер)
  // ============================================================
  function openWikipedia() {
    var content = '<div class="wiki-container"><div class="wiki-search-row"><input type="text" id="wiki-search" placeholder="Поиск в Википедии..."><button id="wiki-search-btn">Найти</button></div><div class="wiki-result" id="wiki-result"><div class="wiki-placeholder">Введите запрос</div></div></div>';
    var winId = createWindow('Википедия', content, { width: 500, height: 400, iconType: 'wiki' });
    setTimeout(function() {
      var searchInput = document.getElementById('wiki-search');
      var searchBtn = document.getElementById('wiki-search-btn');
      var resultDiv = document.getElementById('wiki-result');
      var cache = {};

      function searchWikipedia(query) {
        if (cache[query]) {
          displayResult(cache[query]);
          return;
        }
        resultDiv.innerHTML = '<div style="color:#888;text-align:center;padding:20px;">Загрузка...</div>';
        fetch('https://ru.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(query))
          .then(function(resp) { return resp.json(); })
          .then(function(data) {
            if (data.title && data.extract) {
              cache[query] = data;
              displayResult(data);
            } else {
              resultDiv.innerHTML = '<div style="color:#ff5555;text-align:center;padding:20px;">Статья не найдена</div>';
            }
          })
          .catch(function(err) {
            resultDiv.innerHTML = '<div style="color:#ff5555;text-align:center;padding:20px;">Ошибка: ' + err.message + '</div>';
          });
      }

      function displayResult(data) {
        var html = '<h2>' + data.title + '</h2>';
        if (data.thumbnail) {
          html += '<img src="' + data.thumbnail.source + '" style="max-width:100%;max-height:200px;border-radius:4px;margin:8px 0;">';
        }
        html += '<p>' + data.extract + '</p>';
        if (data.content_urls && data.content_urls.desktop) {
          html += '<p><a href="' + data.content_urls.desktop.page + '" target="_blank" style="color:var(--accent);">Читать на Wikipedia</a></p>';
        }
        resultDiv.innerHTML = html;
      }

      searchBtn.addEventListener('click', function() {
        var query = searchInput.value.trim();
        if (query) searchWikipedia(query);
      });
      searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') searchBtn.click();
      });
    }, 100);
  }

  // ============================================================
  //  41. КУРСЫ ВАЛЮТ (реальные)
  // ============================================================
  function openCurrency() {
    var content = '<div class="currency-container"><div class="currency-controls"><select id="currency-base"><option value="USD">USD</option><option value="EUR">EUR</option><option value="RUB">RUB</option></select><button id="currency-refresh">Обновить</button></div><table class="currency-table"><thead><tr><th>Валюта</th><th>Курс</th><th>Изменение</th></tr></thead><tbody id="currency-body"></tbody></table><div class="currency-update" id="currency-update"></div><div class="currency-graph"><canvas id="currency-graph-canvas"></canvas></div></div>';
    var winId = createWindow('Курсы валют', content, { width: 500, height: 450, iconType: 'currency' });
    setTimeout(function() {
      var baseSelect = document.getElementById('currency-base');
      var refreshBtn = document.getElementById('currency-refresh');
      var body = document.getElementById('currency-body');
      var updateEl = document.getElementById('currency-update');
      var canvas = document.getElementById('currency-graph-canvas');
      var ctx = canvas.getContext('2d');
      var historyData = [];

      function fetchRates(base) {
        var url = 'https://api.exchangerate-api.com/v4/latest/' + base;
        fetch(url)
          .then(function(resp) { return resp.json(); })
          .then(function(data) {
            var rates = data.rates;
            var date = data.date;
            updateEl.textContent = 'Обновлено: ' + date;
            body.innerHTML = '';
            var selectedCurrencies = ['USD','EUR','RUB','GBP','JPY','CNY','CAD','AUD','CHF'];
            selectedCurrencies.forEach(function(cur) {
              if (cur !== base) {
                var rate = rates[cur];
                var change = (Math.random() - 0.5) * 2;
                var tr = document.createElement('tr');
                tr.innerHTML = '<td>' + cur + '</td><td>' + rate.toFixed(4) + '</td><td>' + (change > 0 ? '▲' : '▼') + ' ' + Math.abs(change).toFixed(2) + '%</td>';
                body.appendChild(tr);
                if (cur === 'USD') {
                  historyData.push(rate);
                  if (historyData.length > 20) historyData.shift();
                  drawGraph(historyData);
                }
              }
            });
          })
          .catch(function(err) {
            showNotification('Ошибка загрузки курсов: ' + err.message, 'error');
          });
      }

      function drawGraph(data) {
        if (data.length < 2) return;
        canvas.width = canvas.offsetWidth || 400;
        canvas.height = canvas.offsetHeight || 150;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var max = Math.max.apply(null, data);
        var min = Math.min.apply(null, data);
        var range = max - min || 1;
        ctx.strokeStyle = '#50fa7b';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (var i = 0; i < data.length; i++) {
          var x = (i / (data.length - 1)) * canvas.width;
          var y = canvas.height - ((data[i] - min) / range) * (canvas.height - 20) - 10;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      refreshBtn.addEventListener('click', function() {
        var base = baseSelect.value;
        fetchRates(base);
      });
      fetchRates('USD');
      setInterval(function() {
        var base = baseSelect.value;
        fetchRates(base);
      }, 60000);
    }, 100);
  }

  // ============================================================
  //  42. VIRUCIDE (антивирус)
  // ============================================================
  function openVirucide() {
    var content = '<div class="virucide-container"><div class="virucide-status"><div class="status-text">🛡️ Антивирус Virucide</div><div class="status-detail">Статус: Ожидание сканирования</div></div><button class="virucide-scan-btn" id="virucide-scan">🔍 Сканировать</button><div class="virucide-results" id="virucide-results"></div></div>';
    var winId = createWindow('Virucide', content, { width: 450, height: 400, iconType: 'virucide' });
    setTimeout(function() {
      var scanBtn = document.getElementById('virucide-scan');
      var resultsDiv = document.getElementById('virucide-results');
      var statusDetail = document.querySelector('.virucide-status .status-detail');

      scanBtn.addEventListener('click', function() {
        statusDetail.textContent = 'Сканирование...';
        resultsDiv.innerHTML = '';
        // Имитация сканирования
        var files = ['readme.txt', 'system.log', 'config.json', 'notes.txt', 'passwords.json'];
        var threats = ['virus.exe', 'trojan.bat', 'malware.js'];
        var scanResults = [];
        files.forEach(function(file) {
          var isInfected = Math.random() < 0.2;
          scanResults.push({ name: file, infected: isInfected });
        });
        // Добавим пару угроз для наглядности
        threats.forEach(function(t) {
          scanResults.push({ name: t, infected: true });
        });
        // Перемешиваем
        scanResults.sort(function() { return Math.random() - 0.5; });
        setTimeout(function() {
          var infected = scanResults.filter(function(r) { return r.infected; });
          var safe = scanResults.filter(function(r) { return !r.infected; });
          statusDetail.textContent = 'Сканирование завершено. Найдено: ' + infected.length + ' угроз.';
          resultsDiv.innerHTML = '';
          safe.slice(0, 5).forEach(function(r) {
            var div = document.createElement('div');
            div.className = 'scan-item';
            div.innerHTML = '<span>' + r.name + '</span><span class="status-safe">✅ Безопасно</span>';
            resultsDiv.appendChild(div);
          });
          infected.forEach(function(r) {
            var div = document.createElement('div');
            div.className = 'scan-item';
            div.innerHTML = '<span>' + r.name + '</span><span class="status-infected">⚠️ Обнаружена угроза!</span>';
            resultsDiv.appendChild(div);
          });
          if (infected.length === 0) {
            var div = document.createElement('div');
            div.className = 'scan-item';
            div.innerHTML = '<span style="color:#50fa7b;">✅ Угроз не обнаружено</span>';
            resultsDiv.appendChild(div);
          }
          showNotification('Сканирование завершено', 'info');
        }, 2000);
      });
    }, 100);
  }

  // ============================================================
  //  43. TABLIQ (таблицы)
  // ============================================================
  function openTabliq() {
    var content = '<div class="tabliq-container"><div class="tabliq-toolbar"><button id="tabliq-add-row">+ Строка</button><button id="tabliq-add-col">+ Столбец</button><button id="tabliq-del-row">- Строка</button><button id="tabliq-del-col">- Столбец</button><button id="tabliq-clear">Очистить</button></div><div class="tabliq-table-wrap"><table id="tabliq-table"><tr><td contenteditable="true">A1</td><td contenteditable="true">B1</td><td contenteditable="true">C1</td></tr><tr><td contenteditable="true">A2</td><td contenteditable="true">B2</td><td contenteditable="true">C2</td></tr><tr><td contenteditable="true">A3</td><td contenteditable="true">B3</td><td contenteditable="true">C3</td></tr></table></div><div class="tabliq-formula">💡 Двойной клик для редактирования. Простые формулы: =SUM(A1:A3)</div></div>';
    var winId = createWindow('Tabliq (таблицы)', content, { width: 550, height: 450, iconType: 'tabliq' });
    setTimeout(function() {
      var table = document.getElementById('tabliq-table');
      var addRowBtn = document.getElementById('tabliq-add-row');
      var addColBtn = document.getElementById('tabliq-add-col');
      var delRowBtn = document.getElementById('tabliq-del-row');
      var delColBtn = document.getElementById('tabliq-del-col');
      var clearBtn = document.getElementById('tabliq-clear');

      function updateTable() {
        // Простая обработка формул =SUM(A1:A3)
        var cells = table.querySelectorAll('td');
        cells.forEach(function(cell) {
          var text = cell.textContent.trim();
          if (text.startsWith('=SUM(') && text.endsWith(')')) {
            var range = text.substring(5, text.length - 1);
            var parts = range.split(':');
            if (parts.length === 2) {
              var start = parts[0];
              var end = parts[1];
              var startRow = parseInt(start.match(/\d+/)[0]) - 1;
              var startCol = start.charCodeAt(0) - 65;
              var endRow = parseInt(end.match(/\d+/)[0]) - 1;
              var endCol = end.charCodeAt(0) - 65;
              var sum = 0;
              var allCells = table.querySelectorAll('td');
              for (var r = startRow; r <= endRow; r++) {
                for (var c = startCol; c <= endCol; c++) {
                  var idx = r * (table.rows[0] ? table.rows[0].cells.length : 0) + c;
                  if (allCells[idx]) {
                    var val = parseFloat(allCells[idx].textContent);
                    if (!isNaN(val)) sum += val;
                  }
                }
              }
              cell.textContent = sum;
            }
          }
        });
      }

      addRowBtn.addEventListener('click', function() {
        var row = table.insertRow(-1);
        var cols = table.rows[0] ? table.rows[0].cells.length : 3;
        for (var i = 0; i < cols; i++) {
          var cell = row.insertCell(i);
          cell.contentEditable = 'true';
          cell.textContent = '';
        }
        updateTable();
      });

      addColBtn.addEventListener('click', function() {
        var rows = table.rows;
        for (var i = 0; i < rows.length; i++) {
          var cell = rows[i].insertCell(-1);
          cell.contentEditable = 'true';
          cell.textContent = '';
        }
        updateTable();
      });

      delRowBtn.addEventListener('click', function() {
        if (table.rows.length > 1) {
          table.deleteRow(-1);
          updateTable();
        } else {
          showNotification('Нельзя удалить последнюю строку', 'warning');
        }
      });

      delColBtn.addEventListener('click', function() {
        if (table.rows[0] && table.rows[0].cells.length > 1) {
          for (var i = 0; i < table.rows.length; i++) {
            table.rows[i].deleteCell(-1);
          }
          updateTable();
        } else {
          showNotification('Нельзя удалить последний столбец', 'warning');
        }
      });

      clearBtn.addEventListener('click', function() {
        if (confirm('Очистить все данные?')) {
          var cells = table.querySelectorAll('td');
          cells.forEach(function(cell) {
            cell.textContent = '';
          });
          updateTable();
        }
      });

      // Обновляем при изменении
      table.addEventListener('input', updateTable);
      table.addEventListener('blur', updateTable);
      updateTable();
    }, 100);
  }

  // ============================================================
  //  44. СИМУЛЯТОР ТОРГОВОЙ ПЛАТФОРМЫ
  // ============================================================
  function openTrader() {
    var content = '<div class="trader-container"><div class="trader-stats"><div class="stat-box"><div class="stat-label">Комиссия</div><div class="stat-value" id="trader-commission">5%</div></div><div class="stat-box"><div class="stat-label">Доход</div><div class="stat-value green" id="trader-income">0 кредитов</div></div><div class="stat-box"><div class="stat-label">Товаров</div><div class="stat-value" id="trader-goods">0</div></div></div><div class="trader-controls"><button id="trader-trade">📈 Заключить сделку</button><button id="trader-upgrade">⬆ Улучшить платформу</button><button id="trader-risk">⚠️ Рискнуть</button></div><div class="trader-log" id="trader-log"><div class="log-entry"><span class="log-time">[Старт]</span> Платформа запущена</div></div></div>';
    var winId = createWindow('Торговая платформа', content, { width: 500, height: 450, iconType: 'trader' });
    setTimeout(function() {
      var commission = 5;
      var income = 0;
      var goods = 0;
      var reputation = 50;
      var logEl = document.getElementById('trader-log');
      var commissionEl = document.getElementById('trader-commission');
      var incomeEl = document.getElementById('trader-income');
      var goodsEl = document.getElementById('trader-goods');

      function addLog(message) {
        var div = document.createElement('div');
        div.className = 'log-entry';
        var time = new Date().toLocaleTimeString();
        div.innerHTML = '<span class="log-time">[' + time + ']</span> ' + message;
        logEl.appendChild(div);
        logEl.scrollTop = logEl.scrollHeight;
      }

      function updateStats() {
        commissionEl.textContent = commission + '%';
        incomeEl.textContent = income + ' кредитов';
        incomeEl.className = 'stat-value ' + (income >= 0 ? 'green' : 'red');
        goodsEl.textContent = goods;
      }

      document.getElementById('trader-trade').addEventListener('click', function() {
        var profit = Math.floor(Math.random() * 50 + 10) * (1 + commission / 20);
        income += profit;
        goods += Math.floor(Math.random() * 5 + 1);
        addLog('📊 Сделка заключена. Прибыль: +' + profit + ' кредитов');
        updateStats();
      });

      document.getElementById('trader-upgrade').addEventListener('click', function() {
        if (income >= 100) {
          income -= 100;
          commission += 1;
          addLog('⬆ Платформа улучшена. Комиссия: ' + commission + '%');
          updateStats();
        } else {
          addLog('❌ Недостаточно средств для улучшения');
        }
      });

      document.getElementById('trader-risk').addEventListener('click', function() {
        var risk = Math.random();
        if (risk < 0.3) {
          var loss = Math.floor(Math.random() * 30 + 10);
          income -= loss;
          addLog('⚠️ Риск не оправдался! Потеря: -' + loss + ' кредитов');
        } else if (risk < 0.6) {
          var gain = Math.floor(Math.random() * 40 + 20);
          income += gain;
          addLog('🎉 Риск оправдался! Прибыль: +' + gain + ' кредитов');
        } else {
          addLog('😅 Риск не повлиял на рынок');
        }
        updateStats();
      });

      // Автоматические события
      setInterval(function() {
        var event = Math.random();
        if (event < 0.1) {
          var bonus = Math.floor(Math.random() * 10 + 5);
          income += bonus;
          addLog('📈 Рынок вырос! Бонус: +' + bonus + ' кредитов');
          updateStats();
        } else if (event < 0.15) {
          var penalty = Math.floor(Math.random() * 10 + 5);
          income -= penalty;
          addLog('📉 Рынок упал! Потеря: -' + penalty + ' кредитов');
          updateStats();
        }
      }, 15000);
    }, 100);
  }

  // ============================================================
  //  45. ИГРА 2048
  // ============================================================
  function open2048() {
    var content = '<div class="game2048-container"><div class="game2048-score" id="game2048-score">Счёт: 0</div><div class="game2048-board" id="game2048-board"></div><div class="game2048-controls"><button id="game2048-new">Новая игра</button></div></div>';
    var winId = createWindow('2048', content, { width: 450, height: 500, iconType: 'g2048' });
    setTimeout(function() {
      var boardEl = document.getElementById('game2048-board');
      var scoreEl = document.getElementById('game2048-score');
      var newBtn = document.getElementById('game2048-new');
      var board = Array(4).fill().map(function() { return Array(4).fill(0); });
      var score = 0;
      var gameOver = false;

      function initGame() {
        board = Array(4).fill().map(function() { return Array(4).fill(0); });
        score = 0;
        gameOver = false;
        addRandomTile();
        addRandomTile();
        renderBoard();
        scoreEl.textContent = 'Счёт: 0';
      }

      function addRandomTile() {
        var empty = [];
        for (var y = 0; y < 4; y++) {
          for (var x = 0; x < 4; x++) {
            if (board[y][x] === 0) empty.push({ x: x, y: y });
          }
        }
        if (empty.length === 0) return;
        var pos = empty[Math.floor(Math.random() * empty.length)];
        board[pos.y][pos.x] = Math.random() < 0.9 ? 2 : 4;
      }

      function renderBoard() {
        boardEl.innerHTML = '';
        for (var y = 0; y < 4; y++) {
          for (var x = 0; x < 4; x++) {
            var cell = document.createElement('div');
            cell.className = 'game2048-cell';
            var val = board[y][x];
            cell.textContent = val || '';
            cell.dataset.value = val;
            boardEl.appendChild(cell);
          }
        }
      }

      function move(direction) {
        if (gameOver) return;
        var moved = false;
        var newBoard = board.map(function(row) { return row.slice(); });
        // Простое перемещение (без слияния для краткости)
        // Полная реализация слишком длинная, но для демо упростим
        if (direction === 'up') {
          for (var x = 0; x < 4; x++) {
            var col = [];
            for (var y = 0; y < 4; y++) {
              if (board[y][x] !== 0) col.push(board[y][x]);
            }
            for (var y = 0; y < col.length; y++) {
              if (y + 1 < col.length && col[y] === col[y+1]) {
                col[y] *= 2;
                score += col[y];
                col.splice(y+1, 1);
              }
            }
            while (col.length < 4) col.push(0);
            for (var y = 0; y < 4; y++) {
              if (board[y][x] !== col[y]) moved = true;
              board[y][x] = col[y];
            }
          }
        } else if (direction === 'down') {
          for (var x = 0; x < 4; x++) {
            var col = [];
            for (var y = 3; y >= 0; y--) {
              if (board[y][x] !== 0) col.push(board[y][x]);
            }
            for (var y = 0; y < col.length; y++) {
              if (y + 1 < col.length && col[y] === col[y+1]) {
                col[y] *= 2;
                score += col[y];
                col.splice(y+1, 1);
              }
            }
            while (col.length < 4) col.push(0);
            for (var y = 0; y < 4; y++) {
              if (board[3-y][x] !== col[y]) moved = true;
              board[3-y][x] = col[y];
            }
          }
        } else if (direction === 'left') {
          for (var y = 0; y < 4; y++) {
            var row = [];
            for (var x = 0; x < 4; x++) {
              if (board[y][x] !== 0) row.push(board[y][x]);
            }
            for (var x = 0; x < row.length; x++) {
              if (x + 1 < row.length && row[x] === row[x+1]) {
                row[x] *= 2;
                score += row[x];
                row.splice(x+1, 1);
              }
            }
            while (row.length < 4) row.push(0);
            for (var x = 0; x < 4; x++) {
              if (board[y][x] !== row[x]) moved = true;
              board[y][x] = row[x];
            }
          }
        } else if (direction === 'right') {
          for (var y = 0; y < 4; y++) {
            var row = [];
            for (var x = 3; x >= 0; x--) {
              if (board[y][x] !== 0) row.push(board[y][x]);
            }
            for (var x = 0; x < row.length; x++) {
              if (x + 1 < row.length && row[x] === row[x+1]) {
                row[x] *= 2;
                score += row[x];
                row.splice(x+1, 1);
              }
            }
            while (row.length < 4) row.push(0);
            for (var x = 0; x < 4; x++) {
              if (board[y][3-x] !== row[x]) moved = true;
              board[y][3-x] = row[x];
            }
          }
        }
        if (moved) {
          addRandomTile();
          renderBoard();
          scoreEl.textContent = 'Счёт: ' + score;
          // Проверка на победу/поражение
          if (checkWin()) {
            gameOver = true;
            showNotification('🎉 Вы выиграли! Счёт: ' + score, 'warning');
          } else if (checkLose()) {
            gameOver = true;
            showNotification('💀 Игра окончена! Счёт: ' + score, 'error');
          }
        }
      }

      function checkWin() {
        for (var y = 0; y < 4; y++) {
          for (var x = 0; x < 4; x++) {
            if (board[y][x] === 2048) return true;
          }
        }
        return false;
      }

      function checkLose() {
        for (var y = 0; y < 4; y++) {
          for (var x = 0; x < 4; x++) {
            if (board[y][x] === 0) return false;
            if (x < 3 && board[y][x] === board[y][x+1]) return false;
            if (y < 3 && board[y][x] === board[y+1][x]) return false;
          }
        }
        return true;
      }

      document.addEventListener('keydown', function(e) {
        var key = e.key;
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(key) !== -1) {
          e.preventDefault();
          var dir = key.replace('Arrow', '').toLowerCase();
          move(dir);
        }
      });

      newBtn.addEventListener('click', initGame);
      initGame();
    }, 100);
  }

  // ============================================================
  //  46. ИГРА ПЯТНАШКИ
  // ============================================================
  function openPuzzle() {
    var content = '<div class="puzzle-container"><div class="puzzle-board" id="puzzle-board"></div><div class="puzzle-status" id="puzzle-status">Соберите картинку</div><div class="puzzle-controls"><button id="puzzle-new">Новая игра</button><button id="puzzle-shuffle">Перемешать</button></div></div>';
    var winId = createWindow('Пятнашки', content, { width: 450, height: 500, iconType: 'puzzle' });
    setTimeout(function() {
      var boardEl = document.getElementById('puzzle-board');
      var statusEl = document.getElementById('puzzle-status');
      var newBtn = document.getElementById('puzzle-new');
      var shuffleBtn = document.getElementById('puzzle-shuffle');
      var size = 4;
      var board = [];
      var emptyPos = { x: 3, y: 3 };
      var moves = 0;

      function initBoard() {
        board = [];
        var nums = [];
        for (var i = 1; i < size*size; i++) nums.push(i);
        nums.push(0);
        // Перемешиваем
        for (var i = nums.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = nums[i];
          nums[i] = nums[j];
          nums[j] = temp;
        }
        for (var y = 0; y < size; y++) {
          board[y] = [];
          for (var x = 0; x < size; x++) {
            board[y][x] = nums[y * size + x];
            if (board[y][x] === 0) {
              emptyPos.x = x;
              emptyPos.y = y;
            }
          }
        }
        moves = 0;
        renderBoard();
        statusEl.textContent = 'Соберите картинку (ходов: ' + moves + ')';
      }

      function renderBoard() {
        boardEl.innerHTML = '';
        for (var y = 0; y < size; y++) {
          for (var x = 0; x < size; x++) {
            var cell = document.createElement('div');
            cell.className = 'puzzle-cell' + (board[y][x] === 0 ? ' empty' : '');
            cell.textContent = board[y][x] || '';
            cell.addEventListener('click', function() {
              var x = parseInt(this.dataset.x);
              var y = parseInt(this.dataset.y);
              moveTile(x, y);
            });
            cell.dataset.x = x;
            cell.dataset.y = y;
            boardEl.appendChild(cell);
          }
        }
      }

      function moveTile(x, y) {
        var dx = Math.abs(x - emptyPos.x);
        var dy = Math.abs(y - emptyPos.y);
        if ((dx === 1 && dy === 0) || (dx === 0 && dy === 1)) {
          board[emptyPos.y][emptyPos.x] = board[y][x];
          board[y][x] = 0;
          emptyPos.x = x;
          emptyPos.y = y;
          moves++;
          renderBoard();
          statusEl.textContent = 'Соберите картинку (ходов: ' + moves + ')';
          if (checkWin()) {
            statusEl.textContent = '🎉 Поздравляем! Вы собрали картинку за ' + moves + ' ходов!';
          }
        }
      }

      function checkWin() {
        var expected = 1;
        for (var y = 0; y < size; y++) {
          for (var x = 0; x < size; x++) {
            if (y === size-1 && x === size-1) {
              if (board[y][x] !== 0) return false;
            } else {
              if (board[y][x] !== expected) return false;
              expected++;
            }
          }
        }
        return true;
      }

      newBtn.addEventListener('click', initBoard);
      shuffleBtn.addEventListener('click', function() {
        // Перемешиваем, но гарантируем решаемость
        for (var i = 0; i < 50; i++) {
          var neighbors = [];
          if (emptyPos.x > 0) neighbors.push({ x: emptyPos.x - 1, y: emptyPos.y });
          if (emptyPos.x < size - 1) neighbors.push({ x: emptyPos.x + 1, y: emptyPos.y });
          if (emptyPos.y > 0) neighbors.push({ x: emptyPos.x, y: emptyPos.y - 1 });
          if (emptyPos.y < size - 1) neighbors.push({ x: emptyPos.x, y: emptyPos.y + 1 });
          var pick = neighbors[Math.floor(Math.random() * neighbors.length)];
          board[emptyPos.y][emptyPos.x] = board[pick.y][pick.x];
          board[pick.y][pick.x] = 0;
          emptyPos.x = pick.x;
          emptyPos.y = pick.y;
        }
        moves = 0;
        renderBoard();
        statusEl.textContent = 'Соберите картинку (ходов: 0)';
      });
      initBoard();
    }, 100);
  }

  // ============================================================
  //  47. ИГРЫ (Змейка, Тетрис, Сапёр) – уже были, оставляем без изменений
  // ============================================================
  // Функции openSnakeGame, openTetris, openMinesweeper уже определены в начале
  // Они остаются без изменений.

  // ============================================================
  //  48. МЕНЮ ПУСК
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
        btn.style.cssText = 'background:rgba(255,255,255,0.05);border:none;color:var(--text-primary);padding:8px 12px;border-radius:4px;text-align:left;font-size:14px;transition:background .2s;cursor:pointer;display:flex;align-items:center;gap:10px;';
        btn.innerHTML = '<span style="width:24px;height:24px;">' + iconHTML(app.icon) + '</span> ' + app.label;
        if (document.body.classList.contains('light-theme') || document.body.classList.contains('theme-ocean') || document.body.classList.contains('theme-forest') || document.body.classList.contains('theme-sunset') || document.body.classList.contains('theme-mono')) {
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
  //  49. ВОССТАНОВЛЕНИЕ НАСТРОЕК И ЗАПУСК
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
  loadFolders();
  FS.init()
    .then(function() {
      fsReady = true;
      return loadAppRegistry();
    })
    .then(function() {
      restoreSettings();
      renderDesktopIcons();
      showNotification('NextelOS v0.0.8 загружена!');
      setTimeout(function() {
        createWindow('Привет', '👋 Добро пожаловать в <b>NextelOS v0.0.8</b>!<br>40+ приложений, игры, папки на рабочем столе, AI Art, Virucide, Tabliq, Торговая платформа.', { iconType: 'start' });
      }, 500);
    })
    .catch(function(err) {
      console.error(err);
      showNotification('Ошибка загрузки', 'error');
    });

  window.closeWindow = closeWindow;
  window.renderDesktopIcons = renderDesktopIcons;
  window.showNotification = showNotification;
  console.log('NextelOS v0.0.8 загружена!');
})();
