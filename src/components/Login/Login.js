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

    const usernames = [
        "fsensoli",
        "dzamagni",
        "cproietti",
        "afonti",
        "abenzoni",
        "aluca",
        "aseveri",
        "asiroli",
        "adelcampo",
        "amastrilli",
        "amasurquijo",
        "arighi",
        "darlotti",
        "tbaldani",
        "bbacchetti",
        "bportela",
        "cpasserini",
        "cpanariello",
        "cperrina",
        "cguerra",
        "cfagioli",
        "driccio",
        "dcalisi",
        "esavini",
        "econtadini",
        "emedri",
        "fzignani",
        "fsuzzi",
        "fnovaga",
        "gsilvestri",
        "gcandia",
        "gscavolini",
        "gvalentino",
        "hdruenne",
        "inimuini",
        "jcollombon",
        "kerim",
        "eliverani",
        "lfoschi",
        "lvergoni",
        "lgalli",
        "lpricolo",
        "fvanti",
        "mgianessi",
        "marshafhulla",
        "ececchetti",
        "nspazzoli",
        "ademasi",
        "nulivucci",
        "eberr",
        "lzamagni",
        "sdalesio",
        "screatore",
        "ssponda",
        "sstankov",
        "augolini",
        "vdipinto",
        "avolpini",
        "mbelletti",
        "avitali",
        "rgiordani",
        "amanzelli",
        "dbrandini"
    ];

    const passwords = [
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "scopacilemamme",
        "fiozisonfire",
        "burino",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "marshafhulla",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "mrbicipite",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "figabianca",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "ilpuffoinnamorato"
    ];

    function resetInputs() {
        setUsername('');
        setPassword('');
        for (const el of document.getElementsByClassName('loginInput')) {
            el.value = '';
        }
    }

    function loginHandle() {
        for (let i = 0; i < usernames.length; i++) {
            if (username === usernames[i] && password === passwords[i]) {
                sessionStorage.setItem("token", "true");
                setToken(true);
                return;
            }
        }

        resetInputs();
        setDisplayMessage(true);
        setTimeout(() => setDisplayMessage(false), 3000);
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