import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Logo from '../Logo/Logo';
import './Contacts.css'
import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function Contacts() {
    const darkMode = useContext(ThemeContext);

    return (
        <>
            <HamburgerMenu></HamburgerMenu>
            <Logo></Logo>
            <div className="titleContainer">
                <div className="mainTitle" style={{color: darkMode ? "white" : "black"}}>
                    Contacts
                </div>
            </div>
            <div className="contactsContainer">
                <div className="contactElement">
                    <div className="contactType" style={{color: darkMode ? "white" : "black"}}>
                    <FontAwesomeIcon icon={faMailBulk} size="2x"></FontAwesomeIcon>
                    </div>
                    <div className="contactValue" style={{color: darkMode ? "white" : "black"}}>
                        villaneta_proj@villaneta_proj.com
                    </div>
                </div>
            </div>
        </>
    );
}