// ============================================================
//  NextelOS v0.0.7 – Полный JavaScript (Часть 1)
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
  //  3. ЗВУКОВЫЕ ЭФФЕКТЫ
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
    } catch(e) {}
  }

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
        var request = indexedDB.open(self.dbName, 3);
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
            .then(function() { return self.set('/home/user/readme.txt', { type: 'file', content: 'Добро пожаловать в NextelOS v0.0.7!' }); })
            .then(function() { return self.set('/system', { type: 'folder', children: {} }); })
            .then(function() { return self.set('/system/trash', { type: 'folder', children: {} }); })
            .then(function() { return self.set('/system/apps.json', { type: 'file', content: '[]' }); })
            .then(function() { return self.set('/system/events.json', { type: 'file', content: '{}' }); })
            .then(function() { return self.set('/system/alarms.json', { type: 'file', content: '[]' }); })
            .then(function() { return self.set('/system/passwords.json', { type: 'file', content: '[]' }); })
            .then(function() { return self.set('/system/notes.json', { type: 'file', content: '{}' }); })
            .then(function() { return self.set('/system/bookmarks.json', { type: 'file', content: '[]' }); })
            .then(function() { return self.set('/system/todo.json', { type: 'file', content: '[]' }); })
            .then(function() { return self.set('/system/playlists.json', { type: 'file', content: '[]' }); });
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
    { id: 'presentation', label: 'Презентация', icon: 'file', action: openPresentation },
    { id: 'player', label: 'Плеер', icon: 'player', action: openPlayer },
    { id: 'converter', label: 'Конвертер', icon: 'converter', action: openConverter },
    { id: 'todo', label: 'Планировщик', icon: 'todo', action: openTodo },
    { id: 'codeeditor', label: 'Редактор кода', icon: 'code', action: openCodeEditor },
    { id: 'chess', label: 'Шахматы', icon: 'chess', action: openChess },
    { id: 'tictac', label: 'Крестики-нолики', icon: 'tic', action: openTicTacToe },
    { id: 'art', label: 'AI Art', icon: 'art', action: openArtGenerator },
    { id: 'translate', label: 'Переводчик', icon: 'translate', action: openTranslator },
    { id: 'wiki', label: 'Википедия', icon: 'wiki', action: openWikipedia },
    { id: 'currency', label: 'Курсы валют', icon: 'currency', action: openCurrency }
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
//  NextelOS v0.0.7 – Полный JavaScript (Часть 2)
//  Все приложения, игры, завершающий код
// ============================================================

  // ============================================================
  //  20. ПРИЛОЖЕНИЯ
  // ============================================================

  // ----- 20.1 Терминал -----
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

      append('Добро пожаловать в Терминал NextelOS v0.0.7');
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

  // ----- 20.2 Файловый менеджер (с закладками и поиском) -----
  var fmCurrentPath = '/home/user';
  var fmClipboard = null;
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
    var content = '<div class="fm-bookmarks"></div><div class="fm-search"><input id="fm-search-input" type="text" placeholder="Поиск по имени..."><button id="fm-search-btn">🔍</button></div><div class="fm-toolbar"><button id="fm-back"><span class="icon">' + iconHTML('folder') + '</span>Назад</button><button id="fm-home"><span class="icon">' + iconHTML('home') + '</span>Домой</button><button id="fm-mkdir"><span class="icon">' + iconHTML('folder') + '</span>Создать папку</button><button id="fm-touch"><span class="icon">' + iconHTML('file') + '</span>Создать файл</button><button id="fm-refresh">🔄 Обновить</button><button id="fm-paste" style="display:none;">📋 Вставить</button></div><div class="fm-path" id="fm-path">' + fmCurrentPath + '</div><div class="fm-list" id="fm-list"></div>';
    var winId = createWindow('Файловый менеджер', content, { width: 550, height: 450, iconType: 'folder' });
    loadBookmarks();

    function renderFileList(filter) {
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
          if (filter) {
            sorted = sorted.filter(function(name) { return name.toLowerCase().includes(filter.toLowerCase()); });
          }
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
      var searchInput = document.getElementById('fm-search-input');
      var searchBtn = document.getElementById('fm-search-btn');

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
        refreshBtn.addEventListener('click', function() { renderFileList(); });
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
      if (searchBtn) {
        searchBtn.addEventListener('click', function() {
          var query = searchInput.value.trim();
          renderFileList(query);
        });
        searchInput.addEventListener('keydown', function(e) {
          if (e.key === 'Enter') {
            var query = searchInput.value.trim();
            renderFileList(query);
          }
        });
      }
      renderFileList();
    }, 100);
  }

  // ----- 20.3 Редактор (с Markdown-предпросмотром) -----
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

  // ----- 20.4 Калькулятор (простой и научный) -----
  function openCalculator() {
    var content = '<div class="calc-mode-switch"><button id="calc-mode-simple" class="active">Простой</button><button id="calc-mode-scientific">Научный</button></div><div id="calc-simple"><div class="calc-grid"><div class="calc-display" id="calc-display">0</div><button class="calc-btn" data-value="7">7</button><button class="calc-btn" data-value="8">8</button><button class="calc-btn" data-value="9">9</button><button class="calc-btn op" data-value="+">+</button><button class="calc-btn" data-value="4">4</button><button class="calc-btn" data-value="5">5</button><button class="calc-btn" data-value="6">6</button><button class="calc-btn op" data-value="-">−</button><button class="calc-btn" data-value="1">1</button><button class="calc-btn" data-value="2">2</button><button class="calc-btn" data-value="3">3</button><button class="calc-btn op" data-value="*">×</button><button class="calc-btn" data-value="0">0</button><button class="calc-btn" data-value=".">.</button><button class="calc-btn equal" data-value="=">=</button><button class="calc-btn op" data-value="/">÷</button><button class="calc-btn" data-value="C" style="grid-column:span 2;">C</button></div></div><div id="calc-scientific" style="display:none;"><div class="calc-grid-scientific"><div class="calc-display" id="calc-display-sci" style="grid-column:span 5;">0</div><button class="calc-btn" data-value="sin">sin</button><button class="calc-btn" data-value="cos">cos</button><button class="calc-btn" data-value="tan">tan</button><button class="calc-btn" data-value="log">log</button><button class="calc-btn" data-value="ln">ln</button><button class="calc-btn" data-value="7">7</button><button class="calc-btn" data-value="8">8</button><button class="calc-btn" data-value="9">9</button><button class="calc-btn op" data-value="+">+</button><button class="calc-btn op" data-value="-">−</button><button class="calc-btn" data-value="4">4</button><button class="calc-btn" data-value="5">5</button><button class="calc-btn" data-value="6">6</button><button class="calc-btn op" data-value="*">×</button><button class="calc-btn op" data-value="/">÷</button><button class="calc-btn" data-value="1">1</button><button class="calc-btn" data-value="2">2</button><button class="calc-btn" data-value="3">3</button><button class="calc-btn" data-value="^">^</button><button class="calc-btn equal" data-value="=">=</button><button class="calc-btn" data-value="0">0</button><button class="calc-btn" data-value=".">.</button><button class="calc-btn" data-value="C" style="grid-column:span 2;">C</button></div></div><div class="calc-history" id="calc-history"></div>';
    var winId = createWindow('Калькулятор', content, { width: 350, height: 470, iconType: 'calc' });
    setTimeout(function() {
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

  // ----- 20.5 Настройки -----
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
                  '<div class="settings-section"><h3>О системе</h3><p style="color:#888;">NextelOS v0.0.7<br>Ядро: JavaScript<br>Файловая система: IndexedDB</p></div>';
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

  // ----- 20.6 Менеджер процессов -----
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

  // ----- 20.7 Корзина -----
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

  // ----- 20.8 Магазин приложений -----
  var storeCatalog = [
    { id: 'notes', name: 'Заметки', icon: '📝', desc: 'Простые заметки.', install: function() {
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
    { id: 'calendar_app', name: 'Календарь', icon: '📅', desc: 'Календарь с событиями.', install: function() {
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
    { id: 'weather_app', name: 'Погода', icon: '🌤️', desc: 'Полноценная погода без ключа.', install: function() {
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
    { id: 'player', name: 'Музыкальный плеер', icon: '🎵', desc: 'Загружайте и слушайте MP3.', install: function() {
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
    } }
  ];

  function openStore() {
    var html = '<div class="store-grid">';
    storeCatalog.forEach(function(app) {
      var isInstalled = installedApps.some(function(a) { return a.id === app.id; });
      html += '<div class="store-item"><span class="app-icon">' + app.icon + '</span><div class="app-name">' + app.name + '</div><div class="app-desc">' + app.desc + '</div><div class="app-actions">' +
        (isInstalled ?
          '<span class="installed-badge">✅ Установлено</span><button class="uninstall-btn" data-id="' + app.id + '">Удалить</button>' :
          '<button class="install-btn" data-id="' + app.id + '">Установить</button>') +
        '</div></div>';
    });
    html += '</div>';
    var winId = createWindow('Магазин приложений', html, { width: 650, height: 500, iconType: 'folder' });
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

  // ----- 20.9 Pigmo Pro (улучшенный) -----
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

      // Обрезка
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

  // ----- 20.10 Глобальный поиск -----
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

  // ----- 20.11 Браузер (с закладками) -----
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

  // ----- 20.12 Календарь (с импортом/экспортом ICS) -----
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

  // ----- 20.13 Будильник -----
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

  // ----- 20.14 Блокнот с вкладками -----
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

  // ----- 20.15 Менеджер паролей -----
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

  // ----- 20.16 Презентация -----
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

  // ----- 20.17 Плеер (с плейлистами) -----
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

  // ----- 20.18 Конвертер величин -----
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

  // ----- 20.19 Планировщик задач (To-Do) -----
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

  // ----- 20.20 Редактор кода -----
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

      // Простой поиск
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

      // Замена (простая)
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

      // Подсветка синтаксиса (заглушка – можно потом добавить библиотеку)
      // Здесь можно было бы подключить Prism.js или highlight.js, но для простоты оставляем как есть.
    }, 100);
  }

  // ----- 20.21 Шахматы (с ИИ) -----
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
          // Попытка хода
          if (validMoves.some(function(m) { return m.x === x && m.y === y; })) {
            // Выполнить ход
            var move = { from: selected, to: { x: x, y: y }, piece: board[selected.y][selected.x], captured: board[y][x] };
            board[y][x] = board[selected.y][selected.x];
            board[selected.y][selected.x] = '';
            history.push(move);
            selected = null;
            validMoves = [];
            currentPlayer = (currentPlayer === 'white' ? 'black' : 'white');
            renderBoard();
            statusEl.textContent = 'Ход ' + (currentPlayer === 'white' ? 'белых' : 'чёрных');
            // Проверить шах и мат (упрощённо)
            if (isCheckmate()) {
              statusEl.textContent = 'Мат! Победили ' + (currentPlayer === 'white' ? 'чёрные' : 'белые');
            } else if (isStalemate()) {
              statusEl.textContent = 'Пат! Ничья';
            } else if (isCheck()) {
              statusEl.textContent = 'Шах! ' + (currentPlayer === 'white' ? 'белым' : 'чёрным');
            }
            // Ход ИИ (если ход чёрных)
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
        // Простая реализация (без рокировки, взятия на проходе, превращения пешки)
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
        // Простой ИИ: случайный допустимый ход
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

  // ----- 20.22 Крестики-нолики с ИИ -----
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
          // Случайный ход
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

  // ----- 20.23 AI Art Generator -----
  function openArtGenerator() {
    var content = '<div class="art-container"><div class="art-input-row"><input type="text" id="art-prompt" placeholder="Опишите изображение..."><button id="art-generate">Сгенерировать</button></div><div class="art-result" id="art-result"><div class="art-placeholder">Введите описание и нажмите "Сгенерировать"</div></div></div>';
    var winId = createWindow('AI Art Generator', content, { width: 500, height: 400, iconType: 'art' });
    setTimeout(function() {
      var promptInput = document.getElementById('art-prompt');
      var generateBtn = document.getElementById('art-generate');
      var resultDiv = document.getElementById('art-result');

      generateBtn.addEventListener('click', function() {
        var prompt = promptInput.value.trim();
        if (!prompt) { showNotification('Введите описание', 'warning'); return; }
        resultDiv.innerHTML = '<div style="color:#888;text-align:center;padding:20px;">Генерация...</div>';
        // Используем бесплатный API Hugging Face (заглушка – нужно заменить на реальный ключ)
        // Для демонстрации показываем заглушку
        setTimeout(function() {
          resultDiv.innerHTML = '<div style="color:#888;text-align:center;padding:20px;">⚠️ Для работы требуется API-ключ Hugging Face.<br>Вставьте код для реальной генерации.</div>';
          showNotification('Функция в разработке', 'warning');
        }, 1000);
      });
    }, 100);
  }

  // ----- 20.24 Переводчик -----
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
        // Используем бесплатный API LibreTranslate (заглушка)
        // Для демонстрации показываем заглушку
        setTimeout(function() {
          result.textContent = '⚠️ Для работы требуется подключение к API LibreTranslate.';
          showNotification('Функция в разработке', 'warning');
        }, 500);
      });
    }, 100);
  }

  // ----- 20.25 Википедия (офлайн-ридер) -----
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

  // ----- 20.26 Курсы валют (реальные) -----
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
        // Используем бесплатное API exchangerate-api.com
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
                  // Для графика сохраняем историю
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

  // ----- 20.27 Игры (Змейка, Тетрис, Сапёр) -----
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
  //  21. МЕНЮ ПУСК
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
  //  22. ВОССТАНОВЛЕНИЕ НАСТРОЕК И ЗАПУСК
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
      showNotification('NextelOS v0.0.7 загружена!');
      setTimeout(function() {
        createWindow('Привет', '👋 Добро пожаловать в <b>NextelOS v0.0.7</b>!<br>27 приложений, игры, виджеты, системный трей, анимации, звуки, горячие клавиши, режим DND и многое другое.', { iconType: 'start' });
      }, 500);
    })
    .catch(function(err) {
      console.error(err);
      showNotification('Ошибка загрузки', 'error');
    });

  window.closeWindow = closeWindow;
  window.renderDesktopIcons = renderDesktopIcons;
  window.showNotification = showNotification;
  console.log('NextelOS v0.0.7 загружена!');
})();
