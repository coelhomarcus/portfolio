import React from 'react'
import { NavLink } from 'react-router';
import { Tooltip } from 'react-tooltip';

const Sidebar = () => {
   return (
      <div className="sidebar">
         <div className="profile">
            <Tooltip
               id="my-tooltip"
               content="Olá!"
               place="right"
               border="1px solid var(--borderButton)"
               style={{ backgroundColor: "var(--bgButton)", color: "var(--textWhite)" }}
            />
            <img data-tooltip-id="my-tooltip" src="./img/Pessoal/marcus.webp" alt="" />
            <h1>Marcus Coelho</h1>
            <p>Front-end Developer</p>
         </div>
         <div className="options">
            <NavLink to="/" end>Início</NavLink>
            <NavLink to="stack">Stack</NavLink>
            <NavLink to="contact">Contato</NavLink>
            <NavLink to="projects">Projetos</NavLink>
            <NavLink to="certificates">Certificados</NavLink>
            <NavLink to="stuff">Outros</NavLink>
         </div>
      </div>
   )
}

export default Sidebar
