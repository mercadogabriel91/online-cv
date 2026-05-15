import './App.css'
import HeaderSection from './components/HeaderSection'
import NavBar from './components/NavBar'
import PortfolioSection from './components/PortfolioSection'
import SkillsSection from './components/SkillsSection'
import SummarySection from './components/SummarySection'
import WorkHistorySection from './components/WorkHistorySection'
import rawCvData from './data/cv.json'
import type { CVData } from './types/cv'

function App() {
  const cvData = rawCvData as CVData

  return (
    <main className="cv-page cv-layout">
      <aside className="cv-sidebar">
        <HeaderSection data={cvData.header} />
      </aside>

      <section className="cv-content">
        <NavBar items={cvData.nav} />
        <SummarySection data={cvData.summary} />
        <SkillsSection data={cvData.skills} />
        <WorkHistorySection data={cvData.workHistory} />
        <PortfolioSection data={cvData.portfolio} />
      </section>
    </main>
  )
}

export default App
