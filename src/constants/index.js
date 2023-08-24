import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    cpp,
    docker,
    oracle,
    passwordGenerator,
    createTodo,
    healthhub,
    textUtils,
    blogs,
    postman,
    tindog,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "cpp",
      icon: cpp,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "postman",
      icon: postman,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Oracle",
      icon: oracle,
      iconBg: "#383E56",
      date: "Oct 2022 - Present",
      points: [
        "Successfully Delivered 2 major features and enhancements on time, also contributed in reducing the internal backlog by 25%.",
        "Closed 35+ customer-centric bugs in collaboration with the QA team, increased customer satisfaction by 30%.",
        "Conducted training on the ramp up process for all new teammembers, and served as a member of a fun-committee team",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Assosiate Software Developer",
      company_name: "Oracle",
      icon: oracle,
      iconBg: "#383E56",
      date: "Dec 2020 - Sept 2022",
      points: [
        "Working with a support and back-end development team of session border controller",
        "Collaborating with cross-functional teams including architect, product managers, and other developers to create high-quality products.",
        "Successfully Delivered 2 enhancements on time, also contributed in reducing the internal backlog by 15%.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ToDo App",
      description:
        "Web-based platform that allows users to make their day to day life todo List and track the tasks.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: createTodo,
      source_code_link: "https://github.com/curiousMind1234/Advanced-Todo-List",
    },
    {
      name: "Password Generator",
      description:
        "Web application that enables users to generate random password",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
      ],
      image: passwordGenerator,
      source_code_link: "https://github.com/curiousMind1234/Password-Generator",
    },
    {
      name: "HealthHub",
      description:
        "A fitness app that give users various exercises data as per their need, also user can check some useful yoga-asanas there. User can also calculate their BMI rate",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Material UI",
          color: "green-text-gradient",
        },
        {
          name: "Rapid API",
          color: "pink-text-gradient",
        },
      ],
      image: healthhub,
      source_code_link: "https://github.com/curiousMind1234/Fitness_Yoga",
    },
    {
      name: "Text-Utils",
      description:
        "Web application that enables users to play with text, user can see the entered text summary, no of letters,characters, how many minute it takes to read also can convert text into Upper and Lower case. ",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "BootStrap",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: textUtils,
      source_code_link: "https://github.com/curiousMind1234/TextUtils",
    },
    {
      name: "CodeHelp Blog",
      description:
        "This is the template of blog website, where we can navigate through any blogs, their respective tags and headings and content",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: blogs,
      source_code_link: "https://github.com/curiousMind1234/Blogs_page",
    },
    {
      name: "TinDog",
      description:
        "It is the simple startup website, created for learning purpose",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: tindog,
      source_code_link: "https://github.com/curiousMind1234/Startup-site",
    },

  ];
  
  export { services, technologies, experiences, testimonials, projects };