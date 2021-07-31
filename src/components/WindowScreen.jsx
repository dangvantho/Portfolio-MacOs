import React, { Children, useState } from "react";
import { Rnd } from "react-rnd";
import { IoClose } from "react-icons/io5";
import { VscChromeMinimize } from "react-icons/vsc";
function WindowScreen(props) {
  const { content, title, appId, close, minimum, maximum } = props;
  const [hoverWindowBar, setHoverWindowBar] = useState(false);
  const [positon, setPosition] = useState({
    x: 60,
    y: 80,
  });
  const [size, setSize] = useState({
    width: 500,
    height: 500,
  });
  function handleDragStop(e, d) {
    let { x, y } = d;
    setPosition({ x, y });
  }
  return (
    <React.Fragment>
      <Rnd
        bounds=".window-app"
        size={{ width: size.width, height: size.height }}
        position={{ x: positon.x, y: positon.y }}
        onDragStop={handleDragStop}
        onResizeStop={(e, direction, ref, delta, position) => {
          setSize({
            width: ref.style.width,
            height: ref.style.height,
          });
        }}
        className={ minimum ? 'invisible': 'visible'}
        dragHandleClassName="window-bar"
      >
        <div className="window-bar text-center h-6 flex items-center justify-center relative w-full bg-gray-200 rounded-t-lg">
          <div
            className="absolute left-2 top-1/2 transform -translate-y-1/2  flex items-center space-x-2"
            onMouseOver={() => setHoverWindowBar(true)}
            onMouseLeave={() => setHoverWindowBar(false)}
          >
            <button className="w-3 h-3 rounded-full bg-red-500 flex items-center justify-center">
              <IoClose
                className={hoverWindowBar ? "h-3 w-3" : "h-3 w-3 invisible"}
                onClick= {()=>close(appId)}
              />
            </button>
            <button className="w-3 h-3 rounded-full bg-yellow-500 flex items-center justify-center">
              <VscChromeMinimize
                className={hoverWindowBar ? "h-3 w-3" : "h-3 w-3 invisible"}
              />
            </button>
            <button className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                className={hoverWindowBar ? "" : "invisible"}
                viewBox="0 0 21.961 21.244"
              >
                <g
                  id="exicon"
                  data-name="Group 1"
                  transform="translate(-179.495 -59.374)"
                >
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M6.5,0,13,8H0Z"
                    transform="matrix(-0.574, -0.819, 0.819, -0.574, 186.952, 80.619)"
                  />
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M6.5,0,13,8H0Z"
                    transform="matrix(0.559, 0.829, -0.829, 0.559, 194.186, 59.374)"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div className=" font-semibold ">{title}</div>
        </div>
        <div className="inner-window overflow-y-hidden bg-gray-300">{content}</div>
        
      </Rnd>
    </React.Fragment>
  );
}

export default WindowScreen;
