import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { SiApple } from "react-icons/si";
import { FaApple, FaWifi } from "react-icons/fa";
import { IoBatteryFullSharp, IoSearch } from "react-icons/io5";
import { IoIosSwitch } from "react-icons/io";

Header.propTypes = {};
function System() {
  return (
    <ul className="list-none absolute top-full left-0 w-56 bg-gray-200 bg-opacity-80 blur rounded-b-md shadow-2xl">
      <li className="border-b-2 px-4 mt-1 hover:bg-blue-500 hover:text-gray-200 leading-6 text-base text-gray-900 border-gray-600 ">
        About This Mac
      </li>
      <li className="border-b-2 py-1 leading-6 text-base text-gray-900 border-gray-600 ">
        <ul>
          <li className="hover:bg-blue-500 hover:text-gray-200 px-4">
            System preferences
          </li>
          <li className="hover:bg-blue-500 hover:text-gray-200 px-4">
            App store...
          </li>
        </ul>
      </li>
      <li className="border-b-2 px-4 mt-1 hover:bg-blue-500 hover:text-gray-200 leading-6 text-base text-gray-900 border-gray-600 ">
        Recent Item
      </li>
      <li className="border-b-2 px-4 mt-1 hover:bg-blue-500 hover:text-gray-200 leading-6 text-base text-gray-900 border-gray-600 ">
        Force quit...
      </li>
      <li className="border-b-2 py-1 leading-6 text-base text-gray-900 border-gray-600 ">
        <ul>
          <li className="hover:bg-blue-500 hover:text-gray-200 px-4">Sleep</li>
          <li className="hover:bg-blue-500 hover:text-gray-200 px-4">
            Restart
          </li>
          <li className="hover:bg-blue-500 hover:text-gray-200 px-4">
            Shutdown
          </li>
        </ul>
      </li>
      <li className="px-4 mt-1 hover:bg-blue-500 hover:text-gray-200 leading-6 text-base text-gray-900 ">
        Lock screen
      </li>
    </ul>
  );
}
function Wifi(props) {
  const { toggle } = props;
  return (
    <div  className="fixed top-0 bottom-0 left-0 right-0 bg-transparent">
        <div onClick={toggle} className="absolute top-0 bottom-0 left-0 right-0 bg-transparent"></div>
      <div className="absolute top-7 right-1 flex justify-between items-center md:right-6 w-72 py-2 px-3 rounded-md bg-gray-200 bg-opacity-80 blur shadow-4xl">
          <div className="text-gray-700 font-semibold text-lg">
              Wi-Fi
          </div>
        <input type="checkbox" className="switch-input" />
      </div>
    </div>
  );
}
function Header(props) {
  const [system, setSytem] = useState(false);
  const [wifi, setWifi] = useState(false);
  function getClock() {
    let now = new Date(Date.now());
    let dateString = now.toDateString();
    let hour = now.getHours();
    hour = hour.toString().length === 1 ? `0${hour}` : hour;
    let minute = now.getMinutes();
    minute = minute.toString().length === 1 ? `0${minute}` : minute;
    let day = hour > 12 ? "pm" : "am";
    return `${dateString} ${hour}:${minute} ${day}`;
  }
  const [clock, setClock] = useState(getClock());
  useEffect(() => {
    const interval = setInterval(() => {
      let time = getClock();
      setClock(time);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-6 text-white text-sm bg-gray-500 bg-opacity-20 blur px-3 flex justify-between items-center ">
      <div
        className="h-6 flex items-center hover:bg-gray-400 cursor-pointer px-2 rounded-sm relative"
        onClick={() => setSytem(!system)}
      >
        <SiApple className="h-4 w-4" />
        {system && <System />}
      </div>
      <div className=" space-x-1 flex flex-row h-full">
        <div className="hidden sm:flex items-center hover:bg-gray-400 cursor-pointer px-1 rounded-sm ">
          <span className="pr-2">100%</span>
          <IoBatteryFullSharp className="h-5 w-5" />
        </div>
        <div
          onClick={()=>setWifi(!wifi)}
          className="hidden md:flex items-center hover:bg-gray-400 cursor-pointer px-1 rounded-sm"
        >
          <FaWifi className="w-6" />
        </div>
        <div className="flex items-center hover:bg-gray-400 cursor-pointer px-1 rounded-sm">
          <IoSearch className="w-5" />
        </div>
        <div className="flex items-center hover:bg-gray-400 cursor-pointer px-1 rounded-sm">
          <IoIosSwitch className="w-5 h-5" />
        </div>
        <div className="flex items-center hover:bg-gray-400 cursor-pointer px-1 rounded-sm uppercase text-xs">
          {clock}
        </div>
      </div>
      {wifi && <Wifi toggle={()=>setWifi(!wifi)} />}
    </div>
  );
}

export default Header;
