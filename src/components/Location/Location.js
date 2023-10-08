import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Logo from "../Logo/Logo";
import Timer from "../Timer/Timer";
import './Location.css'
import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function Location() {
    const darkMode = useContext(ThemeContext);

    return(
        <>
            <HamburgerMenu></HamburgerMenu>
            <Logo></Logo>
            <div className="titleContainer">
                <div className="mainTitle" style={{color: darkMode ? "white" : "black"}}>
                    Villaneta location
                </div>
            </div>
            <Timer timerText={'To be revealed in:'} dueDate={'10/20/2023'}></Timer>
            <div className="mapsContainer">
                <iframe 
                    className="mapsLocation"
                    title="mapsLocation" 
                    src="https://www.google.com/maps/d/embed?mid=1MIHx-2EGniHXdeOKOxef6ULf7y_Vag4&ehbc=2E312F"
                    width="600"
                    height="400"
                    allowfullscreen=""
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </>
    );
}