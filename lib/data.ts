// ============================================================================
// DADOS DOS PROJETOS
// ============================================================================
// 📝 COMO ADICIONAR UM NOVO PROJETO:
// 1. Adicione um novo objeto ao array 'projects' abaixo
// 2. Coloque a screenshot em: /public/projects/nome-do-projeto.png (recomendado: 1200x800px)
// 3. Preencha todos os campos
//
// 📸 SCREENSHOTS:
// - Tamanho recomendado: 1200x800px (proporção 3:2)
// - Formato: PNG ou JPG
// - Coloque em: /public/projects/
// ============================================================================

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  // 🔗 LINKS - Preencha com os links reais dos seus projetos
  liveUrl?: string;      // Link do projeto em produção (ex: "https://meu-projeto.vercel.app")
  githubUrl?: string;    // Link do GitHub (ex: "https://github.com/nicolas-alberti/projeto")
  // 📸 IMAGEM - Caminho para screenshot em /public/projects/
  image: string;         // Ex: "/projects/sistema-clinica.png"
  tags: string[];
  featured: boolean;
  year: string;
}

export const projects: Project[] = [
  // ============================================================================
  // 🏥 SISTEMA CLÍNICA ODONTOLÓGICA
  // ===========================================================================



  // ============================================================================
  // 📺 SISTEMA DE SINALIZAÇÃO DIGITAL
  // ============================================================================
  {
    id: "digital-signage",
    title: "Digital Signage System",
    description: "Sistema de sinalização digital com controle remoto, gestão de mídia e suporte multi-dispositivo.",
    longDescription: "Plataforma para gerenciamento de displays digitais com controle remoto, upload e organização de mídias, agendamento de conteúdo e otimização para Raspberry Pi.",
    // 🔗 ADICIONE OS LINKS REAIS ABAIXO:
    liveUrl: "",
    githubUrl: "",
    // 📸 ADICIONE A SCREENSHOT:
    image: "/projects/signage-placeholder.png",
    tags: ["Next.js", "Node.js", "Raspberry Pi", "WebSocket"],
    featured: true,
    year: "2024"
  },

  // ============================================================================
  // 📋 FORM BUILDER
  // ============================================================================


  // ============================================================================
  // 🧪 SISTEMA DE RESERVA DE LABORATÓRIOS
  // ============================================================================
  {
    id: "reserva-labs",
    title: "Sistema de Reserva de Labs",
    description: "Plataforma de reservas com workflow de aprovação, analytics e geração de relatórios PDF.",
    longDescription: "Sistema completo para gestão de reservas de laboratórios com fluxo de aprovação hierárquico, dashboard analítico de utilização e exportação automática de relatórios.",
    // 🔗 ADICIONE OS LINKS REAIS ABAIXO:
    liveUrl: "",
    githubUrl: "",
    // 📸 ADICIONE A SCREENSHOT:
    image: "/projects/labs-placeholder.png",
    tags: ["Next.js", "FastAPI", "MongoDB", "PDF Generation"],
    featured: false,
    year: "2023"
  },

  // ============================================================================
  // 📊 PORTAL CIPA
  // ============================================================================
  {
    id: "portal-cipa",
    title: "Portal CIPA",
    description: "Portal administrativo com editor de conteúdo avançado e sistema de gestão de cartilhas.",
    longDescription: "Interface administrativa com editor drag-and-drop, gerenciamento de cartilhas com visualizador PDF interativo e sistema de publicação de conteúdo.",
    // 🔗 ADICIONE OS LINKS REAIS ABAIXO:
    liveUrl: "",
    githubUrl: "",
    // 📸 ADICIONE A SCREENSHOT:
    image: "/projects/cipa-placeholder.png",
    tags: ["Next.js", "TypeScript", "PDF.js", "TailwindCSS"],
    featured: false,
    year: "2024"
  },

  // ============================================================================
  // ➕ ADICIONE MAIS PROJETOS AQUI
  // ============================================================================
  // Copie o template abaixo e preencha com os dados do seu projeto:
  //
  // {
  //   id: "id-unico-do-projeto",
  //   title: "Nome do Projeto",
  //   description: "Descrição curta em uma linha.",
  //   longDescription: "Descrição detalhada do projeto...",
  //   liveUrl: "https://seu-projeto.vercel.app",
  //   githubUrl: "https://github.com/seu-usuario/projeto",
  //   image: "/projects/seu-projeto.png",
  //   tags: ["Tech1", "Tech2", "Tech3"],
  //   featured: false,  // true para aparecer em destaque
  //   year: "2024"
  // },
];

