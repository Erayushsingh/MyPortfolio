import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";


import Redux from "../assets/Redux.png"
import ReduxPersistent2 from "../assets/ReduxPersistent2.png"
import Shop from "../assets/Shop.png"
import Payment from "../assets/Stripepay.png"
import BMI from "../assets/BMI.png"
import Profile from "../assets/Profile.png"


import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { AiOutlinePython } from "react-icons/ai";
import { SiExpress } from "react-icons/si";
import { SiPostman } from "react-icons/si";


export const NAVIGATION_LINKS = [
  { label: "Bio", href: "#bio" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Ayush Singh",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate Full Stack MERN Developer dedicated to crafting robust web applications. With expertise in MongoDB,Express.js, React and Node.js, I turn ideas into engaging digital experiences. I thrive on challenges and strive to create seamless user interfaces that inspire and delight.",
};

export const BIO = [
  "Hello! I’m Ayush Singh, a passionate B.Tech Computer Science student currently in my third year. My journey in technology has been fueled by a keen interest in problem-solving and a desire to explore the vast world of computer science.",
  "I have a strong foundation in Data Structures and Algorithms, and I’ve honed my programming skills in C++, Python, and JavaScript. My fascination with data extends to Data Science, where I enjoy uncovering insights and telling stories through data.",
  "Thank you for visiting!",
];

export const PROJECTS = [
  {
    id: 1,
    name: "BMI Calculator",
    description:
      "This BMI calculator, built using HTML and JavaScript, allows you to input your weight and height to determine your Body Mass Index and understand your health status.",
    image: BMI,
    githubLink: "https://github.com/Erayushsingh/BMI-Calculator",
  },
  {
    id: 2,
    name: "Personal Portfolio",
    description:"Created a portfolio website using React, Tailwind CSS, and Framer Motion to showcase my projects and skills. The responsive design, powered by Tailwind, ensures a modern and clean aesthetic.",
    image:Profile,
    githubLink: "https://github.com/Erayushsingh/MyPortfolio-",
  },
  
  {
    id: 4,
    name: "Mode Switcher",
    description:
      "The Mode Switcher app, built with Redux Persist, allows users to seamlessly toggle between light and dark modes. With its intuitive interface, your preferences are saved even after closing the app, ensuring a consistent experience. Enjoy a visually pleasing and personalized environment that adapts to your needs!",
    image:ReduxPersistent2,
    githubLink: "https://github.com/Erayushsingh/ModeSwitcher-ReduxPersistent",
  },
  {
    id: 5,
    name: "Redux",
    description:
      "A redux-based application that allows users to easily view detailed product information. With a seamless interface, users can browse products and access essential details effortlessly. The app leverages Redux for efficient state management, ensuring a smooth and responsive experience. Discover products and their specifications in an organized and user-friendly environment!",
    image:Redux,
    githubLink: "https://github.com/Erayushsingh/Redux",
  },
  {
    id: 6,
    name: "E-commerce",
    description:
      "An e-commerce website powered by Firebase for backend support, enabling real-time data synchronization and seamless user authentication.",
    image:Shop,
    githubLink: "https://github.com/Erayushsingh/Shop-",
  },

  {
    id: 7,
    name: "Resturant",
    description:
      "A restaurant website using Node.js and Express.js for the backend, with React for a dynamic user interface. The application features JWT for secure authentication, MongoDB for data management, and Stripe for seamless payment processing. Users can easily browse the menu and place orders.",
    image:Payment,
    githubLink: "https://github.com/Erayushsingh/Resturant",
  },
];


export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "SQL",
  },
  {
    icon:<AiOutlinePython   className="text-4xl text-sky-700 lg:text-5xl"/>,
    name:"Python" 

  },
  {
    icon:<SiExpress  className="text-4xl text-sky-700 lg:text-5xl"/>,
    name:"Express"

  },
  {
    icon:<SiPostman  className="text-4xl text-sky-700 lg:text-5xl"/>,
    name:"Postman"

  },
];


export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "University of Lucknow,Lucknow",
    duration: "November 2022 - June 2026",
    description:
      "Focused on Web development,Data Structure & Algorithms, Programming languages, and Database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, React, and NodeJs.",
  },
  {
    degree: "Bachelor of Science in Data Science",
    institution: "Indian Institute of Technology,Madrash",
    description:
      "Focused on Data Science, Machine Learning, Statistical Analysis, and Data Visualization. Actively involved in data science clubs and hackathons. Passionate about extracting meaningful insights from complex datasets to drive strategic decision-making and improve business outcomes.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  
  
  {
    href: "https://x.com/AyushSingh87881",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Erayushsingh",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/ayush-singh-641871260/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
