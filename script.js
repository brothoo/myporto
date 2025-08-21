    AOS.init({ duration: 1000, once: true });

    // Ganti Tema
    document.getElementById('toggleTheme').addEventListener('click', () => {
      const body = document.getElementById('body');
      if (body.classList.contains('theme-light')) {
        body.classList.remove('theme-light');
        body.classList.add('theme-dark');
      } else {
        body.classList.remove('theme-dark');
        body.classList.add('theme-light');
      }
    });

     const sections = document.querySelectorAll('.fade-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); 
      }
    });
  }, { threshold: 0.15 }); 

  sections.forEach(section => {
    observer.observe(section);
  });
  document.querySelectorAll('.card-link').forEach(card => {
  card.addEventListener('click', () => {
    window.open(card.dataset.link, '_blank');
  });
});