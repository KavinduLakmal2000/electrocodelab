// Portfolio Card Renderer - renders portfolio items on the main page

function renderPortfolioItems() {
  const container = document.querySelector('.portfolio-container');
  const isotopeContainer = document.querySelector('.isotope-container');
  
  if (!container || !isotopeContainer) return;

  // Clear existing items
  container.innerHTML = '';

  // Create and append portfolio items
  portfolioItems.forEach((item) => {
    const portfolioItem = document.createElement('div');
    portfolioItem.className = `col-lg-6 col-md-6 portfolio-item isotope-item ${item.filter}`;
    portfolioItem.innerHTML = `
      <div class="portfolio-wrap">
        <img src="${item.image}" class="img-fluid" alt="Portfolio Image" loading="lazy">
        <div class="portfolio-info">
          <div class="content">
            <span class="category">${item.category}</span>
            <h4>${item.title}</h4>
            <div class="portfolio-links">
              <a href="${item.image}" class="glightbox" title="${item.title}">
                <i class="bi bi-plus-lg"></i>
              </a>
              <a href="${item.detailsLink}" title="More Details">
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    container.appendChild(portfolioItem);
  });

  // Reinitialize isotope after images are loaded
  if (typeof imagesLoaded !== 'undefined' && typeof Isotope !== 'undefined') {
    imagesLoaded(isotopeContainer, function() {
      const iso = new Isotope(isotopeContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'masonry'
      });

      // Rebind filter click handlers
      document.querySelectorAll('.isotope-filters li').forEach(function(filterBtn) {
        filterBtn.addEventListener('click', function() {
          document.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          iso.arrange({
            filter: this.getAttribute('data-filter')
          });
        });
      });
    });
  }

  // Reinitialize glightbox if available
  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: '.glightbox' });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', renderPortfolioItems);
