import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'

export default function ProjectCard({ project, onClick }) {
  const reduced = useReducedMotion()
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      onClick={() => onClick(project)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={reduced ? {} : { scale: 1.01 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative cursor-pointer overflow-hidden bg-brand-gray flex flex-col"
      style={{ height: 460 }}
    >
      {/* ── Imagem — altura fixa, ocupa topo do card ── */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: 260 }}>
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center top', filter: 'brightness(0.45)', opacity: 0.65 }}
          animate={reduced ? {} : { scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        />

        {/* Overlay escuro suave — sem cinza pesado */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: hovered ? 0.45 : 0.25 }}
          transition={{ duration: 0.4 }}
          style={{ background: 'linear-gradient(160deg, rgba(155,27,27,0.5) 0%, rgba(8,8,8,0.1) 60%)' }}
        />

        {/* Gradiente embaixo da imagem para fundir com o card */}
        <div
          className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #1A1A1A, transparent)' }}
        />

        {/* Número grande — canto superior direito */}
        <div className="absolute top-2 right-3 z-10 leading-none select-none pointer-events-none">
          <motion.span
            className="font-display font-900 text-white"
            style={{
              fontSize: 'clamp(72px, 10vw, 108px)',
              lineHeight: 1,
              WebkitTextStroke: '1px rgba(255,255,255,0.5)',
              color: 'rgba(255,255,255,0.55)',
            }}
            animate={{ color: hovered ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.12)' }}
            transition={{ duration: 0.3 }}
          >
            {project.number}
          </motion.span>
        </div>
      </div>

      {/* ── Conteúdo abaixo da imagem ── */}
      <div className="flex flex-col justify-between flex-1 p-5">
        <div>
          {/* Semestre */}
          <div className="flex items-center gap-2 mb-2">
            <div className="line-red w-5 flex-shrink-0" />
            <span className="font-mono text-[10px] tracking-[0.25em] text-brand-red uppercase">
              {project.semester}
            </span>
          </div>

          {/* Título */}
          <h3
            className="font-display font-800 uppercase text-white leading-[0.92]"
            style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-0.01em' }}
          >
            {project.title}
            <span className="text-brand-red">.</span>
          </h3>

          {/* Descrição — 2 linhas máx */}
          <p className="font-body text-xs text-white/40 mt-2 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((t) => (
              <span
                key={t}
                className="font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 border border-white/10 text-white/35"
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTA hover */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 5 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-2"
          >
            <span className="font-display font-700 text-[11px] tracking-[0.2em] uppercase text-brand-red">
              VER PROJETO
            </span>
            <div className="line-red flex-1 max-w-10" />
          </motion.div>
        </div>
      </div>

      {/* Cruz decorativa canto inferior direito */}
      <div className="absolute bottom-3 right-3 w-4 h-4 opacity-15 pointer-events-none">
        <span className="cross absolute inset-0" />
      </div>
    </motion.article>
  )
}