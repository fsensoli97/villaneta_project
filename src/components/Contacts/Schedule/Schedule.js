import HamburgerMenu from "../../HamburgerMenu/HamburgerMenu";
import Logo from "../../Logo/Logo";
import './Schedule.css'
import { useContext } from "react";
import { ThemeContext } from "../../../App";
import conero from '../../../gallery/schedule/conero.jpg'
import sunset from '../../../gallery/schedule/sunset.jpg'
import dinner from '../../../gallery/schedule/sirolo.jpg'
import beach from '../../../gallery/schedule/beach.jpg'
import dj from '../../../gallery/schedule/dj.jpg'

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
                <div className="scheduleDay">FRIDAY</div>
                <div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        8:30
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Gathering in Cesena
                    </div>
                </div>
                <div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        10:00
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Arrival to Conero
                    </div>
                    <div className="schedulePicContainer">
                        <img className="schedulePic" src={conero} alt="conero"></img>
                    </div>
                </div>
                <div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        10:30
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Walk to the designated beach
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
                        20:00
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Dinner
                    </div>
                    <div className="schedulePicContainer">
                        <img className="schedulePic" src={dinner} alt="conero"></img>
                    </div>
                </div>
                <div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        22:00
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Games and chill
                    </div>
                </div>
                <div className="scheduleDay">SATURDAY</div>
                <div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        9:30
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Beach time and fun activities
                    </div>
                    <div className="schedulePicContainer">
                        <img className="schedulePic" src={beach} alt="conero"></img>
                    </div>
                </div>
                <div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        19:30
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Sunset apero and DJ set on the beach (powered by DJ Chino)
                    </div>
                    <div className="schedulePicContainer">
                        <img className="schedulePic" src={sunset} alt="conero"></img>
                    </div>
                </div>
                <div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        22:00
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Raeggeton pre-party and team games
                    </div>
                </div>
                <div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        24:00
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Villaneta disco party (powered by DZeta)
                    </div>
                    <div className="schedulePicContainer">
                        <img className="schedulePic" src={dj} alt="conero"></img>
                    </div>
                </div>
                <div className="scheduleDay">SUNDAY</div>
                <div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        10:30
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Breakfast
                    </div>
                </div>
                <div className="scheduleElement">
                    <div className="scheduleTime" style={{color: darkMode ? "white" : "black"}}>
                        11:00 - 12:30
                    </div>
                    <div className="scheduleEvent" style={{color: darkMode ? "white" : "black"}}>
                        Cleaning (compulsory)
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
                <br></br>
            </div>
        </>
    );
}