import {
    IoLogoJavascript,
    IoLogoHtml5,
    IoLogoReact,
} from "react-icons/io5";
import { FaBootstrap, FaCss3, FaNodeJs ,FaTools} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";

export const PROFILE_DATA = {
    name: "Shubham",
    tagline: `A Frontend Web developer passionate about building engaging web applications and solving complex problems with code`,
    jobTitle: "FrontEnd Web Developer",
    location: "India",
    yearsOfExperience: "1 Year of teaching experience",
    skills: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Git",
        "GitHub",
        "Bootstrap",
        "TailwindCSS",
        "Redux",
        "NodeJs",
        "Express",
        "MongoDB"
    ],
    email: "shubuchoudhary1500@gmail.com",
    phone: "+91 82196-44580",
    website: "Not available yet",
};

export const SKILLS = [
    {
        title: "Frontend",
        icon : FaReact,
        skills: [
            { skill: "HTML" , persentage : '80%'},
            { skill: "CSS" , persentage : '90%' },
            { skill: "JavaScript" , persentage : '85%' },
            { skill: "React" , persentage : '70%' }
        ]
    },
    {
        title: "Backend",
        icon : FaNodeJs,
        skills: [
            { skill: "Node.js" , persentage : '70%'},
            { skill: "Express.js" , persentage : '65%' },
            { skill: "Mongodb" , persentage : '70%' },
        ]
    },
    {
        title: "Tools",
        icon :FaTools,
        skills: [
            { skill: "Visual Studio Code" , persentage : '75%'},
            { skill: "Git & Github" , persentage : '83%' },
            { skill: "Postman" , persentage : '50%%' },
        ]
    },
    {
        title: "Soft Skills",
        icon : GiSkills ,
        skills: [
            { skill: "Problem-Solving" , persentage : '80%'},
            { skill: "Collaboration" , persentage : '85%' },
            { skill: "Attention to Detail" , persentage : '75%' }
        ]
    },
]
// export const SKILLS2 = [
//     {
//         id: "01",
//         icon: IoLogoJavascript,
//         title: "JavaScript",
//         comment: "JavaScript simplify the development process and guarantee compatibility across browsers. JavaScript allows developers to create rich, interactive, and dynamic web apps ranging from simple scripts to complex web applications."

//     },
//     {
//         id: "02",
//         icon: IoLogoHtml5,
//         title: "HTML",
//         comment: "HTML is the foundation of every web project I work on. I have a deep understanding of its structure and semantics, ensuring my web applications are well structured and accessible."
//     },
//     {
//         id: "03",
//         icon: IoLogoReact,
//         title: "React JS",
//         comment: "I'm deeply passionate about React.js and have been using it extensively. I've built few projects in React JS"
//     },
//     {
//         id: "04",
//         icon: RiTailwindCssFill,
//         title: "Tailwind CSS",
//         comment: "Tailwind CSS has revolutionized the way I approach front-end styling. Its utility first approach allow me to rapidly build responsive and beautifully designed interfaces without writing custom CSS."
//     },
//     {
//         id: "05",
//         icon: FaBootstrap,
//         title: "Bootstrap",
//         comment: "Bootstrap offers a rich library of pre-designed user interface components, such as navigation bars, buttons, forms, modals, and more. These components come with well-defined styles and classes, making it effortless to integrate them into my web projects."
//     },
//     {
//         id: "06",
//         icon: FaCss3,
//         title: "CSS3",
//         comment: "CSS3 is a more advanced version of CSS and the successor of CSS2. CSS3 is used for the same thing as CSS, namely to style web pages and make them more attractive and user-friendly."
//     },
//     {
//         id: "07",
//         icon: FaNodeJs,
//         title: "NodeJs",
//         comment: "Node.js is a powerful JavaScript runtime built on Chrome's V8 engine. It is the successor to traditional JavaScript execution environments and is used to build fast and scalable server-side applications. Node.js allows developers to run JavaScript on the server, handle requests, and manage databases, making it an essential tool for modern web development."
//     }, {
//         id: "08",
//         icon: SiMongodb,
//         title: "Mongodb",
//         comment: "MongoDB is a NoSQL database designed for flexibility and scalability, storing data in a document-oriented format. It’s ideal for handling large, unstructured datasets in modern web apps."
//     }, {
//         id: "09",
//         icon: SiExpress,
//         title: "Express",
//         comment: "Express.js is a lightweight framework for Node.js that simplifies building web applications and APIs by handling routing, middleware, and requests efficiently."
//     },
// ];

export const Work_Experience = [
    {
        id: "01",
        company: "Infosys",
        position: "Frontend Web Developer",
        duration: "2016 - 2018",
        description: "Developed responsive and interactive user interfaces for client projects using modern web technologies",
    },
    {
        id: "01",
        company: "Infosys",
        position: "Frontend Web Developer",
        duration: "2016 - 2018",
        description: "Developed responsive and interactive user interfaces for client projects using modern web technologies",
    }
]

