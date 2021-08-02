import React, { useEffect, useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
import WindowScreen from "../components/WindowScreen";
import bgDark from "../assets/wallpaper-night.jpg";
import bgLight from "../assets/wallpaper-day.jpg";
import Dock from "../components/Dock/Dock";
import Header from "../components/Header";
import music from "../assets/audio.mp3";
import { togglePlayMusic } from "../app/reducers/background.reducer";
import { closeApp, openApp } from "../app/reducers/apps.reducer";

function Screen(props) {
  const { bg, apps } = props;
  const [appWindows, setAppWindows] = useState([]);
  const dispatch = useDispatch();
  const audio = useRef();
  function createApp(id) {
    let app = apps.find((x) => x.id === id);
    if (["launchpad", "email", "github"].includes(app.id)) {
      return;
    }
    dispatch(openApp(id));

    let dup = appWindows.find((item) => item.id === id);
    if (dup) {
      return;
    }
    app = {
      ...app,
      zIndex: appWindows.length + 10,
      minimum: false,
      maximum: false,
      show: true,
      maxZIndex: appWindows[0] ? appWindows[0].maxZIndex + 1 : 11,
    };
    const newAppWindows = [...appWindows, app];
    for(let app of newAppWindows){
      if(app.maximum){
        app.maximum= false
      }
    }
    setAppWindows(newAppWindows);
  }
  function handleCloseApp(id) {
    let app = appWindows.filter((x) => x.id !== id);
    console.log("app", app);
    dispatch(closeApp(id));
    setAppWindows(app);
  }
  function handleChangeIndex(id) {
    let newApps = [...appWindows];
    for (let item of newApps) {
      if (item.id !== id) {
        ++item.maxZIndex;
      } else {
        ++item.maxZIndex;
        item.zIndex = item.maxZIndex;
      }
    }
    console.log("newApps", newApps);
    setAppWindows(newApps);
  }
  function handleMinimum(id) {
    const apps= [...appWindows]
    for(let app of apps){
      if(app.id===id){
        app.minimum= !app.minimum
        app.maximum= false
      }
    }
    console.log('minimum', apps)
    setAppWindows(apps)
  }
  function handleMaximum(id) {
    const apps= [...appWindows]
    for(let app of apps){
      if(app.id===id){
        app.minimum= false
        app.maximum= true
      }
    }
    console.log('minimum', apps)
    setAppWindows(apps)
  }
  function handleResetMaximum(id){
    const newApps= [...appWindows]
    for(let app of newApps){
      if(app.maximum){
        app.maximum= false
      }
      if(app.id===id){
        app.minimum= false
      }
    }
    handleChangeIndex(id)
  }
  useEffect(() => {
    if (audio.current) {
      audio.current.src = music;
      audio.current.onended = function () {
        dispatch(togglePlayMusic());
      };
    }
  }, []);
  useEffect(() => {
    console.log(bg.playMusic);
    audio.current.volume = bg.lound / 100;
    if (bg.playMusic) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [bg.playMusic, bg.lound]);
  useEffect(() => {
    console.log(apps, appWindows);
  }, [apps]);
  return (
    <div
      style={{
        background:
          bg.bgImg === "dark"
            ? `url(${bgDark}) center /cover no-repeat`
            : `url(${bgLight}) center /cover no-repeat`,
        filter: `brightness(${bg.brightness}%)`,
      }}
      className="fixed bottom-0 left-0 right-0 top-0 screen"
    >
      <Header />
      <div className="window-app overflow-auto ">
        {appWindows.map((app) => (
          <WindowScreen
            key={app.id}
            content={app.content}
            title={app.title}
            close={handleCloseApp}
            appId={app.id}
            minimum={app.minimum}
            maximum={app.maximum}
            changeZIndex={handleChangeIndex}
            zIndex={app.zIndex}
            onMinimum={handleMinimum}
            onMaximum= {handleMaximum}
          />
        ))}
      </div>
      <Dock openApp={createApp} onResetMaximum={handleResetMaximum} onChangeIndex={handleChangeIndex}/>
      <audio className="fixed top-0 left-0" ref={audio}></audio>
    </div>
  );
}
const mapStateToProps = (state) => ({
  bg: state.background,
  apps: state.apps,
});
export default connect(mapStateToProps, null)(Screen);
