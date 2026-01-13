// Load project details from `iotProjects` by query `id` and render into page
(function() {
  function getParamId() {
    try {
      const params = new URLSearchParams(window.location.search);
      const raw = params.get('id');
      return raw ? parseInt(raw, 10) : null;
    } catch (e) {
      return null;
    }
  }

  function normalizePath(p) {
    // pages live at root, assets at ./assets, remove leading ../ if present
    return p.replace(/^\.\.\//, '');
  }

  function renderSwiper(images) {
    const wrapper = document.querySelector('.portfolio-details-slider .swiper-wrapper');
    if (!wrapper) return;
    wrapper.innerHTML = images.map(img => `\n      <div class="swiper-slide">\n        <img src="${normalizePath(img)}" alt="Portfolio Image" class="img-fluid" loading="lazy">\n      </div>\n    `).join('');

    // re-init Swiper using config if available
    try {
      const cfgEl = document.querySelector('.swiper-config');
      const cfg = cfgEl ? JSON.parse(cfgEl.textContent) : {};
      if (window.Swiper) {
        // destroy existing instance(s) if any
        // create a fresh instance
        new Swiper('.init-swiper', cfg);
      }
    } catch (e) {
      // ignore
    }
  }

  function renderInfo(project) {
    const infoUl = document.querySelector('.portfolio-info ul');
    if (!infoUl) return;
    infoUl.innerHTML = `
      <li><strong>Category</strong>: ${project.category}</li>
      <li><strong>Client</strong>: ${project.client}</li>
      <li><strong>Project date</strong>: ${project.date}</li>
      <li><strong>Project URL</strong>: <a href="${project.url}" target="_blank">${project.url.replace(/^https?:\/\//, '')}</a></li>
    `;
  }

  function renderDescription(project) {
    const desc = document.querySelector('.portfolio-description');
    if (!desc) return;

    const featuresHtml = (project.features || []).map((f, i) => `\n      <div class="col-md-6">\n        <div class="feature-item" data-aos="fade-up" data-aos-delay="${400 + i*100}">\n          <i class="bi bi-check-circle-fill"></i>\n          <h4>${f}</h4>\n          <p>Feature description placeholder for ${f}.</p>\n        </div>\n      </div>\n    `).join('');

    desc.innerHTML = `
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <div class="features mt-4">
        <h3>Key Features</h3>
        <div class="row gy-3">${featuresHtml}
        </div>
      </div>
    `;
  }

  function applyProject(project) {
    if (!project) return;
    document.title = project.title + ' - Portfolio Details';
    renderSwiper(project.images || []);
    renderInfo(project);
    renderDescription(project);
  }

  // main
  document.addEventListener('DOMContentLoaded', function() {
    const id = getParamId();
    const projects = window.iotProjects || [];
    let project = null;
    if (id) project = projects.find(p => p.id === id);
    if (!project) project = projects[0] || null;
    applyProject(project);
  });
})();
