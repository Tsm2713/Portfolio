import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="container header_content">
        <Link
          to="/"
          className="brand"
          aria-label="Accueil"
          onClick={closeMenu}
        >
          <img
            src={Logo}
            alt="MONPORTFOLIO"
            className="logo"
            width={130}
            height={130}
          />
        </Link>

        <button
          type="button"
          className={`menu-toggle ${isOpen ? "menu-toggle--open" : ""}`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          aria-label={
            isOpen
              ? "Fermer le menu de navigation"
              : "Ouvrir le menu de navigation"
          }
        >
          <span className="menu-toggle__arrow" aria-hidden="true"></span>
        </button>

        <nav
          id="main-navigation"
          className={`nav-wrapper ${isOpen ? "nav-wrapper--open" : ""}`}
          aria-label="Navigation principale"
        >
          <ul className="nav">
            <li>
              <NavLink to="/" end onClick={closeMenu}>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/mon-parcours" onClick={closeMenu}>
                Mon Parcours
              </NavLink>
            </li>
            <li>
              <NavLink to="/mon-futur" onClick={closeMenu}>
                Mon Futur
              </NavLink>
            </li>
            <li>
              <NavLink to="/mes-projets" onClick={closeMenu}>
                Mes Projets
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
