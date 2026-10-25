// All site content lives here. Update this file to change what the site shows.

export const profile = {
  name: 'Md. Abu Horaira',
  shortName: 'Abu Horaira',
  role: 'CSE undergraduate, University of Dhaka',
  tagline:
    'I build full-stack software and research on-device AI for autonomous drones.',
  intro: [
    'I am a final-year Computer Science & Engineering student at the University of Dhaka. Most of my work sits between two areas: practical software for real organisations, and AI that runs on small, resource-constrained hardware.',
    'Right now I am working on my undergraduate thesis on an agentic AI framework that lets a drone carry out missions from natural-language commands, fully on-device. Before that I build a public image dataset for detecting illegal road crossings in Dhaka, and shipped CSEDU Nexus, a production platform for our department.',
  ],
  location: 'Dhaka, Bangladesh',
  email: 'mdabu-2021911202@cs.du.ac.bd',
  phone: '+880 1751 777543',
  phoneHref: 'tel:+8801751777543',
  github: 'https://github.com/puHoraira',
  linkedin: 'https://www.linkedin.com/in/abu-horaira-csedu/',
  cv: 'Abu_Horaira_CV.pdf',
  photo: 'pp1.png',
};

export const thesis = {
  status: 'Ongoing',
  title:
    'An Edge-Deployable Agentic AI Framework for Multi-Domain Autonomous UAV Mission Execution with Task-Aware Dynamic LoRA Adaptation',
  summary:
    'An agentic AI system that turns natural-language commands into autonomous UAV missions. An on-device language model picks task-specific LoRA adapters on the fly, uses vision to understand the scene, plans the mission, and hands it to PX4-based flight control, all within the limits of embedded hardware.',
  domains: ['Agriculture', 'Emergency response', 'Infrastructure inspection'],
  components: [
    {
      title: 'On-device language model',
      text: 'Interprets mission commands without relying on a cloud connection.',
    },
    {
      title: 'Dynamic LoRA selection',
      text: 'Loads the right capability adapter for each task instead of one large general model.',
    },
    {
      title: 'Vision-based context',
      text: 'Uses the onboard camera feed to ground decisions in what the drone actually sees.',
    },
    {
      title: 'Mission planning + PX4',
      text: 'Converts plans into flight actions through PX4-based flight control.',
    },
  ],
  supervisor: {
    name: 'Dr. Mosaddek Hossain Kamal Tushar',
    title: 'Professor, Department of CSE, University of Dhaka',
    url: 'https://du.ac.bd/faculty/faculty_details/CSE/1764',
  },
};

export const dataset = {
  title: 'An Image Dataset for Illegal Road Crossing Detection in Bangladesh',
  venue: 'Mendeley Data',
  version: 'Version 1',
  year: 2026,
  published: '22 September 2026',
  authors: [
    'Tawyabul Islam Tamim',
    'Md. Abu Horaira',
    'Md. Shahriar Kabir',
    'Mst. Irin Sultana',
    'Md. Adib Ahsan',
  ],
  doi: '10.17632/8bxthkv6m6.1',
  url: 'https://data.mendeley.com/datasets/8bxthkv6m6/1',
  license: 'CC BY 4.0',
  summary:
    'A group project to collect and annotate street-level images of pedestrians in Dhaka, then use them to train object detectors that tell apart people crossing mid-road from those on the roadside or sidewalk.',
  facts: [
    { value: '694', label: 'real-world images from Dhaka' },
    { value: '3', label: 'classes: middle, side, sidewalk' },
    { value: 'YOLO', label: 'format, ready for YOLOv8 and YOLO11' },
    { value: '3', label: 'resolutions: 640, 960 and 1280 px' },
  ],
  contributions: [
    'Collected and curated images covering different angles, lighting, traffic density and occlusion.',
    'Hand-labelled bounding boxes for a three-class scheme and a single-class "crossing" scheme.',
    'Prepared train / validation / test splits and ran object detection experiments with YOLO models.',
  ],
};

