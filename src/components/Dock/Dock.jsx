import React, { useEffect } from "react";
import { connect } from "react-redux";
import DockItem from "./DockItem";

function Dock(props) {
  const { apps, openApp, onResetMaximum, toggleLaunchpad } = props;
  return (
    <div className="fixed w-full bottom-0 left-0 flex justify-center z-20">
      <ul
        className="bg-white bg-opacity-40 list-none flex justify-center items-center px-2 h-14 md:h-16 md:px-4 gap-x-2 rounded-t-xl"
        // style={{ height: "65px" }}
      >
        {apps.map((app) => (
          <DockItem
            key={app.id}
            name={app.title}
            img={app.img}
            link={app.link}
            appId={app.id}
            openApp={openApp}
            show= {app.show}
            onResetMaximum={onResetMaximum}
            toggleLaunchpad={toggleLaunchpad}
          />
        ))}
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => ({
  apps: state.apps,
});
export default connect(mapStateToProps, null)(Dock);
