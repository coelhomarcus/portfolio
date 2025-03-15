import React from 'react'
import { NavLink } from 'react-router';

import style from './NavButton.module.css';

const NavButton = (props) => {
   return (
      <>
         {props.to && <NavLink to={props.to} className={style.navlink}><span><h1>{props.h1}</h1><p>{props.p}</p></span></NavLink>}
         {(props.href && !props.cert) && <a href={props.href} target="_blank" className={style.navlink}><span><h1>{props.h1}</h1><p>{props.p}</p></span></a>}
         {(props.cert && !props.children) && <a href={props.href} target="_blank" className={style.certlink}>
            <span>
               <h1>{props.h1}</h1>
               <p>Issued by: {props.p}</p>
               <p>Credential Code: {props.cert}</p>
               <p>Issue Date: {props.date}</p>
            </span>
         </a>}
         {props.children && <a href={props.href} target="_blank" className={style.certlink}>
            <span>
               <h1>{props.h1}</h1>
               <p>Emitido por: {props.p}</p>
               <p>Código: {props.cert}</p>
               <p>Data: {props.date}</p>
               <div>
                  {props.children}
               </div>
            </span>
         </a>}
      </>
   )
}

export default NavButton
