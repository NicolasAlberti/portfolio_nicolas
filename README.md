# 🚀 Portfólio — Nícolas Alberti

Portfólio moderno e minimalista desenvolvido em **Next.js 14** com **TailwindCSS**, pronto para deploy na Vercel.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat-square&logo=tailwindcss)

---

## 📁 Estrutura do Projeto

```
portfolio-nicolas/
├── app/
│   ├── globals.css      # Estilos globais
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página inicial
├── lib/
│   └── data.ts          # ⭐ DADOS DO PORTFÓLIO (edite aqui!)
├── public/
│   ├── images/
│   │   └── profile.jpg  # 📸 Sua foto de perfil
│   └── projects/
│       └── *.png        # 📸 Screenshots dos projetos
└── ...
```

---

## 🎯 Como Personalizar

### 1️⃣ Adicionar sua Foto de Perfil

1. Prepare uma foto quadrada (recomendado: **400x400px**)
2. Nomeie o arquivo como `profile.jpg` (ou `.png`)
3. Coloque em: `/public/images/profile.jpg`
4. Edite `lib/data.ts` se usar outro nome:

```typescript
export const personalInfo = {
  // ...
  profileImage: "/images/profile.jpg", // ou seu nome de arquivo
};
```

### 2️⃣ Adicionar Screenshots dos Projetos

1. Tire screenshots dos seus projetos (recomendado: **1200x800px**, proporção 3:2)
2. Coloque em: `/public/projects/`
3. Edite o projeto correspondente em `lib/data.ts`:

```typescript
{
  id: "meu-projeto",
  title: "Nome do Projeto",
  // ...
  image: "/projects/meu-projeto.png", // ⬅️ Caminho da screenshot
}
```

### 3️⃣ Adicionar Links dos Projetos

Edite `lib/data.ts` e preencha os campos `liveUrl` e `githubUrl`:

```typescript
{
  id: "meu-projeto",
  title: "Nome do Projeto",
  // ...
  liveUrl: "https://meu-projeto.vercel.app",      // Link do projeto em produção
  githubUrl: "https://github.com/user/projeto",   // Link do GitHub
}
```

### 4️⃣ Adicionar Novo Projeto

Copie o template abaixo e adicione ao array `projects` em `lib/data.ts`:

```typescript
{
  id: "id-unico",
  title: "Nome do Projeto",
  description: "Descrição curta em uma linha.",
  longDescription: "Descrição detalhada do projeto...",
  liveUrl: "https://projeto.vercel.app",
  githubUrl: "https://github.com/usuario/projeto",
  image: "/projects/projeto.png",
  tags: ["React", "Node.js", "MongoDB"],
  featured: true,  // true = destaque, false = normal
  year: "2024"
},
```

### 5️⃣ Atualizar Informações Pessoais

Em `lib/data.ts`, edite:

```typescript
export const personalInfo = {
  name: "Seu Nome",
  role: "Seu Cargo",
  email: "seu@email.com",
  links: {
    github: "https://github.com/seu-usuario",
    linkedin: "https://linkedin.com/in/seu-perfil",
  },
  bio: "Sua bio...",
};
```

---

## 🖥️ Rodando Localmente

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Abrir no navegador
# http://localhost:3000
```

---

## 🚀 Deploy na Vercel

### Opção 1: Via GitHub (Recomendado)

1. Crie um repositório no GitHub
2. Faça push do código:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/portfolio.git
   git push -u origin main
   ```
3. Acesse [vercel.com](https://vercel.com)
4. Clique em **"New Project"**
5. Importe seu repositório do GitHub
6. Clique em **"Deploy"**

### Opção 2: Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy em produção
vercel --prod
```

---

## 📸 Guia de Imagens

### Foto de Perfil
- **Localização:** `/public/images/profile.jpg`
- **Tamanho:** 400x400px (quadrada)
- **Formato:** JPG ou PNG

### Screenshots de Projetos
- **Localização:** `/public/projects/`
- **Tamanho:** 1200x800px (proporção 3:2)
- **Formato:** PNG ou JPG
- **Nomenclatura:** Use nomes descritivos (ex: `clinica-dashboard.png`)

---

## 🎨 Customização de Cores

As cores estão definidas em `tailwind.config.ts`:

```typescript
colors: {
  primary: "#0a0a0a",    // Fundo principal (preto)
  secondary: "#141414",  // Fundo secundário
  accent: "#e5e5e5",     // Texto principal (branco suave)
  muted: "#737373",      // Texto secundário (cinza)
  highlight: "#fafafa",  // Destaques
}
```

---

## 🔧 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Estilização
- **Lucide React** - Ícones
- **Google Fonts** - Syne + Space Mono

---

## 📝 Checklist de Lançamento

- [ ] Adicionar foto de perfil em `/public/images/`
- [ ] Adicionar screenshots em `/public/projects/`
- [ ] Preencher links dos projetos (liveUrl, githubUrl)
- [ ] Atualizar email em `personalInfo`
- [ ] Revisar textos da bio e descrições
- [ ] Testar em dispositivos móveis
- [ ] Deploy na Vercel

---

## 📄 Licença

MIT © Nícolas Alberti
