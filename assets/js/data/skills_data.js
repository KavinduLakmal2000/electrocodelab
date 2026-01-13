// Skills Section Data

const skillsData = {
  header: {
    title: 'Skills',
    description: 'A blend of software engineering, IoT innovation, and mechanical expertise'
  },

  categories: [
    {
      id: 'software',
      icon: 'bi-laptop',
      title: 'Software Development',
      delay: '200',
      skills: [
        { name: 'C# / .NET Web Development', percentage: 89 },
        { name: 'React / JavaScript (ES6+)', percentage: 50 },
        { name: 'HTML / CSS / Bootstrap', percentage: 95 },
        { name: 'Node.js / Express', percentage: 80 },
        { name: 'MySQL / MongoDB', percentage: 75 },
        { name: 'C++ / Java', percentage: 80 },
        { name: 'Git / GitHub', percentage: 88 }
      ]
    },
    {
      id: 'automotive',
      icon: 'bi-gear',
      title: 'Automotive & Mechatronics',
      delay: '300',
      skills: [
        { name: 'Engine Rebuild & Overhaul', percentage: 90 },
        { name: 'ECU Diagnostics & Code Clearing', percentage: 85 },
        { name: 'Vehicle Wiring & Sensor Integration', percentage: 80 }
      ]
    },
    {
      id: 'electronics',
      icon: 'bi-cpu',
      title: 'Electronics & IoT Systems',
      delay: '400',
      skills: [
        { name: 'PCB Design & Circuit Analysis', percentage: 85 },
        { name: 'Microcontroller Programming (ESP32/Arduino)', percentage: 90 },
        { name: 'IoT Device Integration & Automation', percentage: 88 }
      ]
    }
  ],

  technical_skills: [
  ]
};

// Expose to window for renderers that check `window.skillsData`
if (typeof window !== 'undefined') window.skillsData = skillsData;
