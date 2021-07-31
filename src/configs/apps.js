import launchpad from "../assets/launchpad.png"
import bear from '../assets/bear.png'
import safari from '../assets/safari.png'
import vscode from '../assets/vscode.png'
import facetime from '../assets/facetime.png'
import mail from '../assets/mail.png'
import github from '../assets/github.png'
import Bear from '../components/Apps/Bear'
import VSCode from "../components/Apps/VSCode";
import Safari from '../components/Apps/Safari'
const apps = [
    {
      id: "launchpad",
      title: "Launchpad",
      desktop: false,
      img: launchpad
    },
    {
      id: "bear",
      title: "Bear",
      desktop: true,
      show: false,
      width: 860,
      height: 500,
      img: bear,
      content: <Bear />
    },
    {
      id: "safari",
      title: "Safari",
      desktop: true,
      show: false,
      width: 1024,
      minWidth: 375,
      minHeight: 200,
      img: safari,
      content: <Safari />
    },
    {
      id: "vscode",
      title: "VSCode",
      desktop: true,
      show: false,
      img: vscode,
      content: <VSCode />
    },
    {
      id: "facetime",
      title: "FaceTime",
      desktop: true,
      show: false,
      img: facetime,
      height: 530,
    //   content: <FaceTime />
    },
    {
      id: "email",
      title: "Mail",
      desktop: false,
      img: mail,
      link: "mailto:dangvantho12as0@gmail.com"
    },
    {
      id: "github",
      title: "Github",
      desktop: false,
      img: github,
      link: "https://github.com/dangvantho"
    }
  ];
  
  export default apps;