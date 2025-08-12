const titleFrames = document.querySelectorAll('[data-id="title-frame-path"]');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Чтобы сработало один раз
      }
    });
  },
  {
    threshold: 0.5, // Запуск, когда 50% элемента видно
  }
);

titleFrames.forEach(path => {
  const lengthTitleFrame = path.getTotalLength();
  path.style.strokeDasharray = lengthTitleFrame;
  path.style.strokeDashoffset = lengthTitleFrame;
  observer.observe(path);
});
