import React from "react";
import Head from "../Head/Head";
import NavButton from "../Components/NavButton/NavButton";
import Text from "../Components/Text/Text";

const Stack = () => {
  return (
    <div className="main">
      <Head title="Stack" />
      <Text h1="Stack" p="Ferramentas que uso diariamente." />
      <div className="options">
        <NavButton
          to="dev-stack"
          h1="Minha Stack"
          p="Todos os app, ferramentas, e serviços que uso"
        />
        <NavButton to="desk-setup" h1="Meu Setup" p="Meu setup principal" />
        <NavButton
          to="vs-setup"
          h1="VSCode Setup"
          p="Temas, extensões e configurações que uso"
        />
      </div>
    </div>
  );
};

export default Stack;
