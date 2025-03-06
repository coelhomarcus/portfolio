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
            <NavButton href="https://bash.coelhomarcus.com" h1="BunnyBash" p="A website that simulates a terminal" />
            <NavButton href="https://catype.coelhomarcus.com" h1="CaType" p="Typing page prototype" />
         </div>
      </div>
   )
}

export default Projects