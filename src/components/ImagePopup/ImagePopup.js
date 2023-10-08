import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
//import { faClose, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import './ImagePopup.css';

export default function ImagePopup({image, showPopup, previous, next}) {
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const minSwipeDistance = 50; 

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    }

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance
        if (isLeftSwipe) previous();
        if (isRightSwipe) next();
    }

    return(
        <>
            <div className="closeButton" onClick={() => showPopup(false)}>
                <FontAwesomeIcon icon={faClose} size="2x"></FontAwesomeIcon>
            </div>
            {/* 
            <div className="prevButton" onClick={previous}>
                <FontAwesomeIcon icon={faArrowLeft} size="2x"></FontAwesomeIcon>
            </div>
            <div className="nextButton" onClick={next}>
                <FontAwesomeIcon icon={faArrowRight} size="2x"></FontAwesomeIcon>
            </div>
            */}
            <div className="popupContainer" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                <div className="imageContainer">
                    <img className="pic" src={image} alt="pic"></img>
                </div>
            </div>
        </>
    );
}