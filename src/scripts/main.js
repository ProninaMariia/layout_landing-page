const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  },
);

document.querySelectorAll('.animate-on-scroll').forEach((el) => {
  observer.observe(el);
});

document.querySelectorAll('.menu__link').forEach((link) => {
  link.addEventListener('click', () => {
    history.pushState(null, '', '#');
  });
});

const form = document.querySelector('.contact__form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('.contact__submit');
    const original = btn.textContent;

    btn.textContent = 'Message sent ✓';
    btn.disabled = true;
    btn.style.backgroundColor = '#2a7a4b';

    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      btn.style.backgroundColor = '';
      form.reset();
    }, 3000);
  });
}
