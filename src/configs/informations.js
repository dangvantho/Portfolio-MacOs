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
    name: "Giới thiệu dịch vụ cảng biển",
    time: "March 2021",
    title: "Developed Web Application to predict and diagnose diseases from x-ray images.",
    technical: ["nodejs", "pug", "bootstrap-5", "mongodb"],
    link:'',
    demo:'',
  },
  {
    name: "Bán sách online",
    time: "March 2021",
    title: "",
    technical: ["nodejs", "mongodb", "MaterialUi", "reactjs"],
    link: '',
    demo:'',
  },
  {
    name: "Bán vé máy bay",
    time: "May 2021",
    title: "",
    technical: ["nodejs", "postgresql", "vuejs", "MaterialUi"],
    link:'',
    demo:'',
  },
  {
    name: "Đọc truyện online",
    time: "March 2021",
    title: "",
    technical: ["nodejs", "crawl data", "reactjs", "MaterialUi"],
    link:'',
    demo:'',
  },
];
