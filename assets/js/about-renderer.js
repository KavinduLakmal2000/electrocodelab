// Renderer for About Section
(function () {
  function createProfileCard(profile) {
    return `
      <div class="profile-card" data-aos="zoom-in" data-aos-delay="200">
        <div class="profile-header">
          <div class="profile-image">
            <img src="${profile.image}" alt="Profile Image" class="img-fluid">
          </div>
          <div class="profile-badge">
            <i class="bi bi-check-circle-fill"></i>
          </div>
        </div>

        <div class="profile-content">
          <h3>${profile.name}</h3>
          <p class="profession">${profile.profession}</p>

          <div class="contact-links">
            <a href="mailto:${profile.email}" class="contact-item">
              <i class="bi bi-envelope"></i>
              ${profile.email}
            </a>
            <a href="#" class="contact-item">
              <i class="bi bi-telephone"></i>
              ${profile.phone}
            </a>
            <a href="#" class="contact-item">
              <i class="bi bi-geo-alt"></i>
              ${profile.location}
            </a>
          </div>
        </div>
      </div>
    `;
  }

  function createAboutContent(data) {
    const header = `
      <div class="section-header">
        <span class="badge-text">${data.header.badge}</span>
        <h2>${data.header.title}</h2>
      </div>
    `;

    const description = data.description.map(p => `<p>${p}</p>`).join('\n');

    const stats = data.stats.map(s => `
      <div class="stat-item">
        <div class="stat-number">${s.number}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join('\n');

    // details in rows of two
    const detailRows = [];
    for (let i = 0; i < data.details.length; i += 2) {
      const a = data.details[i];
      const b = data.details[i + 1];
      detailRows.push(`
        <div class="detail-row">
          <div class="detail-item">
            <span class="detail-label">${a.label}</span>
            <span class="detail-value">${a.value}</span>
          </div>
          ${b ? `
          <div class="detail-item">
            <span class="detail-label">${b.label}</span>
            <span class="detail-value">${b.value}</span>
          </div>
          ` : ''}
        </div>
      `);
    }

    const ctas = data.cta.map(c => {
      const btnClass = c.type === 'primary' ? 'btn btn-primary' : 'btn btn-outline';
      const iconClass = c.icon && c.icon.indexOf('bi') === -1 ? `bi ${c.icon}` : c.icon;
      const downloadAttr = c.download ? 'download' : '';
      const targetAttr = c.target ? `target="${c.target}"` : '';
      return `<a href="${c.href}" class="${btnClass}" ${downloadAttr} ${targetAttr}><i class="bi ${c.icon}"></i> ${c.text}</a>`;
    }).join('\n');

    return `
      <div class="about-content" data-aos="fade-left" data-aos-delay="300">
        ${header}
        <div class="description">
          ${description}
        </div>

        <div class="stats-grid">
          ${stats}
        </div>

        <div class="details-grid">
          ${detailRows.join('\n')}
        </div>

        <div class="cta-section">
          ${ctas}
        </div>
      </div>
    `;
  }

  function renderAbout() {
    if (typeof aboutData === 'undefined') return;
    const profileContainer = document.querySelector('.profile-card-container');
    const aboutContainer = document.querySelector('.about-content-container');

    if (profileContainer) profileContainer.innerHTML = createProfileCard(aboutData.profile);
    if (aboutContainer) aboutContainer.innerHTML = createAboutContent(aboutData);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderAbout);
  } else {
    renderAbout();
  }

})();
