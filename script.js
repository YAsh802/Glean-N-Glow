// Mobile menu toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileNav = document.querySelector('nav.mobile-nav');
  const overlay = document.querySelector('.overlay');
  
  function openMobileMenu() {
    mobileNav.classList.add('show');
    overlay.classList.add('show');
    mobileToggle.setAttribute('aria-expanded', 'true');
  }
  function closeMobileMenu() {
    mobileNav.classList.remove('show');
    overlay.classList.remove('show');
    mobileToggle.setAttribute('aria-expanded', 'false');
  }

  mobileToggle.addEventListener('click', () => {
    if (mobileNav.classList.contains('show')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  overlay.addEventListener('click', () => {
    closeMobileMenu();
  });

  // Close mobile menu on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Accessibility: Close menu with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('show')) {
      closeMobileMenu();
      mobileToggle.focus();
    }
  });
  
  window.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".desktop-nav");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  });