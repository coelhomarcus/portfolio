import React from 'react'
import Text from '../Components/Text/Text';
import Head from '../Head/Head';
import Card from '../Components/Card/Card';

const Projects = () => {
   return (
      <div className='main'>
         <Head title="Projetos" />
         <Text h1="Projetos" />
         <div className="options">
            <Text h2="Projetos Principais" />
            <div className='gridColumn'>
               <Card img="./img/Projects/sos.webp" link="https://www.youtube.com/shorts/0fSoHjAadas" title="SOS Queimadas" desc="App IOS para controle e alertas de queimadas" />
               <Card img="./img/Projects/canaa.webp" link="https://www.youtube.com/shorts/0fSoHjAadas" title="Conecta Canaã" desc="Site de serviços locais e ocorrências em Canaã - PA" />
            </div>
         </div>
         <Text h2="Experimentos / Protótipos" p="Projetos que criei por curiosidade ou estudos" />
         <div className='gridColumn'>
            <Card img="./img/Projects/bash.webp" github="https://github.com/coelhomarcus/bunnybash" link="https://bash.coelhomarcus.com" title="BunnyBash" desc="Um site que simula um terminal" />
            <Card img="./img/Projects/catype.webp" github="https://github.com/coelhomarcus/catype" link="https://catype.coelhomarcus.com" title="Catype" desc="Protótipo de site de digitação" />
            <Card img="./img/Projects/mailman.webp" link="https://bakanull.itch.io/mailman" title="Mailman" desc="Protótipo de um jogo de terror antigo" />
            <Card img="./img/Projects/choice.webp" link="https://bakanull.itch.io/right-choice" title="Right Choice" desc="Protótipo de um jogo de terror antigo" />
         </div>
      </div>
   )
}

export default Projects
