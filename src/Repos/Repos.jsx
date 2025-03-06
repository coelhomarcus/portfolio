import React from 'react'
import Text from '../Components/Text/Text';
import NavButton from '../Components/NavButton/NavButton';

const Repos = () => {
   return (
      <div className='main'>
         <Text h1="GitHub Repositories" p="My repositories on GitHub" />
         <div className="options">
            <NavButton href="https://github.com/coelhomarcus/coelhomarcus.com" h1="Portfolio" p="Repository of this portfolio" />
            <NavButton href="https://github.com/coelhomarcus/bunnybash" h1="BunnyBash" p="A website that simulates a terminal" />
            <NavButton href="https://github.com/coelhomarcus/catype" h1="CaType" p="Typing page prototype" />
            <NavButton href="https://github.com/coelhomarcus/bakaneo-vscode" h1="BakaNeo" p="A dark theme for Visual Studio Code" />
            <NavButton href="https://github.com/coelhomarcus/get-manga-characters" h1="Get Manga Characters" p="Repository created to study fetch in JS" />
         </div>
      </div>
   )
}

export default Repos