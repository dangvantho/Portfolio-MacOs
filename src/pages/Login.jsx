import React from "react";
import {
  toggleLogin,
  toggleShutdown,
  toggleRestart,
} from "../app/reducers/background.reducer";
import { useDispatch } from "react-redux";
import bgLight from "../assets/wallpaper-day.jpg";
import avatar from "../assets/avatar.jpg";
import { RiShutDownLine, RiRestartLine } from "react-icons/ri";

function Login(props) {
  const dispatch = useDispatch();
  function handleLogin() {
    dispatch(toggleLogin());
  }
  function handleRestart() {
    dispatch(toggleRestart());
    dispatch(toggleShutdown());
  }
  return (
    <div
      className="w-full h-screen overflow-hidden flex flex-col justify-center items-center space-y-2 text-white"
      style={{
        background: `url(${bgLight}) center /cover no-repeat`,
        filter: "brightness(90%)",
      }}
    >
      <img
        src={avatar}
        alt="avatar"
        className="w-28 h-28 rounded-full -mt-12"
      />
      <div className="text-base text-center">
        <span className="text-base font-semibold block">Dang Van Hoi</span>
      </div>
      <div
        onClick={handleLogin}
        className="py-2 w-20 text-center rounded-md cursor-pointer bg-opacity-70 bg-gray-400 blur"
      >
        Login
      </div>
      <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-8">
        <div
          onClick={handleRestart}
          className="space-y-1 flex flex-col items-center cursor-pointer"
        >
          <div className="bg-gray-600 w-10 h-10 rounded-full flex items-center justify-center">
            <RiRestartLine className="w-8 h-8" />
          </div>
          <div className="text-base">Restart</div>
        </div>
        <div
          onClick={() => dispatch(toggleShutdown())}
          className="space-y-1 flex flex-col items-center cursor-pointer"
        >
          <div className="bg-gray-600 w-10 h-10 rounded-full flex items-center justify-center">
            <RiShutDownLine className="w-8 h-8" />
          </div>
          <div className="text-base">Shutdown</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
