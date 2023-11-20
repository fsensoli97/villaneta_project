import Logo from "../Logo/Logo";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import './Login.css'
import { useState } from "react";

export default function Login({setToken}) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [displayMessage, setDisplayMessage] = useState(false);
    const darkMode = useContext(ThemeContext);

    function resetInputs() {
        setUsername('');
        setPassword('');
        for (const el of document.getElementsByClassName('loginInput')) {
            el.value = '';
        }
    }

    function loginHandle() {
        if (username === "villa" && password === "banks") {
            sessionStorage.setItem("token", "true");
            setToken(true);
        }
        else {
            resetInputs();
            setDisplayMessage(true);
            setTimeout(() => setDisplayMessage(false), 3000);
        }
    }

    return(
        <>
            <Logo></Logo>
            <div className="titleContainer">
                <div className="mainTitle" style={{color: darkMode ? "white" : "black", transition: "1s"}}>
                    Login
                </div>
            </div>

            <div className="loginContainer">
                <input className="loginInput" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} style={{color: darkMode ? "white" : "black"}}></input>
                <input className="loginInput" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} style={{color: darkMode ? "white" : "black"}}></input>
                <button className="loginButton" onClick={loginHandle} style={{color: darkMode ? "white" : "black"}}>Login</button>       
            </div>

            {displayMessage ? <div className="loginInput">Invalid credentials.</div> : <></>}
        </>
    );
}