import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Logo from "../Logo/Logo";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import './Login.css'
import { serverUrl } from "../../globals";
import { useState } from "react";

export default function Login({token, setToken}) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [signIn, setSignIn] = useState(false);
    const darkMode = useContext(ThemeContext);

    function setTokenSession(token) {
        sessionStorage.setItem("token", JSON.stringify(token));
    }

    function loginHandle() {
        fetch(`${serverUrl}/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    username: username,
                    password: password
                }
            )
        })
        .then(response => response.json())
        .then(data => { 
            console.log(data);
            setToken(data);
            setTokenSession(data);
        }).catch(err => {
            console.log(err);
        });
    }

    function signinHandle() {
        fetch(`${serverUrl}/signin`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    username: username,
                    email: email,
                    password: password
                }
            )
        })
        .then(response => response.json())
        .then(data => { 
            console.log(data);
        }).catch(err => {
            console.log(err);
        });
    }

    function resetInputs() {
        setUsername('');
        setPassword('');
        setEmail('');
        setSignIn(!signIn);
        for (const el of document.getElementsByClassName('loginInput')) {
            el.value = '';
        }
    }

    return(
        <>
            <HamburgerMenu></HamburgerMenu>
            <Logo></Logo>
            <div className="titleContainer">
                <div className="mainTitle" style={{color: darkMode ? "white" : "black", transition: "1s"}}>
                    Community
                </div>
            </div>

            {token ?  
            <div>Welcome</div>
            :
            <div className="loginContainer">
            {!signIn ? 
            <>
                <input className="loginInput" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} style={{color: darkMode ? "white" : "black"}}></input>
                <input className="loginInput" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} style={{color: darkMode ? "white" : "black"}}></input>
                <button className="loginButton" onClick={loginHandle} style={{color: darkMode ? "white" : "black"}}>Login</button>
                <div className="createAccount" onClick={resetInputs} style={{color: darkMode ? "white" : "black"}}>Create an account</div>
            </>
            :
            <>
                <input className="loginInput" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} style={{color: darkMode ? "white" : "black"}}></input>
                <input className="loginInput" type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} style={{color: darkMode ? "white" : "black"}}></input>
                <input className="loginInput" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} style={{color: darkMode ? "white" : "black"}}></input>
                <button className="loginButton" onClick={signinHandle} style={{color: darkMode ? "white" : "black"}}>Sign in</button>
                <div className="createAccount" onClick={resetInputs} style={{color: darkMode ? "white" : "black"}}>Login</div>
            </>
            }          
        </div>}
            
        </>
    );
}