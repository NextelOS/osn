// kernel.js – Ядро оконной системы, уведомления, звук, диалоги

const kernel = {
  windows: [],
  activeWindowId: null,
  nextId: 1,
  zIndexCounter: 1000,
  pinnedWindows: [],
  audioCtx: null,
  doNotDisturb: localStorage.getItem('nextelos-dnd') === 'true',
  clipboard: { text: '', imageData: null },

  initAudio() {
    if (!this.audioCtx) {
      try {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) {}
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  },

  playSound(type) {
    if (this.doNotDisturb) return;
    try {
      if (!this.audioCtx) this.initAudio();
      if (!this.audioCtx || this.audioCtx.state === 'closed') return;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      const now = this.audioCtx.currentTime;
      switch (type) {
        case 'open':
          osc.frequency.setValueAtTime(600, now);
          osc.frequency.exponentialRampToValueAtTime(800, now + 0.1);
          gain.gain.setValueAtTime(0.2, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
          osc.start(now);
          osc.stop(now + 0.1);
          break;
        case 'close':
          osc.frequency.setValueAtTime(800, now);
          osc.frequency.exponentialRampToValueAtTime(400, now + 0.1);
          gain.gain.setValueAtTime(0.2, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
          osc.start(now);
          osc.stop(now + 0.1);
          break;
        case 'notification':
          osc.frequency.setValueAtTime(1000, now);
          osc.frequency.setValueAtTime(800, now + 0.1);
          gain.gain.setValueAtTime(0.15, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
          osc.start(now);
          osc.stop(now + 0.2);
          break;
        case 'error':
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(300, now);
          osc.frequency.setValueAtTime(200, now + 0.15);
          gain.gain.setValueAtTime(0.15, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
          osc.start(now);
          osc.stop(now + 0.2);
          break;
      }
    } catch (e) {}
  },

  showNotification(message, type = 'info', duration = 3000) {
    if (this.doNotDisturb) return;
    this.playSound('notification');
    const container = document.getElementById('notifications');
    const toast = document.createElement('div');
    toast.className = 'toast';
    if (type === 'error') toast.classList.add('error');
    if (type === 'warning') toast.classList.add('warning');
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  showDialog(options) {
    return new Promise(resolve => {
      const overlay = document.getElementById('dialog-overlay');
      document.getElementById('dialog-title').textContent = options.title || 'Подтверждение';
      document.getElementById('dialog-message').textContent = options.message || '';
      const input = document.getElementById('dialog-input');
      if (options.input) {
        input.style.display = 'block';
        input.value = options.defaultValue || '';
        input.placeholder = options.placeholder || '';
        input.focus();
      } else {
        input.style.display = 'none';
      }
      overlay.style.display = 'flex';
      overlay._resolve = resolve;
    });
  }
};

// Инициализация диалоговых кнопок (один раз)
document.getElementById('dialog-cancel').addEventListener('click', () => {
  const overlay = document.getElementById('dialog-overlay');
  overlay.style.display = 'none';
  if (overlay._resolve) overlay._resolve(null);
});
document.getElementById('dialog-confirm').addEventListener('click', () => {
  const overlay = document.getElementById('dialog-overlay');
  const value = document.getElementById('dialog-input').style.display !== 'none' ? document.getElementById('dialog-input').value : true;
  overlay.style.display = 'none';
  if (overlay._resolve) overlay._resolve(value);
});
document.getElementById('dialog-overlay').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    e.currentTarget.style.display = 'none';
    if (e.currentTarget._resolve) e.currentTarget._resolve(null);
  }
});

// Часы
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('taskbar-clock').textContent = h + ':' + m + ':' + s;
  document.getElementById('taskbar-clock').dataset.date = now.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
  if (document.getElementById('widget-time')) {
    document.getElementById('widget-time').textContent = h + ':' + m + ':' + s;
    document.getElementById('widget-date').textContent = now.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
  }
  if (window._startTime) {
    const uptime = Math.floor((now - window._startTime) / 1000);
    const uh = String(Math.floor(uptime / 3600)).padStart(2, '0');
    const um = String(Math.floor((uptime % 3600) / 60)).padStart(2, '0');
    const us = String(uptime % 60).padStart(2, '0');
    if (document.getElementById('widget-uptime')) document.getElementById('widget-uptime').textContent = uh + ':' + um + ':' + us;
  }
}
window._startTime = new Date();
setInterval(updateClock, 1000);
updateClock();

// Горячие клавиши
document.addEventListener('keydown', (e) => {
  if (e.altKey && e.key === 'Tab') {
    e.preventDefault();
    const windows = kernel.windows.filter(w => !w.isMinimized);
    if (!windows.length) return;
    const currentIdx = windows.findIndex(w => w.id === kernel.activeWindowId);
    const nextIdx = (currentIdx + 1) % windows.length;
    bringToFront(windows[nextIdx].id);
    kernel.showNotification('Переключено на: ' + windows[nextIdx].title);
  }
  if (e.ctrlKey && e.key === 'w') {
    e.preventDefault();
    if (kernel.activeWindowId) closeWindow(kernel.activeWindowId);
  }
  if (e.ctrlKey && e.shiftKey && e.key === 'D') {
    e.preventDefault();
    kernel.doNotDisturb = !kernel.doNotDisturb;
    localStorage.setItem('nextelos-dnd', kernel.doNotDisturb);
    kernel.showNotification(kernel.doNotDisturb ? 'Не беспокоить вкл' : 'Не беспокоить выкл');
  }
});

// Функции управления окнами
function createWindow(title, contentHTML, options = {}) {
  const id = kernel.nextId++;
  const winObj = {
    id,
    title,
    contentHTML,
    element: null,
    isMinimized: false,
    isPinned: false,
    onClose: options.onClose || null,
    width: options.width || 400,
    height: options.height || 280,
    left: options.left || (100 + kernel.windows.length * 30),
    top: options.top || (80 + kernel.windows.length * 30)
  };
  const maxLeft = window.innerWidth - winObj.width;
  const maxTop = window.innerHeight - winObj.height - 60;
  if (winObj.left > maxLeft) winObj.left = Math.max(10, maxLeft - 20);
  if (winObj.top > maxTop) winObj.top = Math.max(10, maxTop - 20);
  if (winObj.left < 10) winObj.left = 10;
  if (winObj.top < 10) winObj.top = 10;

  const win = document.createElement('div');
  win.className = 'window';
  win.dataset.windowId = id;
  win.style.left = winObj.left + 'px';
  win.style.top = winObj.top + 'px';
  win.style.width = winObj.width + 'px';
  win.style.height = winObj.height + 'px';

  const header = document.createElement('div');
  header.className = 'window-header';
  header.innerHTML = `<span class="window-title"><span class="icon">${iconHTML(options.iconType || 'file')}</span>${title}</span>
    <div class="window-controls">
      <button class="pin-btn" title="Закрепить">📌</button>
      <button class="min-btn">─</button>
      <button class="max-btn">⬜</button>
      <button class="close-btn">✕</button>
    </div>`;
  const contentDiv = document.createElement('div');
  contentDiv.className = 'window-content';
  contentDiv.innerHTML = contentHTML;

  win.appendChild(header);
  win.appendChild(contentDiv);
  document.getElementById('desktop').appendChild(win);
  winObj.element = win;

  // Кнопки заголовка
  header.querySelector('.close-btn').addEventListener('click', (e) => { e.stopPropagation(); closeWindow(id); });
  header.querySelector('.min-btn').addEventListener('click', (e) => { e.stopPropagation(); toggleMinimize(id); });
  header.querySelector('.max-btn').addEventListener('click', (e) => { e.stopPropagation(); toggleMaximize(id); });
  header.querySelector('.pin-btn').addEventListener('click', (e) => { e.stopPropagation(); togglePin(id); });

  // Перетаскивание окна
  if (window.innerWidth > 768) {
    let isDragging = false, startX, startY, origLeft, origTop;
    header.addEventListener('mousedown', (e) => {
      if (e.target.closest('.window-controls')) return;
      isDragging = true;
      const rect = win.getBoundingClientRect();
      startX = e.clientX; startY = e.clientY;
      origLeft = rect.left; origTop = rect.top;
      win.style.cursor = 'grabbing';
      bringToFront(id);
      const onDrag = (e) => {
        if (!isDragging) return;
        win.style.left = (origLeft + e.clientX - startX) + 'px';
        win.style.top = (origTop + e.clientY - startY) + 'px';
      };
      const stopDrag = () => {
        isDragging = false;
        win.style.cursor = '';
        document.removeEventListener('mousemove', onDrag);
        document.removeEventListener('mouseup', stopDrag);
      };
      document.addEventListener('mousemove', onDrag);
      document.addEventListener('mouseup', stopDrag);
      e.preventDefault();
    });
  }

  win.addEventListener('mousedown', () => bringToFront(id));

  kernel.windows.push(winObj);
  renderTaskbar();
  bringToFront(id);
  if (!kernel.doNotDisturb) kernel.playSound('open');
  kernel.showNotification(`Окно "${title}" открыто`);
  return id;
}

function closeWindow(id) {
  const idx = kernel.windows.findIndex(w => w.id === id);
  if (idx === -1) return;
  const winObj = kernel.windows[idx];
  if (winObj.onClose) winObj.onClose();
  const el = winObj.element;
  el.classList.add('closing');
  kernel.playSound('close');
  setTimeout(() => {
    el.remove();
    kernel.windows.splice(idx, 1);
    if (kernel.activeWindowId === id) kernel.activeWindowId = null;
    renderTaskbar();
    kernel.showNotification(`Окно "${winObj.title}" закрыто`);
  }, 300);
}

function toggleMinimize(id) {
  const winObj = kernel.windows.find(w => w.id === id);
  if (!winObj) return;
  winObj.isMinimized = !winObj.isMinimized;
  winObj.element.classList.toggle('hidden', winObj.isMinimized);
  if (!winObj.isMinimized) bringToFront(id);
  renderTaskbar();
}

function toggleMaximize(id) {
  const winObj = kernel.windows.find(w => w.id === id);
  if (!winObj) return;
  const el = winObj.element;
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

function togglePin(id) {
  const winObj = kernel.windows.find(w => w.id === id);
  if (!winObj) return;
  winObj.isPinned = !winObj.isPinned;
  if (winObj.isPinned) {
    winObj.element.style.zIndex = 99999;
    kernel.pinnedWindows.push(id);
  } else {
    const idx = kernel.pinnedWindows.indexOf(id);
    if (idx !== -1) kernel.pinnedWindows.splice(idx, 1);
    bringToFront(id);
  }
  renderTaskbar();
  kernel.showNotification(winObj.isPinned ? 'Окно закреплено' : 'Закрепление снято');
}

function bringToFront(id) {
  const winObj = kernel.windows.find(w => w.id === id);
  if (!winObj || winObj.isPinned) return;
  kernel.zIndexCounter++;
  winObj.element.style.zIndex = kernel.zIndexCounter;
  kernel.activeWindowId = id;
  document.querySelectorAll('.window').forEach(w => w.classList.remove('active'));
  winObj.element.classList.add('active');
  renderTaskbar();
}

function renderTaskbar() {
  const container = document.getElementById('taskbar-windows');
  container.innerHTML = '';
  kernel.windows.forEach(winObj => {
    const item = document.createElement('span');
    item.className = 'taskbar-item';
    if (kernel.activeWindowId === winObj.id && !winObj.isMinimized) item.classList.add('active');
    const displayTitle = winObj.title.length > 18 ? winObj.title.slice(0, 16) + '…' : winObj.title;
    item.innerHTML = `<span class="icon">${iconHTML('file')}</span>${displayTitle}`;
    if (winObj.isPinned) item.innerHTML += ' 📌';
    item.addEventListener('click', () => {
      if (winObj.isMinimized) toggleMinimize(winObj.id);
      else bringToFront(winObj.id);
    });
    container.appendChild(item);
  });
}

document.getElementById('collapse-all-btn').addEventListener('click', () => {
  const allMinimized = kernel.windows.every(w => w.isMinimized);
  kernel.windows.forEach(w => {
    if (allMinimized) { if (w.isMinimized) toggleMinimize(w.id); }
    else { if (!w.isMinimized) toggleMinimize(w.id); }
  });
  kernel.showNotification(allMinimized ? 'Все окна развёрнуты' : 'Все окна свёрнуты');
});

function getProcessList() {
  return kernel.windows.map(w => ({ id: w.id, title: w.title }));
}
function killProcess(id) {
  closeWindow(id);
}

// Экспорт в глобальную область
window.kernel = kernel;
window.createWindow = createWindow;
window.closeWindow = closeWindow;
window.toggleMinimize = toggleMinimize;
window.toggleMaximize = toggleMaximize;
window.togglePin = togglePin;
window.bringToFront = bringToFront;
window.renderTaskbar = renderTaskbar;
window.getProcessList = getProcessList;
window.killProcess = killProcess;
