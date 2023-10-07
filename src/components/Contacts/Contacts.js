import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Logo from '../Logo/Logo';
import './Contacts.css'

export default function Contacts() {
    return (
        <>
            <HamburgerMenu></HamburgerMenu>
            <Logo></Logo>
            <div className="titleContainer">
                <div className="mainTitle">
                    Contacts
                </div>
            </div>
            <div className="contactsContainer">
                <div className="contactElement">
                    <div className="contactType">
                    <FontAwesomeIcon icon={faMailBulk} size="2x"></FontAwesomeIcon>
                    </div>
                    <div className="contactValue">
                        villaneta_proj@villaneta_proj.com
                    </div>
                </div>
            </div>
        </>
    );
}