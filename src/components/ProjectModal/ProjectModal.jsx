import { motion, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  )
}
function IconYouTube() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
      <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
    </svg>
  )
}
function IconSite() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="17" height="17">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  )
}
function IconArrow() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  )
}

function LinkButton({ href, icon: Icon, label, variant = 'outline' }) {
  const base = 'flex items-center gap-2 px-5 py-3 font-display font-700 text-sm tracking-widest uppercase transition-all duration-200'
  const styles = {
    outline: `${base} border border-white/15 text-white hover:border-brand-red hover:text-brand-red`,
    solid:   `${base} bg-brand-red text-white hover:bg-brand-red-light`,
    ghost:   `${base} border border-white/6 text-white/20 cursor-not-allowed`,
  }

  if (!href || href === '#') {
    return (
      <span className={styles.ghost}>
        <Icon /> {label}
      </span>
    )
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles[variant]}>
      <Icon /> {label} <IconArrow />
    </a>
  )
}

export default function ProjectModal({ project, onClose }) {
  const reduced = useReducedMotion()

  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose])

  const hasAnyLink = project.github || project.youtube || project.site

  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(8,8,8,0.93)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <motion.div
        initial={reduced ? {} : { opacity: 0, y: 32, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full max-w-2xl bg-[#111111] overflow-hidden"
        style={{ maxHeight: '90vh' }}
      >
        {/* Botão fechar */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center border border-white/12 text-white/40 hover:border-brand-red hover:text-brand-red transition-all duration-200"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <line x1="1" y1="1" x2="11" y2="11" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="11" y1="1" x2="1" y2="11" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </button>

        {/* ── Imagem capa — altura fixa ── */}
        <div className="relative w-full overflow-hidden" style={{ height: 280 }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center top' }}
          />
          {/* gradiente suave sobre a imagem */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to top, #111111 0%, rgba(17,17,17,0.4) 50%, transparent 100%)' }}
          />
          {/* número watermark */}
          <span
            className="absolute top-2 right-4 font-display font-900 select-none pointer-events-none"
            style={{
              fontSize: 'clamp(80px, 14vw, 130px)',
              lineHeight: 1,
              color: 'rgba(255,255,255,0.07)',
            }}
          >
            {project.number}
          </span>
          {/* semestre + título sobre a imagem */}
          <div className="absolute bottom-5 left-6">
            <p className="font-mono text-[10px] tracking-[0.28em] text-brand-red uppercase mb-1">
              {project.semester}
            </p>
            <h2
              className="font-display font-900 uppercase text-white leading-none"
              style={{ fontSize: 'clamp(28px, 5vw, 48px)', letterSpacing: '-0.01em' }}
            >
              {project.title}<span className="text-brand-red">.</span>
            </h2>
          </div>
        </div>

        {/* ── Conteúdo scrollável ── */}
        <div
          className="overflow-y-auto px-6 md:px-8 pb-8 pt-5"
          style={{ maxHeight: 'calc(90vh - 280px)', scrollbarWidth: 'thin', scrollbarColor: '#9B1B1B #111' }}
        >
          {/* Descrição */}
          <p className="font-body text-sm text-white/60 leading-relaxed">
            {project.description}
          </p>

          {/* Linha divisória */}
          <div className="line-thin my-5" />

          {/* Tecnologias */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.28em] text-brand-red uppercase mb-3">
              TECNOLOGIAS
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] tracking-widest uppercase px-3 py-1 border border-white/10 text-white/50"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Botões — só aparecem se tiver link */}
          {hasAnyLink && (
            <>
              <div className="line-thin my-5" />
              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <LinkButton
                    href={project.github}
                    icon={IconGitHub}
                    label="GitHub"
                    variant="outline"
                  />
                )}
                {project.youtube && (
                  <LinkButton
                    href={project.youtube}
                    icon={IconYouTube}
                    label="YouTube"
                    variant="solid"
                  />
                )}
                {project.site && (
                  <LinkButton
                    href={project.site}
                    icon={IconSite}
                    label="Ver Site"
                    variant="outline"
                  />
                )}
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
