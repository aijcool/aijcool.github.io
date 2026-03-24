// Language toggle
document.getElementById('langToggle')?.addEventListener('click', () => {
  setLang(currentLang === 'zh' ? 'en' : 'zh');
});

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
let mobileNav = null;

menuBtn?.addEventListener('click', () => {
  if (!mobileNav) {
    mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav';
    mobileNav.innerHTML = `
      <a href="#about" data-i18n="nav.about">${translations[currentLang]['nav.about']}</a>
      <a href="#projects" data-i18n="nav.projects">${translations[currentLang]['nav.projects']}</a>
      <a href="#repos" data-i18n="nav.repos">${translations[currentLang]['nav.repos']}</a>
      <a href="#content" data-i18n="nav.content">${translations[currentLang]['nav.content']}</a>
      <a href="#blog" data-i18n="nav.blog">${translations[currentLang]['nav.blog']}</a>
      <button class="lang-toggle" onclick="setLang(currentLang === 'zh' ? 'en' : 'zh')">${currentLang === 'zh' ? 'EN' : '中文'}</button>
    `;
    document.querySelector('.nav').after(mobileNav);

    // Close menu on link click
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileNav.classList.remove('open'));
    });
  }

  mobileNav.classList.toggle('open');
});

// Scroll animations (IntersectionObserver)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements after DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const animatedEls = document.querySelectorAll(
    '.project-card, .repo-card, .content-card, .blog-card, .stat-card'
  );
  animatedEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
    observer.observe(el);
  });
});

// Active nav highlight on scroll
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) {
      current = section.getAttribute('id') || '';
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--text)';
    }
  });
});
