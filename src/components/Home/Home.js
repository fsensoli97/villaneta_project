import "./Home.css"
import Timer from "../Timer/Timer"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"

export default function Home() {
    return (
        <>
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