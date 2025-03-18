import '../index.css'
import logo from '../images/logo2.png'
export default function Navbar() {
    return (
        <header>
            <nav className="nav-bar">
                <a href="#" className="logo">
                    <img src={logo} alt="Logo" />
                </a>
                <ul>
                    <li> <a href='#'>Home</a></li>
                    <li><a href='#'>AI Tool</a></li>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
};
