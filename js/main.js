// Language toggle
document.querySelectorAll('#langToggle, #langToggle2').forEach(btn => {
  btn.addEventListener('click', () => {
    setLang(currentLang === 'zh' ? 'en' : 'zh');
  });
});

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');

menuBtn?.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

// Close mobile menu on link click
mobileNav?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileNav.classList.remove('open'));
});

// Scroll reveal
const reveals = document.querySelectorAll(
  '.about-grid, .project-featured, .project-card, .writing-card, .repo-row, .connect-card'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

reveals.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${Math.min(i * 0.04, 0.3)}s`;
  revealObserver.observe(el);
});

// Nav active highlight
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

function updateActiveNav() {
  const scrollY = window.scrollY + 100;
  let active = '';

  document.querySelectorAll('section[id], header[id]').forEach(sec => {
    if (sec.offsetTop <= scrollY) active = sec.id;
  });

  navAnchors.forEach(a => {
    const isActive = a.getAttribute('href') === `#${active}`;
    a.style.color = isActive ? 'var(--text)' : '';
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

// Nav background on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 20
    ? 'rgba(12,10,10,0.92)'
    : 'rgba(12,10,10,0.75)';
}, { passive: true });
