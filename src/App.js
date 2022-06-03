import { useState, useContext, useEffect, useRef } from 'react';
import './App.css';
import "./Themes CSS/Blue.css";

import Intro from "./Components/Intro/Intro.js";
import About from './Components/About/About';
import ProjectsList from './Components/Projects List/ProjectsList';
import Contact from './Components/Contact/Contact';
import Toggle from './Components/ToggleMode/Toggle';

import ThemeProvider, { ThemeContext } from './Context';
import useLocalStorage from './useLocalStorage';
import { ErrorBoundary } from 'react-error-boundary';
import FallbackComponent from './Components/FallbackComponent';


function App() {
  const [theme, setTheme] = useState(false);
  
  const [localStorageContent, setLocalStorageContent] = useLocalStorage("themeMode", "theme1");
  console.log("localStorageContent: " + localStorageContent)
  
  const [selectedTheme, setSelectedTheme] = useState(localStorageContent);
  //   const [mode, setMode] = useState({
  //     themeMode: "",
  //     darkMode: false
  //   });

  // console.log("selectedTheme: " + selectedTheme);

  const useOutsideThemeAlerter = (ref) => {
    useEffect(() => {
      if (theme) {
        function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
            console.log("You clicked outside of me!");
            setTheme(false);
          }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("click", handleClickOutside);
        };
      }
    }, [ref, theme])
  }

  console.log("theme: " + theme);
  const showTheme = () => {
    setTheme(!theme)
  }

  const changeTheme = (e, themeNo) => {
    // let themeMode = e.target.id;
    // console.log("themeMode: " + themeMode);
    setSelectedTheme(themeNo);
  }

  //   console.log(mode);
  useEffect(() => {
    // setting theme conditionally
    let r = document.querySelector(":root");
    console.log(getComputedStyle(r).getPropertyValue('--theme-color'));

    if (selectedTheme === "theme1") r.style.setProperty('--theme-color', "#59b256");
    if (selectedTheme === "theme2") r.style.setProperty('--theme-color', "#00aac1");
    if (selectedTheme === "theme3") r.style.setProperty('--theme-color', "#7e4c74");

    // localStorage.setItem("themeMode", selectedTheme);
    // setTheme(!theme);
    setLocalStorageContent(selectedTheme);
  }, [selectedTheme])

  const { darkMode } = useContext(ThemeContext);
  console.log("darkMode: " + darkMode);

  const themeRef = useRef(null);


  // const errHandler = (error, errInfo) => {
  //   console.log("Logging: ", error, errInfo)

  //   // or we can call the logging service here to display the error something like that
  // }
  return (
    <>
      {/* <div style={{ backgroundColor: darkMode ? "#222" : "#fff", color: darkMode && "#fff" }}> */}
      <div style={{ backgroundColor: darkMode ? "#222" : "", color: "#fff" }}>
        <div className={`theme_selector ${theme ? "theme" : null}`}>
          <button onClick={showTheme}>
            {theme ? <i className="fas fa-chevron-right"></i> : <i className="fas fa-chevron-left"></i>}
          </button>
          <div className="theme_options_wrapper" ref={themeRef}>
            <div
              id='default-mode'
              className={`theme_dot ${selectedTheme === "theme1" ? "selected" : 1}`}
              onClick={(e) => changeTheme(e, "theme1")}>
            </div>
            <div
              id='blue-mode'
              className={`theme_dot ${selectedTheme === "theme2" ? "selected" : 1}`}
              onClick={(e) => changeTheme(e, "theme2")}>
            </div>
            <div
              id='purple-mode'
              className={`theme_dot ${selectedTheme === "theme3" ? "selected" : 1}`}
              onClick={(e) => changeTheme(e, "theme3")}>
            </div>
          </div>
        </div>

        <Toggle />

        {/* <ErrorBoundary FallbackComponent={FallbackComponent} onError={errHadnler}>
          <Intro />
        </ErrorBoundary> */}
        <Intro />
        <About />
        <ProjectsList />
        <Contact />

        {console.log("----------------------------------------")}
      </div>
    </>

  );
}

export default App;

