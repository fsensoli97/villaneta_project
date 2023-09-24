import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Logo from "../Logo/Logo";
import img from '../../gallery/previousEditions/firstEdition/example.jfif'
import img2 from '../../gallery/previousEditions/firstEdition/example2.jfif'
import './PreviousEditions.css'
import { useState } from "react";

export default function PreviousEditions() {
    const [editions, setEditions] = useState([false, false, false, false])

    function handleClick(i) {
        let aux = [...editions];
        aux[i] = !aux[i];
        setEditions(aux);
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
            <div className="editionLabel" onClick={() => handleClick(0)}>First Edition</div>
            {editions[0] ? <></> : 
            <div className="galleryRow">
                <div className="imageContainer">
                    <img className="image" src={img} alt="example"></img>
                </div>
                <div className="imageContainer">
                    <img className="image" src={img2} alt="example"></img>
                </div>
                <div className="imageContainer">
                    <img className="image" src={img} alt="example"></img>
                </div>
                <div className="imageContainer">
                    <img className="image" src={img} alt="example"></img>
                </div>
            </div>
            }
            <div className="editionLabel" onClick={() => handleClick(1)}>Second Edition</div>
            {editions[1] ? <></> : 
            <div className="galleryRow">
                <div className="imageContainer">
                    <img className="image" src={img} alt="example"></img>
                </div>
                <div className="imageContainer">
                    <img className="image" src={img} alt="example"></img>
                </div>
                <div className="imageContainer">
                    <img className="image" src={img} alt="example"></img>
                </div>
            </div>
            }        
        </>
    );
}