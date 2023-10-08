import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Logo from "../Logo/Logo";
import './PreviousEditions.css'
import { useState } from "react";
import ImagePopup from "../ImagePopup/ImagePopup";
import { useContext } from "react";
import { ThemeContext } from "../../App";

import img1 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (1).jpeg'
import img2 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (2).jpeg'
import img3 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (3).jpeg'
import img4 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (4).jpeg'
import img5 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (5).jpeg'
import img6 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (6).jpeg'
import img7 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (7).jpeg'
import img8 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (8).jpeg'
import img9 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (9).jpeg'
import img10 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02.jpeg'
import img11 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.03 (1).jpeg'
import img12 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.03 (2).jpeg'
import img13 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.03 (3).jpeg'
import img14 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.03 (4).jpeg'
import img15 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.03 (5).jpeg'
import img16 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.03 (6).jpeg'
import img17 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.03 (7).jpeg'
import img18 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.03.jpeg'

import img3001 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.07 (1).jpeg'
import img3002 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.07 (2).jpeg'
import img3003 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.07 (3).jpeg'
import img3004 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.07 (4).jpeg'
import img3005 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.07 (5).jpeg'
import img3006 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.07.jpeg'
import img3007 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.08 (1).jpeg'
import img3008 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.08 (2).jpeg'
import img3009 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.08 (3).jpeg'
import img30010 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.08 (4).jpeg'
import img30011 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.08 (5).jpeg'
import img30012 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.08 (6).jpeg'
import img30013 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.08.jpeg'
import img30014 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.09 (1).jpeg'
import img30015 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.09 (2).jpeg'
import img30016 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.09 (3).jpeg'
import img30017 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.09 (4).jpeg'
import img30018 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.09 (5).jpeg'
import img30019 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.09 (6).jpeg'
import img30020 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.09 (7).jpeg'
import img30021 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.09 (8).jpeg'
import img30022 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.09 (9).jpeg'
import img30023 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.09.jpeg'
import img30024 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.10 (1).jpeg'
import img30025 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.10 (2).jpeg'
import img30026 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.10 (3).jpeg'
import img30027 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.10 (4).jpeg'
import img30028 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.10 (5).jpeg'
import img30029 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.10 (6).jpeg'
import img30030 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.10.jpeg'
import img30031 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.11 (1).jpeg'
import img30032 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.11 (10).jpeg'
import img30033 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.11 (11).jpeg'
import img30034 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.11 (2).jpeg'
import img30035 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.11 (3).jpeg'
import img30036 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.11 (4).jpeg'
import img30037 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.11 (5).jpeg'
import img30038 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.11 (6).jpeg'
import img30039 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.11 (7).jpeg'
import img30040 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.11 (8).jpeg'
import img30041 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.11 (9).jpeg'
import img30042 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.11.jpeg'
import img30043 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.12 (1).jpeg'
import img30044 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.12 (10).jpeg'
import img30045 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.12 (11).jpeg'
import img30046 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.12 (2).jpeg'
import img30047 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.12 (3).jpeg'
import img30048 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.12 (4).jpeg'
import img30049 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.12 (5).jpeg'
import img30050 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.12 (6).jpeg'
import img30051 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.12 (7).jpeg'
import img30052 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.12 (8).jpeg'
import img30053 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.12 (9).jpeg'
import img30054 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.12.jpeg'
import img30055 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.13 (1).jpeg'
import img30056 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.13 (10).jpeg'
import img30057 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.13 (11).jpeg'
import img30058 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.13 (2).jpeg'
import img30059 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.13 (3).jpeg'
import img30060 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.13 (4).jpeg'
import img30061 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.13 (5).jpeg'
import img30062 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.13 (6).jpeg'
import img30063 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.13 (7).jpeg'
import img30064 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.13 (8).jpeg'
import img30065 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.13 (9).jpeg'
import img30066 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.13.jpeg'
import img30067 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.14 (1).jpeg'
import img30068 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.14 (2).jpeg'
import img30069 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.14 (3).jpeg'
import img30070 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.14 (4).jpeg'
import img30071 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.14 (5).jpeg'
import img30072 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.14 (6).jpeg'
import img30073 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.14 (7).jpeg'
import img30074 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.14.jpeg'

export default function PreviousEditions() {
    const [editions, setEditions] = useState([false, false, false, false]);
    const [currentImage, setCurrentImage] = useState();
    const [showPopup, setShowPopup] = useState(false);
    const darkMode = useContext(ThemeContext);

    let edition1Pics = [
        
    ];

    let edition2Pics = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18
    ];

    let edition3Pics = [
        img3001,
        img3002,
        img3003,
        img3004,
        img3005,
        img3006,
        img3007,
        img3008,
        img3009,
        img30010,
        img30011,
        img30012,
        img30013,
        img30014,
        img30015,
        img30016,
        img30017,
        img30018,
        img30019,
        img30020,
        img30021,
        img30022,
        img30023,
        img30024,
        img30025,
        img30026,
        img30027,
        img30028,
        img30029,
        img30030,
        img30031,
        img30032,
        img30033,
        img30034,
        img30035,
        img30036,
        img30037,
        img30038,
        img30039,
        img30040,
        img30041,
        img30042,
        img30043,
        img30044,
        img30045,
        img30046,
        img30047,
        img30048,
        img30049,
        img30050,
        img30051,
        img30052,
        img30053,
        img30054,
        img30055,
        img30056,
        img30057,
        img30058,
        img30059,
        img30060,
        img30061,
        img30062,
        img30063,
        img30064,
        img30065,
        img30066,
        img30067,
        img30068,
        img30069,
        img30070,
        img30071,
        img30072,
        img30073,
        img30074
    ];

    const allPics = edition1Pics.concat(edition2Pics, edition3Pics);
    console.log(allPics)

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

    edition3Pics = edition3Pics.map((el) => {
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
                <div className="mainTitle" style={{color: darkMode ? "white" : "black"}}>
                    Previous editions
                </div>
            </div>
            <div className="editionLabel" onClick={() => handleClickEdition(0)} style={{color: darkMode ? "white" : "black"}}>
                First Edition
            </div>
            {editions[0] ?
            <div className="galleryRow">
                {edition1Pics}
            </div>
            : <></>
            }

            <div className="editionLabel" onClick={() => handleClickEdition(1)} style={{color: darkMode ? "white" : "black"}}>
                Second Edition
            </div>
            {editions[1] ? 
            <div className="galleryRow">
                {edition2Pics}
            </div>
            : <></>
            }    

            <div className="editionLabel" onClick={() => handleClickEdition(2)} style={{color: darkMode ? "white" : "black"}}>
                Third Edition
            </div>
            {editions[2] ? 
            <div className="galleryRow">
                {edition3Pics}
            </div>
            : <></>
            }     

            {showPopup ? 
            <ImagePopup image={currentImage} showPopup={setShowPopup} previous={previousImage} next={nextIimage}></ImagePopup>
            : <></>}
        </>
    );
}