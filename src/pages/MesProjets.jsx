import { useState } from "react";
import sophieImage from "../assets/sophiebluel.png";
import kasaImage from "../assets/kasa.png";

const OTHER_PROJECTS = [
  {
    id: "ohmyfood",
    name: "Ohmyfood",
    url: "https://github.com/Tsm2713/Projet4OC_Ohmyfood",
    tech: ["htmlcss", "js"],
  },
  {
    id: "printit",
    name: "Print It",
    url: "https://github.com/Tsm2713/Projet5_OPC",
    tech: ["htmlcss", "js"],
  },
  {
    id: "nina",
    name: "Nina Carducci",
    url: "https://github.com/Tsm2713/nina-carducci_projet8",
    tech: ["htmlcss", "js"],
  },
  {
    id: "724events",
    name: "724Events",
    url: "https://github.com/Tsm2713/Projet9_724events",
    tech: ["js"],
  },
  {
    id: "argentbank",
    name: "ArgentBank",
    url: "https://github.com/Tsm2713/ArgentBank",
    tech: ["react", "js"],
  },
];

const FILTERS = [
  { id: "all", label: "Tous les projets" },
  { id: "htmlcss", label: "HTML / CSS" },
  { id: "js", label: "JavaScript" },
  { id: "react", label: "React" },
];

export default function MesProjets() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? OTHER_PROJECTS
      : OTHER_PROJECTS.filter((project) =>
          project.tech.includes(activeFilter)
        );

  return (
    <main className="page mes-projets">
      <h1 className="mes-projets__title">Mes projets</h1>

      <p className="mes-projets__intro">
        Découvrez une sélection de projets réalisés pendant ma formation
        d’intégrateur web, mettant en avant mes compétences techniques et mon
        sens du détail.
      </p>

      <section className="mes-projets__grid">
        <article className="mes-projets__card">
          <h2>Sophie Bluel</h2>
          <img
            src={sophieImage}
            alt="Projet Sophie Bluel"
            className="mes-projets__image"
          />

          <p className="mes-projets__text">
            Site vitrine d’une architecte d’intérieur avec galerie photo
            dynamique, filtres par catégorie et interface d’administration pour
            gérer les projets.
          </p>

          <ul className="mes-projets__details">
            <li>
              <strong>Contexte :</strong> refonte d’un site existant pour le
              rendre administrable, moderne et responsive.
            </li>
            <li>
              <strong>Objectifs :</strong> afficher les travaux de l’architecte,
              permettre le filtrage par catégorie et offrir un espace sécurisé
              pour ajouter / supprimer des projets.
            </li>
            <li>
              <strong>Stack technique :</strong> HTML5, CSS3, JavaScript
              vanilla, appels à une API REST.
            </li>
            <li>
              <strong>Compétences développées :</strong> manipulation du DOM,
              gestion des événements, appels API, création d’un modal d’upload,
              gestion d’un espace administrateur.
            </li>
            <li>
              <strong>Résultats & impact :</strong> interface fluide,
              chargement dynamique des travaux et expérience cohérente entre la
              galerie publique et l’admin.
            </li>
            <li>
              <strong>Perspectives d’amélioration :</strong> ajout de tests
              unitaires, amélioration de l’accessibilité clavier et des messages
              d’erreur.
            </li>
          </ul>

          <div className="mes-projets__tags mes-projets__tags--card">
            <span className="mes-projets__tag tag--htmlcss">HTML5 / CSS3</span>
            <span className="mes-projets__tag tag--js">JavaScript</span>
            <span className="mes-projets__tag tag--api">API REST</span>
            <span className="mes-projets__tag tag--dom">DOM & événements</span>
            <span className="mes-projets__tag tag--modal">
              Modal & back-office </span>
          </div>

          <a
            href="https://github.com/Tsm2713/Projet6_OPC"
            className="btn mes-projets__btn"
            target="_blank"
            rel="noreferrer" >
            Voir le code sur GitHub
          </a>
        </article>
        <article className="mes-projets__card">
          <h2>Kasa</h2>
          <img
            src={kasaImage}
            alt="Projet Kasa"
            className="mes-projets__image"/>

          <p className="mes-projets__text">
            Application de location de logements construite en React, avec
            routing, pages dynamiques et composants réutilisables pour gérer
            l’affichage des annonces.
          </p>

          <ul className="mes-projets__details">
            <li>
              <strong>Contexte :</strong> moderniser un site statique en une
              Single Page Application plus fluide et maintenable.
            </li>
            <li>
              <strong>Objectifs :</strong> afficher les logements à partir de
              données JSON, gérer la navigation par routes et proposer des
              composants modulaires (carte, carrousel, accordéons).
            </li>
            <li>
              <strong>Stack technique :</strong> React, React Router,
              JavaScript ES6, SCSS / CSS modulaire.
            </li>
            <li>
              <strong>Compétences développées :</strong> gestion des props et du
              state, création de composants réutilisables, routing dynamique,
              gestion des erreurs 404.
            </li>
            <li>
              <strong>Résultats & impact :</strong> SPA performante, structure
              de code claire et interface responsive sur mobile, tablette et
              desktop.
            </li>
            <li>
              <strong>Perspectives d’amélioration :</strong> connexion à une
              vraie API, mise en place de tests et optimisation SEO.
            </li>
          </ul>

          <div className="mes-projets__tags mes-projets__tags--card">
            <span className="mes-projets__tag tag--react">React</span>
            <span className="mes-projets__tag tag--reactrouter">
              React Router
            </span>
            <span className="mes-projets__tag tag--components">
              Composants réutilisables
            </span>
            <span className="mes-projets__tag tag--json">JSON & data</span>
            <span className="mes-projets__tag tag--responsive">
              Responsive design
            </span>
          </div>

          <a
            href="https://github.com/Tsm2713/Projet7_Kasa"
            className="btn mes-projets__btn"
            target="_blank"
            rel="noreferrer">
            Voir le code sur GitHub
          </a>
        </article>
      </section>

      <section className="mes-projets__others">
        <h2>Autres projets de la formation</h2>
        <p>
          Exercices pratiques réalisés tout au long du parcours intégrateur
          web. Utilisez les filtres pour afficher les projets selon les
          technologies, puis cliquez sur un bouton pour accéder au dépôt GitHub.
        </p>

        <div
          className="mes-projets__filters"
          aria-label="Filtrer les autres projets"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`mes-projets__filter ${
                activeFilter === filter.id ? "mes-projets__filter--active" : ""
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mes-projets__others-list">
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              className="mes-projets__tag"
              target="_blank"
              rel="noreferrer">
              {project.name}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
