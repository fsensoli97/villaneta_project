import "./Home.css"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"
import Logo from "../Logo/Logo"
import { ThemeContext } from "../../App"
import { useContext } from "react"
import { useState, useEffect } from "react"
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
    const [timer, setTimer] = useState([0, 0, 0, 0]);
    const darkMode = useContext(ThemeContext);
    const timerText = "Next event starts in:"
    const dueDate = "11/04/2023";

    useEffect(() => {
        setInterval(() => {
            const now = new Date();
            const partyTime = new Date(dueDate);
            const totSeconds =  parseInt(Math.abs(partyTime - now) / 1000);

            const days = Math.floor(totSeconds / (24 * 3600));
            const hours = Math.floor((totSeconds - (days * 24 * 3600)) / 3600);
            const minutes = Math.floor((totSeconds - (days * 24 * 3600) - (hours * 3600)) / 60);
            const seconds = Math.floor(totSeconds - (days * 24 * 3600) - (hours * 3600) - (minutes * 60));

            setTimer([days, hours, minutes, seconds]);
        }, 1000);
    }, [dueDate]);

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
            
            {
                /*
                <div className="animationContainer">
                <div className="firstLine" style={{boxShadow: darkMode ? "2px 2px 4px white" : "2px 2px 4px black"}}></div>
                <div className="secondLine" style={{boxShadow: darkMode ? "2px 2px 4px white" : "2px 2px 4px black"}}></div>
                </div>
                */
            }
            
            <div className="homeVideoContainer">
                <div className="homeTimerContainer">
                    <div className="timerTitle">{timerText}</div>
                    <div>
                        { String(timer[0]).padStart(2, '0') + "d " } 
                        { String(timer[1]).padStart(2, '0') + "h "} 
                        { String(timer[2]).padStart(2, '0') + "m "} 
                        { String(timer[3]).padStart(2, '0') + "s "} 
                    </div>
                </div>

                <video className="homeVideo" autoPlay muted loop>
                    <source src={homeVideo} type="video/mp4"></source>
                </video>
            </div>
               

            <div className="partnerTitle" style={{color: darkMode ? "white" : "black"}}>
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