// ============================================================================
// DADOS PESSOAIS
// ============================================================================
// 📝 Atualize suas informações abaixo
// ============================================================================

export const personalInfo = {
  name: "Nícolas Alves Alberti",
  role: "IT Lead & Software Engineer",
  location: "Bragança Paulista, SP, Brasil",
  email: "seu-email@exemplo.com",  // 📧 ADICIONE SEU EMAIL

  // 🔗 LINKS SOCIAIS - Preencha com seus links reais
  links: {
    github: "https://github.com/nicolasalberti",
    linkedin: "https://linkedin.com/in/nícolas-alves-alberti-9310b3295",
    // Adicione mais se necessário:
    // twitter: "https://twitter.com/seu-usuario",
    // portfolio: "https://seu-site.com",
  },

  // 📝 BIO - Pode personalizar o texto
  bio: `Líder Técnico e Engenheiro de Software com mais de 3 anos de experiência em desenvolvimento full-stack e gestão de equipes de TI. Meu objetivo é unir a engenharia de software à liderança empática para construir produtos digitais que realmente importam.`,

  bioExtended: `Com uma base sólida que teve como ponto de partida a minha formação no Instituto Federal de Minas Gerais, desenvolvi uma paixão por resolver desafios do dia a dia através da tecnologia. Hoje, lidero uma equipe de TI em uma universidade, onde defino a visão técnica e a arquitetura de sistemas enquanto mentoro e capacito a equipe para alcançar resultados excepcionais.`,

  // 📸 FOTO DE PERFIL
  // Coloque sua foto em: /public/images/profile.jpg
  // Tamanho recomendado: 400x400px (quadrada)
  profileImage: "/images/profile-placeholder.jpg",
};

// ============================================================================
// EXPERIÊNCIAS PROFISSIONAIS
// ============================================================================

export const experiences = [
  {
    title: "IT Lead",
    company: "Universidade São Francisco",
    location: "Bragança Paulista, SP",
    period: "2024 — Presente",
    description: [
      "Liderança de equipe técnica com foco em desenvolvimento de soluções enterprise",
      "Gestão de infraestrutura de 486 computadores e sistemas críticos",
      "Desenvolvimento de sistemas apresentados a diretoria executiva",

    ],
  },
  {
    title: "Software Engineer",
    company: "Universidade São Francisco",
    location: "Bragança Paulista, SP",
    period: "2023 — 2024",
    description: [
      "Desenvolvimento full-stack de sistemas para gestão educacional",
      "Criação de dashboards analíticos e relatórios automatizados",
      "Implementação de integrações com Google Workspace",
    ],
  },
  {
    title: "IT Support Technician",
    company: "Universidade São Francisco",
    location: "Bragança Paulista, SP",
    period: "2022 — 2023",
    description: [
      "Suporte técnico e manutenção de infraestrutura",
      "Automação de processos com scripts Python",
    ],
  },
];

// ============================================================================
// HABILIDADES TÉCNICAS
// ============================================================================

export const skills = {
  languages: ["Python", "TypeScript", "JavaScript", "SQL"],
  frontend: ["Next.js", "React", "React Native", "TailwindCSS"],
  backend: ["FastAPI", "Node.js", "REST APIs"],
  databases: ["MongoDB", "PostgreSQL", "Redis"],
  devops: ["Docker", "Linux", "Nginx", "CI/CD", "Git"],
  tools: ["VS Code", "Figma", "Google Workspace", "Jira"],
};

// ============================================================================
// FORMAÇÃO ACADÊMICA
// ============================================================================

export const education = [
  {
    degree: "Bacharelado em Engenharia de Software",
    institution: "Universidade São Francisco",
    period: "2023 — 2027",
    status: "Em andamento",
  },
  {
    degree: "Técnico em Tecnologia da Informação",
    institution: "IFMG - Instituto Federal de Minas Gerais",
    period: "2012 — 2014",
    status: "Concluído",
  },
];
