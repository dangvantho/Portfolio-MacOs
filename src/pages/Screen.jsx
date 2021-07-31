import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import WindowScreen from "../components/WindowScreen";
import bgDark from '../assets/wallpaper-day.jpg';
import bgLight from '../assets/wallpaper-day.jpg'
import Dock from "../components/Dock/Dock";
import Header from "../components/Header";
import { closeApp, openApp } from "../app/reducers/apps.reducer";

function Screen(props) {
  const { bg, apps } = props;
  const [appWindows, setAppWindows] = useState([]);
  const dispatch = useDispatch();
  function createApp(id) {
    let dup= appWindows.find(item=>item.id===id)
    if(dup) return 
    let app = apps.find((x) => x.id === id);
    console.log(appWindows);
    if (!["launchpad", "email", "github"].includes(app.id)) {
      console.log(app);
      dispatch(openApp(id));
      app = { ...app, zIndex: appWindows.length + 10, minimum: false, maximum: false };
      const newAppWindows = [...appWindows, app];
      setAppWindows(newAppWindows);
    }
  }
  function handleCloseApp(id) {
    let app = appWindows.filter((x) => x.id !== id);
    console.log(app)
    app = app.map((item) => {
      item = { ...item, zIndex: appWindows.length - 1 + 10 };
      return item;
    });
    setAppWindows(app);
    dispatch(closeApp(id))
  }
  return (
    <div
      style={{
        background:
          bg.bgImg === "dark"
            ? `url(${bgDark}) center`
            : `url(${bgLight}) center`,
            filter: 'brightness(96.2%)',
      }}
      className="fixed bottom-0 left-0 right-0 top-0"
    >
      <Header />
      <div className="window-app overflow-auto ">
        {appWindows.map((app) => (
          <WindowScreen
            key={app.id}
            content={app.content}
            title={app.title}
            close={handleCloseApp}
            appId= {app.id}
            minimum={app.minimum}
            maximum= {app.maximum}
          />
        ))}
      </div>
      <Dock openApp={createApp} />
    </div>
  );
}
const mapStateToProps = (state) => ({
  bg: state.background,
  apps: state.apps,
});
export default connect(mapStateToProps, null)(Screen);
