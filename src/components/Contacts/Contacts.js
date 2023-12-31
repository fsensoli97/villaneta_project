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
                    <FontAwesomeIcon icon={faMailBulk} size="2x" onClick={() => window.location = 'mailto:villanetagroup@gmail.com'}></FontAwesomeIcon>
                    </div>
                    <div className="contactValue" style={{color: darkMode ? "white" : "black"}} onClick={() => window.location = 'mailto:villanetagroup@gmail.com'}>
                        villanetagroup@gmail.com
                    </div>
                </div>
                <div className="contactElement">
                    <div className="contactType" style={{color: darkMode ? "white" : "black"}}>
                    <a href="tel:123456789"><FontAwesomeIcon icon={faPhone} size="2x"></FontAwesomeIcon></a>
                    </div>
                    <div className="contactValue" style={{color: darkMode ? "white" : "black"}}>
                        to be updated
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
                    <a target="_blank" rel='noopener noreferrer' href="https://www.instagram.com/villaneta.official/"><FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon></a>
                    </div>
                    <a className="contactValue" style={{color: darkMode ? "white" : "black"}} href="https://www.instagram.com/villaneta.official/" target="_blank" rel="noreferrer">
                        @Villaneta.official
                    </a>
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