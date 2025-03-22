import React from "react";
import Head from "../Head/Head";
// My Components
import Text from "../Components/Text/Text";
import Button from "../Components/Button/Button";

const Home = () => {
  return (
    <div className="main">
      <Head title="Início" />
      <Text h1="Início" />
      <Text
        h2="Sobre mim"
        pArray={[
          "Me chamo Marcus Coelho, atuo como Front-end Developer e estou cursando Sistemas de Informação na UNIFESSPA.",
          "Estou sempre em busca de novos desafios e conhecimentos. Gosto de estudar e, atualmente, estou focado em desenvolvimento web, uma área com a qual me identifico bastante.",
        ]}
      />
      <Button to="stack/dev-stack">Veja minhas skills</Button>
      <Text
        h2="Experiência Profissional"
        h3="🦎 Exception Jr"
        pArray={[
          "• Jul 2024 - o momento",
          "Empresa júnior da faculdade de Sistemas de Informação na UNIFESSPA, onde atuo como Full Stack Developer.",
        ]}
      />
      <Text
        h3="🐴 Steed"
        pArray={[
          "• Jan 2024 - o momento",
          "Sou fundador e Full Stack Developer de uma startup especializada em desenvolvimento de websites.",
        ]}
      />
      <div></div>
    </div>
  );
};

export default Home;
