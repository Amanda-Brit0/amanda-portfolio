import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import IntroSection from './components/IntroSection/IntroSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import ProjectModal from './components/ProjectModal/ProjectModal'
import TechnologiesSection from './components/TechnologiesSection/TechnologiesSection'
import ContactSection from './components/ContactSection/ContactSection'

export default function App() {
  const [activeProject, setActiveProject] = useState(null)
  const [scrollY, setScrollY] = useState(0)

  const openProject = useCallback((project) => {
    setScrollY(window.scrollY)
    setActiveProject(project)
    document.body.classList.add('modal-open')
  }, [])

  const closeProject = useCallback(() => {
    setActiveProject(null)
    document.body.classList.remove('modal-open')
    requestAnimationFrame(() => {
      window.scrollTo({ top: scrollY, behavior: 'instant' })
    })
  }, [scrollY])

  return (
    <div className="bg-brand-black min-h-screen overflow-x-hidden">
      <IntroSection />
      <ProjectsSection onProjectClick={openProject} />
      <TechnologiesSection />
      <ContactSection />

      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={closeProject} />
        )}
      </AnimatePresence>
    </div>
  )
}
