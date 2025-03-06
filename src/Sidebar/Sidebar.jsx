import React from 'react'
import { NavLink } from 'react-router';
import { Tooltip } from 'react-tooltip';

const Sidebar = () => {
   return (
      <div className="sidebar">
         <div className="profile">
            <Tooltip
               id="my-tooltip"
               content="Hello!"
               place="right"
               border="1px solid var(--borderButton)"
               style={{ backgroundColor: "var(--bgButton)", color: "var(--textWhite)" }}
            />
            <img data-tooltip-id="my-tooltip" src="https://avatars.githubusercontent.com/u/106438089?v=4" alt="" />
            <h1>Marcus Coelho</h1>
            <p>Software Engineer</p>
         </div>
         <div className="options">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="contact">Contact</NavLink>
            <NavLink to="stack">Stack</NavLink>
            <NavLink to="projects">Projects</NavLink>
            <NavLink to="repos">Repos</NavLink>
            <NavLink to="stuff">My Stuff</NavLink>
         </div>
      </div>
   )
}

export default Sidebar