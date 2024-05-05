import { randomUUID } from "crypto";
import { ReactNode } from "react";
import { IoLogoJavascript } from "react-icons/io5";
type ProjectData = {
  id: string;
  images: string[];
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  github2?: string;
  github3?: string;
  linkedin?: string;
};

export const projectData: ProjectData[] = [
  {
    id: randomUUID(),
    images: [
      "/images/Bolao1.jpeg",
      "/images/Bolao2.jpeg",
      "/images/Bolao3.jpeg",
    ],
    title: "Bolão - Projeto pessoal",
    description:
      "Foi desenvolvido 6 telas Front End neste projeto de bingo, onde o usuário podia apostar nos placares dos jogos disponobilizados. Este projeto foi realizado para testar e desafiar minha habilidades no Front End",
    technologies: [
      "React.jsx",
      "Javascript",
      "CSS",
      "HTML",
    ],
    github: "https://gitlab.com/bolao/bolao-frontend",
    link: "",
  },

  {
    id: randomUUID(),
    images: [
      "/images/Hcor1.png",
      "/images/Hcor2.png",
      "/images/Hcor3.png",
    ],
    title: "Hcor - Trabalho Websis",
    description:
      "Meu primeiro projeto desenvolvido profissionalmente. Este projeto foi realizado enquanto eu trabalhava na empresa Websis, nele consegui contribuir com diversas telas telas em 3 Portais diferentes, do Paciente, Médico e de Serviço.",
    technologies: [
      "React.jsx",
      "Javascript",
      "CSS",
      "HTML",
      "Jenkins"
    ],
    link: "https://portalpaciente.hcor.com.br/public/login?utm_source=portal&utm_medium=banner_home&utm_campaign=banner+home",
  },

  {
    id: randomUUID(),
    images: [
      "/images/Advinha1.png",
      "/images/Advinha2.png",
    ],
    title: "Advinha - Curso Udemy",
    description:
      "Este projeto foi realizado como parte do curso do Hora de Codar - React do Zero a Maestria, com o objetivo específico de aprimorar as habilidades em React JS e na lógica de desenvolvimento do jogo de advinhar a palavra.",
    technologies: [
      "React.jsx",
      "Javascript",
      "CSS",
      "HTML",
    ],
    github: "",
    link: "",
  },

  {
    id: randomUUID(),
    images: [
      "/images/Participa.png",
      "/images/Participa2.jpeg",
      "/images/Cerimonial.jpeg",
    ],
    title: "Projetos - Trabalho Websis",
    description:
      "Entre alguns projetos que participei enquanto estive na Websis, tem o portal Participa, da ANTT e Cerimonial do TST. No Participa usava Javascript, CSS e TypeScript, já no Cerimonial usavamos React. Em ambos projetos usei meus conhecimentos para criar Layouts responsivos e seguir o design conforme a documentação e protótipos.",
    technologies: [
      "React.jsx",
      "Typescript",
      "Javascript",
      "CSS",
      "HTML",
    ],
    github: "",
    link: "",
  },

];
