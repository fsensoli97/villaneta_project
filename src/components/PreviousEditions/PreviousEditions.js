import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Logo from "../Logo/Logo";
import img from '../../gallery/previousEditions/firstEdition/WhatsApp Image 2023-09-24 at 23.23.55 (1).jpeg'
import img2 from '../../gallery/previousEditions/firstEdition/WhatsApp Image 2023-09-24 at 23.23.55.jpeg'
import img3 from '../../gallery/previousEditions/firstEdition/WhatsApp Image 2023-09-24 at 23.24.01 (2).jpeg'
import img4 from '../../gallery/previousEditions/firstEdition/WhatsApp Image 2023-09-24 at 23.24.01 (3).jpeg'
import './PreviousEditions.css'
import { useState } from "react";
import ImagePopup from "../ImagePopup/ImagePopup";

export default function PreviousEditions() {
    const [editions, setEditions] = useState([false, false, false, false]);
    const [currentImage, setCurrentImage] = useState();
    const [showPopup, setShowPopup] = useState(false);

    let edition1Pics = [
        img,
        img2
    ];
    let edition2Pics = [
        img3,
        img4
    ];

    const allPics = edition1Pics.concat(edition2Pics);

    function handleClickImage(image) {
        setCurrentImage(image);
        setShowPopup(true);
    }

    edition1Pics = edition1Pics.map((el) => {
        return (
        <div className="imageContainer" onClick={() => handleClickImage(el)}>
            <img className="image" src={el} alt="example"></img>
        </div>
        );
    });

    edition2Pics = edition2Pics.map((el) => {
        return (
        <div className="imageContainer" onClick={() => handleClickImage(el)}>
            <img className="image" src={el} alt="example"></img>
        </div>
        );
    });

    function handleClickEdition(i) {
        let aux = [...editions];
        aux[i] = !aux[i];
        setEditions(aux);
    }

    function previousImage() {
        for (let i = 0; i < allPics.length; i++) {
            if (currentImage === allPics[i]) {
                if (i === 0) {
                    return setCurrentImage(allPics[allPics.length-1]);
                }
                else {
                    return setCurrentImage(allPics[i-1]);
                }     
            }
        }
    }

    function nextIimage() {
        for (let i = 0; i < allPics.length; i++) {
            if (currentImage === allPics[i]) {
                if (i === allPics.length - 1) {
                    return setCurrentImage(allPics[0]);
                }
                else {
                    return setCurrentImage(allPics[i+1]);
                }     
            }
        }
    }

    return(
        <>
            <HamburgerMenu></HamburgerMenu>
            <Logo></Logo>
            <div className="titleContainer">
                <div className="mainTitle">
                    Previous editions
                </div>
            </div>
            <div className="editionLabel" onClick={() => handleClickEdition(0)}>First Edition</div>
            {editions[0] ?
            <div className="galleryRow">
                {edition1Pics}
            </div>
            : <></>
            }

            <div className="editionLabel" onClick={() => handleClickEdition(1)}>Second Edition</div>
            {editions[1] ? 
            <div className="galleryRow">
                {edition2Pics}
            </div>
            : <></>
            }       

            {showPopup ? 
            <ImagePopup image={currentImage} showPopup={setShowPopup} previous={previousImage} next={nextIimage}></ImagePopup>
            : <></>}
        </>
    );
}