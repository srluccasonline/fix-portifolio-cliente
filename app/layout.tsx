import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { NavBar } from "../components/NavBar";
import { GeistMono } from "geist/font/mono";
import Toaster from "@/components/Toaster";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Fernando Yañez",
  description:
    "Explore meu portfólio, sou Fernando Yañez, um desenvolvedor front-end apaixonado por criar experiências web incríveis. Com habilidades sólidas em React.JS, Typescript, HTML, CSS e Style Components, com conceitos criativos em interfaces visuais impressionantes. Navegue pelos projetos para descobrir soluções inovadoras, responsivas e otimizadas para a web. comprometido em proporcionar experiências de usuário cativantes, mantendo-se atualizado com as últimas tendências de desenvolvimento front-end.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={` ${GeistMono.className}`}>
        <link rel="shortcut icon" href="/images/Terno.jpeg" />
        <ThemeProvider
          attribute="class"
          defaultTheme="Dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <div className="flex justify-center flex-col mx-auto max-w-7xl gap-2 h-auto">
            <NavBar />
            {children}
          </div>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
