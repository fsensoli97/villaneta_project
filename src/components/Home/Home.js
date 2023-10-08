import "./Home.css"
import Timer from "../Timer/Timer"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"
import Logo from "../Logo/Logo"
import { ThemeContext } from "../../App"
import { useContext } from "react"

export default function Home() {
    const darkMode = useContext(ThemeContext);

    return (
        <>
            <HamburgerMenu></HamburgerMenu>
            <Logo></Logo>
            <div className="titleContainer">
                <div className="mainTitle" style={{color: darkMode ? "white" : "black"}}>
                    Villaneta project
                </div>
                <div className="subtitle" style={{color: darkMode ? "white" : "black"}}>
                    Join our community
                </div>
            </div>
            <Timer timerText={'Next event starts in:'} dueDate={'11/04/2023'}></Timer>
            <div className="animationContainer">
                <div className="firstLine" style={{boxShadow: darkMode ? "2px 2px 4px white" : "2px 2px 4px black"}}></div>
                <div className="secondLine" style={{boxShadow: darkMode ? "2px 2px 4px white" : "2px 2px 4px black"}}></div>
            </div>
        </>
    )
} 