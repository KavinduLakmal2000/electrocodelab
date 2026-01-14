// ✅ Define base path FIRST (must be global)
window.APP_BASE_PATH =
  window.location.hostname.includes('github.io')
    ? '/my_portfolio_site'
    : '';

// -----------------------------

document.addEventListener('DOMContentLoaded', function () {
  if (typeof GLOBAL_CONFIG !== 'undefined') {

    // Handle Resume Section visibility based on RS variable
    if (GLOBAL_CONFIG.RS === false) {

      // Hide the Resume Section
      const resumeSection = document.getElementById('resume');
      if (resumeSection) {
        resumeSection.style.display = 'none';
      }

      // Hide the Resume link in the navigation menu
      const navLinks = document.querySelectorAll('.navmenu a');
      navLinks.forEach(link => {
        if (link.getAttribute('href') === '#resume') {
          const parentLi = link.closest('li');
          if (parentLi) {
            parentLi.style.display = 'none';
          }
        }
      });
    }
  }
});
