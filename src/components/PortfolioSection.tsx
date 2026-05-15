import type { PortfolioSectionData } from '../types/cv'

interface PortfolioSectionProps {
  data: PortfolioSectionData
}

function PortfolioSection({ data }: PortfolioSectionProps) {
  return (
    <section className="cv-section" id="portfolio">
      <h2>{data.title}</h2>
      {data.projects.map((project) => (
        <article className="job" key={project.name}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          {project.url ? (
            <p>
              <a href={project.url} target="_blank" rel="noreferrer">
                View project
              </a>
            </p>
          ) : null}
        </article>
      ))}
    </section>
  )
}

export default PortfolioSection
