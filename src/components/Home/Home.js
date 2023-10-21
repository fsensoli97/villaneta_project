import "./Home.css"
import Timer from "../Timer/Timer"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"
import Logo from "../Logo/Logo"
import { ThemeContext } from "../../App"
import { useContext } from "react"
import homeVideo from "../../gallery/videos/homeVideo.mp4"
import sponsor1 from "../../gallery/sponsors/1.jpeg"
import sponsor2 from "../../gallery/sponsors/2.jpeg"
import sponsor3 from "../../gallery/sponsors/3.jpeg"
import sponsor4 from "../../gallery/sponsors/4.jpeg"
import sponsor5 from "../../gallery/sponsors/5.jpeg"


export default function Home() {
    const darkMode = useContext(ThemeContext);

    return (
        <>
            <HamburgerMenu></HamburgerMenu>
            <Logo></Logo>
            <div className="titleContainer">
                <div className="mainTitle" style={{color: darkMode ? "white" : "black"}}>
                    The Villaneta
                </div>
                <div className="subtitle" style={{color: darkMode ? "white" : "black"}}>
                    Join our community
                </div>
            </div>
            <Timer timerText={'Next event starts in:'} dueDate={'11/04/2023'}></Timer>
            {
                /*
                <div className="animationContainer">
                <div className="firstLine" style={{boxShadow: darkMode ? "2px 2px 4px white" : "2px 2px 4px black"}}></div>
                <div className="secondLine" style={{boxShadow: darkMode ? "2px 2px 4px white" : "2px 2px 4px black"}}></div>
                </div>
                */
            }
            <div className="homeVideoContainer">
                <video className="homeVideo" autoPlay muted loop>
                    <source src={homeVideo} type="video/mp4"></source>
                </video>
            </div>   

            <div className="sponsorTitle" style={{color: darkMode ? "white" : "black"}}>
                Local Partners
            </div>
            <div className="sponsorRowContainer">
                <div className="sponsorContainer">
                    <img className="sponsorImage" src={sponsor1} alt="example"></img>
                </div>
                <div className="sponsorContainer">
                    <img className="sponsorImage" src={sponsor2} alt="example"></img>
                </div>
                <div className="sponsorContainer">
                    <img className="sponsorImage" src={sponsor3} alt="example"></img>
                </div>
                <div className="sponsorContainer">
                    <img className="sponsorImage" src={sponsor4} alt="example"></img>
                </div>
                <div className="sponsorContainer">
                    <img className="sponsorImage" src={sponsor5} alt="example"></img>
                </div>
            </div> 

            <div className="sponsorTitle" style={{color: darkMode ? "white" : "black"}}>
                Official Partners
            </div>
            <div className="sponsorRowContainer">
                <div className="sponsorContainer">
                    <img className="sponsorImage" src={sponsor1} alt="example"></img>
                </div>
                <div className="sponsorContainer">
                    <img className="sponsorImage" src={sponsor2} alt="example"></img>
                </div>
                <div className="sponsorContainer">
                    <img className="sponsorImage" src={sponsor3} alt="example"></img>
                </div>
                <div className="sponsorContainer">
                    <img className="sponsorImage" src={sponsor4} alt="example"></img>
                </div>
                <div className="sponsorContainer">
                    <img className="sponsorImage" src={sponsor5} alt="example"></img>
                </div>
            </div> 
        </>
    )
} 