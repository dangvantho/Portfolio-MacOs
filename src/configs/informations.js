import { IoLogoJavascript, IoIosGitMerge } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMaterialUi,
  SiRedux,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
export const about = [
  {
    icon: "🏫",
    title: `My major is Petroleum Geology in Hanoi University of Mining and Geology. I have just graduated in July, 2021`,
  },
  {
    icon: "👨🏻‍💻",
    title: "I enjoy building awesome websites that sovle pratical problems",
  },
  {
    icon: "🎲",
    title:
      "When I am not coding, I like to spend my time reading books, watching anime or designing some website/app",
  },
];
export const skills = [
  {
    icon: <IoLogoJavascript />,
    name: "Javascript",
    bgColor: "bg-yellow-400",
  },
  {
    icon: <FaHtml5 />,
    name: "HTML5",
    bgColor: "bg-red-400",
  },
  {
    icon: <IoIosGitMerge />,
    name: "Git",
    bgColor: "bg-red-500",
  },
  {
    icon: <IoLogoFirebase />,
    name: "Firebase",
    bgColor: "bg-yellow-600",
  },
];
export const framwork = [
  {
    icon: <FaReact />,
    name: "React",
    bgColor: "bg-blue-500",
  },
  {
    icon: <SiMaterialUi />,
    name: "MaterialUi",
    bgColor: "bg-blue-700",
  },
  {
    icon: <SiRedux />,
    name: "Redux",
    bgColor: "bg-purple-500",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwindcss",
    bgColor: "bg-indigo-500",
  },
  {
    icon: <FaNodeJs />,
    name: "NodeJs",
    bgColor: "bg-green-600",
  },
];
export const database = [
  {
    icon: <SiPostgresql />,
    name: "Postgresql",
    bgColor: "bg-blue-600",
  },
  {
    icon: <SiMongodb />,
    name: "Mongodb",
    bgColor: "bg-green-500",
  },
];
export const projects = [
  {
    name: "Reading book online",
    time: "March 2021",
    title: "I like reading stories but I don't want to read, so I did this website to listen to the stories :)) (I crawl data from website https://truyenfull.vn/)",
    technical: ["nodejs", "crawl data", "reactjs", "MaterialUi"],
    link:'https://github.com/dangvantho/reading-book-online',
    demo:'https://reading-story.web.app/',
  },
  {
    name: "Air ticket sales",
    time: "May 2021",
    title: "I made it when I was internship in Saishunkan company with Backend position. I work with other but his take a break after a few days, so I finished it alone. Website allows registration(Confirmation via email), login, ticket purchase (Confirmation via email), manage ticket catalogs, flight categories, ... ",
    technical: ["nodejs", "postgresql", "vuejs", "MaterialUi"],
    link:'',
    demo:'#',
  },
  {
    name: "Selling Books Online ",
    time: "March 2021",
    title: "I was tried clone website https://nhanam.vn/(but now it not look like). It has some functions: product display, add to cart, order books, manage books,...",
    technical: ["nodejs", "mongodb", "MaterialUi", "reactjs"],
    link: 'https://github.com/dangvantho/Nha-Nam-BookStores',
    demo:'https://nha-nam-books-store.firebaseapp.com/',
  },
  {
    name: "Introduction Petroleum Service",
    time: "March 2021",
    title: "Website introduction petroleum service with the following basic functions: Add, editing information service, manage news",
    technical: ["nodejs", "pug", "bootstrap-5", "mongodb"],
    link:'https://github.com/dangvantho/learn-express/tree/main/sealink',
    demo:'https://sealinkpos.herokuapp.com/',
  },
];
