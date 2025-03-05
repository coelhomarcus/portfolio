import React from 'react'
import Head from '../Head/Head'
import NavButton from '../Components/NavButton/NavButton'
import Text from '../Components/Text/Text'


const Stack = () => {
   return (
      <div className='main'>
         <Head title="Stack" />
         <Text h1="Stack" p="Tools & products I use daily." />
         <div className="options">
            <NavButton to="dev-stack" h1="Development Stack" p="All of the apps, tools, and services I use to build my projects." />
            <NavButton to="desk-setup" h1="Desk Setup" p="My main workspace." />
            <NavButton to="vs-setup" h1="VSCode Setup" p="The extensions, theme, and settings I use." />
         </div>
      </div>
   )
}

export default Stack