import React from 'react'
import { NavLink } from 'react-router';

import style from './NavButton.module.css';

const NavButton = (props) => {
   return (
      <>
         {props.to && <NavLink to={props.to} className={style.navlink}><span><h1>{props.h1}</h1><p>{props.p}</p></span></NavLink>}
         {props.href && <a href={props.href} target="_blank" className={style.navlink}><span><h1>{props.h1}</h1><p>{props.p}</p></span></a>}
      </>
   )
}

export default NavButton