import React from 'react'
import Text from '../Components/Text/Text';
import Head from '../Head/Head';
import NavButton from '../Components/NavButton/NavButton';
import Card from '../Components/Card/Card';

const Projects = () => {
   return (
      <div className='main'>
         <Head title="Projects" />
         <Text h1="Projects" p="My projects that are live" />
         <div className="options">
            <Text h2="Primary Projects" p="Real projects" />
            <div className='gridColumn'>
               <Card img="./projectsimg/sos.webp" link="https://www.youtube.com/shorts/0fSoHjAadas" title="SOS Queimadas" desc="IOS App for Wildfire Alert and Control" />
               <Card img="./projectsimg/canaa.webp" link="https://www.youtube.com/shorts/0fSoHjAadas" title="Conecta Canaã" desc="Website for local services and community information in Canaã - PA" />
            </div>
         </div>
         <Text h2="Experimental / Prototypes" p="Projects I created for learning and curiosity" />
         <div className='gridColumn'>
            <Card img="./projectsimg/bash.webp" github="https://github.com/coelhomarcus/bunnybash" link="https://bash.coelhomarcus.com" title="BunnyBash" desc="A website that simulates a terminal" />
            <Card img="./projectsimg/catype.webp" github="https://github.com/coelhomarcus/catype" link="https://catype.coelhomarcus.com" title="Catype" desc="Typing page prototype" />
            <Card img="./projectsimg/mailman.webp" link="https://bakanull.itch.io/mailman" title="Mailman" desc="A prototype of a retro horror game" />
            <Card img="./projectsimg/choice.webp" link="https://bakanull.itch.io/right-choice" title="Right Choice" desc="My first prototype of a retro horror game" />
         </div>
      </div>
   )
}

export default Projects