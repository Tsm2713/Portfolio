import React from "react";

export default function MonParcours() {
  return (
    <main className="page mon-parcours">
      <h1 className="mon-parcours__title">Mon parcours</h1>

      <p className="mon-parcours__intro">
        Entre études techniques, diverses expériences professionnelles et une reconversion vers le
        développement web, voici les étapes qui ont construit mon profil de
        développeur front-end
      </p>

      <div className="mon-parcours__grid">
        <section className="parcours-section">
          <h2 className="h2-color1">Formations</h2>

          <div className="parcours-item">
            <h3>
              Baccalauréat STI2D – Sciences et Technologies de l’Industrie et du
              Développement Durable
            </h3>
            <div className="parcours-meta">
              sept. 2018 - juin 2019 | Lycée Les Fontenelles, Louviers
            </div>
            <p>Diplôme obtenu.</p>
          </div>

          <div className="parcours-item">
            <h3>BTS Systèmes Numériques, option A : Informatique et Réseaux</h3>
            <div className="parcours-meta">
              sept. 2019 - avr. 2020 | Lycée La Châtaigneraie, Le Mesnil-Esnard
            </div>
          </div>

          <div className="parcours-item">
            <h3>
              Licence Électronique, Énergie Électrique et Automatique (EEEA)
            </h3>
            <div className="parcours-meta">
              sept. 2022 - juin 2024 | UFR Sciences et Techniques,
              Saint-Étienne-du-Rouvray
            </div>
          </div>

          <div className="parcours-item">
            <h3>Formation Intégrateur Web</h3>
            <div className="parcours-meta">
              2025 - en cours | OpenClassrooms (formation à distance)
            </div>
            <p>
              Formation professionnalisante en intégration web et développement
              front-end (JavaScript, React), avec un accent sur l’accessibilité,
              le SEO, les performances et la méthodologie de projet.
            </p>
          </div>
        </section>

        <section className="parcours-section">
          <h2 className="h2-color2">Expériences professionnelles</h2>

          <div className="parcours-item">
            <h3>Expéditeur de nuit</h3>
            <div className="parcours-meta">
              juil. 2020 - août 2020 | ITM, Louviers
            </div>
          </div>

          <div className="parcours-item">
            <h3>Opérateur tri et machine, R&amp;D</h3>
            <div className="parcours-meta">
              sept. 2020 - août 2022 | Aptar, Le Vaudreuil
            </div>
          </div>

          <div className="parcours-item">
            <h3>Maître d’hôtel</h3>
            <div className="parcours-meta">
              juin 2023 - présent | Missions traiteur, Paris et Normandie
            </div>
            <p>
              Organisation et service lors d’événements variés (Roland-Garros
              2024 et 2025, Jeux Olympiques 2024, mariages, cocktails…), pour
              des traiteurs tels que Lenôtre, Potel &amp; Chabot, Fleur de Mai
              ou Riem Becker.
            </p>
          </div>

          <div className="parcours-item">
            <h3>Responsable maître d’hôtel</h3>
            <div className="parcours-meta">
              juin 2025 - présent | L’Atelier de Bruno &amp; Grenaille Traiteur,
              Normandie
            </div>
            <p>
              Gestion complète de l’organisation de cérémonies de mariage, du
              cocktail jusqu’à la fermeture de la salle : coordination des
              équipes, respect du planning, suivi du service et contact direct
              avec les mariés et le traiteur.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
