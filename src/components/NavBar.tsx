import type { NavItem } from '../types/cv'

interface NavBarProps {
  items: NavItem[]
}

function NavBar({ items }: NavBarProps) {
  return (
    <nav className="cv-navbar" aria-label="Section navigation">
      <ul>
        {items.map((item) => (
          <li key={item.targetId}>
            <a href={`#${item.targetId}`}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
