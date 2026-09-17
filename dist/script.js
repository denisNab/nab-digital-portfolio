const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.project, .project-card, .concept-card, .service-list article, .process li')
  .forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
  });
