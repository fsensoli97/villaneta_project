import "./Home.css"
import Timer from "../Timer/Timer"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"
import Logo from "../Logo/Logo"

export default function Home() {
    return (
        <>
        <Logo></Logo>
            <div className="titleContainer">
                <div className="mainTitle">
                    Villaneta project
                </div>
                <div className="subtitle">
                    Join our community
                </div>
            </div>
            <HamburgerMenu></HamburgerMenu>
            <Timer></Timer>
        </>
    )
} 