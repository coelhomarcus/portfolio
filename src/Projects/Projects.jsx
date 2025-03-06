import React from 'react'
import Text from '../Components/Text/Text';
import Head from '../Head/Head';
import NavButton from '../Components/NavButton/NavButton';

const Projects = () => {
   return (
      <div className='main'>
         <Head title="Projects" />
         <Text h1="Projects" p="My projects that are live" />
         <div className="options">
            <Text h2="Primary Projects" />
            <Text p="WIP" />
         </div>
         <div className="options">
            <Text h2="Experimental / Prototypes" />
            <NavButton href="https://bash.coelhomarcus.com" h1="BunnyBash" p="A website that simulates a terminal" />
            <NavButton href="https://catype.coelhomarcus.com" h1="CaType" p="Typing page prototype" />
            <NavButton href="https://bakanull.itch.io/mailman" h1="Mailman" p="Another prototype of a retro horror game" />
            <NavButton href="https://bakanull.itch.io/right-choice" h1="Right Choice" p="A prototype of a retro horror game. It's essentially a walking simulator" />
         </div>
      </div>
   )
}

export default Projects