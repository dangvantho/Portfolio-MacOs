import React, { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineUserAdd, AiOutlineProject } from "react-icons/ai";
import { RiHealthBookLine } from "react-icons/ri";
import { SiSkillshare } from "react-icons/si";
import { about, skills, framwork, database, projects } from "../../configs/informations";
import imgMoji from "../../assets/moji.png";

Bear.propTypes = {};
function classes(...names) {
  let result = names.map((item) => {
    if (typeof item === "string") {
      return item;
    }
    let key = Object.keys(item)[0];
    if (item[key]) return key;
    return "";
  });
  return result.join(" ");
}
function AboutMe(props) {
  return (
    <div className="h-full w-full">
      <div className="flex mx-auto h-16 w-16 rounded-full bg-white mt-2 mb-4">
        <img src={imgMoji} alt="Đặng Văn Thọ" className="" />
      </div>
      <div className="mx-auto text-xl text-center">
        My name is Dang Van Hoi,
      </div>
      <div className="mx-auto text-xl text-center">
        I'm a <span className="text-pink-500">Web Developer!</span>
      </div>
      <div className="flex mx-auto mt-4 mb-8 w-1/2 border border-solid"></div>
      {about.map((item) => (
        <div className="flex space-x-2 pb-3">
          <div className="sm:text-2xl md:text-lg flex-sharnk-0">
            {item.icon}
          </div>
          <div className="text-sm text-justify flex-1">{item.title}</div>
        </div>
      ))}
    </div>
  );
}
function Education() {
  return (
    <div className="h-full w-full">
      <div className="text-center text-2xl mt-2  font-semibold ">Education</div>
      <div className="flex mx-auto mt-3 mb-8 w-28 border border-solid"></div>
      <div className="text-lg pl-2 font-medium">
        Hanoi University of Mining and Geology :
        <span className="pl-2 mt-2 block text-gray-400 text-sm">2016-2021</span>
        <span className="pl-2 mt-2 block ">Petroleum Geology</span>
        <span className="pl-2 mt-2 block text-gray-400 text-sm">
          CGPA &nbsp; 3.53/4
        </span>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="h-full w-full">
      <div className="text-center text-2xl mt-2  font-semibold ">
        Technical Skills
      </div>
      <div className="flex mx-auto mt-3 mb-6 w-28 border border-solid"></div>
      <ul className="text-justify emoji-list ">
        <li className="list-arrow mb-3">
          My areas of expertise are &nbsp;
          <span className="text-bold text-yellow-500">
            front-end development, React.js & javascript!
          </span>
        </li>
        <li className="list-arrow mb-3">Here are my most frequently used</li>
      </ul>
      <div className="grid grid-cols-2 gap-y-3 pb-5">
        <div className="text-base text-center font-medium flex m-auto">
          Language and Tools
        </div>
        <div className="text-base text-center font-medium flex m-auto">
          Frameworks and Libraries
        </div>
        <div className="flex justify-center flex-wrap content-start gap-2 text-xs">
          {skills.map((skill) => (
            <div
              className={classes(
                "p-1 flex items-center justify-center gap-x-1 leading-4 rounded",
                skill.bgColor
              )}
              style={{ minWidth: 54 }}
            >
              <div className="skill-item">{skill.icon}</div>
              {skill.name}
            </div>
          ))}
        </div>
        <div className="flex justify-center flex-wrap content-start gap-2 text-xs">
          {framwork.map((item) => (
            <div
              className={classes(
                "p-1 flex items-center justify-center gap-x-1 leading-4 rounded",
                item.bgColor
              )}
              style={{ minWidth: 54 }}
            >
              <div className="skill-item">{item.icon}</div>
              {item.name}
            </div>
          ))}
        </div>
        <div className='space-y-3 col-span-2'>
          <div className="text-base text-center font-medium ">
          Database management system
          </div>
          <div className="flex justify-center flex-wrap content-start gap-2 text-xs">
            {database.map((item) => (
              <div
                className={classes(
                  "p-1 flex items-center justify-center gap-x-1 leading-4 rounded",
                  item.bgColor
                )}
                style={{ minWidth: 54 }}
              >
                <div className="skill-item">{item.icon}</div>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="h-full w-full">
      <div className="text-center text-2xl mt-2  font-semibold ">Projects</div>
      <div className="flex mx-auto mt-3 mb-6 w-28 border border-solid"></div>
      { projects.map(item=>(
          <div className="w-full border border-gray-50 border-opacity-10 hover:bg-gray-50 hover:bg-opacity-5  px-3 mb-3 rounded">
              <div className="flex justify-between items-center">
                  <div className="font-medium">
                      {item.name}
                  </div>
                  <div className="text-sm text-gray-400">
                      {item.time}
                  </div>
              </div>
          </div>
      ))}
    </div>
  );
}

function Bear(props) {
  const [currentTab, setCurrentTab] = useState(0);
  function handleOpenTab(index) {
    setCurrentTab(index);
  }

  function renderTab(index) {
    let tab;
    switch (index) {
      case 0:
        tab = <AboutMe />;
        break;
      case 1:
        tab = <Education />;
        break;
      case 2:
        tab = <Skills />;
        break;
      case 3:
        tab = <Projects />;
        break;
      default:
        tab = <AboutMe />;
    }
    return tab;
  }
  return (
    <div className="flex overflow-auto h-full " style={{ minWidth: 350 }}>
      <div className="flex-shrink-0 bg-gray-600 text-white">
        <div
          className={classes(
            "flex items-center space-x-1 px-3 hover:opacity-90 py-2 cursor-pointer",
            { "bg-red-500": currentTab === 0 },
            { "hover:bg-gray-500": currentTab !== 0 }
          )}
          onClick={() => handleOpenTab(0)}
        >
          <AiOutlineUserAdd />
          <span>About me</span>
        </div>
        <div
          className={classes(
            "flex items-center space-x-1 px-3 hover:opacity-90 py-2 cursor-pointer",
            { "bg-red-500": currentTab === 1 },
            { "hover:bg-gray-500": currentTab !== 1 }
          )}
          onClick={() => handleOpenTab(1)}
        >
          <RiHealthBookLine />
          <span>Education</span>
        </div>
        <div
          className={classes(
            "flex items-center space-x-1 px-3 hover:opacity-90 py-2 cursor-pointer",
            { "bg-red-500": currentTab === 2 },
            { "hover:bg-gray-500": currentTab !== 2 }
          )}
          onClick={() => handleOpenTab(2)}
        >
          <SiSkillshare />
          <span>Skill</span>
        </div>
        <div
          className={classes(
            "flex items-center space-x-1 px-3 hover:opacity-90 py-2 cursor-pointer",
            { "bg-red-500": currentTab === 3 },
            { "hover:bg-gray-500": currentTab !== 3 }
          )}
          onClick={() => handleOpenTab(3)}
        >
          <AiOutlineProject />
          <span>Projects</span>
        </div>
      </div>
      <div className="flex-1 px-3 bg-gray-700 text-white overflow-y-auto">
        {renderTab(currentTab)}
      </div>
    </div>
  );
}

export default Bear;
