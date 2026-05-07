import './App.css'
import HeaderSection from './components/HeaderSection'
import SkillsSection from './components/SkillsSection'
import SummarySection from './components/SummarySection'
import WorkHistorySection from './components/WorkHistorySection'
import rawCvData from './data/cv.json'
import type { CVData } from './types/cv'

function App() {
  const cvData = rawCvData as CVData

  return (
    <main className="cv-page">
      <HeaderSection data={cvData.header} />
      <SummarySection data={cvData.summary} />
      <SkillsSection data={cvData.skills} />
      <WorkHistorySection data={cvData.workHistory} />
    </main>
  )
}

export default App
