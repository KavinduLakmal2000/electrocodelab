// IOT Projects data (used by portfolio-details page)
const iotProjects = [
  {
    id: 1,
    title: 'IOT Spider Robot',
    client: 'ElectroCodeLab',
    category: 'IOT Project',
    date: '01 March, 2024',
    url: 'https://example.com',
    description: `Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.`,
    features: [
      'Responsive Design', 
      'Advanced Security',
      'Performance Optimization',
      'Easy Integration'
    ],
    images: [
      '../assets/img/portfolio/portfolio-1.webp',
      '../assets/img/portfolio/portfolio-10.webp',
      '../assets/img/portfolio/portfolio-7.webp'
    ],
    video: '../assets/vid/Spider_Robot3.mp4',
    videoDuration: 20
  },

  {
    id: 2,
    title: 'IOT Smart AC Controller',
    client: 'ElectroCodeLab',
    category: 'IOT Project',
    date: '01 March, 2024',
    url: 'https://example.com',
    description: `Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.`,
    features: [
      'Responsive Design',
      'Advanced Security',
      'Performance Optimization',
      'Easy Integration'
    ],
    images: [
      '../assets/img/portfolio/portfolio-1.webp',
      '../assets/img/portfolio/portfolio-10.webp',
      '../assets/img/portfolio/portfolio-7.webp'
    ],
    video: '../assets/vid/Spider_Robot3.mp4',
    videoDuration: 20
  }
];

// Expose for other scripts (already global variable name)
window.iotProjects = iotProjects;
