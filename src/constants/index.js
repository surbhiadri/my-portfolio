import project1 from "../assets/projects/FoodSc.png";
import project3 from "../assets/projects/BookStoreSc.png";
import project4 from "../assets/projects/BrainSc.png";

export const HERO_CONTENT = `I am a passionate front-end developer with a knack for crafting robust and scalable web applications. With 5 months of hands-on experience, I have honed my skills in front-end technologies like React .My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated Front-end developer with a passion for creating efficient and user-friendly web applications. With 5 months of experience.My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Food Ordering Website",
    image: project1,
    description:
      "A fully functional restaurant website with features like menu listing, Food cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  // {
  //   title: "Task Management App",
  //   image: project2,
  //   description:
  //     "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
  //   technologies: ["HTML", "CSS", "React", "Firebase"],
  // },
  {
    title: "Book Store",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "MongoDB"],
  },
  {
    title: "Brain Tumor Detection",
    image: project4,
    description:
      "A platform for uploading Brain MRI scans to detect type of brain tumors in real-time on the basis of CNN trained model.",
    technologies: ["Python", "Tensorflow", "Keras", "Flask"],
  },
];

export const CONTACT = {
  address: "Bangaluru, India",
  phoneNo: "+91 83xxxxxxxx",
  email: "surbhikumari63788@gmail.com",
};
