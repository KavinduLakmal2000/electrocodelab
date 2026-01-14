// IoT Projects Data and renderer for portfolio details pages

// IOT Projects data
const iotProjects = [
    {
        id: 1,
        title: 'Smart Autonomous Home Security Robot',
        client: 'ElectroCodeLab',
        category: 'IOT Project',
        date: '01 March, 2024',
        url: '----------------',
        description: `This project is a smart home security robot developed using Arduino Pro Mini and ESP8266 Wi-Fi module. The robot is designed to protect a house when no one is present. It can move autonomously with a spider-like walking mechanism, monitor the environment using multiple sensors, and send real-time alerts to the homeowner.
The system can detect gas leaks, fire, and human motion. When a dangerous situation such as gas leakage or fire is detected, the robot can automatically cut off the main power supply of the house to prevent accidents and immediately notify the homeowner via wireless communication. The robot also includes a self-recharging mechanism, allowing it to operate continuously with minimal human intervention.
This solution improves home safety by combining robotics, IoT, and automation into a single intelligent system.`,
        features: [
            'Autonomous Home Security Robot',
            'Spider-like walking mechanism for movement in indoor environments',
            'Gas leak detection (LPG / smoke)',
            'Fire detection',
            'Human motion detection',
            'Automatic power cut-off in emergencies',
            'Real-time alerts via Wi-Fi to homeowner',
            'Self-recharging mechanism for continuous operation'
        ],
        images: [
            `${ENV.ASSETS_BASE}/assets/img/portfolio/spiderRobot1.jpg`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/spiderRobot2.jpg`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/spiderRobot3.jpg`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/spiderRobot4.png`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/spiderRobot5.png`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/spiderRobot6.png`
        ],
        video: `${ENV.ASSETS_BASE}/assets/vid/Spider_Robot3.mp4`,
        videoDuration: 20
    },

    {
        id: 2,
        title: 'IOT Smart AC Controller',
        client: 'ElectroCodeLab',
        category: 'IOT Project',
        date: '01 June, 2024',
        url: '----------------',
        description: `This project is an IoT-based smart air conditioner (AC) control system developed using ESP8266. The system consists of one main control unit and multiple wireless sub-units placed around the house.
The sub-units collect environmental data such as temperature, humidity, air quality, and human presence using sensors and send the data to the main unit over Wi-Fi. The main unit connects to the home router, processes the data, controls the AC intelligently, and sends real-time updates and notifications to the user’s mobile device.
This system improves comfort, energy efficiency, and indoor air quality through smart automation.`,
        features: [
            'Centralized main unit using ESP8266',
            'Multiple wireless sub-units distributed inside the house',
            'Real-time temperature & humidity monitoring (DHT sensors)',
            'Air quality / gas monitoring (MQ sensors)',
            'Human presence detection (PIR sensors)',
            'Intelligent AC control based on environmental data',
            'Wi-Fi connectivity for remote monitoring & control',
            'Real-time notifications to user’s mobile device'
        ],
        images: [
            `${ENV.ASSETS_BASE}/assets/img/portfolio/AC1.jpg`
        ],
        video: `${ENV.ASSETS_BASE}/assets/vid/AC_vid.mp4`,
        videoDuration: 2
    },

    {
        id: 3,
        title: 'IOT Smart Fire Fighter Support System',
        client: 'ElectroCodeLab',
        category: 'IOT Project',
        date: '01 May, 2021',
        url: '----------------',
        description: `This project is an IoT-based Smart Fire Fighter Support System designed to enhance firefighter safety during emergency operations. The system is integrated into the firefighter suit and continuously monitors the firefighter’s health and surrounding environmental conditions. Data such as body temperature, heart rate, internal and external temperature, gas leaks, oxygen levels, and real-time location are collected using sensors and a GPS module. All data is transmitted wirelessly using ESP8266 to a fire truck monitoring unit, where it is displayed on a web-based interface for real-time monitoring and alerts.`,
        features: [
            'Wearable system integrated into firefighter suit',
            'Real-time heart rate and body temperature monitoring',
            'Internal and external temperature sensing',
            'Gas leak detection in hazardous environments',
            'Oxygen level monitoring',
            'Real-time GPS-based firefighter location tracking',
            'Wireless data transmission using ESP8266',
            'Web-based monitoring dashboard in fire truck',
            'Real-time alerts for dangerous conditions'
        ],

        images: [
            `${ENV.ASSETS_BASE}/assets/img/portfolio/fireFight2.jpeg`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/fireFight1.jpeg`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/fireFight3.jpg`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/firefight4.jpg`
        ],

        video: null,
        videoDuration: 0
    },

    {
        id: 4,
        title: 'IOT Smart Fire Fighter Support System',
        client: 'ElectroCodeLab',
        category: 'IOT Project',
        date: '01 May, 2021',
        url: '----------------',
        description: `This project is an IoT-based Smart Fire Fighter Support System designed to enhance firefighter safety during emergency operations. The system is integrated into the firefighter suit and continuously monitors the firefighter’s health and surrounding environmental conditions. Data such as body temperature, heart rate, internal and external temperature, gas leaks, oxygen levels, and real-time location are collected using sensors and a GPS module. All data is transmitted wirelessly using ESP8266 to a fire truck monitoring unit, where it is displayed on a web-based interface for real-time monitoring and alerts.`,
        features: [
            'Wearable system integrated into firefighter suit',
            'Real-time heart rate and body temperature monitoring',
            'Internal and external temperature sensing',
            'Gas leak detection in hazardous environments',
            'Oxygen level monitoring',
            'Real-time GPS-based firefighter location tracking',
            'Wireless data transmission using ESP8266',
            'Web-based monitoring dashboard in fire truck',
            'Real-time alerts for dangerous conditions'
        ],

        images: [
            `${ENV.ASSETS_BASE}/assets/img/portfolio/smartFans1.png`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/smartFans2.jpg`

        ],

        video: null,
        videoDuration: 0
    },
    {
        id: 5,
        title: '2k20 IoT Smart Home v1',
        client: 'Personal Project',
        category: 'IoT / Home Automation',
        date: '01 July, 2020',
        url: '----------------',
        description: `This project is an IoT-based Smart Home Automation System (Version 1) developed in 2020 using ESP8266 and two Arduino Pro Mini boards. The system enables remote monitoring and control of home appliances via the Blynk platform. It includes safety-focused features such as emergency main power cutoff, automatic emergency power backup switching, and environmental monitoring using a DHT11 sensor. The system also supports RGB room lighting control and scalable expansion for additional smart home functionalities.`,
        features: [
            'ESP8266-based IoT connectivity',
            'Dual Arduino Pro Mini architecture for distributed control',
            'Remote monitoring and control using Blynk platform',
            'Emergency main power cutoff system',
            'Automatic emergency power backup switching',
            'Temperature and humidity monitoring using DHT11 sensor',
            'RGB room lighting control system',
            'Modular and expandable smart home design',
            'Designed and implemented as a Version 1 prototype'
        ],
        images: [
            `${ENV.ASSETS_BASE}/assets/img/portfolio/SmartHome_V1.jpg`

        ],

        video: null,
        videoDuration: 0
    },

    {
        id: 6,
        title: '2k24 IoT Smart Home v2 (Currently online)',
        client: 'Personal Project',
        category: 'IoT / Smart Home & Security',
        date: '01 May, 2024',
        url: '----------------',
        description: `An end-to-end IoT-based smart home automation and security system designed for intelligent control, safety, and uninterrupted operation. The system provides real-time monitoring, automation, and emergency protection with full data logging. It supports reliable operation during power failures using advanced power management and protection mechanisms.`,
        features: [
            'Remote lighting control and automation via mobile app (Blynk)',
            'Multi-zone PIR-based motion detection security system',
            'Real-time temperature, humidity, and battery monitoring',
            'Main AC voltage and battery voltage monitoring',
            'Emergency power backup with dual lithium battery support',
            'Automatic fire detection with full system power cutoff',
            'Over-voltage and under-voltage protection for 230V AC mains',
            'Battery protection: overcharge, over-discharge, and overheat',
            'Emergency power cutoff for both mains and battery systems',
            'Minute-by-minute data logging to SD card',
            'Wireless communication using ESP32-S3 and ESP8266',
            'Low-power control using Arduino Pro Mini for sensor handling'],
        images: [
            `${ENV.ASSETS_BASE}/assets/img/portfolio/SmarHome1_V2.jpeg`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/SmarHome2_V2.jpeg`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/SmarHome3_V2.jpeg`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/SmarHome4_V2.jpeg`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/SmarHome5_V2.jpeg`
        ],

        video: `${ENV.ASSETS_BASE}/assets/vid/SM_v2_vid.mp4`,
        videoDuration: 19
    }

];

// Expose for other scripts
window.iotProjects = iotProjects;

function getQueryParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

function parseCustomId(customId) {
    // Parse custom ID format: i1 -> 1, i2 -> 2, etc.
    if (!customId) return '1';
    const match = customId.match(/^i(\d+)$/);
    return match ? match[1] : '1';
}

function renderIotProject(projectId) {
    const numericId = parseCustomId(projectId);
    const projects = window.iotProjects || [];
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
    window.currentIotProject = project;
}

document.addEventListener('DOMContentLoaded', function () {
    const id = getQueryParam('id') || '1';
    renderIotProject(id);
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
        const configured = (window.currentIotProject && window.currentIotProject.videoDuration) || 0;
        if (configured > 0) {
            setTimeout(function () {
                try { swiper.slideNext(); } catch (e) { }
                if (swiper.autoplay) swiper.autoplay.start();
            }, configured * 1000);
        } else {
            // fallback: when video ends, go to next and start autoplay
            video.addEventListener('ended', function () {
                try { swiper.slideNext(); } catch (e) { }
                if (swiper.autoplay) swiper.autoplay.start();
            });
        }
    });
});
