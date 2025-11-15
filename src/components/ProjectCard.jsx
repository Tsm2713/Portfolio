export default function ProjectCard({ title, description, imageSrc, link }) {
    return (
        <article className="project-card">
            {imageSrc && <img src={imageSrc} alt={title} />}
            <h3>{title}</h3>
            <p>{description}</p>
            {link && (
                <p>
                    <a className="btn" href={link} target="_blank" rel="noreferrer">
                        Voir le code sur GitHub
                    </a>
                </p>
            )}
        </article>
    );
}
