// FCMB School Global JavaScript

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initMobileMenu();
});

// Scroll Reveal System
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('visible'));
  }
}

// Mobile Menu Navigation Drawer
function initMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');
  
  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('pointer-events-none', 'opacity-0');
      const drawer = mobileMenu.querySelector('.transform');
      if (drawer) drawer.classList.remove('translate-x-full');
      document.body.style.overflow = 'hidden';
    });
  }
  
  if (mobileCloseBtn && mobileMenu) {
    mobileCloseBtn.addEventListener('click', () => {
      mobileMenu.classList.add('pointer-events-none', 'opacity-0');
      const drawer = mobileMenu.querySelector('.transform');
      if (drawer) drawer.classList.add('translate-x-full');
      document.body.style.overflow = '';
    });
  }
  
  if (mobileMenu) {
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        mobileMenu.classList.add('pointer-events-none', 'opacity-0');
        const drawer = mobileMenu.querySelector('.transform');
        if (drawer) drawer.classList.add('translate-x-full');
        document.body.style.overflow = '';
      }
    });
  }
}

// Global Footer Newsletter Subscription
function triggerFooterSub() {
  const emailInput = document.getElementById('footer-newsletter-email');
  const msgEl = document.getElementById('footer-sub-msg');
  if (emailInput && emailInput.value.trim() === '') {
    alert('Please enter a valid email address.');
    return;
  }
  if (msgEl && emailInput) {
    msgEl.innerText = "✔ Subscribed successfully!";
    msgEl.classList.remove('hidden');
    emailInput.value = '';
    setTimeout(() => {
      msgEl.classList.add('hidden');
    }, 4000);
  }
}
