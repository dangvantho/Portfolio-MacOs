import React, { useState, useEffect, useRef } from "react";
import classes from "../configs/classes.lib";
import PropTypes from "prop-types";
import { SiApple } from "react-icons/si";
import { FaWifi, FaBluetoothB, FaKeyboard } from "react-icons/fa";
import { IoBatteryFullSharp, IoSearch } from "react-icons/io5";
import { IoIosSwitch } from "react-icons/io";
import { FiWifi } from "react-icons/fi";
import { WiDaySunny } from "react-icons/wi";
import { GiNightSleep } from "react-icons/gi";
import { BsFullscreen, BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { AiFillSound } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  slideBrightness,
  toggleBackground,
  toggleWifi,
  slideSound,
  togglePlayMusic,
  toggleBoot,
  toggleRestart,
  toggleShutdown,
} from "../app/reducers/background.reducer";

Header.propTypes = {};
function System() {
  const dispatch = useDispatch();
  function handleRestart() {
    dispatch(toggleRestart());
    dispatch(toggleShutdown());
  }
  return (
    <ul className="list-none absolute top-full left-0 w-56 bg-gray-200 bg-opacity-80 blur rounded-b-md control-shadow">
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
          <li
            onClick={() => dispatch(toggleBoot())}
            className="hover:bg-blue-500 hover:text-gray-200 px-4"
          >
            Sleep
          </li>
          <li
            onClick={handleRestart}
            className="hover:bg-blue-500 hover:text-gray-200 px-4"
          >
            Restart
          </li>
          <li
            onClick={() => dispatch(toggleShutdown())}
            className="hover:bg-blue-500 hover:text-gray-200 px-4"
          >
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
function Slider(props) {
  const { change, icon, bgColor, min, max, value } = props;
  function handleChange(e) {
    const value = e.target.value - 0;
    if (value > min + Math.floor(0.1 * (max - min))) {
      change(value);
      return;
    }
  }
  return (
    <div
      className="input-slider flex-1"
      style={{
        "--height": "22px",
        "--bg-right": "#adadad",
        "--color-text": bgColor === "dark" ? "#ccc" : "#444",
        "--bg-left": bgColor === "dark" ? "#374151" : "#E5E7EB",
      }}
    >
      <input
        style={{}}
        className=""
        type="range"
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        step={1}
      />
      <div className="icon">{icon}</div>
    </div>
  );
}
function Wifi(props) {
  const { toggle } = props;
  const wifi = useSelector((state) => state.background.wifi);
  const dispatch = useDispatch();
  function handleChangeWifi() {
    dispatch(toggleWifi());
  }
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-transparent">
      <div
        onClick={toggle}
        className="absolute top-0 bottom-0 left-0 right-0 bg-transparent"
      ></div>
      <div className="absolute top-7 right-1 flex justify-between items-center md:right-6 w-72 py-2 px-3 rounded-md bg-gray-200 bg-opacity-90 blur shadow-4xl">
        <div className="text-gray-700 font-normal text-base">Wi-Fi</div>
        <label className="switch">
          <input type="checkbox" checked={wifi} onChange={handleChangeWifi} />
          <div className="slider"></div>
        </label>
      </div>
    </div>
  );
}
function SwitchMenu(props) {
  const { toggle } = props;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.background);
  const { bgColor, wifi, lound, brightness, playMusic } = state;
  const connect = [
    {
      icon: <FaWifi className="h-4 w-4" />,
      name: "Wi-Fi",
      title: "Home",
    },
    {
      icon: <FaBluetoothB className="h-4 w-4" />,
      name: "Bluetooth",
      title: "On",
    },
    {
      icon: <FiWifi className="h-4 w-4 transform rotate-45" />,
      name: "AirDrop",
      title: "Contacts Only",
    },
  ];
  const [bluetooth, setBlueTooth] = useState(true);
  const [airdrop, setAirdrop] = useState(true);
  function handleToggleConnect(type) {
    if (type === "Wi-Fi") {
      dispatch(toggleWifi());
      return;
    }
    if (type === "AirDrop") {
      setAirdrop(!airdrop);
      return;
    }
    setBlueTooth(!bluetooth);
    return;
  }
  function statusConnect(type) {
    if (type === "Wi-Fi") {
      return wifi;
    }
    if (type === "AirDrop") {
      return airdrop;
    }
    return bluetooth;
  }
  function handleChangeBright(value) {
    dispatch(slideBrightness(value));
  }
  function handleChangeSound(value) {
    dispatch(slideSound(value));
  }
  function handlePlayMusic() {
    dispatch(togglePlayMusic());
  }
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-transparent">
      <div
        onClick={toggle}
        className="absolute top-0 bottom-0 left-0 right-0 bg-transparent"
      ></div>
      <div
        className={classes(
          "grid grid-cols-4 grid-rows-5 p-2.5 gap-2 absolute top-7 right-1 md:right-2 w-80 h-96 rounded-xl blur border",
          {
            "bg-opacity-50 bg-gray-300 border-gray-400  text-dark":
              bgColor !== "dark",
          },
          {
            "bg-opacity-40 bg-gray-700 border-gray-500 text-white":
              bgColor === "dark",
          }
        )}
      >
        <div
          className={classes(
            "col-span-2 row-span-2 rounded-lg p-2 space-y-2 control-shadow",
            { "bg-gray-600 ": bgColor === "dark" },
            { "bg-gray-300 text-gray-600": bgColor !== "dark" }
          )}
        >
          {connect.map((item) => (
            <div
              onClick={() => handleToggleConnect(item.name)}
              className="flex space-x-2 items-center cursor-pointer"
              key={item.name}
            >
              <div
                className={classes(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                  { "text-dark": bgColor === "dark" },
                  { "text-gray-200": bgColor === "light" },
                  {
                    "text-gray-600":
                      !statusConnect(item.name) && bgColor !== "dark",
                  }
                )}
                style={{
                  background: statusConnect(item.name)
                    ? "#3f8aff"
                    : bgColor === "dark"
                    ? "#444d5e"
                    : "#c4c7cd",
                }}
              >
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="text-sm ">{item.name}</div>
                <div className="text-xs opacity-40">
                  {statusConnect(item.name) ? item.title : "Off"}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          onClick={() => dispatch(toggleBackground())}
          className={classes(
            "col-span-2 rounded-xl flex items-center p-2 space-x-2 control-shadow cursor-pointer",
            { "bg-gray-600 ": bgColor === "dark" },
            { "bg-gray-300 text-gray-600": bgColor !== "dark" }
          )}
        >
          <div
            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              background: bgColor === "dark" ? "#444d5e" : "#c4c7cd",
            }}
          >
            {bgColor === "dark" ? (
              <GiNightSleep className="h-5 w-5" />
            ) : (
              <WiDaySunny className="h-5 w-5 " />
            )}
          </div>
          <div className="text-sm">
            {bgColor === "dark" ? "Dark Mode" : "Light Mode"}
          </div>
        </div>
        <div
          className={classes(
            "col-span-1 rounded-xl flex flex-col items-center text-center p-2 control-shadow cursor-pointer",
            { "bg-gray-600 ": bgColor === "dark" },
            { "bg-gray-300 text-gray-600": bgColor !== "dark" }
          )}
        >
          <FaKeyboard className="flex-shrink-0  w-5 h-5" />
          <div className="flex-1 text-xs " style={{ lineHeight: "0.9rem" }}>
            Keybroad Brightness
          </div>
        </div>
        <div
          onClick={() => console.log("Full screen")}
          className={classes(
            "col-span-1 rounded-xl flex flex-col items-center justify-between text-center p-2 control-shadow cursor-pointer",
            { "bg-gray-600 ": bgColor === "dark" },
            { "bg-gray-300 text-gray-600": bgColor !== "dark" }
          )}
        >
          <BsFullscreen className="flex-shrink-0 mb-1  w-4 h-4" />
          <div className="flex-1 text-xs " style={{ lineHeight: "0.9rem" }}>
            Enter Fullscreen
          </div>
        </div>
        <div
          className={classes(
            "col-span-4 rounded-xl flex flex-col justify-between p-2 space-y-1 control-shadow cursor-pointer",
            { "bg-gray-600 ": bgColor === "dark" },
            { "bg-gray-300 text-gray-600": bgColor !== "dark" }
          )}
        >
          <div className="flex-shrink-0 text-sm">Display</div>
          <Slider
            change={handleChangeBright}
            icon={<WiDaySunny />}
            bgColor={bgColor}
            min={40}
            max={130}
            value={brightness}
          />
        </div>
        <div
          className={classes(
            "col-span-4 rounded-xl flex flex-col justify-between p-2 space-y-1 control-shadow cursor-pointer",
            { "bg-gray-600 ": bgColor === "dark" },
            { "bg-gray-300 text-gray-600": bgColor !== "dark" }
          )}
        >
          <div className="flex-shrink-0 text-sm">Sound</div>
          <Slider
            change={handleChangeSound}
            icon={<AiFillSound />}
            bgColor={bgColor}
            min={1}
            max={100}
            value={lound}
          />
        </div>
        <div
          onClick={() => handlePlayMusic()}
          className={classes(
            "col-span-4 rounded-xl flex items-center justify-between p-2 space-x-2 control-shadow cursor-pointer",
            { "bg-gray-600 ": bgColor === "dark" },
            { "bg-gray-300 text-gray-600": bgColor !== "dark" }
          )}
        >
          <img
            src="https://p1.music.126.net/z0IO1vEsowL9mD_5yzUjeA==/109951163936068098.jpg"
            alt="Music"
            className="flex-shrink-0 h-full object-cover object-center rounded-xl"
          />
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-base leading-4">Sunflower</div>
            <div className="opacity-50">Post Malone / Swae Lee</div>
          </div>
          <div className="flex-shrink flex justify-center items-center ">
            {playMusic ? (
              <BsFillPauseFill className="w-8 h-8" />
            ) : (
              <BsFillPlayFill className="w-8 h-8" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
function Header(props) {
  const [system, setSytem] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [switchMenu, setSwitchMenu] = useState(false);
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
    <div className="h-6 text-white text-sm bg-gray-500 bg-opacity-40 blur px-3 flex justify-between items-center shadow ">
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
          onClick={() => setWifi(!wifi)}
          className="hidden md:flex items-center hover:bg-gray-400 cursor-pointer px-1 rounded-sm"
        >
          <FaWifi className="w-6" />
        </div>
        <div className="flex items-center hover:bg-gray-400 cursor-pointer px-1 rounded-sm">
          <IoSearch className="w-5" />
        </div>
        <div
          onClick={() => setSwitchMenu(!switchMenu)}
          className="flex items-center hover:bg-gray-400 cursor-pointer px-1 rounded-sm"
        >
          <IoIosSwitch className="w-5 h-5" />
        </div>
        <div className="flex items-center hover:bg-gray-400 cursor-pointer px-1 rounded-sm uppercase text-xs">
          {clock}
        </div>
      </div>
      {wifi && <Wifi toggle={() => setWifi(!wifi)} />}
      {switchMenu && <SwitchMenu toggle={() => setSwitchMenu(!switchMenu)} />}
    </div>
  );
}

export default Header;
