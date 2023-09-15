import "./Home.css"
import Timer from "../Timer/Timer"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"
import Logo from "../Logo/Logo"

export default function Home() {
    return (
        <>
            <HamburgerMenu></HamburgerMenu>
            <Logo></Logo>
            <div className="titleContainer">
                <div className="mainTitle">
                    Villaneta project
                </div>
                <div className="subtitle">
                    Join our community
                </div>
            </div>
            <Timer></Timer>
            <div className="animationContainer">
                <div className="firstLine"></div>
                <div className="secondLine"></div>
            </div>
        </>
    )
} 