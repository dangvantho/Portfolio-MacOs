import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classes from "../../configs/classes.lib";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { BsWindow } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import { RiFileCopyLine } from "react-icons/ri";
import { AiOutlinePropertySafety } from "react-icons/ai";
import bgLight from "../../assets/wallpaper-day.jpg";
import protectImg from "../../assets/protect.svg";
import { contacts, frequently } from "../../configs/safari";

Safari.propTypes = {};

function Safari(props) {
  let { width } = props;
  function transformSize(size) {
    return (size + "").replace("px", "") - 0;
  }
  return (
    <div className="border-t border-gray-300 text-gray-400 flex flex-col">
      <div
        className={classes(
          "bg-white h-10 w-full grid items-center flex-shrink-0",
          {
            "grid-cols-2": transformSize(width) <= 640,
          },
          {
            "grid-cols-3": transformSize(width) > 640,
          }
        )}
      >
        <div className="flex justify-between items-center px-2 py-1">
          <div className="flex items-center justify-center">
            <MdNavigateBefore className="cursor-pointer h-6 w-6 border rounded border-gray-300" />
            <MdNavigateNext className="cursor-pointer h-6 w-6 border rounded border-gray-300" />
            <BsWindow className="cursor-pointer ml-4 p-1 h-6 w-6 border rounded border-gray-300" />
          </div>
          <AiOutlinePropertySafety className="cursor-pointer ml-4 p-px h-6 w-6 border rounded border-gray-300" />
        </div>
        <div className="flex justify-between items-center px-2 py-1">
          <input
            type="text"
            className="px-2 flex items-center text-center text-gray-200 text-sm h-6 w-full bg-gray-300 bg-opacity-70 border-none outline-none rounded"
            placeholder="Search or enter website name"
          />
        </div>
        {transformSize(width) > 640 && (
          <div className="flex justify-end items-center px-2 py-1 space-x-2">
            <FiShare className="cursor-pointer p-1 h-6 w-6 border rounded border-gray-300" />
            <RiFileCopyLine className="cursor-pointer p-1 h-6 w-6 border rounded border-gray-300" />
          </div>
        )}
      </div>
      <div
        className="flex-1 w-full grid"
        style={{
          background: `url(${bgLight}) center /cover no-repeat`,
        }}
      >
        <div className="overflow-auto bg-gray-100 bg-opacity-80 backdrop-filter backdrop-blur-lg">
          <div className="my-12 px-5 space-y-4">
            <div className="text-xl text-gray-600 font-semibold">Contacts</div>
            <div className=" mt-12 px-5 safari-content ">
              {contacts.map((item) => (
                <a
                  key={item.link}
                  target="_blank"
                  href={item.link}
                  rel="noreferrer"
                  className="flex flex-col items-center space-y-2"
                >
                  <img
                    src={item.img}
                    alt=""
                    className="flex-shrink-0 h-8 w-8 rounded"
                  />
                  <div className="truncate text-center text-base text-gray-600 opacity-70">
                    {item.name}
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="mb-12 px-5 space-y-4">
            <div className="text-xl text-gray-600 font-semibold">
              Frequently Visited
            </div>
            <div className=" mt-12 px-5 safari-content gap-6">
              {frequently.map((item) => (
                <a
                  key={item.link}
                  target="_blank"
                  href={item.link}
                  rel="noreferrer"
                  className="flex flex-col items-center space-y-2"
                >
                  <img
                    src={item.img}
                    alt="Frequently Visited"
                    className="flex-shrink-0 h-8 w-8 rounded"
                  />
                  <div className="truncate text-center text-base text-gray-600 opacity-70">
                    {item.name}
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="mb-12 px-5 space-y-4">
            <div className="text-xl font-semibold text-gray-600">
              Privacy Report
            </div>
            <div className="w-full h-14 rounded-xl bg-gray-100 shadow-lg flex items-center px-4 py-2 space-x-3">
              <div className="text-xl flex-shrink-0 flex space-x-2 text-gray-600">
                <img
                  src={protectImg}
                  className="w-8 h-8"
                  alt="Privacy report"
                />
                <div className="">85</div>
              </div>
              <div className="text-base flex-1 leading-4" >
                In the last seven days, Safari has prevent 85 tracker from
                profiling you.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Safari;