export const projects = [
  {
    slug: 'csedu-nexus',
    title: 'CSEDU Nexus',
    subtitle: 'Student organisation management system',
    year: '2026',
    featured: true,
    summary:
      'A full-stack platform that runs the day-to-day of a student organisation at CSE, University of Dhaka: membership, elections, events, finance and meetings, in one place.',
    highlights: [
      'JWT authentication with refresh tokens, email OTP and role-based access control',
      'Two-phase elections with eligibility checks, voting, results and dispute handling',
      'Events and workshops with paid registration, QR check-in and PDF certificates',
      'bKash and SSLCommerz payments, finance reports and transaction tracking',
      'Video meetings via ZEGOCLOUD, notifications and email announcements',
      'Deployed with Docker Compose behind Nginx (Let\'s Encrypt SSL) on an Azure VM',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Nginx', 'Azure'],
    github: 'https://github.com/puHoraira/CSEDU_Nexus',
    live: 'https://nexus.farefin.com',
  },
  {
    slug: 'travelheaven',
    title: 'TravelHeaven',
    subtitle: 'AI-powered travel planning platform',
    summary:
      'A MERN travel platform that uses Google Gemini for trip planning and pulls schedules from the Bangladesh Railway API. Includes collaborative itinerary editing and live chat.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini API', 'WebSocket'],
    github: 'https://github.com/puHoraira/TravelHeaven',
  },
  {
    slug: 'rescue-track',
    title: 'Rescue Track',
    subtitle: 'Disaster relief management system',
    summary:
      'Coordinates relief work across five user roles, with relief-camp management, inventory tracking and automatic replenishment, SSLCommerz donations and email updates.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'SSLCommerz', 'Nodemailer'],
    github: 'https://github.com/puHoraira/Rescue_Track',
  },
  {
    slug: 'learnsphere',
    title: 'LearnSphere',
    subtitle: 'Cross-platform EdTech app',
    summary:
      'A Flutter learning app for Android and iOS with courses, video lectures, assignments and quizzes, backed by Firebase Authentication and Cloud Firestore.',
    stack: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore'],
    github: 'https://github.com/puHoraira/edtech',
    extra: {
      label: 'Download APK',
      url: 'https://drive.google.com/drive/folders/10mQJtZjhcYVyHDqe6WLUhivX_pow-DzS?usp=sharing',
    },
  },
  {
    slug: 'hospital-management',
    title: 'Hospital Management System',
    subtitle: 'Healthcare operations platform',
    summary:
      'Patient registration, appointments, doctor records and billing for doctors, patients and administrators, built on Node.js with an Oracle SQL database.',
    stack: ['Node.js', 'Express', 'Oracle SQL'],
    github: 'https://github.com/puHoraira/hospitalManagement',
  },
  {
    slug: 'csedu-bank',
    title: 'CSEDU Bank Management',
    subtitle: 'Desktop banking application',
    summary:
      'A JavaFX desktop app with MySQL for account management and transactions: deposits, withdrawals and transfers, with login and an admin panel.',
    stack: ['Java', 'JavaFX', 'MySQL'],
    github: 'https://github.com/horaira1015/CSEDU_BANK_MANAGMENT_SYSTEM',
  },
];

export const earlierWork = [
  {
    title: 'DualGame',
    text: 'Chess and Tic-Tac-Toe with AI opponents, written in C++ with SDL2.',
    github: 'https://github.com/puHoraira/DualGameProject-CHESS-TICTACTOE-',
  },
  {
    title: 'ADC hardware project',
    text: 'Analog-to-digital converter circuit: design, build, testing and documentation.',
    github: 'https://github.com/horaira1015/ADC_EEE-project',
  },
];

export const education = [
  {
    school: 'University of Dhaka',
    degree: 'B.Sc. in Computer Science & Engineering',
    period: 'Aug 2021 – Jan 2027 (expected)',
    detail: 'CGPA 3.80 / 4.00 (up to 3rd year, 2nd semester)',
  },
  {
    school: 'Comilla Victoria Government College',
    degree: 'Higher Secondary Certificate (Science)',
    period: '2021',
    detail: 'GPA 5.00 / 5.00',
  },
  {
    school: 'Comilla Shikkha Board Model College',
    degree: 'Secondary School Certificate (Science)',
    period: '2019',
    detail: 'GPA 5.00 / 5.00',
  },
];

export const skills = [
  { group: 'Languages', items: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'Dart'] },
  { group: 'Web & backend', items: ['React', 'Node.js', 'Express', 'HTML', 'CSS'] },
  { group: 'Databases', items: ['MongoDB', 'MySQL', 'Oracle SQL', 'Firebase'] },
  { group: 'Cloud & tools', items: ['Azure', 'Docker', 'Nginx', 'Git', 'Linux', 'Android Studio'] },
  {
    group: 'AI & embedded',
    items: ['Machine learning', 'YOLO object detection', 'Jetson Nano', 'Microcontrollers', 'UAV systems'],
  },
];

export const interests = [
  'Software engineering',
  'Artificial intelligence',
  'Machine learning',
  'Embedded systems',
];

export const languages = ['Bengali (native)', 'English (fluent)'];
