# AMANDA — Portfólio Pessoal

Portfólio editorial de página única para **Amanda**, Desenvolvedora de Sistemas.  
Construído com React + Vite + Tailwind CSS + Framer Motion.

---

## Instalação e execução local

```bash
# 1. Clone o repositório
git clone https://github.com/SEU_USUARIO/amanda-portfolio.git
cd amanda-portfolio

# 2. Instale as dependências
npm install

# 3. Rode o servidor de desenvolvimento
npm run dev

# 4. Acesse em http://localhost:5173/amanda-portfolio/
```

---

## Build de produção

```bash
npm run build
# Os arquivos gerados ficam na pasta /dist
```

---

## Onde colocar as imagens

Todas as imagens devem ser colocadas na pasta:

```
public/img/
```

### Nomes dos arquivos esperados

> A extensão padrão configurada é `.png`.  
> Para alterar para `.jpg` ou `.webp`, edite **apenas** o arquivo `src/data/assets.js`, linha com `const ext = '.png'`.

| Arquivo esperado      | O que é                     |
|-----------------------|-----------------------------|
| `eu perfil.png`       | Foto de perfil da Amanda    |
| `Senior1.png`         | Imagem do projeto Sênior Conecta |
| `Peregrine2.png`      | Imagem do projeto Peregrine |
| `Seren3.png`          | Imagem do projeto Seren     |
| `Pindorama4.png`      | Imagem do projeto Pindorama |
| `Poupas5.png`         | Imagem do projeto Poupas    |
| `GreenHouse6.png`     | Imagem do projeto GreenHouse |
| `java icon.png`       | Ícone Java                  |
| `JS icon.png`         | Ícone JavaScript            |
| `docker icon.png`     | Ícone Docker                |
| `PostgreSQL icon.png` | Ícone PostgreSQL            |
| `MongoDB icon.png`    | Ícone MongoDB               |
| `React icon.png`      | Ícone React                 |
| `Github icon.png`     | Ícone GitHub                |
| `Git icon.png`        | Ícone Git                   |
| `PYTHON icon.png`     | Ícone Python                |

---

## Como alterar os textos dos projetos

Edite o arquivo `src/data/projects.js`.  
Cada projeto tem a seguinte estrutura:

```js
{
  id: 1,
  number: '01',
  semester: '1º SEMESTRE',
  title: 'SÊNIOR CONECTA',
  image: IMAGES.projects.senior,  // não alterar
  description: 'Sua descrição aqui.',
  objective: 'Objetivo do projeto.',
  problem: 'Problema que resolveu.',
  audience: 'Público-alvo.',
  role: 'Seu papel no projeto.',
  technologies: ['Java', 'PostgreSQL'],
  features: 'Funcionalidades.',
  challenges: 'Desafios encontrados.',
  learnings: 'O que aprendeu.',
  github: 'https://github.com/SEU_USUARIO/projeto',
  demo: 'https://link-do-deploy.com', // ou null se não tiver deploy
}
```

---

## Como alterar os links de contato

Edite o arquivo `src/components/ContactSection/ContactSection.jsx`.  
Localize o array `links` no início do arquivo e atualize os valores de `href` e `sub`.

---

## Como fazer deploy no GitHub Pages

### Configuração inicial (uma vez só)

1. Vá em **Settings → Pages** no seu repositório
2. Em "Source", selecione **GitHub Actions**
3. No arquivo `vite.config.js`, confirme que `base` está com o nome do seu repositório:
   ```js
   base: '/amanda-portfolio/',
   ```
4. Faça push para a branch `main`

O GitHub Actions irá automaticamente buildar e publicar o site.

### URL final

```
https://SEU_USUARIO.github.io/amanda-portfolio/
```

---

## Estrutura de arquivos

```
amanda-portfolio/
├── public/
│   ├── img/           ← coloque TODAS as imagens aqui
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── IntroSection/
│   │   ├── ProjectsSection/
│   │   ├── ProjectCard/
│   │   ├── ProjectModal/
│   │   ├── TechnologiesSection/
│   │   ├── ContactSection/
│   │   └── Footer/
│   ├── data/
│   │   ├── assets.js       ← caminhos centralizados das imagens
│   │   ├── projects.js     ← dados dos 6 projetos
│   │   └── technologies.js ← lista de tecnologias
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/workflows/deploy.yml
├── vite.config.js
├── tailwind.config.js
└── package.json
```
