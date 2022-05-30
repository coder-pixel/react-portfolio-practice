import { createContext, useReducer } from "react";

export const ThemeContext = createContext();
const initialState = {darkMode: false};

const themeReducer = (state, action) => {
    switch(action.type){
        case "TOGGLE":
            // console.log("toggle working");
            // let mode = JSON.parse(localStorage.getItem("themeMode"))
            // localStorage.setItem("themeMode", JSON.stringify({...mode, darkMode: !state.darkMode}))
            return {darkMode: !state.darkMode}
        default:
            return state;
    }
}

const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);
    
    return(
        <ThemeContext.Provider value={{
            darkMode: state.darkMode, 
            dispatch
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;