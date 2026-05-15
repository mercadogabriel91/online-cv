import type { SummarySectionData } from '../types/cv'

interface SummarySectionProps {
  data: SummarySectionData
}

function SummarySection({ data }: SummarySectionProps) {
  return (
    <section className="cv-section" id="summary">
      <h2>{data.title}</h2>
      <p>{data.text}</p>
    </section>
  )
}

export default SummarySection
