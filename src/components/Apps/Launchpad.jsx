import React, { useState } from "react";
// import bgLight from "../../assets/wallpaper-day.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import { myApps } from "../../configs/launchpad";

function Launchpad(props) {
  const { toggleLaunchpad } = props;
  const [apps, setApps] = useState(myApps);
  const [textSearch, setTextSearch] = useState("");
  let timeout = null;
  function handleToggle() {
    toggleLaunchpad();
  }
  function handleChangeInput(e) {
    const value = e.target.value;
    setTextSearch(value);
    if(timeout) clearTimeout(timeout)
    timeout= setTimeout(()=>{
        const newApps= myApps.filter(item=>{
            const str= value.toLowerCase()
            const name= item.name.toLowerCase()
            return name.includes(str)
        })
        setApps(newApps)
    },700)
  }
  function handleClickAppLink(e) {
    const target = e.target;
    const launchApps = document.getElementsByClassName("launch--app__link");
    for (let item of launchApps) {
      if (item === target || item.childNodes[0] === target) {
        return;
      }
    }
    toggleLaunchpad();
  }
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex items-center flex-col"
      style={{
        // background: `url(${bgLight}) center /cover no-repeat`,
        zIndex: 999,
      }}
    >
      <div
        onClick={handleToggle}
        className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-60 bg-gray-3 backdrop-filter backdrop-blur-2xl"
      ></div>
      <div className="relative mt-20">
        <input
          type="text"
          value={textSearch}
          onChange={handleChangeInput}
          className="py-px pl-7 w-60 rounded bg-gray-400 bg-opacity-80 text-gray-200 border border-gray-300 outline-none"
          placeholder="Search"
        />
        <AiOutlineSearch className="text-gray-300 absolute left-2 top-1/2 transform -translate-y-1/2 " />
      </div>
      <div
        onClick={handleClickAppLink}
        className="relative mt-16 mb-12 w-full px-12 gap-x-1 gap-y-4 launchpad-apps"
        style={{
            maxWidth: 768,
        }}
      >
        {apps.map((app) => (
          <div className="flex flex-col item-center justify-between">
            <a
              href={app.link}
              target="_blank"
              rel="noreferrer"
              title={app.name}
              className="flex items-center justify-center "
            >
              {typeof app.img === "function" ? (
                app.img({
                  className: "w-14 h-14 text-gray-100 launch--app__link",
                })
              ) : (
                <img
                  src={app.img}
                  alt={app.name}
                  className="w-14 h-14 rounded-lg launch--app__link"
                />
              )}
            </a>
            <div className="mt-1 text-gray-200 text-sm text-center">
              {app.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Launchpad;
