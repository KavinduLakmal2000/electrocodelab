function renderResumeSection() {
  const data = (typeof resumeData !== 'undefined' && resumeData) || (window.resumeData || null);

  if (!data) {
    // data not loaded yet
    setTimeout(renderResumeSection, 60);
    return;
  }

  const sideEl = document.querySelector('#resume .resume-side');
  const mainCol = document.querySelector('#resume .col-lg-8.ps-4.ps-lg-5');

  if (!sideEl || !mainCol) {
    // DOM may not be ready or structure changed; try again
    setTimeout(renderResumeSection, 60);
    return;
  }

  // Build left column
  let sideHtml = '';
  sideHtml += `<div class="profile-img mb-4"><img src="assets/img/profile/profile.jpg" alt="Profile" class="img-fluid rounded"></div>`;
  sideHtml += `<h3>Professional Summary</h3><p>${data.profileSummary || ''}</p>`;

  if (Array.isArray(data.contactInfo) && data.contactInfo.length) {
    sideHtml += '<h3 class="mt-4">Contact Information</h3><ul class="contact-info list-unstyled">';
    data.contactInfo.forEach(ci => {
      const iconClass = ci.icon ? `bi ${ci.icon}` : '';
      sideHtml += `<li>${iconClass ? `<i class="${iconClass}"></i> ` : ''}${ci.content || ''}</li>`;
    });
    sideHtml += '</ul>';
  }

  if (Array.isArray(data.technicalSkills) && data.technicalSkills.length) {
    sideHtml += '<div class="skills-animation mt-4"><h3>Technical Skills</h3>';
    sideHtml += '<div class="row">';
    data.technicalSkills.forEach(group => {
      sideHtml += '<div class="col-md-6 mb-3">';
      sideHtml += '<div class="skill-card p-3 rounded shadow-sm">';
      sideHtml += `<h5 class="mb-2"><i class="bi ${group.icon || ''} me-2"></i>${group.title || ''}</h5>`;
      (group.skills || []).forEach(s => {
        const pct = (typeof s.percentage === 'number') ? s.percentage : (s.percentage || 0);
        sideHtml += `<div class="skill-item mb-2"><div class="d-flex justify-content-between"><div class="progress-wrap mb-1"><span class="skill-name">${s.name}</span><span>${pct}%</span><div class="progress"><div class="progress-bar" role="progressbar" style="width:${pct}%" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"></div></div></div></div></div>`;
      });
      sideHtml += '</div></div>';
    });
    sideHtml += '</div></div>';
  }

  sideEl.innerHTML = sideHtml;

  // Build right column (experience, education, certifications)
  let mainHtml = '';

  if (Array.isArray(data.experience) && data.experience.length) {
    mainHtml += '<div class="resume-section" data-aos="fade-up"><h3><i class="bi bi-briefcase me-2"></i>Professional Experience</h3>';
    data.experience.forEach(exp => {
      mainHtml += '<div class="resume-item">';
      mainHtml += `<h4>${exp.position || ''}${exp.company ? ` | ${exp.company}` : ''}</h4>`;
      mainHtml += `<h5>${exp.duration || ''}</h5>`;
      if (Array.isArray(exp.skillsGained) && exp.skillsGained.length) {
        mainHtml += `<p class="company"><i class="bi bi-building"></i> Skill Gained</p><ul>`;
        exp.skillsGained.forEach(sg => { mainHtml += `<li>${sg}</li>`; });
        mainHtml += '</ul>';
      }
      if (exp.projectName) mainHtml += `<p class="company"><i class="bi bi-building"></i> project</p><h5>${exp.projectName}</h5>`;
      if (Array.isArray(exp.projectPoints) && exp.projectPoints.length) {
        mainHtml += '<ul>';
        exp.projectPoints.forEach(pp => { mainHtml += `<li>${pp}</li>`; });
        mainHtml += '</ul>';
      }
      mainHtml += '</div>';
    });
    mainHtml += '</div>';
  }

  if (Array.isArray(data.education) && data.education.length) {
    mainHtml += '<div class="resume-section" data-aos="fade-up" data-aos-delay="100"><h3><i class="bi bi-mortarboard me-2"></i>Education</h3>';
    data.education.forEach(ed => {
      mainHtml += '<div class="resume-item">';
      mainHtml += `<h4>${ed.degree || ''}</h4><h5>${ed.duration || ''}</h5>`;
      if (ed.institution) mainHtml += `<p class="company"><i class="bi bi-building"></i> ${ed.institution}</p>`;
      if (ed.description) mainHtml += `<p>${ed.description}</p>`;
      mainHtml += '</div>';
    });
    mainHtml += '</div>';
  }

  if (Array.isArray(data.certifications) && data.certifications.length) {
    mainHtml += '<div class="resume-section" data-aos="fade-up" data-aos-delay="200"><h3><i class="bi bi-award me-2"></i>Certifications</h3>';
    data.certifications.forEach(c => {
      mainHtml += `<div class="resume-item"><h4>${c.title || ''}</h4><h5>${c.year || ''}</h5></div>`;
    });
    mainHtml += '</div>';
  }

  mainCol.innerHTML = mainHtml;

  if (window.AOS && typeof AOS.refresh === 'function') AOS.refresh();
  console.log('resume-renderer: rendered');
}

// Start after short delay to allow resume_data.js to load
setTimeout(renderResumeSection, 50);
