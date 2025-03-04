import React from 'react'
import { NavLink } from 'react-router';
import Head from '../Head/Head'


const Stack = () => {
   return (
      <div className='stack'>
         <Head title="Stack" />
         <div className='textbox'>
            <h1>Stack</h1>
            <p>Tools & products I use daily.</p>
         </div>
         <div className="options">
            <NavLink to="desk-setup" className='textbox'>
               <span>
                  <h1>Desk Setup</h1>
                  <p>My main workspace.</p>
               </span>
            </NavLink>
            <NavLink to="dev-stack" className='textbox'>
               <span>
                  <h1>Development Stack</h1>
                  <p>All of the apps, tools, and services I use to build my projects.</p>
               </span>
            </NavLink>
            <NavLink to="vs-setup" className='textbox'>
               <span>
                  <h1>VSCode Setup</h1>
                  <p>The extensions, theme, and settings I use.</p>
               </span>
            </NavLink>
         </div>
      </div>
   )
}

export default Stack