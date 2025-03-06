import React from 'react'
import { NavLink } from 'react-router';

import style from './NavButton.module.css';

const NavButton = (props) => {
   return (
      <>
         {props.to && <NavLink to={props.to} className={style.navlink}><span><h1>{props.h1}</h1><p>{props.p}</p></span></NavLink>}
         {(props.href && !props.cert) && <a href={props.href} target="_blank" className={style.navlink}><span><h1>{props.h1}</h1><p>{props.p}</p></span></a>}
         {props.cert && <a href={props.href} target="_blank" className={style.navlink}>
            <span>
               <h1>{props.h1}</h1>
               <p>Issued by: {props.p}</p>
               <p>Credential Code: {props.cert}</p>
               <p>Issue Date: {props.date}</p>
            </span>
         </a>}
      </>
   )
}

export default NavButton