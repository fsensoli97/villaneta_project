import logo from '../../villanetaLogo.svg'
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