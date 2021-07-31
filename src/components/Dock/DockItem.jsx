import React, { useState } from "react";
import PropTypes from "prop-types";

DockItem.propTypes = {};

function DockItem(props) {
  const { name, img, link, appId, openApp, show } = props;
  const [hover, setHover] = useState(false);
  return (
    <li
      className="w-10 md:w-12 relative cursor-pointer"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={()=>openApp(appId)}
    >
      {hover && (
        <p className="absolute -top-full left-1/2 transform -translate-x-1/2 p-2 rounded-md bg-gray-300 bg-opacity-80 text-sm font-semibold">
          {name}
        </p>
      )}
      {
          !link ? 
          <img src={img} className="object-contain" alt={name} /> :
          <a href={link} target='_blank' rel='noreferrer'>
              <img src={img} className="object-contain" alt={name} />
          </a>
      }
      {
          show && (
            <div className="absolute -bottom-1  left-1/2 transform -translate-x-1/2 h-1 w-1 rounded-full bg-gray-700"></div>
          )
      }
    </li>
  );
}

export default DockItem;
