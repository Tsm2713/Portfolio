import React from 'react';
import bannerImage from '../assets/IW.webp';

const Accueil = () => {
  return (
    <div className="accueil">
      <section className="home-layout">
        <div className="home-text">
          <h1>Qui suis-je ?</h1>
          <p>
            Thomas Cheval, développeur en formation d’intégrateur web chez OpenClassrooms. Je vis dans un petit village de Normandie du nom de La haye Malherbe dans l'Eure.
            J'ai baigner dans le domaine de l’informatique dès mon plus jeune âge, j’ai développé depuis plusieurs années un amour pour le monde du web. Je suis un développeur
            passionné par la création d’expériences utilisateurs de qualité et par les nouveautés technologiques. J’aime relever des défis techniques et apprendre de nouvelles
            compétences afin d’enrichir mes connaissances et de proposer le meilleur de ce qu’un site web peut offrir.
          </p>

          <section className="competences">
            <h2>Compétences principales</h2>
            <ul className="competences-list">
              <li className="competence-badge">HTML</li>
              <li className="competence-badge">CSS</li>
              <li className="competence-badge">JavaScript</li>
              <li className="competence-badge">React</li>
              <li className="competence-badge">Sass</li>
              <li className="competence-badge">Git</li>
              <li className="competence-badge">Redux</li>
            </ul>
          </section>
        </div>

        <div className="home-visual">
          <img
            src={bannerImage}
            alt="Ordinateur tenu par une main avec logo JavaScript"
            className="home-image"
          />
        </div>
      </section>
    </div>
  );
};

export default Accueil;
