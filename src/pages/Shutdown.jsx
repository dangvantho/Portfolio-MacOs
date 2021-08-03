import React, {  useEffect, useState } from "react";
import { IoLogoApple } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleBoot, toggleRestart } from "../app/reducers/background.reducer";



function Shutdown() {
  const distpatch = useDispatch();
  const bg= useSelector(state=>state.background)
  const [boot, setBoot] = useState(false)
  const handleBoot = () => {
      setBoot(!boot)
    setTimeout(() => {
      distpatch(toggleBoot());
    }, 4000);
  };
  useEffect(()=>{
    if(bg.restart){
      setBoot(!boot)
      setTimeout(()=>{
        distpatch(toggleRestart())
        distpatch(toggleBoot())
      },4000)
    }
  }, [])
  return (
    <div className="h-screen w-full bg-gray-900 text-gray-200 space-y-2 flex flex-col justify-center items-center">
      <IoLogoApple className="w-20 h-20 " />
      {!boot ? (
        <div className="text-base cursor-pointer" onClick={handleBoot}>
          Click to boot
        </div>
      ) : (
        <div className="h-2 w-52 border-0 rounded bg-gray-400 relative">
          <div className="boot"></div>
        </div>
      )}
    </div>
  );
}

export default Shutdown;
