import {
    mobile,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    carrent,
    jobit,
    tripguide,
    pass,
    threejs,
    filex,
    nexauth
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Works",
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
      title: "React App Developer",
      icon: mobile,
    }
    
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    }
    
  ];
  
  const projects = [
    {
      name: "GPT3 Modern UI",
      description:
        "A contemporary and user-centric website utilizing React for the front-end architecture. Focused on creating an engaging user experience through a modern and visually appealing interface.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "modernUI",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ydt-yash-1738/gpt3",
    },
    {
      name: "WebRTC Chat-Application (Text)",
      description:
        "A real-time communication application using WebRTC technology. Integrated chat functionality to facilitate text-based communication.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/ydt-yash-1738/webRTC",
    },
    {
      name: "WebRTC Video Chat Application",
      description:
        "A real-time communication application using WebRTC technology. Implemented video and audio communication features for seamless user interaction.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/ydt-yash-1738/webRTC",
    },
    {
      name: "Password Generator",
      description:
        "A secure and customizable password generator application using React framework with tailwindCSS and Vite. Implemented features enabling users to generate strong, random passwords based on customized criteria.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: pass,
      source_code_link: "https://github.com/ydt-yash-1738/FrontEnd-Basics/tree/main/password-generator/src",
    },
    {
      name: "FileXchange",
      description:
        "Developed a file sharing application using the MERN (MongoDB, Express, React, Node.js) stack, demonstrating proficiency in full-stack development.Implemented robust file handling functionalities, allowing users to upload and share files with ease.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "yellow-text-gradient",
        },
      ],
      image: filex,
      source_code_link: "https://file-sharing-ydt.vercel.app/",
    },
    {
      name: "NexAuth",
      description:
        "Developed a custom authentication app using Next.js. Implemented user authentication features such as login and registration. Utilized MongoDB as the database to store user information securely.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
        
      ],
      image: nexauth,
      source_code_link: "https://ydt-simple-authentication.vercel.app/",
    }
  ];
  
  export { services, technologies, projects };