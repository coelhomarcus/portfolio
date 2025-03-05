import React from 'react'
import { NavLink } from 'react-router';

import style from './NavButton.module.css';

const NavButton = (props) => {
   return (
      <NavLink to={props.to} className={style.navlink}>
         <span>
            <h1>{props.h1}</h1>
            <p>{props.p}</p>
         </span>
      </NavLink>
   )
}

export default NavButton