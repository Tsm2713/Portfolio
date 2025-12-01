import React from "react";

export default function MonFutur() {
  return (
    <main className="page mon-futur">
      <h1 className="mon-futur__title">Mon futur</h1>

      <p className="mon-futur__intro">
        Mon objectif est de faire le lien entre le développement front-end et
        l’intelligence artificielle. Voici les prochaines étapes que je souhaite
        suivre pour me spécialiser dans l’IA tout en restant proche du produit
        et des utilisateurs.
      </p>

      <div className="mon-futur__grid">
        <section className="future-card">
          <h2 className="h2-color1">Prochaine étape : devenir développeur IA</h2>

          <p>
            Après ma formation d’intégrateur web, je souhaite suivre la{" "}
            <a
              href="https://openclassrooms.com/fr/paths/2464-developpeur-ia"
              target="_blank"
              rel="noreferrer">
              formation Développeur IA d’OpenClassrooms
            </a>
            . Elle me permettra d’aller plus loin que le simple usage d’outils
            d’IA et de comprendre comment les intégrer de manière pertinente
            dans des applications web.
          </p>

          <ul>
            <li>
              Consolider mes bases en IA et en data pour compléter mon profil de
              développeur front-end.
            </li>
            <li>
              Apprendre à concevoir des interfaces utiles autour de
              fonctionnalités d’IA (UX, contraintes, limites des modèles).
            </li>
            <li>
              Acquérir une vraie méthodologie de projet, de la compréhension du
              besoin métier jusqu’au déploiement d’un modèle.
            </li>
          </ul>
        </section>

        <section className="future-card future-card--alt">
          <h2>Et après : une alternance comme ingénieur IA</h2>

          <p>
            À l’issue de cette première spécialisation, je vise la{" "}
            <a
              href="https://openclassrooms.com/fr/paths/2053-ai-engineer"
              target="_blank"
              rel="noreferrer">
              formation Ingénieur IA (AI Engineer)
            </a>{" "}
            en alternance. Le but est de mettre rapidement en pratique ce que
            j’aurai appris sur des projets concrets.
          </p>

          <p>Idéalement, je souhaite :</p>
          <ul>
            <li>
              Rejoindre une petite entreprise ou une startup en région
              parisienne, au plus près du produit et des utilisateurs.
            </li>
            <li>
              Prendre rapidement des responsabilités sur la conception,
              l’implémentation et la mise en production de briques IA.
            </li>
            <li>
              Évoluer dans un environnement flexible, qui laisse de la place à
              l’expérimentation, à l’autonomie et à l’apprentissage continu.
            </li>
          </ul>

          <p>
            L’objectif est d’entrer tôt sur le marché de l’IA en combinant
            apprentissage théorique, projets encadrés et expérience de terrain.
          </p>
        </section>
      </div>
    </main>
  );
}
