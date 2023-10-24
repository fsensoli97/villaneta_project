import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Logo from "../Logo/Logo";
import './PreviousEditions.css'
import { useState } from "react";
import ImagePopup from "../ImagePopup/ImagePopup";
import { useContext } from "react";
import { ThemeContext } from "../../App";

import img1001 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-17-51-00.jpg'
import img1002 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-17-51-03.jpg'
import img1003 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-17-51-06 - Copia.jpg'
import img1004 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-17-51-06.jpg'
import img1005 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-17-51-07 - Copia.jpg'
import img1006 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-17-51-07.jpg'
import img1007 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-17-51-08 - Copia.jpg'
import img1008 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-17-51-08.jpg'
import img1009 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-54-57.jpg'
import img10010 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-55-57.jpg'
import img10011 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-56-02 - Copia.jpg'
import img10012 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-56-02.jpg'
import img10013 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-56-53.jpg'
import img10014 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-57-00 - Copia (2).jpg'
import img10015 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-57-00 - Copia.jpg'
import img10016 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-57-00.jpg'
import img10017 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-57-41.jpg'
import img10018 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-57-42.jpg'
import img10019 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-57-48.jpg'
import img10020 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-58-20 - Copia (2).jpg'
import img10021 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-58-20 - Copia.jpg'
import img10022 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-58-20.jpg'
import img10023 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-58-21 - Copia.jpg'
import img10024 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-58-21.jpg'
import img10025 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-58-22.jpg'
import img10026 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-58-23.jpg'
import img10027 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-59-08.jpg'
import img10028 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-59-14.jpg'
import img10029 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-59-15.jpg'
import img10030 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-59-49.jpg'
import img10031 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-59-52.jpg'
import img10032 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-59-53.jpg'
import img10033 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-59-54.jpg'
import img10034 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-20-40-19.jpg'
import img10035 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-17-11-48-51.jpg'
import img10036 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-17-11-48-52.jpg'
import img10037 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-17-11-48-53 - Copia (2).jpg'
import img10038 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-17-11-48-53 - Copia.jpg'
import img10039 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-17-11-48-53.jpg'

import img2001 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (1).jpeg'
import img2002 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (2).jpeg'
import img2003 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (3).jpeg'
import img2004 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (4).jpeg'
import img2005 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (5).jpeg'
import img2006 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (6).jpeg'
import img2007 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (7).jpeg'
import img2008 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (8).jpeg'
import img2009 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (9).jpeg'
import img20010 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02.jpeg'
import img20011 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.03 (1).jpeg'
import img20012 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.03 (2).jpeg'
import img20013 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.03 (3).jpeg'
import img20014 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.03 (4).jpeg'
import img20015 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.03 (5).jpeg'
import img20016 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.03 (6).jpeg'
import img20017 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.03 (7).jpeg'
import img20018 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.03.jpeg'

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

import img4001 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-18-21-51.jpg'
import img4002 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-20-24-31.jpg'
import img4003 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-20-25-33.jpg'
import img4004 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-20-25-35.jpg'
import img4005 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-20-25-58.jpg'
import img4006 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-20-26-05.jpg'
import img4007 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-20-26-06.jpg'
import img4008 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-20-26-07.jpg'
import img4009 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-20-26-08.jpg'
import img40010 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-20-26-09.jpg'
import img40011 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-20-26-12.jpg'
import img40012 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-20-36-11.jpg'
import img40013 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-20-36-12.jpg'
import img40014 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-21-48-19.jpg'
import img40015 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-21-48-35.jpg'
import img40016 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-21-48-38.jpg'
import img40017 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-21-48-49.jpg'
import img40018 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-16-21-29-30.jpg'
import img40019 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-16-21-29-31 - Copia (2).jpg'
import img40020 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-16-21-29-31 - Copia.jpg'
import img40021 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-16-21-29-31.jpg'

export default function PreviousEditions() {
    const [editions, setEditions] = useState([false, false, false, false]);
    const [currentImage, setCurrentImage] = useState();
    const [showPopup, setShowPopup] = useState(false);
    const darkMode = useContext(ThemeContext);

    let edition1Pics = [
        img1001,
        img1002,
        img1003,
        img1004,
        img1005,
        img1006,
        img1007,
        img1008,
        img1009,
        img10010,
        img10011,
        img10012,
        img10013,
        img10014,
        img10015,
        img10016,
        img10017,
        img10018,
        img10019,
        img10020,
        img10021,
        img10022,
        img10023,
        img10024,
        img10025,
        img10026,
        img10027,
        img10028,
        img10029,
        img10030,
        img10031,
        img10032,
        img10033,
        img10034,
        img10035,
        img10036,
        img10037,
        img10038,
        img10039,
    ];

    let edition2Pics = [
        img2001,
        img2002,
        img2003,
        img2004,
        img2005,
        img2006,
        img2007,
        img2008,
        img2009,
        img20010,
        img20011,
        img20012,
        img20013,
        img20014,
        img20015,
        img20016,
        img20017,
        img20018,
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

    let edition4Pics = [
        img4001,
        img4002,
        img4003,
        img4004,
        img4005,
        img4006,
        img4007,
        img4008,
        img4009,
        img40010,
        img40011,
        img40012,
        img40013,
        img40014,
        img40015,
        img40016,
        img40017,
        img40018,
        img40019,
        img40020,
        img40021,
    ];

    const allPics = edition1Pics.concat(edition2Pics, edition3Pics, edition4Pics);

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

    edition4Pics = edition4Pics.map((el) => {
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

            <div className="editionLabel" onClick={() => handleClickEdition(3)} style={{color: darkMode ? "white" : "black"}}>
                Fourth Edition
            </div>
            {editions[3] ? 
            <div className="galleryRow">
                {edition4Pics}
            </div>
            : <></>
            }    

            {showPopup ? 
            <ImagePopup image={currentImage} showPopup={setShowPopup} previous={previousImage} next={nextIimage}></ImagePopup>
            : <></>}
        </>
    );
}