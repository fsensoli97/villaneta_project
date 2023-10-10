import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
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
                    <FontAwesomeIcon icon={faMailBulk} size="2x" onClick={() => window.location = 'mailto:yourmail@domain.com'}></FontAwesomeIcon>
                    </div>
                    <div className="contactValue" style={{color: darkMode ? "white" : "black"}}>
                        villaneta_proj@villaneta_proj.com
                    </div>
                </div>
                <div className="contactElement">
                    <div className="contactType" style={{color: darkMode ? "white" : "black"}}>
                    <a href="tel:123456789"><FontAwesomeIcon icon={faPhone} size="2x"></FontAwesomeIcon></a>
                    </div>
                    <div className="contactValue" style={{color: darkMode ? "white" : "black"}}>
                        123456789
                    </div>
                </div>
                <div className="contactElement">
                    <div className="contactType" style={{color: darkMode ? "white" : "black"}}>
                    <a target="_blank" rel='noopener noreferrer' href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon></a>
                    </div>
                    <div className="contactValue" style={{color: darkMode ? "white" : "black"}}>
                        Villaneta/fb
                    </div>
                </div>
                <div className="contactElement">
                    <div className="contactType" style={{color: darkMode ? "white" : "black"}}>
                    <a target="_blank" rel='noopener noreferrer' href="https://www.facebook.com/"><FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon></a>
                    </div>
                    <div className="contactValue" style={{color: darkMode ? "white" : "black"}}>
                        @Villaneta
                    </div>
                </div>
                <div className="contactElement">
                    <div className="contactType" style={{color: darkMode ? "white" : "black"}}>
                    <a target="_blank" rel='noopener noreferrer' href="https://www.facebook.com/"><FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon></a>
                    </div>
                    <div className="contactValue" style={{color: darkMode ? "white" : "black"}}>
                        Villaneta/twitter
                    </div>
                </div>
            </div>
        </>
    );
}