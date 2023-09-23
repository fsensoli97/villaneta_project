import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Logo from "../Logo/Logo";
import Timer from "../Timer/Timer";
import './Location.css'

export default function Location() {
    return(
        <>
            <HamburgerMenu></HamburgerMenu>
            <Logo></Logo>
            <div className="titleContainer">
                <div className="mainTitle">
                    Villaneta location
                </div>
            </div>
            <Timer timerText={'To be revealed in:'} dueDate={'10/20/2023'}></Timer>
            <div className="mapsContainer">
                <iframe 
                    className="mapsLocation"
                    title="mapsLocation" 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d164535.42735697742!2d11.897899861431775!3d43.928502455868774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1695473110515!5m2!1sit!2sit"
                    allowfullscreen=""
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </>
    );
}