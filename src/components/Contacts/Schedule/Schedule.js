import HamburgerMenu from "../../HamburgerMenu/HamburgerMenu";
import Logo from "../../Logo/Logo";
import './Schedule.css'
import { useContext } from "react";
import { ThemeContext } from "../../../App";

export default function Schedule() {
    const darkMode = useContext(ThemeContext);

    return(
        <>  
            <HamburgerMenu></HamburgerMenu>
            <Logo></Logo>
            <div className="titleContainer">
                <div className="mainTitle" style={{color: darkMode ? "white" : "black"}}>
                    Event schedule
                </div>
            </div>
            <div className="scheduleContainer">
                <div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        9:30
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Gathering in Cesena/Forlimpopoli
                    </div>
                </div>
                <div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        11:00
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Arrival to the designed mountain shelter
                    </div>
                </div>
                <div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        11:30
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Start of the trekking in Parco Nazionale Foreste Casentinesi
                    </div>
                </div>
                <div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        13:30
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Packed lunch
                    </div>
                </div>
                <div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        18:00
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Start of Apero and sunset djset by DJ Chino (lounge, sunset commercial house music)
                    </div>
                </div>
                <div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        20:00
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        “Crescioni” dinner
                    </div>
                </div>
                <div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        22:00
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Reggaeton pre party and Team games
                    </div>
                </div>
                <div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        00:00
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Start of Villaneta disco party. DJ set by Dzeta (commercial – tech house – EDM)
                    </div>
                </div>
                <div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        02:00
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                    Boiler room after party by Dzeta (Commercial Big Room House – Techno – Hardstyle)
                    </div>
                </div>
                <div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        8:30
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Breakfast
                    </div>
                </div>
                <div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        12:30
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Pasta Party
                    </div>
                </div>
                <div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        16:00
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Departure
                    </div>
                </div>
            </div>
        </>
    );
}