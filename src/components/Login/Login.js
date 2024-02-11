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
        "fede",
        "diego",
        "cami",
        "ale",
        "ade",
        "albi",
        "ale",
        "alex",
        "alexia",
        "ali",
        "ana",
        "andre",
        "arlo",
        "balda",
        "bea",
        "bern",
        "ceci",
        "celly",
        "chia",
        "chia",
        "clara",
        "dani",
        "domi",
        "edo",
        "elly",
        "elli",
        "filo",
        "fioz",
        "franci",
        "octopussy",
        "giuli",
        "glori",
        "giuli",
        "hugo",
        "ines",
        "joriaan",
        "kerim",
        "live",
        "lollo",
        "vergo",
        "lu",
        "luca",
        "vanti",
        "gianne",
        "marshafhulla",
        "eli",
        "nichi",
        "anna",
        "noe",
        "rapha",
        "chino",
        "sara",
        "sere",
        "sofi",
        "stongi",
        "il maestro",
        "vale",
        "volpe",
        "bellet",
        "anna",
        "rayan",
        "ale",
        "davi"
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
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire",
        "fiozisonfire"
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
                sessionStorage.setItem("user", username);
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
                <input className="loginInput" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}></input>
                <input className="loginInput" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
                <button className="loginButton" onClick={loginHandle}>Login</button>       
            </div>

            {displayMessage ? <div className="credentialMessage">Invalid credentials.</div> : <></>}
        </>
    );
}