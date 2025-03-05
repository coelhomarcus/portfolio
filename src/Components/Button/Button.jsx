import React from 'react'
import style from './Button.module.css';
import { NavLink } from 'react-router';

const Button = (props) => {
   return (
      <>
         {
            props.to ?
               <div className={style.navlink} title={props.title}>
                  {props.to && <NavLink to={props.to}>{props.children}</NavLink>}
               </div>
               : <div className={style.button} title={props.title}>
                  {props.href && <a href={props.href} target="_blank" className={style.customIcon}> {props.children}</a>}
                  {props.to && <NavLink to={props.to} className={style.customIcon + " teste"}>{props.children}</NavLink>}
                  {props.onlyIcon && <span className={style.customIcon}>{props.children}</span>}
               </div>
         }
      </>

   )
}

export default Button