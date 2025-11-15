import { Link } from "react-router-dom";

export default function Accueil() {
    return (
        <div className="page">
            <section className="hero">
                <h1>Thomas Cheval</h1>
                <h2>Développeur Front-End / Intégrateur Web</h2>
                <p>
                    Bienvenue sur mon portfolio. Découvrez mes projets (Sophie Bluel, Kasa)
                    et ma vision pour la suite.
                </p>
                <div className="hero__actions">
                    <Link className="btn" to="/mes-projets">Voir mes projets</Link>
                    <Link className="btn btn--secondary" to="/mon-futur">Mon futur</Link>
                </div>
            </section>
        </div>
    );
}
