import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import './HamburgerMenu.css'

export default function HamburgerMenu() {
    const [menuVisible, setMenuVisible] = useState(false);
    const hamburgerMenu = useRef();

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
                <FontAwesomeIcon className="hamburgerMenu" size="2x" icon={faBars} onClick={handleClick}></FontAwesomeIcon>
                <div className="menuItemsContainer">
                    <div className="menuItem" style={menuVisible ? {display: "block"} : {display: "none"}}><Link className="menuLink" to="/contacts">Contacts</Link></div>
                    <div className="menuItem" style={menuVisible ? {display: "block"} : {display: "none"}}><Link className="menuLink" to="/contacts">Contacts</Link></div>
                    <div className="menuItem" style={menuVisible ? {display: "block"} : {display: "none"}}><Link className="menuLink" to="/contacts">Contacts</Link></div>
                    <div className="menuItem" style={menuVisible ? {display: "block"} : {display: "none"}}><Link className="menuLink" to="/contacts">Contacts</Link></div>
                    <div className="menuItem" style={menuVisible ? {display: "block"} : {display: "none"}}><Link className="menuLink" to="/contacts">Contacts</Link></div>
                    <div className="menuItem" style={menuVisible ? {display: "block"} : {display: "none"}}><Link className="menuLink" to="/contacts">Contacts</Link></div>
                </div>        
            </div>
        </>
    );
}