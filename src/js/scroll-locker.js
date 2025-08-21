(() => {
  const scrollEl = document.scrollingElement || document.documentElement;
  let sx = 0,
    sy = 0;

  const prevent = e => e.preventDefault();
  const preventKeys = e => {
    const keys = [
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'PageUp',
      'PageDown',
      'Home',
      'End',
      ' ',
      'Spacebar',
    ];
    if (keys.includes(e.key)) e.preventDefault();
  };
  const freeze = () => window.scrollTo(sx, sy);

  function addAll() {
    // фиксируем текущее положение
    sx = scrollEl.scrollLeft;
    sy = scrollEl.scrollTop;

    // блокируем любые попытки прокрутки
    window.addEventListener('scroll', freeze, { passive: false });
    window.addEventListener('wheel', prevent, { passive: false });
    document.addEventListener('wheel', prevent, {
      passive: false,
      capture: true,
    });
    window.addEventListener('touchmove', prevent, { passive: false });
    document.addEventListener('touchmove', prevent, {
      passive: false,
      capture: true,
    });
    window.addEventListener('keydown', preventKeys, { passive: false });
  }

  function removeAll() {
    window.removeEventListener('scroll', freeze);
    window.removeEventListener('wheel', prevent);
    document.removeEventListener('wheel', prevent, { capture: true });
    window.removeEventListener('touchmove', prevent);
    document.removeEventListener('touchmove', prevent, { capture: true });
    window.removeEventListener('keydown', preventKeys);
  }

  // Глобальные хелперы
  window.lockScroll = addAll;
  window.unlockScroll = removeAll;
})();
