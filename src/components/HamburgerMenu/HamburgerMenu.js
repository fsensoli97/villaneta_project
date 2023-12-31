import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef, useEffect, useContext } from "react";
import { ThemeContext } from "../../App";
import './HamburgerMenu.css'

export default function HamburgerMenu() {
    const [menuVisible, setMenuVisible] = useState(false);
    const hamburgerMenu = useRef();
    const darkMode = useContext(ThemeContext);

    function handleClick() {
        setMenuVisible(!menuVisible);
    }

    function handleClickOutside(e) {
        if (hamburgerMenu.current && !hamburgerMenu.current.contains(e.target)) {
        setMenuVisible(false);
        document.removeEventListener("mousedown", handleClickOutside);
        }
    }

    useEffect(() => {
        if (menuVisible) {
        document.addEventListener("mousedown", handleClickOutside);
        }
    });

    return(
        <>
            <div ref={hamburgerMenu} className="menuContainer" style={menuVisible ? {width: "100%"} : {width: "8vw"}}>
                <FontAwesomeIcon className="hamburgerMenu" size="2x" icon={faBars} onClick={handleClick} style={{color: darkMode ? "white" : "black"}}></FontAwesomeIcon>
                <div className="menuItemsContainer">
                    <div className="menuItem" style={menuVisible ? {display: "block", borderTop: "solid 2px grey", backgroundColor : darkMode ? "rgb(47, 47, 47)" : "rgb(247, 247, 247)"} : {display: "none"}}><Link className="menuLink" to="/" style={{color: darkMode ? "white" : "black"}}>Homepage</Link></div>
                    <div className="menuItem" style={menuVisible ? {display: "block", backgroundColor : darkMode ? "rgb(47, 47, 47)" : "rgb(247, 247, 247)"} : {display: "none"}}><Link className="menuLink" to="/location" style={{color: darkMode ? "white" : "black"}}>Location</Link></div>
                    <div className="menuItem" style={menuVisible ? {display: "block", backgroundColor : darkMode ? "rgb(47, 47, 47)" : "rgb(247, 247, 247)"} : {display: "none"}}><Link className="menuLink" to="/schedule" style={{color: darkMode ? "white" : "black"}}>Schedule</Link></div>
                    <div className="menuItem" style={menuVisible ? {display: "block", backgroundColor : darkMode ? "rgb(47, 47, 47)" : "rgb(247, 247, 247)"} : {display: "none"}}><Link className="menuLink" to="/gallery" style={{color: darkMode ? "white" : "black"}}>Gallery</Link></div>
                    <div className="menuItem" style={menuVisible ? {display: "block", backgroundColor : darkMode ? "rgb(47, 47, 47)" : "rgb(247, 247, 247)"} : {display: "none"}}><Link className="menuLink" to="/contacts" style={{color: darkMode ? "white" : "black"}}>Contacts</Link></div>
                    <div className="menuItem" style={menuVisible ? {display: "block", borderBottom: "solid 2px grey", backgroundColor : darkMode ? "rgb(47, 47, 47)" : "rgb(247, 247, 247)"} : {display: "none"}}><Link className="menuLink" to="/settings" style={{color: darkMode ? "white" : "black"}}>Settings</Link></div>
                </div>        
            </div>
        </>
    );
}