import ProjectCard from "../components/ProjectCard";

export default function MesProjets() {
    return (
        <div className="page">
            <h1>Mes projets</h1>

            <h2>Projets phares</h2>
            <div className="grid">
                <ProjectCard
                    title="Sophie Bluel"
                    description="Application front avec interactions, appels API et gestion de galerie."
                    // imageSrc={imageSophie}
                    link="https://github.com/Tsm2713/Sophie-Bluel"
                />
                <ProjectCard
                    title="Kasa"
                    description="Application React (SPA) avec routing et composants réutilisables."
                    // imageSrc={imageKasa}
                    link="https://github.com/Tsm2713/Kasa"
                />
            </div>

            <h2>Autres projets de la formation</h2>
            <ul className="links">
                <li><a href="https://github.com/Tsm2713/Booki" target="_blank" rel="noreferrer">Booki</a></li>
                <li><a href="https://github.com/Tsm2713/Ohmyfood" target="_blank" rel="noreferrer">Ohmyfood</a></li>
                <li><a href="https://github.com/Tsm2713/Print-it" target="_blank" rel="noreferrer">Print It</a></li>
                <li><a href="https://github.com/Tsm2713/Nina-Carducci" target="_blank" rel="noreferrer">Nina Carducci</a></li>
                <li><a href="https://github.com/Tsm2713/724events" target="_blank" rel="noreferrer">724Events</a></li>
                <li><a href="https://github.com/Tsm2713/Menu-Maker" target="_blank" rel="noreferrer">Menu Maker / Qwenta</a></li>
            </ul>
        </div>
    );
}
