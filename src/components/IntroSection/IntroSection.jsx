import { motion, useReducedMotion } from 'framer-motion'
import { IMAGES } from '../../data/assets'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] },
})

export default function IntroSection() {
  const reduced = useReducedMotion()
  const a = (delay) => reduced ? {} : fadeUp(delay)

  return (
    <section className="relative bg-brand-black overflow-hidden">

      {/* ── Top bar ── */}
      <div className="relative z-30 flex items-start justify-between px-6 md:px-12 pt-6">
        <div>
          <p className="font-display font-700 text-xs tracking-[0.25em] text-brand-red uppercase leading-none">
            DESENVOLVEDORA DE SISTEMAS
          </p>
          <p className="font-mono text-[10px] text-white/30 tracking-widest uppercase mt-0.5">
            DIGITAL CREATOR
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
            DISPONÍVEL PARA PROJETOS
          </span>
          <div className="relative w-4 h-4 flex-shrink-0">
            <span className="cross absolute inset-0" />
          </div>
        </div>
      </div>

      {/* ── NOME GIGANTE — watermark atrás de tudo ── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display font-900 uppercase text-brand-red leading-none whitespace-nowrap"
          style={{
            fontSize: 'clamp(240px, 42vw, 680px)',
            letterSpacing: '-0.07em',
            opacity: 0.32,
            transform: 'translateY(-25%)',
          }}
        >
          AMANDA
        </span>
      </div>

      {/* ── Layout principal ── */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2">

        {/* Coluna esquerda — texto */}
        <div className="flex flex-col justify-center px-6 md:px-12 pb-12 pt-10">

          <motion.p
            {...(reduced ? {} : {
              initial: { opacity: 0, x: -16 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.7, delay: 0.2 }
            })}
            className="font-display italic text-brand-red text-2xl md:text-3xl font-300 mb-1"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Nome menor — identificação, o gigante é o watermark */}
          <motion.h1
            {...a(0.35)}
            className="font-display font-900 uppercase text-white leading-[0.88]"
            style={{ fontSize: 'clamp(44px, 7vw, 86px)', letterSpacing: '-0.02em' }}
          >
            AMANDA
          </motion.h1>

          <motion.h2
            {...a(0.48)}
            className="font-display font-700 uppercase text-white/70 leading-tight mt-1"
            style={{ fontSize: 'clamp(16px, 2.4vw, 30px)', letterSpacing: '0.06em' }}
          >
            DESENVOLVEDORA DE SISTEMAS
          </motion.h2>

          <motion.div {...a(0.58)} className="line-thin w-32 my-5" />

          <motion.p {...a(0.66)} className="text-white/40 text-sm leading-relaxed max-w-xs">
            Desenvolvedora de Software Multiplataforma.  
            Experiência acadêmica no desenvolvimento de aplicações e soluções utilizando diferentes tecnologias.  
            Em constante aprendizado, buscando novos desafios e oportunidades para evoluir na área da tecnologia.
          </motion.p>

          {/* Skills */}
          <motion.div {...a(0.78)} className="flex flex-wrap gap-x-6 gap-y-2 mt-6">
            {['COMUNICAÇÃO', 'ESCRITA', 'PROATIVIDADE', 'PENSAMENTO ANÁLITICO'].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className="relative w-3 h-3 flex-shrink-0">
                  <span className="cross absolute inset-0 scale-75" />
                </div>
                <span className="font-display font-600 text-[11px] tracking-widest text-white/55 uppercase">
                  {s}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Location */}
          <motion.div {...a(0.88)} className="flex items-center gap-2 mt-8">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase">
              BASED IN BRASIL
            </span>
          </motion.div>
        </div>

        {/* Coluna direita — foto */}
        <div className="relative flex items-end justify-center md:justify-end overflow-hidden">
          <motion.div
            initial={reduced ? {} : { opacity: 0, scale: 1.03 }}
            animate={reduced ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full h-[60vw] md:h-[650px]"
          >
            <img
              src={IMAGES.profile}
              alt="Amanda"
              className="w-full h-full object-cover object-top"
              style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.82)' }}
            />

            {/* gradiente vermelho embaixo */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(155,27,27,0.28) 0%, transparent 55%)' }}
            />

            {/* fade para preto à esquerda */}
            <div
              className="absolute inset-y-0 left-0 w-2/5 pointer-events-none hidden md:block"
              style={{ background: 'linear-gradient(to right, #080808, transparent)' }}
            />

            {/* fade para preto em cima */}
            <div
              className="absolute inset-x-0 top-0 h-32 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, #080808, transparent)' }}
            />
          </motion.div>

          {/* Bullet points flutuantes no canto direito */}
          <motion.div
            {...a(0.65)}
            className="absolute right-5 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4 z-20"
          >
            {[
              'Transformando ideias em experiências digitais.',
              'Design centrado no usuário',
              'Interfaces de alta qualidade',
              'Responsivo & Acessível',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 max-w-[160px]">
                <div className="relative w-3 h-3 flex-shrink-0 mt-0.5">
                  <span className="cross absolute inset-0 scale-75" />
                </div>
                <span className="font-body text-[12px] text-white/50 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* fade bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-20"
        style={{ background: 'linear-gradient(to bottom, transparent, #080808)' }}
      />
    </section>
  )
}