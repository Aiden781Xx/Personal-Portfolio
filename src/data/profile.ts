export const profileData = {
  name: "Shivam Kumar Sharma",
  title: "Full Stack Developer",
  tagline: "MERN Stack Developer | Backend Specialist | Building Scalable Web Solutions",
  email: "shivambhardwaj750000@gmail.com",
  phone: "+91 7505611192",
  location: "Greater Noida, India",
  bio: "Passionate Full Stack Developer with expertise in the MERN stack and backend development. Currently pursuing B.Tech in Computer Science with hands-on experience in building scalable web applications, RESTful APIs, and modern frontend interfaces. I love solving complex problems and creating efficient, user-friendly solutions.",
  avatar: "src/assets/profile.jpg",
  resume: "https://drive.google.com/file/d/1KHyrAoURefXTCEYsukrysh3a1-gWDB2N/view?usp=sharing",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/Aiden781Xx",
      icon: "Github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/shivam-sharma",
      icon: "Linkedin"
    },
    {
      name: "Email",
      url: "mailto:shivambhardwaj750000@gmail.com",
      icon: "Mail"
    }
  ]
};

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "G.L. Bajaj Institute of Technology and Management",
    location: "Greater Noida",
    period: "2023 - 2026",
    current: true
  },
  {
    degree: "Bachelor of Science - PCM",
    institution: "Bachelor Of Science",
    period: "2020 - 2023",
    current: false
  }
];

export const skills = [
  // Strongest Areas
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React.js", level: 85, category: "frontend" },
  { name: "Node.js", level: 88, category: "backend" },
  { name: "RESTful API", level: 85, category: "backend" },
  { name: "MongoDB", level: 80, category: "database" },
  
  // Languages & Tech
  { name: "TypeScript", level: 75, category: "frontend" },
  { name: "Java", level: 70, category: "backend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "Express.js", level: 85, category: "backend" },
  { name: "Docker", level: 65, category: "tools" },
  
  // Tools & Others
  { name: "Git", level: 80, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
  { name: "JWT", level: 80, category: "backend" },
  { name: "Chart.js", level: 75, category: "frontend" },
  { name: "API Development", level: 85, category: "backend" }
];

export const experiences = [
  {
    id: "startup-world",
    title: "Backend Developer Intern",
    company: "StartUpWorld",
    location: "Remote",
    startDate: "June 2025",
    endDate: null,
    current: true,
    type: "internship" as const,
    description: [
      "Developed and maintained server-side applications using Node.js and related backend frameworks",
      "Assisted in designing and implementing RESTful APIs to ensure secure and scalable communication with frontend systems",
      "Participated in the testing and debugging of backend modules to ensure high performance and reliability",
      "Collaborated remotely with the SMCNJ team to plan sprints, review code, and deploy backend services",
      "Followed best practices in code versioning using Git and collaborated via online tools in a fully remote environment"
    ],
    technologies: ["Node.js", "RESTful API", "Git", "Backend Testing", "Remote Collaboration"]
  },
  {
    id: "vault-of-codes",
    title: "MERN Stack Developer Intern",
    company: "VaultOfCodes",
    location: "Remote",
    startDate: "June 2025",
    endDate: "June 2025",
    current: false,
    type: "internship" as const,
    description: [
      "Built a responsive web app using React.js (frontend) and Node.js + Express.js (backend)",
      "Integrated MongoDB with secure data storage and JWT authentication",
      "Developed RESTful services, implemented form validations, and managed frontend state with React hooks"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "RESTful Services"]
  },
  {
    id: "glowlogics",
    title: "MERN Stack Developer Intern",
    company: "Glowlogics",
    location: "Remote",
    startDate: "May 2025",
    endDate: "June 2025",
    current: false,
    type: "internship" as const,
    description: [
      "Designed UI using React.js + TailwindCSS, focusing on UX and component reusability",
      "Created and consumed backend APIs with Express.js, connected to MongoDB Atlas",
      "Participated in full-stack development, ensuring smooth data flow between client and server"
    ],
    technologies: ["React.js", "Tailwind CSS", "Express.js", "MongoDB Atlas", "Full-stack Development"]
  }
];