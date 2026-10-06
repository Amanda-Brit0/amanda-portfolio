import { motion, useReducedMotion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { projects } from '../../data/projects'
import ProjectCard from '../ProjectCard/ProjectCard'

function SectionHeader() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduced = useReducedMotion()

  return (
    <div ref={ref} className="px-6 md:px-12 pt-0 pb-10">
      <div className="flex items-end justify-between">
        <div>
          <motion.p
            initial={reduced ? {} : { opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono text-[10px] tracking-[0.3em] text-brand-red uppercase mb-2"
          >
            — GRADUAÇÃO
          </motion.p>

          <motion.h2
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-900 uppercase text-white leading-none"
            style={{ fontSize: 'clamp(48px, 8vw, 110px)', letterSpacing: '-0.02em' }}
          >
            PROJETOS
            <span className="text-brand-red">.</span>
          </motion.h2>
        </div>

        <motion.div
          initial={reduced ? {} : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:block text-right"
        >
          <p className="font-mono text-[10px] text-white/30 tracking-widest">06 PROJETOS</p>
          <p className="font-mono text-[10px] text-white/20 tracking-widest">06 SEMESTRES</p>
        </motion.div>
      </div>

      <div className="line-thin mt-6" />
    </div>
  )
}

function AnimatedCard({ delay, children }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduced = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={reduced ? {} : { opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="h-full"
    >
      {children}
    </motion.div>
  )
}

export default function ProjectsSection({ onProjectClick }) {
  return (
    <section id="projetos" className="bg-brand-black">
      <SectionHeader />

      {/* Grid 3x2 — igual para todos os 6 projetos */}
      <div className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-gray-mid">
        {projects.map((proj, i) => (
          <AnimatedCard key={proj.id} delay={i * 0.08}>
            <div className="bg-brand-black h-full">
              <ProjectCard project={proj} onClick={onProjectClick} layout="portrait" />
            </div>
          </AnimatedCard>
        ))}
      </div>

      <div className="line-thin mx-6 md:mx-12 mt-px" />
    </section>
  )
}