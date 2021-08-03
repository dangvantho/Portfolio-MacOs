import React, { useState } from "react";
import { AiOutlineUserAdd, AiOutlineProject } from "react-icons/ai";
import { RiHealthBookLine } from "react-icons/ri";
import { SiSkillshare } from "react-icons/si";
import {
  about,
  skills,
  framwork,
  database,
  projects,
} from "../../configs/informations";
import { contacts } from "../../configs/safari";
import imgMoji from "../../assets/moji.png";
import phone from "../../assets/phone.svg";

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
function AboutMe() {
  return (
    <div className="h-full w-full px-3 overflow-y-auto pb-3">
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
        <div key={item.title} className="flex space-x-2 pb-3">
          <div className="sm:text-2xl md:text-lg flex-sharnk-0">
            {item.icon}
          </div>
          <div className="text-sm text-justify flex-1">{item.title}</div>
        </div>
      ))}
      <div className="mt-3">
        <div className="text-xl font-normal text-center">Contacts :</div>
        <ul className="space-y-3 grid grid-cols-2">
          <li className="flex items-center space-x-3">
            <img
              src={phone}
              alt="Phonenumber"
              className="w-5 h-5 object-cover"
            />
            <a
              href="tel:0327910404"
              target="_blank"
              rel="noreferrer"
              title='Phone number: 0327910404'
              className="text-base text-gray-300 hover:text-white transition "
            >
              Phone number
            </a>
          </li>
          {contacts.map((item) => (
            <li className="flex items-center space-x-2">
            <img
              src={item.img}
              alt={item.name}
              className="w-6 h-6 object-cover bg-gray-100 rounded-full"
            />
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              title={item.link}
              className="text-base text-gray-300 hover:text-white transition "
            >
              {item.name}
            </a>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
function Education() {
  return (
    <div className="h-full w-full px-3">
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

function Skills(props) {
  const { width }= props
  function changeWidth(width){
    const number= (width+'').replace('px','') - 0
    return number
  }
  return (
    <div className="h-full w-full px-3">
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
      <div className="grid grid-cols-2 gap-y-3 gap-x-1 pb-5">
        <div className="text-base text-center font-medium flex m-auto">
          Language and Tools
        </div>
        <div className="text-base text-center font-medium flex m-auto">
          Frameworks and Libraries
        </div>
        <div className="flex justify-center flex-wrap content-start gap-2 text-xs">
          {skills.map((skill) => (
            <div
              key={skill.name}
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
              key={item.name}
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
        <div className={classes(
          "space-y-3 ",
          { 'col-span-2': changeWidth(width) <= 600 },
          {'col-span-1': changeWidth(width) > 600}
        )}>
          <div className="text-base text-center font-medium ">
            Database management system
          </div>
          <div className="flex justify-center flex-wrap content-start gap-2 text-xs">
            {database.map((item) => (
              <div
                key={item.name}
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
    <div className="h-full w-full overflow-y-auto px-3">
      <div className="text-center text-2xl mt-2  font-semibold ">Projects</div>
      <div className="flex mx-auto mt-3 mb-6 w-28 border border-solid"></div>
      {projects.map((item) => (
        <div
          key={item.name}
          className="w-full border border-gray-50 border-opacity-10 hover:bg-gray-50 hover:bg-opacity-5  px-3 mb-3 rounded"
        >
          <div className="flex justify-between items-center">
            <div className="font-medium capitalize ">{item.name}</div>
            <div className="text-sm text-gray-400">{item.time}</div>
          </div>
          <ul className="mt-1 pl-4 list-disc">
            <li className="font-sm text-gray-300 text-justify">{item.title}</li>
          </ul>
          <div className="flex space-x-3 mt-2">
            <a
              href={item.link}
              title={item.link}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-blue-300 hover:underline transition "
            >
              Github
            </a>
            <a
              href={item.demo}
              title={item.demo}
              rel="noreferrer"
              target="_blank"
              className="text-gray-300 hover:text-blue-300 hover:underline transition"
            >
              Demo
            </a>
          </div>
          <div className="flex flex-wrap space-x-2 mt-2 mb-3">
            {item.technical.map((technical) => (
              <div
                key={technical}
                className="px-3 cursor-pointer text-xs leading-5 capitalize border border-gray-100 rounded-xl"
              >
                {technical}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Bear(props) {
  const { width }= props
  const [currentTab, setCurrentTab] = useState(0);
  function handleOpenTab(index) {
    setCurrentTab(index);
  }

  function renderTab(index, width) {
    let tab;
    switch (index) {
      case 0:
        tab = <AboutMe />;
        break;
      case 1:
        tab = <Education />;
        break;
      case 2:
        tab = <Skills width={width}/>;
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
      <div className="flex-1 bg-gray-700 text-white overflow-y-auto">
        {renderTab(currentTab, width)}
      </div>
    </div>
  );
}

export default Bear;
