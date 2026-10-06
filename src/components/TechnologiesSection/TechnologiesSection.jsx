import { motion, useReducedMotion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { technologies } from '../../data/technologies'

function TechItem({ tech, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduced = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={reduced ? {} : { opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={reduced ? {} : { y: -4 }}
      className="group flex flex-col items-center gap-3 cursor-default"
    >
      {/* Icon container — fixed size for uniformity */}
      <div className="w-14 h-14 flex items-center justify-center p-2 border border-white/8 group-hover:border-brand-red/40 transition-colors duration-300">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-full h-full object-contain"
          style={{ filter: 'brightness(0.9)' }}
        />
      </div>

      {/* Name */}
      <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/40 group-hover:text-white/70 transition-colors duration-300">
        {tech.name}
      </span>
    </motion.div>
  )
}

export default function TechnologiesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduced = useReducedMotion()

  return (
    <section id="tecnologias" className="bg-brand-black px-6 md:px-12 py-10">
      {/* Header */}
      <div ref={ref} className="mb-12">
        <motion.p
          initial={reduced ? {} : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-[10px] tracking-[0.3em] text-brand-red uppercase mb-2"
        >
          — STACK
        </motion.p>

        <motion.h2
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-900 uppercase text-white leading-none"
          style={{ fontSize: 'clamp(40px, 7vw, 96px)', letterSpacing: '-0.02em' }}
        >
          TECNOLOGIAS<span className="text-brand-red">.</span>
        </motion.h2>

        <div className="line-thin mt-6 max-w-xs" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-6 md:gap-8">
        {technologies.map((tech, i) => (
          <TechItem key={tech.id} tech={tech} index={i} />
        ))}
      </div>

      {/* Decorative element */}
      <div className="flex items-center gap-4 mt-16">
        <div className="line-red w-8" />
        <span className="font-mono text-[10px] tracking-[0.2em] text-white/20 uppercase">
          E MUITO MAIS A APRENDER.
        </span>
      </div>
    </section>
  )
}