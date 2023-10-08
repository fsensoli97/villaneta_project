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
                        18:00
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Chillout
                    </div>
                </div>
                <div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        18:00
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Chillout
                    </div>
                </div><div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        18:00
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Chillout
                    </div>
                </div><div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        18:00
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Chillout
                    </div>
                </div>
            </div>
        </>
    );
}