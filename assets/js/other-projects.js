// Other Projects Data and renderer for portfolio details pages

// Other Projects data
const otherProjects = [
  {
    id: 1,
    title: 'Classic Beauty',
    client: 'Automotive Excellence',
    category: 'Automotive',
    date: '05 March, 2024',
    url: 'https://example.com',
    description: `Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.`,
    features: [
      'Precision Engineering',
      'Quality Materials',
      'Custom Design',
      'Expert Craftsmanship'
    ],
    images: [
      '../assets/img/portfolio/portfolio-portrait-2.webp',
      '../assets/img/portfolio/portfolio-portrait-3.webp',
      '../assets/img/portfolio/portfolio-12.webp'
    ],
    video: null,
    videoDuration: 0
  }
];

// Expose for other scripts
window.otherProjects = otherProjects;

function getQueryParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function parseCustomId(customId) {
  // Parse custom ID format: o1 -> 1, o2 -> 2, etc.
  if (!customId) return '1';
  const match = customId.match(/^o(\d+)$/);
  return match ? match[1] : '1';
}

function renderProject(projectId, projectsArray, projectType) {
  const numericId = parseCustomId(projectId);
  const projects = projectsArray || [];
  const project = projects.find(p => String(p.id) === String(numericId)) || projects[0];
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
  const id = getQueryParam('id') || '1';
  renderProject(id, window.otherProjects, 'other');
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
