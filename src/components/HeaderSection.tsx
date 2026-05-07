import type { HeaderSectionData } from '../types/cv'

interface HeaderSectionProps {
  data: HeaderSectionData
}

function HeaderSection({ data }: HeaderSectionProps) {
  return (
    <header className="cv-section">
      <h1>{data.name}</h1>
      {data.contacts.map((contact) => (
        <p key={contact.label}>
          <strong>{contact.label}:</strong>{' '}
          {contact.href ? (
            <a href={contact.href} target="_blank" rel="noreferrer">
              {contact.value}
            </a>
          ) : (
            contact.value
          )}
        </p>
      ))}
    </header>
  )
}

export default HeaderSection
