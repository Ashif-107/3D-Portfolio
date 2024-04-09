import { meta, shopify, starbucks, tesla, logo } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    Chat,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    sass,
    tailwindcss,
    youtube,
    hand,
    Gemini,
    shoe
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    
];

export const experiences = [
    {
        title: "School Life",
        company_name: "Sebastian",
        icon: logo,
        iconBg: "#accbe1",
        date: "March 2017 - April 2023",
        points: [
            "Started my journey as a student at Sebastian's High School.",
            "Participated in various extracurricular activities and events.",
            "Developed a passion for coding and technology.",
            "Improved my leadership skill by participating in various events and being a class leader for 2 years.",
            "Graduated from high school with a 96% in Boards."            
        ],
    },
    {
        title: "Joining College",
        company_name: "VIT",
        icon: logo,
        iconBg: "#fbc3bc",
        date: "Aug 2023 - Present",
        points: [
            "Pursuing a Bachelor's degree in Computer Science and Electronic Engineering at VIT Chennai.",
            "My passion for Coding improved a lot and I started learning new technologies.",
            "Participated in various hackathons and coding competitions.",
            "Meeting new people and making new friends."     
        ],
    },
    {
        title: "Intrest in Coding",
        company_name: "Vit",
        icon: logo,
        iconBg: "#b7e4c7",
        date: "sep 2023 - Present",
        points: [
            "My interest in web development and Coding grew and I started learning new technologies.",
            "Quickly learned HTML, CSS, and JavaScript, and started building small projects.",
            "And then became a full-stack developer by learning backend technologies like Node.js, Express.js, and MongoDB.",
            "Started mastering technologies like React.js, Next.js,",
            "Developed some 3D projects with Three Fiber since It got my interest.",
            "still trying to learn new technologies and improve my skills."
        ],
    },
    {
        title: "Web Developer",
        company_name: "IEEE",
        icon: logo,
        iconBg: "#a2d2ff",
        date: "Jan 2024 - Present",
        points: [
            "Became a Web Developer at IEEE RAS VIT Chennai Student Chapter.",
            "Developed and maintained the website for the chapter events.",
            "Learned new technologies and improved my skills.",
            "Met new people and made new friends.",
        ],
    },
    {
        title: "Content Developer",
        company_name: "ACM",
        icon: logo,
        iconBg: "#accbe1",
        date: "feb 2024 - Present",
        points: [
            "Became a Content Developer at ACM VIT Chennai Student Chapter.",
            "Worked on creating content for the chapter events.",
            "Improved My communicating Skills and content developing Skills in the Journey",
        ],
    },
    {
        title: "Journey Continues",
        company_name: "vit",
        icon: logo,
        iconBg: "#b7e4c7",
        date: "Present - Future",
        points: [
            "I am Still learning new technologies and improving my skills.",
            "and Keep exploring different fields of technology.",
            "Dont know where this journey will take me but,",
            " I am excited to see what the future holds for me.",
        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Ashif-107',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mohamed-ashif-k-m-b7b328290/',
    }
];

export const projects = [
    {
        iconUrl: youtube,
        theme: 'btn-back-red',
        name: 'Youtube Clone',
        description: 'Inspired by YouTube, my clone project replicates its essence with a sleek interface, seamless video streaming, and user-friendly features. Leveraging modern web technologies and a robust backend, it offers an immersive experience akin to the original platform, demonstrating my skills in web development and UI/UX design."',
        link: 'https://github.com/Ashif-107/React-Youtube-Clone-',
        stack: 'React, Youtube API'
    },
    {
        iconUrl: Gemini,
        theme: 'btn-back-green',
        name: 'Jarvis AI Chatbot',
        description: "Inspired by Gemini API, my Jarvis chatbot clone utilizes its powerful functionalities. Leveraging Gemini's API, it offers seamless integration with cryptocurrency markets, personalized user interactions, and real-time insights. This project showcases my proficiency in API utilization and AI development, enriching user experiences with dynamic functionality.",
        link: 'https://github.com/Ashif-107/Jarvis---a-AI-Clone',
        stack: 'React, Mongo DB, Express, Nodejs, Gemini API'
    },
    {
        iconUrl: Chat,
        theme: 'btn-back-blue',
        name: 'User Authentication Chat App',
        description: "Designed for secure communication, my user authentication chat app ensures privacy with robust authentication protocols. Featuring end-to-end encryption and multi-factor authentication, it prioritizes user safety. Through intuitive design and seamless functionality, this project demonstrates my commitment to delivering reliable and user-centric solutions in the realm of communication technology.",
        link: 'https://github.com/Ashif-107/-User-Authentication-Chat-App',
        stack: 'Nodejs, Express, MongoDB, Socket.io, Bycrypt'
    },
    {
        iconUrl: hand,
        theme: 'btn-back-pink',
        name: ' Hand Gesture Recognition',
        description: "Estimate hand pose using MediaPipe (Python version).This is a program that recognizes hand signs and finger gestures with a simple MLP(Convolutional Neural Networks (CNN) is the most widely used method for gesture detection) using the detected key points.😃 This is a my 1st Year Project for the IOE... 😃. Should really Thank My teammates. Without them this wouldnt be achieved ",
        link: 'https://github.com/Ashif-107/Hand-Gestures-Recognition',
        stack: 'Python, MediaPipe, OpenCV'
    },
    {
        iconUrl: logo,
        theme: 'btn-back-black',
        name: 'A Watch Brand Landing Page',
        description: "Crafted with elegance, my watch brand landing page captivates with simplicity and subtle animations. Featuring sleek design elements and smooth transitions, it offers a captivating introduction to the brand's timepieces.",
        link: 'https://github.com/Ashif-107/Watch-Brand-Animated-Landing-Page',
        stack: 'Html, Css, Javascript'
    },
    {
        iconUrl: shoe,
        theme: 'btn-back-yellow',
        name: 'Nike E-commerce Website',
        description: "The Nike website is a dynamic hub for sports enthusiasts, offering a seamless shopping experience, rich multimedia content, and community engagement. With sleek design and innovative features, it embodies Nike's commitment to excellence in athletic performance and lifestyle.",
        link: 'https://github.com/Ashif-107/Nike-E-commerce-website',
        stack: 'Html, Css, Javascript'

    }
];