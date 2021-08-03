import React, { useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import { IoClose } from "react-icons/io5";
import { VscChromeMinimize } from "react-icons/vsc";
import { connect } from "react-redux";
function WindowScreen(props) {
  const {
    content,
    title,
    appId,
    close,
    minimum,
    changeZIndex,
    maximum,
    zIndex,
    apps,
    onMinimum,
    onMaximum,
    show
  } = props;
  const [isClose, setIsClose] = useState(false);
  const [index, setIndex] = useState(zIndex);
  const [hoverWindowBar, setHoverWindowBar] = useState(false);
  const oldSize = useRef({
    width: 600,
    height: 500,
    ...randomPosition(),
  });
  const [positon, setPosition] = useState({
    x: oldSize.current.x,
    y: oldSize.current.y,
  });
  const [size, setSize] = useState({
    width: 600,
    height: 500,
  });
  function randomPosition(){
    return {
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
    }
  }
  function handleDragStop(e, d) {
    let { x, y } = d;
    setPosition({ x, y });
  }
  function handleChangeMinimum(e) {
    onMinimum(appId,e);
    oldSize.current = {
      ...oldSize.current,
      width: size.width,
      height: size.height,
    };
  }
  // useEffect(() => {
  //   setIndex(zIndex);
  // }, [zIndex]);
  // useEffect(() => {
  //   const app = apps.find((item) => item.id === appId && item.show);
  //   if (!app) {
  //     setIsClose(true);
  //   }
  //   if (app && isClose) {
  //     setIsClose(false);
  //   }
  // }, [apps]);
  useEffect(()=>{
    setIsClose(!show)
  },[show])
  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    // console.log(width, height, oldSize)
    if (maximum) {
      setSize({
        width,
        height,
      });
      setPosition({
        x: 0,
        y: -24,
      });
    } else if(width===oldSize.current.width && height===oldSize.current.height) {
      setSize({
        width: oldSize.current.width,
        height: oldSize.current.height,
      });
      setPosition({
        x: oldSize.current.x,
        y: -24,
      });
    }
  }, [maximum, minimum]);
  return (
    <React.Fragment>
      {!isClose && (
        <Rnd
          // bounds={maximum ? '.screen':".window-app"}
          size={{ width: size.width, height: size.height }}
          position={{ x: positon.x, y: positon.y }}
          onDragStop={handleDragStop}
          onResizeStop={(e, direction, ref, delta, position) => {
            oldSize.current = {
              width: ref.style.width,
              height: ref.style.height,
            };
            setSize({
              width: ref.style.width,
              height: ref.style.height,
            });
          }}
          className={minimum ? "invisible" : "visible"}
          dragHandleClassName="window-bar"
          style={{
            zIndex: maximum ? 1000 : zIndex,
          }}
        >
          <div
            onClick={() => changeZIndex(appId)}
            className="window-bar text-center h-6 flex items-center justify-center relative w-full bg-gray-200 rounded-t-lg"
          >
            <div
              className="absolute left-3 md:left-2 top-1/2 transform -translate-y-1/2  flex items-center space-x-2"
              onMouseOver={() => setHoverWindowBar(true)}
              onMouseLeave={() => setHoverWindowBar(false)}
            >
              <button
                onClick={(e) => close(appId,e)}
                className="w-4 h-4 md:w-3 md:h-3 rounded-full bg-red-500 flex items-center justify-center"
              >
                <IoClose
                  className={
                    hoverWindowBar
                      ? "w-4 h-4 md:w-3 md:h-3"
                      : "w-4 h-4 md:w-3 md:h-3 invisible"
                  }
                />
              </button>
              <button
                onClick={handleChangeMinimum}
                className="w-4 h-4 md:w-3 md:h-3 rounded-full bg-yellow-500 flex items-center justify-center"
                style={minimum ? { background: "#adadad" } : {}}
              >
                <VscChromeMinimize
                  className={
                    !hoverWindowBar || minimum
                      ? "w-4 h-4 md:w-3 md:h-3 invisible"
                      : "w-4 h-4 md:w-3 md:h-3"
                  }
                />
              </button>
              <button
                onClick={(e) => onMaximum(appId, e)}
                className="w-4 h-4 md:w-3 md:h-3 rounded-full bg-green-500 flex items-center justify-center"
                style={maximum ? { background: "#adadad" } : {}}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className={!hoverWindowBar || maximum ? "invisible" : ""}
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
          <div
            onClick={() => changeZIndex(appId)}
            className="inner-window bg-gray-300 grid grid-cols-1 overflow-auto"
          >
            {typeof content === "function"
              ? content({ width: size.width, height: size.height })
              : content}
          </div>
        </Rnd>
      )}
    </React.Fragment>
  );
}
const mapStateToProps = (state) => ({
  apps: state.apps,
});
export default connect(mapStateToProps, null)(WindowScreen);
