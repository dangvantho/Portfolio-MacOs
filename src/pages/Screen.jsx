import React, { useEffect, useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
import WindowScreen from "../components/WindowScreen";
import Launchpad from "../components/Apps/Launchpad";
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
  const [launchpad, setLaunchpad] = useState(false);
  const dispatch = useDispatch();
  const audio = useRef();
  function createApp(id) {
    let app = apps.find((x) => x.id === id);
    if (["launchpad", "email", "github"].includes(app.id)) {
      return;
    }
    dispatch(openApp(id));
    let dup 
    let maxZIndex= 0
    for(let i=0; i< appWindows.length; i++){
      //Find MaxIndex
      if(appWindows[i].zIndex > maxZIndex) {
        maxZIndex= appWindows[i].zIndex
      }
      //Reset zIndex
      if (appWindows[i].maximum) {
        appWindows[i].maximum = false;
      }
      appWindows[i].zIndex= 10+i
      //Find duplicate
      if(appWindows[i].id===id){
        dup= i
      }
    }
    if (dup) {
      const newAppWindows= [...appWindows]
      newAppWindows[dup].show= !newAppWindows[dup].show
      setAppWindows(newAppWindows)
      return;
    }
    
    app = {
      ...app,
      zIndex: maxZIndex + 1,
      minimum: false,
      maximum: false,
      show: true,
      // maxZIndex: appWindows[0] ? appWindows[0].maxZIndex + 1 : 11,
    };
    const newAppWindows = [...appWindows, app];
    // for (let app of newAppWindows) {
    //   if (app.maximum) {
    //     app.maximum = false;
    //   }
    // }
    console.log(newAppWindows)
    setAppWindows(newAppWindows);
  }
  function handleCloseApp(id,e) {
    console.log('Closed app')
    e.stopPropagation()
    // let app = appWindows.filter((x) => x.id !== id);
    let apps=[...appWindows]
    for(let app of apps){
      if(app.id === id){
        app.show= false
      }
    }
    dispatch(closeApp(id));
    setAppWindows(apps);
  }
  function handleChangeIndex(id) {
    console.log('change zIndex')
    let max= 10
    let index=0
    let newApps = [...appWindows];
    // for (let item of newApps) {
    //   if (item.id !== id) {
    //     ++item.maxZIndex;
    //   } else {
    //     ++item.maxZIndex;
    //     item.zIndex = item.maxZIndex;
    //   }
    // }
    for(let i=0; i< newApps.length;  i++){
      if(newApps[i].id!==id){
        if(max < newApps[i].zIndex){
          max= newApps[i].zIndex
        }
        --newApps[i].zIndex
      }else{
        index= i
      }
    }
    appWindows[index].zIndex= max + 1
    console.log(index, newApps)
    setAppWindows(newApps);
  }
  function handleMinimum(id, e) {
    e.stopPropagation()
    const apps = [...appWindows];
    for (let app of apps) {
      if (app.id === id) {
        app.minimum = !app.minimum;
        app.maximum = false;
      }
    }
    console.log('minimum')
    setAppWindows(apps);
  }
  function handleMaximum(id, e) {
    e.stopPropagation()
    const apps = [...appWindows];
    for (let app of apps) {
      if (app.id === id) {
        app.minimum = false;
        app.maximum = true;
      }
    }
    console.log('maximum')
    setAppWindows(apps);
  }
  function handleResetMaximum(id) {
    if(appWindows.length===0){
      return
    }
    handleChangeIndex(id);
  }
  useEffect(() => {
    createApp("bear");
    if (audio.current) {
      audio.current.src = music;
      audio.current.onended = function () {
        dispatch(togglePlayMusic());
      };
    }
  }, []);
  useEffect(() => {
    audio.current.volume = bg.lound / 100;
    if (bg.playMusic) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [bg.playMusic, bg.lound]);
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
        {appWindows.map((app,index) => (
          <WindowScreen
            key={index}
            content={app.content}
            title={app.title}
            close={handleCloseApp}
            appId={app.id}
            minimum={app.minimum}
            maximum={app.maximum}
            changeZIndex={handleChangeIndex}
            zIndex={app.zIndex}
            onMinimum={handleMinimum}
            onMaximum={handleMaximum}
            show= {app.show}
          />
        ))}
      </div>
      <Dock
        openApp={createApp}
        onResetMaximum={handleResetMaximum}
        onChangeIndex={handleChangeIndex}
        toggleLaunchpad={() => setLaunchpad(!launchpad)}
      />
      {launchpad && <Launchpad toggleLaunchpad={()=>setLaunchpad(!launchpad)} />}
      <audio className="fixed top-0 left-0" ref={audio}></audio>
    </div>
  );
}
const mapStateToProps = (state) => ({
  bg: state.background,
  apps: state.apps,
});
export default connect(mapStateToProps, null)(Screen);
