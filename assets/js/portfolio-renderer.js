// Unified Portfolio Details Renderer
// Determines which data source to use based on ID prefix (i, p, w, o)

function getQueryParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function getProjectTypeAndId(customId) {
  // Parse ID format: i1, i2, p1, p2, w1, o1, etc.
  if (!customId) return { type: 'iot', id: '1' };
  
  const match = customId.match(/^([ipwo])(\d+)$/);
  if (!match) return { type: 'iot', id: '1' };
  
  const prefix = match[1];
  const id = match[2];
  
  const typeMap = {
    'i': 'iot',
    'p': 'pcb',
    'w': 'web',
    'o': 'other'
  };
  
  return { type: typeMap[prefix] || 'iot', id: id };
}

function getProjectData(type, id) {
  let projects = [];
  
  if (type === 'iot') {
    projects = window.iotProjects || [];
  } else if (type === 'pcb') {
    projects = window.pcbDesignProjects || [];
  } else if (type === 'web') {
    projects = window.webDevelopmentProjects || [];
  } else if (type === 'other') {
    projects = window.otherProjects || [];
  }
  
  return projects.find(p => String(p.id) === String(id)) || projects[0];
}

function renderProjectDetails(project) {
  if (!project) return;

  // Slides
  const swiperWrapper = document.querySelector('.portfolio-details-slider .swiper-wrapper');
  if (swiperWrapper) {
    swiperWrapper.innerHTML = '';
    
    // If there's a video, render it first so it plays on load
    if (project.video) {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.innerHTML = `
        <video autoplay muted playsinline class="img-fluid" preload="metadata">
          <source src="${project.video}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      `;
      swiperWrapper.appendChild(slide);
    }

    // images after video
    if (project.images && Array.isArray(project.images)) {
      project.images.forEach(src => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `<img src="${src}" alt="${project.title}" class="img-fluid" loading="lazy">`;
        swiperWrapper.appendChild(slide);
      });
    }
  }

  // Info list
  const infoList = document.querySelector('.portfolio-info ul');
  if (infoList) {
    infoList.innerHTML = '';
    const infoItems = [
      { label: 'Category', value: project.category },
      { label: 'Client', value: project.client },
      { label: 'Project date', value: project.date },
      { label: 'Project URL', value: `<a href="${project.url}" target="_blank">${project.url}</a>` }
    ];
    infoItems.forEach(i => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${i.label}</strong>: ${i.value}`;
      infoList.appendChild(li);
    });
  }

  // Description and features
  const desc = document.querySelector('.portfolio-description');
  if (desc) {
    const featuresHtml = (project.features || []).map(f => `
          <div class="col-md-6">
            <div class="feature-item" data-aos="fade-up">
              <i class="bi bi-check-circle-fill"></i>
              <h4>${f}</h4>
              <p>Feature detail for ${f}.</p>
            </div>
          </div>`).join('');

    desc.innerHTML = `
      <h2>${project.title} — Project Overview</h2>
      <p>${project.description}</p>
      <div class="features mt-4">
        <h3>Key Features</h3>
        <div class="row gy-3">
          ${featuresHtml}
        </div>
      </div>
    `;
  }
  
  // expose current project for load-time behavior
  window.currentProject = project;
}

document.addEventListener('DOMContentLoaded', function() {
  const customId = getQueryParam('id') || 'i1';
  const { type, id } = getProjectTypeAndId(customId);
  const project = getProjectData(type, id);
  renderProjectDetails(project);
});

// After all resources load and the site initializes the Swiper, ensure video-first behavior
window.addEventListener('load', function() {
  const slider = document.querySelector('.portfolio-details-slider');
  if (!slider) return;
  const video = slider.querySelector('video');

  // Poll for swiper instance since init order may vary
  let attempts = 0;
  const getSwiper = function(resolve) {
    attempts++;
    const sw = slider.swiper;
    if (sw || attempts > 20) {
      resolve(sw);
    } else {
      setTimeout(() => getSwiper(resolve), 150);
    }
  };

  new Promise(getSwiper).then(function(swiper) {
    if (!video || !swiper) return;

    // Ensure swiper starts on the video slide (index 0)
    try { swiper.slideTo(0, 0); } catch (e) {}

    // Stop automatic autoplay while video plays
    if (swiper.autoplay && swiper.autoplay.running) {
      swiper.autoplay.stop();
    }

    // Play video (muted to allow autoplay)
    video.play().catch(() => {});
    
    // Start slideshow after configured duration (seconds), otherwise fallback to 'ended' event.
    const configured = (window.currentProject && window.currentProject.videoDuration) || 0;
    if (configured > 0) {
      setTimeout(function() {
        try { swiper.slideNext(); } catch (e) {}
        if (swiper.autoplay) swiper.autoplay.start();
      }, configured * 1000);
    } else {
      // fallback: when video ends, go to next and start autoplay
      if (video) {
        video.addEventListener('ended', function() {
          try { swiper.slideNext(); } catch (e) {}
          if (swiper.autoplay) swiper.autoplay.start();
        });
      }
    }
  });
});
