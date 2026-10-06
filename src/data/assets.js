// ============================================================
// ASSETS — Centralized image paths
// All images must be placed in public/img/
// Change extension here (.png | .jpg | .webp) if needed
// ============================================================

const BASE = import.meta.env.BASE_URL

// Extensão das imagens de projetos e perfil (.png | .jpg | .webp)
const extImg = '.png'

// Extensão dos ícones de tecnologia (.ico | .png | .svg)
const extIcon = '.ico'

export const IMAGES = {
  profile: `${BASE}img/eu perfil${extImg}`,

  projects: {
    senior:    `${BASE}img/logoSenior${extImg}`,
    peregrine: `${BASE}img/logoPeregrine${extImg}`,
    seren:     `${BASE}img/logoSeren${extImg}`,
    pindorama: `${BASE}img/logoPindorama${extImg}`,
    poupas:    `${BASE}img/logoPoupas${extImg}`,
    greenhouse:`${BASE}img/logoGreenHouse${extImg}`,
  },

  icons: {
    java:       `${BASE}img/java icon${extIcon}`,
    javascript: `${BASE}img/JS icon${extIcon}`,
    docker:     `${BASE}img/docker icon${extIcon}`,
    postgresql: `${BASE}img/PostgreSQL icon${extIcon}`,
    mongodb:    `${BASE}img/MongoDB icon${extIcon}`,
    react:      `${BASE}img/React icon${extIcon}`,
    github:     `${BASE}img/Github icon${extIcon}`,
    git:        `${BASE}img/Git icon${extIcon}`,
    python:     `${BASE}img/PYTHON icon${extIcon}`,
  },
}