export const ABOUT_ME_DATA = {
    introduction: "Hi, I'm Shubham, A self-tought Frontend Web Developer BCA student looking for an opportunity in Web Development. Who is committed to study web development. Mindset to fullfill the life with wonderful memories and knowledge.",
    background: "I hold a Bachelor's degree in Computer Application from Himachal Pradesh University, Shimla. ",
    interests: "Outside of coding, I enjoy traveling to new places, capturing moments through photography, and playing chess. I'm also an avid reader.",
    careerGoals: "In the future, I aim to continue honing my skills as a developer, exploring new technologies, and contributing to meaningful projects that make a positive impact on people's lives",
    stats: {
        yearsOfExperience: "0",
        numberOfProjects: 0,
        certificationsEarned: 0,
    },
}

export const Projects = [
    {
        title: "download BCA question papers",
        description: "A website for downloading BCA (Bachelor of Computer Applications) question papers and notes. It offers an easy-to-navigate interface with downloadable PDFs for various subjects, along with relevant study materials. To use, clone the repository and open index.html in your browser.",
        GithubLink: "https://github.com/itzshubu/Bca-question-paper-download-website",
        LiveServerLink: "https://beautiful-biscuit-919a2b.netlify.app"
    },
    {
        title: "Catering Website Using Bootstrap",
        description: "Explore our Catering Website showcasing menus, services, and event options. Discover our tailored catering solutions designed to elevate every occasion.",
        GithubLink: "https://github.com/itzshubu/Catering-Website",
        LiveServerLink: "https://parkashcaterer.netlify.app/"
    },
    {
        title: "Twitter UI Clone Using TailwindCSS",
        description: "This repository is a responsive Twitter UI clone built using TailwindCSS. It replicates Twitter's clean, minimal design while leveraging Tailwind's utility-first approach for fast and efficient styling. Ideal for developers looking to learn or use as a foundation for modern web projects.",
        GithubLink: "https://github.com/itzshubu/Catering-Website",
        LiveServerLink: "https://parkashcaterer.netlify.app/"
    },
    {
        title: "Weather App",
        description: "A weather app using HTML, CSS and JavaScript. Fetch the weather from the openweather app using fetch api.",
        GithubLink: "https://github.com/itzshubu/weather-app",
        LiveServerLink: "https://weather-website-api-using.netlify.app/"
    },
    {
        title: "Search countries",
        description: "RestCountries integrates RESTful APIs to fetch detailed data about countries worldwide, including population, capital, languages, and currencies. Ideal for developers seeking efficient integration of country-specific information into applications.",
        GithubLink: "https://github.com/itzshubu/RestCountries",
        LiveServerLink: "https://atlas-countries.netlify.app/"
    },
    {
        title: "Password Generator using React",
        description: "A React.js-based password generator that creates secure, random passwords. Customize password length and character types with an easy-to-use interface. Built for simplicity and responsiveness.",
        GithubLink: "https://github.com/itzshubu/Password-Generator-using-React.js",
        LiveServerLink: "https://generatepasswordusingreact.netlify.app/"
    },
    {
        title: "currency converter using reactjs",
        description: "This React.js project is a currency converter application that enables real-time conversion between different currencies. It features a user-friendly interface for inputting amounts, selecting currencies, and swapping between them. The application uses a custom hook to fetch live exchange rates.",
        GithubLink: "https://github.com/itzshubu/Currency-Converter-Using-React.js",
        LiveServerLink: "https://currency-converter-using-reactjs.netlify.app/"
    },
    {
        title: "Todo list using reactjs",
        description: "Todo List using React: A simple, responsive Todo List app built with React and Vite. Features include adding, editing, deleting, and marking tasks as complete. Ideal for managing daily tasks effectively and learning React concepts.",
        GithubLink: "https://github.com/itzshubu/TodoList-using-react",
        LiveServerLink: "https://todolistbyreact03.netlify.app/"
    },
    {
        title: "Insta Content Downloader using -node.js",
        description: "Insta Download API is a RESTful service enabling developers to fetch downloadable images and videos from Instagram by providing post URLs. Ideal for integrating Instagram media download features into web and mobile apps, it offers simplicity and efficiency in fetching media content.",
        GithubLink: "https://github.com/itzshubu/insta-download-api",
        LiveServerLink: ""
    },
    {
        title: "Registration form using node.js and mongoDB",
        description: "This project is a simple registration form built using Node.js and Mongoose. The form collects user details and stores them in a MongoDB database.",
        GithubLink: "https://github.com/itzshubu/registration-form-using-node.js-mongoose",
        LiveServerLink: ""
    },
    {
        title: "Backend to Frontend Handling API",
        description: "A full-stack project demonstrating seamless communication between backend and frontend components using modern web technologies. Features a RESTful API with a scalable architecture for efficient data handling. Built with the latest JavaScript frameworks for robust integration.",
        GithubLink: "https://github.com/itzshubu/Backend-to-Frontend-Handling-API",
        LiveServerLink: ""
    },
]