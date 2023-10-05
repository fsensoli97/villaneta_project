import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './ImagePopup.css'

export default function ImagePopup({image, showPopup, previous, next}) {
    return(
        <>
            <div className="closeButton" onClick={() => showPopup(false)}>
                <FontAwesomeIcon icon={faClose} size="2x"></FontAwesomeIcon>
            </div>
            <div className="prevButton" onClick={previous}>
                <FontAwesomeIcon icon={faArrowLeft} size="2x"></FontAwesomeIcon>
            </div>
            <div className="nextButton" onClick={next}>
                <FontAwesomeIcon icon={faArrowRight} size="2x"></FontAwesomeIcon>
            </div>
            <div className="popupContainer">
                <div className="imageContainer">
                    <img className="pic" src={image} alt="pic"></img>
                </div>
            </div>
        </>
    );
}