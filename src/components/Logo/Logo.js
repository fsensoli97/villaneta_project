import logo from '../../villanetaLogo.png'
import './Logo.css'

export default function Logo() {
    return (
        <>
            <div className='imgContainer'>
                <img className='logo' src={logo} alt='logo'></img>
            </div>
        </>
    );
}