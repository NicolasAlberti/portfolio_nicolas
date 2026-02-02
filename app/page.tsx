"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, ExternalLink, ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { projects, personalInfo, experiences, skills, education } from "@/lib/data";

// ============================================================================
// NAVIGATION
// ============================================================================
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Sobre", href: "#about" },
    { label: "Projetos", href: "#projects" },
    { label: "Experiência", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/90 backdrop-blur-md border-b border-white/5" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-mono text-sm tracking-wider hover:text-white/70 transition-colors">
            NA_
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted hover:text-accent transition-colors link-effect"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-accent"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-muted hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

// ============================================================================
// HERO SECTION
// ============================================================================
function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-sm text-muted tracking-widest uppercase opacity-0 animate-fade-in stagger-1">
                Software Engineer & Tech Lead
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] opacity-0 animate-slide-up stagger-2" style={{ fontFamily: 'var(--font-display)' }}>
                Nícolas
                <br />
                <span className="text-muted">Alberti</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-muted max-w-xl leading-relaxed opacity-0 animate-fade-in stagger-3">
              Construindo produtos digitais que importam através de código limpo,
              arquitetura sólida e liderança empática.
            </p>

            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in stagger-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary font-medium hover:bg-white transition-colors"
              >
                Ver Projetos
                <ArrowUpRight size={18} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-accent hover:bg-white/5 transition-colors"
              >
                Entrar em Contato
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:col-span-4 opacity-0 animate-fade-in stagger-5">
            <div className="relative aspect-square max-w-[320px] mx-auto">
              {/* ============================================================
                  📸 FOTO DE PERFIL
                  Substitua o placeholder pela sua foto real.
                  Coloque sua foto em: /public/images/profile.jpg
                  Tamanho recomendado: 400x400px
                  ============================================================ */}
              <div className="w-full h-full bg-secondary border border-white/10 overflow-hidden">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-white/10 -z-10" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in stagger-6">
          <ChevronDown size={24} className="text-muted animate-bounce" />
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// ABOUT SECTION
// ============================================================================
function AboutSection() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <p className="font-mono text-sm text-muted tracking-widest uppercase mb-4">
              01 — Sobre
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Quem sou eu
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg text-muted leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-lg text-muted leading-relaxed">
              {personalInfo.bioExtended}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>3+</p>
                <p className="text-sm text-muted mt-1">Anos de experiência</p>
              </div>
              <div>
                <p className="text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>486</p>
                <p className="text-sm text-muted mt-1">Máquinas gerenciadas</p>
              </div>
              <div>
                <p className="text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>200+</p>
                <p className="text-sm text-muted mt-1">Atendimentos/dia</p>
              </div>
              <div>
                <p className="text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>60%</p>
                <p className="text-sm text-muted mt-1">Ganho em escalabilidade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// PROJECTS SECTION
// ============================================================================
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className={`group ${project.featured ? 'lg:col-span-2' : ''}`}>
      <div className="space-y-4">
        {/* Project Image */}
        <div className="relative aspect-video bg-secondary overflow-hidden border border-white/5">
          {/* ============================================================
              📸 SCREENSHOT DO PROJETO
              As imagens são carregadas de /public/projects/
              Se a imagem não existir, mostra um placeholder
              ============================================================ */}
          {!imageError ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted">
              <div className="text-center">
                <p className="font-mono text-xs">Screenshot</p>
                <p className="font-mono text-xs text-muted/50 mt-1">{project.image}</p>
              </div>
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-white/20 hover:bg-white/10 transition-colors"
                aria-label="Ver projeto"
              >
                <ExternalLink size={20} />
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-white/20 hover:bg-white/10 transition-colors"
                aria-label="Ver código"
              >
                <Github size={20} />
              </Link>
            )}
            {!project.liveUrl && !project.githubUrl && (
              <p className="text-sm text-muted">Links em breve</p>
            )}
          </div>
        </div>

        {/* Project Info */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-muted">{project.year}</span>
          </div>
          <p className="text-muted text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-mono text-muted bg-white/5 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <p className="font-mono text-sm text-muted tracking-widest uppercase mb-4">
              02 — Projetos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Trabalhos selecionados
            </h2>
          </div>
          <p className="text-muted max-w-md">
            Sistemas enterprise desenvolvidos para o setor educacional,
            com foco em escalabilidade e experiência do usuário.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <h3 className="text-xl font-semibold mb-8 text-muted">Outros projetos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// ============================================================================
// EXPERIENCE SECTION
// ============================================================================
function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <p className="font-mono text-sm text-muted tracking-widest uppercase mb-4">
              03 — Experiência
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Trajetória profissional
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <article key={index} className="relative pl-8 border-l border-white/10">
                  <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] bg-accent" />
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-muted">{exp.company} — {exp.location}</p>
                    </div>
                    <span className="font-mono text-sm text-muted">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted text-sm flex items-start gap-2">
                        <span className="text-accent mt-1">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {/* Education */}
            <div className="mt-16 pt-16 border-t border-white/10">
              <h3 className="text-xl font-semibold mb-8">Formação</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <p className="font-medium">{edu.degree}</p>
                      <p className="text-sm text-muted">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-sm text-muted">{edu.period}</p>
                      <p className="text-xs text-muted/60">{edu.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SKILLS SECTION
// ============================================================================
function SkillsSection() {
  const skillCategories = [
    { title: "Linguagens", items: skills.languages },
    { title: "Frontend", items: skills.frontend },
    { title: "Backend", items: skills.backend },
    { title: "Databases", items: skills.databases },
    { title: "DevOps", items: skills.devops },
    { title: "Ferramentas", items: skills.tools },
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-muted tracking-widest uppercase mb-4">
            04 — Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Stack técnico
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="p-6 border border-white/5 bg-primary/50">
              <h3 className="font-mono text-sm text-muted uppercase tracking-wider mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-white/5 hover:bg-white/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CONTACT SECTION
// ============================================================================
function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-muted tracking-widest uppercase mb-4">
            05 — Contato
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8" style={{ fontFamily: 'var(--font-display)' }}>
            Vamos construir
            <br />
            <span className="text-muted">algo juntos?</span>
          </h2>
          <p className="text-lg text-muted mb-12">
            Estou sempre aberto a discutir novos projetos, ideias criativas
            ou oportunidades de colaboração.
          </p>

          {/* Contact Links */}
          <div className="space-y-4">


            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-4 border-b border-white/10 hover:border-accent transition-colors"
            >
              <div className="flex items-center gap-4">
                <Linkedin size={20} className="text-muted group-hover:text-accent transition-colors" />
                <span className="text-lg">LinkedIn</span>
              </div>
              <ArrowUpRight size={20} className="text-muted group-hover:text-accent transition-colors" />
            </a>

            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-4 border-b border-white/10 hover:border-accent transition-colors"
            >
              <div className="flex items-center gap-4">
                <Github size={20} className="text-muted group-hover:text-accent transition-colors" />
                <span className="text-lg">GitHub</span>
              </div>
              <ArrowUpRight size={20} className="text-muted group-hover:text-accent transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FOOTER
// ============================================================================
function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted">
          © {new Date().getFullYear()} Nícolas Alberti
        </p>
        <p className="font-mono text-xs text-muted/60">
          Feito com Next.js & TailwindCSS
        </p>
      </div>
    </footer>
  );
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
