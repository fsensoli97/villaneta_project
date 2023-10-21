import "./Home.css"
import Timer from "../Timer/Timer"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"
import Logo from "../Logo/Logo"
import { ThemeContext } from "../../App"
import { useContext } from "react"
import homeVideo from "../../gallery/videos/homeVideo.mp4"
import sponsor1 from "../../gallery/sponsors/UNESCOlogo.png"
import sponsor2 from "../../gallery/sponsors/FORESTElogo.png"
import sponsor3 from "../../gallery/sponsors/BOMBAlogo.png"
import sponsor4 from "../../gallery/sponsors/REDBULLlogo.png"
import sponsor5 from "../../gallery/sponsors/PIONEERlogo.png"
import sponsor6 from "../../gallery/sponsors/NORTHFACElogo.png"
import sponsor7 from "../../gallery/sponsors/LIDLlogo.png"
import sponsor8 from "../../gallery/sponsors/KONGSTRONGlogo.png"
import sponsor9 from "../../gallery/sponsors/GINlogo.png"
import sponsor10 from "../../gallery/sponsors/UNIBOlogo.png"


export default function Home() {
    const darkMode = useContext(ThemeContext);

    return (
        <>
            <HamburgerMenu></HamburgerMenu>
            <Logo></Logo>
            <div className="titleContainer">
                <div className="mainTitle" style={{color: darkMode ? "white" : "black"}}>
                    THE VILLANETA
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
                LOCAL PARTNERS
            </div>
            <div className="partnerRowContainer">
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
                <div className="sponsorContainer">
                    <img className="sponsorImage" src={sponsor6} alt="example"></img>
                </div>
            </div> 

            <div className="sponsorTitle" style={{color: darkMode ? "white" : "black"}}>
                OFFICIAL SPONSORS
            </div>
            <div className="sponsorRowContainer">
                <div className="sponsorContainer">
                    <img className="sponsorImage" src={sponsor7} alt="example"></img>
                </div>
                <div className="sponsorContainer">
                    <img className="sponsorImage" src={sponsor8} alt="example"></img>
                </div>
                <div className="sponsorContainer">
                    <img className="sponsorImage" src={sponsor9} alt="example"></img>
                </div>
                <div className="sponsorContainer">
                    <img className="sponsorImage" src={sponsor10} alt="example"></img>
                </div>
            </div> 
        </>
    )
} 