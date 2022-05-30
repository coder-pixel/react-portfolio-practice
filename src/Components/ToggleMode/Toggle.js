import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../Context';
import "./Toggle.css";

const Toggle = () => {
  const { darkMode, dispatch } = useContext(ThemeContext);
  return (
    <div className="toggle" onClick={() => dispatch({type: "TOGGLE"})}>
      <img src="./images/sun.png" alt="" className="toggle_icon" />
      <img src="./images/moon.png" alt="" className="toggle_icon" />
      <div 
        className="toggle_btn" 
        style={{left: darkMode ? "0" : "25px"  }}
      ></div>
    </div>
  )
};

export default Toggle;
