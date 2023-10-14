import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Logo from "../Logo/Logo";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import './Profile.css'
import { serverUrl } from "../../globals";
import { useState } from "react";
import Cropper from "react-easy-crop";

export default function Profile({token, id}) {
    const [img, setImg] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1.5);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [blob, setBlob] = useState(null);

    function handleFileChoose(e) {
        if (e.target.files && e.target.files[0]) {
        setImg(URL.createObjectURL(e.target.files[0]));
        }
    }

    function getCroppedImg() {
        const image = new Image();
        image.src = img;
        const canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext("2d");
        //console.log(canvas.width, canvas.height, croppedAreaPixels.x, croppedAreaPixels.y, croppedAreaPixels.width, croppedAreaPixels.height)
        
        ctx.drawImage(image, 0, 0);
        const data = ctx.getImageData(croppedAreaPixels.x, croppedAreaPixels.y, croppedAreaPixels.width, croppedAreaPixels.height);
    
        const canvas2 = document.createElement("canvas");
        const ctx2 = canvas2.getContext("2d");
        canvas2.width = croppedAreaPixels.width;
        canvas2.height = croppedAreaPixels.height;
        ctx2.putImageData(data, 0, 0);
    
        canvas2.toBlob((file) => {
        setBlob(file);
        setCroppedImage(URL.createObjectURL(file), "image/jpeg");
        });
    }

    function saveImage() {
        if (!blob) return;

        const formData = new FormData();
        formData.append("profilePic", blob);

        fetch(`${serverUrl}/profilepic?id=${id}`, {
            method: "PUT",
            body: formData,
        })
        .then((response) => response.text())
        .then((responseText) => {
        console.log(responseText);
        });
        console.log(blob)
    }

    const darkMode = useContext(ThemeContext);

    return (
        <>
            <HamburgerMenu></HamburgerMenu>
            <Logo></Logo>
            <div className="titleContainer">
                <div className="mainTitle" style={{color: darkMode ? "white" : "black"}}>
                    My Profile
                </div>
            </div>
            {img ? 
                <>
                    <div className="cropperContainer">
                    <Cropper classes={{ containerClassName: "cropper", mediaClassName: "mediaContainer", cropAreaClassName: "areaContainer" }} image={img} crop={crop} onCropChange={setCrop} cropShape="round" aspect={1/1}
                    zoom={zoom} zoomSpeed={2} maxZoom={3} zoomWithScroll={true} showGrid={true} onZoomChange={setZoom} onCropComplete={(croppedArea, croppedAreaPixels) => {setCroppedAreaPixels(croppedAreaPixels)}}></Cropper>
                    </div>
                        
                    <div className="cropButtonContainer">
                        <button className="cropButton" onClick={getCroppedImg}>Done</button>
                    </div>
                {croppedImage ? 
                <>
                    <div className="screenshotContainer">
                        <img className="screenshot" src={croppedImage} alt="crop"></img>
                    </div>
                    <div className="saveButtonContainer">
                        <button className="saveButton" onClick={saveImage}>Save image</button>
                    </div>
                </> 
                : <></>}
                
            </> : <></>}
            
            <div className="inputFileContainer">
                <label className="chooseFile">
                    <input className="inputFile" type="file" onChange={handleFileChoose}></input>
                    Select image
                </label> 
            </div>
        </>
    );
}