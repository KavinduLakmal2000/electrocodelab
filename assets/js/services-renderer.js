function renderServices() {
  const servicesContainer = document.querySelector('.services-container');

  console.log('renderServices called');
  console.log('Container found:', !!servicesContainer);

  if (!servicesContainer) {
    console.error('Services container not found');
    return;
  }

  // Support both patterns: top-level `servicesData` (const) or `window.servicesData`.
  const data = (typeof servicesData !== 'undefined') ? servicesData : (window.servicesData || null);

  if (!data || !data.services) {
    console.error('Services data not found or invalid structure');
    console.log('servicesData (local):', typeof servicesData !== 'undefined');
    console.log('window.servicesData:', window.servicesData);
    return;
  }

  try {
    const html = data.services.map(service => `
    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${service.delay}">
      <div class="service-card position-relative z-1">
        <div class="service-icon">
          <i class="bi ${service.icon}"></i>
        </div>
        <a href="${service.link}" class="card-action d-flex align-items-center justify-content-center rounded-circle">
          <i class="bi bi-arrow-up-right"></i>
        </a>
        <h3>
          <a href="${service.link}">
            ${service.title} <span>${service.titleSpan}</span>
          </a>
        </h3>
        <p>${service.description}</p>
      </div>
    </div>
    `).join('');

    servicesContainer.innerHTML = html;
    console.log('Services rendered, count:', data.services.length);

    if (window.AOS) {
      setTimeout(() => window.AOS.refresh(), 120);
    }
  } catch (error) {
    console.error('Error rendering services:', error);
  }
}

// Wait a tick to ensure scripts executed; DOM is already ready since scripts are at page end.
setTimeout(renderServices, 80);
