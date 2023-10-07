import HamburgerMenu from "../../HamburgerMenu/HamburgerMenu";
import Logo from "../../Logo/Logo";
import './Schedule.css'

export default function Schedule() {
    return(
        <>  
            <HamburgerMenu></HamburgerMenu>
            <Logo></Logo>
            <div className="titleContainer">
                <div className="mainTitle">
                    Event schedule
                </div>
            </div>
            <div className="scheduleContainer">
                <div className="scheduleElement">
                    <div className="scheduleTime">
                        18:00
                    </div>
                    <div className="scheduleEvent">
                        Chillout
                    </div>
                </div>
                <div className="scheduleElement">
                    <div className="scheduleTime">
                        18:00
                    </div>
                    <div className="scheduleEvent">
                        Chillout
                    </div>
                </div>
                <div className="scheduleElement">
                    <div className="scheduleTime">
                        18:00
                    </div>
                    <div className="scheduleEvent">
                        Chillout
                    </div>
                </div>
                <div className="scheduleElement">
                    <div className="scheduleTime">
                        18:00
                    </div>
                    <div className="scheduleEvent">
                        Chillout
                    </div>
                </div>
                <div className="scheduleElement">
                    <div className="scheduleTime">
                        18:00
                    </div>
                    <div className="scheduleEvent">
                        Chillout
                    </div>
                </div>
            </div>
        </>
    );
}