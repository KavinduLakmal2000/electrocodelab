// Skills renderer: reads `skillsData` and populates the Skills section
(function () {
  function renderSkillsSection() {
    try {
      console.log('skills-renderer: start');
      const data = (typeof skillsData !== 'undefined' && skillsData) || window.skillsData || null;
      if (!data) {
        console.warn('skills-renderer: skillsData not available yet, retrying');
        return setTimeout(renderSkillsSection, 50);
      }

      const section = document.querySelector('#skills');
      if (!section) {
        console.warn('skills-renderer: #skills not found, retrying');
        return setTimeout(renderSkillsSection, 50);
      }

      // Header
      const header = section.querySelector('.section-title');
      if (header) {
        const h2 = header.querySelector('h2');
        const p = header.querySelector('p');
        if (h2) h2.textContent = data.header && data.header.title ? data.header.title : 'Skills';
        if (p) p.textContent = data.header && data.header.description ? data.header.description : '';
      }

      // Prefer any container (be lenient about attributes)
      let container = section.querySelector('.container[data-aos]');
      if (!container) container = section.querySelector('.container');
      if (!container) {
        console.warn('skills-renderer: container not found');
        return;
      }

      let row = container.querySelector('.row.gy-5');
      if (!row) {
        // try to find by class name fallback
        row = container.querySelector('.row');
        if (!row) {
          // create row if missing
          row = document.createElement('div');
          row.className = 'row gy-5';
          container.appendChild(row);
        }
      }

      // Populate categories into existing columns if present (preserve styles)
      const cats = data.categories || [];
      for (let i = 0; i < cats.length; i++) {
        const cat = cats[i];
        let col = row.children[i];
        if (!col || !col.classList || !col.classList.contains('col-lg-4')) {
          col = document.createElement('div');
          col.className = 'col-lg-4';
          if (i >= row.children.length) row.appendChild(col);
          else row.insertBefore(col, row.children[i]);
        }
        col.setAttribute('data-aos', 'fade-up');
        if (cat.delay) col.setAttribute('data-aos-delay', cat.delay);

        let html = '';
        html += `<div class="skills-category">`;
        html += `<h3><i class="bi ${cat.icon}"></i> ${cat.title}</h3>`;
        html += `<div class="skills-animation">`;
        (cat.skills || []).forEach(s => {
          const pct = typeof s.percentage === 'number' ? s.percentage : (s.percentage || 0);
          html += `<div class="skill-item">`;
          html += `<div class="d-flex justify-content-between align-items-center"><h4>${s.name}</h4><span class="skill-percentage">${pct}%</span></div>`;
          html += `<div class="progress"><div class="progress-bar" role="progressbar" style="width:${pct}%" aria-valuenow="${pct}"></div></div>`;
          html += `</div>`;
        });
        html += `</div></div>`;

        col.innerHTML = html;
      }

      // Technical skills block (render as rows of small cards)
      if (Array.isArray(data.technical_skills) && data.technical_skills.length) {
        const techCol = document.createElement('div');
        techCol.className = 'col-12 mt-4';
        let techHtml = '<div class="row">';
        data.technical_skills.forEach(ts => {
          techHtml += `<div class="col-md-6 mb-3"><div class="skill-card p-3 rounded shadow-sm">`;
          techHtml += `<h5 class="mb-2"><i class="bi ${ts.icon} ${ts.icon_class || ''} me-2"></i>${ts.title}</h5>`;
          (ts.skills || []).forEach(s => {
            const pct = typeof s.percentage === 'number' ? s.percentage : (s.percentage || 0);
            techHtml += `<div class="skill-item mb-2"><div class="d-flex justify-content-between"><div class="progress-wrap mb-1"><span class="skill-name">${s.name}</span><span>${pct}%</span><div class="progress"><div class="progress-bar" role="progressbar" style="width:${pct}%" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"></div></div></div></div></div>`;
          });
          techHtml += `</div></div>`;
        });
        techHtml += '</div>';
        techCol.innerHTML = techHtml;
        row.parentNode.appendChild(techCol);
      }

      if (window.AOS && typeof AOS.refresh === 'function') AOS.refresh();
      console.log('skills-renderer: rendered');
    } catch (err) {
      console.error('skills-renderer: error', err);
    }
  }

  // start
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderSkillsSection);
  } else {
    setTimeout(renderSkillsSection, 10);
  }
})();
