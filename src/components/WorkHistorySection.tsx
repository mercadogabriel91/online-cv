import type { WorkHistorySectionData } from '../types/cv'

interface WorkHistorySectionProps {
  data: WorkHistorySectionData
}

function WorkHistorySection({ data }: WorkHistorySectionProps) {
  return (
    <section className="cv-section">
      <h2>{data.title}</h2>
      {data.jobs.map((job) => (
        <article className="job" key={`${job.companyAndDates}-${job.title}`}>
          <h3>{job.companyAndDates}</h3>
          <p className="job-title">{job.title}</p>

          {job.description ? <p>{job.description}</p> : null}

          {job.highlightsTitle ? <h4>{job.highlightsTitle}</h4> : null}

          {job.highlights?.length ? (
            <ul>
              {job.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </section>
  )
}

export default WorkHistorySection
