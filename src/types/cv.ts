export interface ContactItem {
  label: string
  value: string
  href?: string
  linkText?: string
}

export interface NavItem {
  label: string
  targetId: string
}

export interface HeaderSectionData {
  name: string
  photo?: string
  contacts: ContactItem[]
}

export interface SummarySectionData {
  title: string
  text: string
}

export interface SkillGroup {
  title: string
  content: string
}

export interface SkillsSectionData {
  title: string
  groups: SkillGroup[]
}

export interface WorkItem {
  companyAndDates: string
  title: string
  description?: string
  highlightsTitle?: string
  highlights?: string[]
}

export interface WorkHistorySectionData {
  title: string
  jobs: WorkItem[]
}

export interface PortfolioProject {
  name: string
  description: string
  url?: string
}

export interface PortfolioSectionData {
  title: string
  projects: PortfolioProject[]
}

export interface CVData {
  nav: NavItem[]
  header: HeaderSectionData
  summary: SummarySectionData
  skills: SkillsSectionData
  workHistory: WorkHistorySectionData
  portfolio: PortfolioSectionData
}
