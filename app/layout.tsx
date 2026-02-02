import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nícolas Alberti — Software Engineer",
  description: "IT Lead & Software Engineer especializado em Python, Golang, Next.js e arquitetura de sistemas escaláveis.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", "Python", "Golang"],
  authors: [{ name: "Nícolas Alves Alberti" }],
  openGraph: {
    title: "Nícolas Alberti — Software Engineer",
    description: "IT Lead & Software Engineer especializado em Python, Golang, Next.js e arquitetura de sistemas escaláveis.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="grain">{children}</body>
    </html>
  );
}
