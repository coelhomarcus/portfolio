import React from "react";
import Text from "../Components/Text/Text";
import Head from "../Head/Head";
import Card from "../Components/Card/Card";

const arrProj = [
  {
    img: "./img/Projects/sos.webp",
    link: "https://www.youtube.com/shorts/0fSoHjAadas",
    title: "SOS Queimadas",
    desc: "App IOS para controle e alertas de queimadas",
  },
  {
    img: "./img/Projects/canaa.webp",
    link: "https://conecta.smartcitycanaadoscarajas.com.br/",
    title: "Conecta Canaã",
    desc: "Site de serviços locais e ocorrências em Canaã - PA",
  },
];

const arrExp = [
  {
    img: "./img/Projects/bash.webp",
    github: "https://github.com/coelhomarcus/bunnybash",
    link: "https://coelhomarcus.github.io/bunnybash/",
    title: "BunnyBash",
    desc: "Um site que simula um terminal",
  },
  {
    img: "./img/Projects/mailman.webp",
    link: "https://bakanull.itch.io/mailman",
    title: "Mailman",
    desc: "Protótipo de um jogo de terror antigo",
  },
  {
    img: "./img/Projects/choice.webp",
    link: "https://bakanull.itch.io/right-choice",
    title: "Right Choice",
    desc: "Protótipo de um jogo de terror antigo",
  },
];

const Projects = () => {
  return (
    <div className="main">
      <Head title="Projetos" />
      <Text h1="Projetos" />
      <div className="options">
        <Text h2="Projetos Principais" />
        <div className="gridColumn">
          {arrProj.map((item) => (
            <Card
              key={item.title}
              img={item.img}
              link={item.link}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
      <Text
        h2="Experimentos / Protótipos"
        p="Projetos que criei por curiosidade ou estudos"
      />
      <div className="gridColumn">
        {arrExp.map((item) => (
          <Card
            key={item.title}
            img={item.img}
            github={item.github}
            link={item.link}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
