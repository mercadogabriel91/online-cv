import type { SkillsSectionData } from '../types/cv'

interface SkillsSectionProps {
  data: SkillsSectionData
}

function SkillsSection({ data }: SkillsSectionProps) {
  return (
    <section className="cv-section" id="skills">
      <h2>{data.title}</h2>
      {data.groups.map((group) => (
        <div key={group.title}>
          <h3>{group.title}</h3>
          <p>{group.content}</p>
        </div>
      ))}
    </section>
  )
}

export default SkillsSection
