import {
    IoLogoJavascript,
    IoLogoHtml5,
    IoLogoReact,
} from "react-icons/io5";
import { FaBootstrap, FaCss3 , FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb , SiExpress } from "react-icons/si";

export const PROFILE_DATA = {
    name: "Shubham",
    tagline: `A Frontend Web developer passionate about building engaging web applications and solving complex problems with code`,
    jobTitle: "FrontEnd Web Developer",
    location: "India",
    yearsOfExperience:1,
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
        id: "01",
        icon: IoLogoJavascript,
        title: "JavaScript",
        comment: "JavaScript simplify the development process and guarantee compatibility across browsers. JavaScript allows developers to create rich, interactive, and dynamic web apps ranging from simple scripts to complex web applications."
    },
    {
        id: "02",
        icon: IoLogoHtml5,
        title: "HTML",
        comment: "HTML is the foundation of every web project I work on. I have a deep understanding of its structure and semantics, ensuring my web applications are well structured and accessible."
    },
    {
        id: "03",
        icon: IoLogoReact,
        title: "React JS",
        comment: "I'm deeply passionate about React.js and have been using it extensively. I've built few projects in React JS"
    },
    {
        id: "04",
        icon: RiTailwindCssFill,
        title: "Tailwind CSS",
        comment: "Tailwind CSS has revolutionized the way I approach front-end styling. Its utility first approach allow me to rapidly build responsive and beautifully designed interfaces without writing custom CSS."
    },
    {
        id: "05",
        icon: FaBootstrap,
        title: "Bootstrap",
        comment: "Bootstrap offers a rich library of pre-designed user interface components, such as navigation bars, buttons, forms, modals, and more. These components come with well-defined styles and classes, making it effortless to integrate them into my web projects."
    },
    {
        id: "06",
        icon:  FaCss3 ,
        title: "CSS3",
        comment: "CSS3 is a more advanced version of CSS and the successor of CSS2. CSS3 is used for the same thing as CSS, namely to style web pages and make them more attractive and user-friendly."
    },
    {
        id: "07",
        icon: FaNodeJs,
        title: "NodeJs",
        comment: "Node.js is a powerful JavaScript runtime built on Chrome's V8 engine. It is the successor to traditional JavaScript execution environments and is used to build fast and scalable server-side applications. Node.js allows developers to run JavaScript on the server, handle requests, and manage databases, making it an essential tool for modern web development."
    }, {
        id: "08",
        icon:  SiMongodb,
        title: "Mongodb",
        comment: "MongoDB is a NoSQL database designed for flexibility and scalability, storing data in a document-oriented format. It’s ideal for handling large, unstructured datasets in modern web apps."
    }, {
        id: "09",
        icon:  SiExpress,
        title: "Express",
        comment: "Express.js is a lightweight framework for Node.js that simplifies building web applications and APIs by handling routing, middleware, and requests efficiently."
    },
];

export const Work_Experience= [
    {
        id: "01",
        company: "Infosys",
        position: "Frontend Web Developer",
        duration:"2016 - 2018",
        description:"Developed responsive and interactive user interfaces for client projects using modern web technologies",
    },
    {
        id: "01",
        company: "Infosys",
        position: "Frontend Web Developer",
        duration:"2016 - 2018",
        description:"Developed responsive and interactive user interfaces for client projects using modern web technologies",
    }
]

export const ABOUT_ME_DATA = {
    introduction: "Hi, I'm Shubham, A self-tought Frontend Web Developer BCA student looking for an opportunity in Web Development. Who is committed to study web development. Mindset to fullfill the life with wonderful memories and knowledge.",
    background:"I hold a Bachelor's degree in Computer Application from Himachal Pradesh University, Shimla. ",
    interests: "Outside of coding, I enjoy traveling to new places, capturing moments through photography, and playing chess. I'm also an avid reader.",
    careerGoals: "In the future, I aim to continue honing my skills as a developer, exploring new technologies, and contributing to meaningful projects that make a positive impact on people's lives",
    stats: {
        yearsOfExperience: "0",
        numberOfProjects:0,
        certificationsEarned:0,
    },
}

export const Projects = [
    {
        title:"Weather App",
        description:"A weather app using HTML, CSS and JavaScript. Fetch the weather from the openweather app using fetch api.",
        GithubLink : "https://github.com/itzshubu/weather-app",
        LiveServerLink : "https://weather-website-api-using.netlify.app/"
    },
    {
        title:"Random Image Generator using API",
        description:"Random Image Generator which is using unsplash API which provides lot of images to the user",
        GithubLink : "https://github.com/PrinceKhadwal/Random-Image-Generator-using-API",
        LiveServerLink : "https://beautiful-biscuit-919a2b.netlify.app"
    },
    {
        title:"Github Profile APP",
        description:"A Github Profile App which uses Github API to get data for the sake of our app",
        GithubLink : "https://github.com/PrinceKhadwal/Github-Profile-App-using-Github-API",
        LiveServerLink : "https://keen-vacherin-c884a0.netlify.app"
    },
    {
        title:"Travel Company Website",
        description:"This is the website of a Travel Company made using pure Html and CSS",
        GithubLink : "https://github.com/PrinceKhadwal/Travel-Company-Website",
        LiveServerLink : "https://super-starship-1982d4.netlify.app"
    },
    {
        title:"Password Generator using React",
        description:"Password Generator using React Js and Tailwind CSS",
        GithubLink : "https://github.com/PrinceKhadwal/Password-Generator-using-React",
        LiveServerLink : ""
    },
]