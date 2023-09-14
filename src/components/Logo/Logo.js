import logo from "../../VillanetaLogo.svg"
import "./Logo.css"

export default function Logo () {
    return (
        <div className="logoContainer">
          <img src={logo} alt="Logo" className="logo"/>
        </div>
    )
}