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
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    BlogProject,
    ASL,
    jobit,
    tripguide,
    threejs,
    samsung,
    capabl,
    pandas,
    python,
    numpy,
    sklearn,
    matplotlib
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
      title: "Backend Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
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
      name: "Python",
      icon: python,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "pandas",
      icon: pandas,
    },
    {
      name: "numpy",
      icon: numpy,
    },
    {
      name:"sklearn",
      icon:sklearn,
    },
    {
      name:"matplotlib",
      icon:matplotlib,
    }
  ];
  
  const experiences = [
    {
      title: "Data Science Intern",
      company_name: "Capabl.",
      icon: capabl,
      iconBg: "#383E56",
      date: "Sept 2023 - Oct 2023",
      points: [
        "The internship aims to develop practical skills in data collection, preprocessing, feature engineering, and model selection to create a predictive model for taxi fare estimation. Interns will work with diverse datasets and collaborate with domain experts to apply machine learning algorithms, enhancing prediction accuracy and addressing challenges like overfitting. Additionally, the internship focuses on improving communication and collaboration skills through mentorship and stakeholder interactions. Objectives include building a robust predictive model, optimizing its performance, and effectively communicating findings to demonstrate the practical utility of predictive analytics in the transportation sector.",
      ],
    },
    {
      title: "Machine Learning Intern",
      company_name: "SAMSUNG R&D INSTITUTE INDIA-BANGALORE PRIVATE LIMITED",
      icon: samsung,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - June 2024",
      points: [
        "Given multi camera surround view images, objective was to generate BEV semantic occupancy grid map capturing information like showing moving objects, pedestrians, road lanes, speed bumps etc."
      ],
    },
    
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Sept 2023 - Oct 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
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
      name: "Vayu Vani Blogs",
      description:
        "Introducing our dynamic blogging platform that allows users to effortlessly create and edit posts using an intuitive text editor, preview their content before publishing, and securely sign in and log in to manage their blogs with ease.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tinymce text editor",
          color: "green-text-gradient",
        },
        {
          name: "appwrite service",
          color: "pink-text-gradient",
        },
      ],
      image: BlogProject,
      source_code_link: "https://vayu-vani-five.vercel.app/",
    },
    {
      name: "PILS",
      description:
        "The project aims to deliver a comprehensive system featuring a trained YOLO model for real-time object recognition, a user-friendly interface for generating sign language gestures, an evaluation module for assessing user proficiency, and continuous refinement based on user feedback to enhance functionality and usability.",
      tags: [
        {
          name: "Machine Learning",
          color: "blue-text-gradient",
        },
        {
          name: "ffmpeg library",
          color: "green-text-gradient",
        },
        {
          name: "flask",
          color: "black-text-gradient",
        },
      ],
      image: ASL,
      source_code_link: "https://github.com/vranjan041/Personalized-Interactive-Leaning-System-for-Sign-Language-Acquisition-PILS-",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };