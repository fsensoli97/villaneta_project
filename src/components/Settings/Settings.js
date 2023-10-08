import Toggle from "react-toggle";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Logo from "../Logo/Logo";
import './Settings.css';
import "react-toggle/style.css";
import { ThemeContext } from "../../App";
import { useContext } from "react";

export default function Settings({setDarkMode}) {
    
    function handleDarkMode(e) {
        e.target.checked ? setDarkMode(true) : setDarkMode(false);
        localStorage.setItem("darkMode", JSON.stringify(e.target.checked));
        document.body.style.backgroundColor = e.target.checked ? "rgb(39, 39, 39)" : "white";
        document.body.style.transition = "1s";
    }

    const darkMode = useContext(ThemeContext);

    return(
        <>
            <HamburgerMenu></HamburgerMenu>
            <Logo></Logo>
            <div className="titleContainer">
                <div className="mainTitle" style={{color: darkMode ? "white" : "black", transition: "1s"}}>
                    Settings
                </div>
            </div>
            <div className="toggleContainer">
                <div className="themeType" style={{color: darkMode ? "white" : "black", transition: "1s"}}>
                    Dark mode
                </div>
                <div className="toggleElem">
                    <Toggle
                        checked={darkMode}
                        icons={false}
                        onChange={(e) => handleDarkMode(e)}>
                    </Toggle>
                </div>               
            </div>
        </>
    );
}