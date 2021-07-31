import { IoCloseOutline, IoShareOutline, IoCopyOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { BsBatteryFull } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import { RiSignalWifiLine } from "react-icons/ri";
import { AiFillApple } from "react-icons/ai";
import { FaShieldAlt } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsLayoutSidebar } from "react-icons/bs";
import bgDark from './wallpaper-night.jpg'
import bgLight from './wallpaper-day.jpg'
export default {
    bg: { bgDark, bgLight },
    ios: {IoCloseOutline, IoShareOutline, IoCopyOutline},
    icon: { FiMinus, BiSearch, BsBatteryFull, FaWifi, RiSignalWifiLine, AiFillApple, FaShieldAlt, FiChevronLeft, FiChevronRight, BsLayoutSidebar}
}