const titleFrames = document.querySelectorAll('[data-id="title-frame-path"]');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // To make it work once
      }
    });
  },
  {
    threshold: 0.5, // Launch when 50% of the element is visible
  }
);

titleFrames.forEach(path => {
  const lengthTitleFrame = path.getTotalLength();
  path.style.strokeDasharray = lengthTitleFrame;
  path.style.strokeDashoffset = lengthTitleFrame;
  observer.observe(path);
});
