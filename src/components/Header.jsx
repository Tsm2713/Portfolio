import { NavLink, Link } from "react-router-dom";
import Logo from '../assets/Logo.png';


export default function Header() {
    return (
        <header className="header">
            <div className="container header_content">
                <Link to="/" className="brand" aria-label="Accueil">
                    <img src={Logo} alt="MONPORTFOLIO" className="logo" width={130} height={130} />
                </Link>
                <nav aria-label="Navigation principale">
                    <ul className="nav">
                        <li><NavLink to="/" end>Accueil</NavLink></li>
                        <li><NavLink to="/mon-futur">Mon Futur</NavLink></li>
                        <li><NavLink to="/mes-projets">Mes Projets</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
