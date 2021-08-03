import Github from '../assets/github.svg'
import Facebook from '../assets/facebook.svg'
import Email from '../assets/gmail.svg'
import TruyenFull from '../assets/truyenfull.png'
import NhaNam from '../assets/nhanam.jpg'
import Flight from '../assets/flight.jpg'
import { IoLogoApple } from "react-icons/io";
import Sealink from '../assets/sealink.png'
export const myApps= [
    {
        name:'Audio book',
        img: TruyenFull,
        link: 'https://reading-story.web.app/'
    },
    {
        name: 'Portfolio',
        img: (props)=><IoLogoApple {...props}/>,
        link:'https://github.com/dangvantho/Portfolio-MacOs'
    },
    {
        name:'Airlines',
        img: Flight,
        link: '#'
    },
    {
        name: "Bookstore",
        img: NhaNam,
        link: 'https://nha-nam-books-store.firebaseapp.com/'
    },
    {
        name: 'Github',
        img: Github,
        link:'https://github.com/dangvantho'
    },
    {
        name: 'Facebook',
        img: Facebook,
        link: 'https://www.facebook.com/profile.php?id=100009873872885'
    },
    {
        name: 'Email',
        img: Email,
        link: 'mailto:dangvantho12as0@gmail.com',
    },
    {
        name:'Sealink',
        img: Sealink,
        link:'https://sealinkpos.herokuapp.com/'
    }
]