import type { HeaderSectionData } from '../types/cv'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

interface HeaderSectionProps {
  data: HeaderSectionData
}

function HeaderSection({ data }: HeaderSectionProps) {
  const getContactIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'location':
        return <FaMapMarkerAlt aria-hidden="true" />
      case 'phone':
        return <FaPhoneAlt aria-hidden="true" />
      case 'email':
        return <FaEnvelope aria-hidden="true" />
      case 'linkedin':
        return <FaLinkedin aria-hidden="true" />
      case 'github':
        return <FaGithub aria-hidden="true" />
      default:
        return null
    }
  }

  return (
    <header className="profile-card">
      {data.photo ? (
        <img className="profile-photo" src={data.photo} alt={`${data.name} profile`} />
      ) : null}

      <h1>{data.name}</h1>

      <ul className="profile-contact-list">
        {data.contacts.map((contact) => (
          <li key={contact.label}>
            <span className="contact-label">
              <span className="contact-icon">{getContactIcon(contact.label)}</span>
              {contact.label}
            </span>
            <span className="contact-value">
              {contact.href ? (
                <a className="contact-link" href={contact.href} target="_blank" rel="noreferrer">
                  {contact.linkText ?? contact.value}
                </a>
              ) : (
                <span>{contact.value}</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default HeaderSection
