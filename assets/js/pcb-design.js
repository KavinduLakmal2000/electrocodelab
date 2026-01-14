// PCB Design Projects Data and renderer for portfolio details pages

// PCB Design Projects data
const pcbDesignProjects = [
  {
    id: 1,
    title: 'Programmable RGB LED Control System',
    client: 'ElectroCodeLab',
    category: 'Electronics',
    date: '27 june, 2019',
    url: '----------------',
    description: `This project is a custom-designed programmable RGB LED control system built around an ATmega328P microcontroller. The system controls 106 four-pin RGB LEDs using five 8-bit shift registers and dedicated transistor driver circuits for each color line. A custom PCB was designed to efficiently manage high-current LED driving, synchronized color patterns, and real-time lighting effects. The system is optimized for scalability, timing accuracy, and reliable operation in embedded and decorative lighting applications.`,
    features: [
      'Custom-designed PCB with ATmega328P microcontroller',
      'Control of 106 four-pin RGB LEDs',
      'Five 8-bit shift registers for expanded I/O control',
      'Dedicated transistor drivers for each LED color channel',
      'High-current LED driving with stable power distribution',
      'Programmable RGB patterns and animations',
      'Efficient GPIO utilization using shift registers',
      'Modular and scalable hardware architecture',
      'Suitable for decorative, industrial, and display lighting systems'
    ],

    images: [
      `${APP_BASE_PATH}/assets/img/portfolio/RGB_mcu1.jpg`,
      `${APP_BASE_PATH}/assets/img/portfolio/RGB_mcu2.jpg`,
      `${APP_BASE_PATH}/assets/img/portfolio/RGB_mcu3.jpg`,
      `${APP_BASE_PATH}/assets/img/portfolio/RGB_mcu4.jpg`

    ],

    video: `${APP_BASE_PATH}/assets/vid/RBG_mcu2.mp4`,
    videoDuration: 15
  }
];

// Expose for other scripts
window.pcbDesignProjects = pcbDesignProjects;

function getQueryParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function parseCustomId(customId) {
  // Parse custom ID format: p1 -> 1, p2 -> 2, etc.
  if (!customId) return '1';
  const match = customId.match(/^p(\d+)$/);
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

document.addEventListener('DOMContentLoaded', function () {
  const id = getQueryParam('id') || '1';
  renderProject(id, window.pcbDesignProjects, 'pcb');
});

// After all resources load and the site initializes the Swiper, ensure video-first behavior
window.addEventListener('load', function () {
  const slider = document.querySelector('.portfolio-details-slider');
  if (!slider) return;
  const video = slider.querySelector('video');

  // Poll for swiper instance since init order may vary
  let attempts = 0;
  const getSwiper = function (resolve) {
    attempts++;
    const sw = slider.swiper;
    if (sw || attempts > 20) {
      resolve(sw);
    } else {
      setTimeout(() => getSwiper(resolve), 150);
    }
  };

  new Promise(getSwiper).then(function (swiper) {
    if (!video || !swiper) return;

    // Ensure swiper starts on the video slide (index 0)
    try { swiper.slideTo(0, 0); } catch (e) { }

    // Stop automatic autoplay while video plays
    if (swiper.autoplay && swiper.autoplay.running) {
      swiper.autoplay.stop();
    }

    // Play video (muted to allow autoplay)
    video.play().catch(() => { });

    // Start slideshow after configured duration (seconds), otherwise fallback to 'ended' event.
    const configured = (window.currentProject && window.currentProject.videoDuration) || 0;
    if (configured > 0) {
      setTimeout(function () {
        try { swiper.slideNext(); } catch (e) { }
        if (swiper.autoplay) swiper.autoplay.start();
      }, configured * 1000);
    } else {
      // fallback: when video ends, go to next and start autoplay
      if (video) {
        video.addEventListener('ended', function () {
          try { swiper.slideNext(); } catch (e) { }
          if (swiper.autoplay) swiper.autoplay.start();
        });
      }
    }
  });
});
