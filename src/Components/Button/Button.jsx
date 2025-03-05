import React from 'react'
import style from './Button.module.css';
import { NavLink } from 'react-router';

const Button = (props) => {
   return (
      <>
         {props.to && <div className={style.navlink} title={props.title}><NavLink to={props.to}>{props.children}</NavLink></div>}
         {props.href && <a className={style.button} href={props.href} target="_blank" title={props.title}><span className={style.customIcon}> {props.children}</span></a>}
         {props.onlyIcon && <div className={style.button} title={props.title}><span className={style.customIcon}>{props.children}</span></div>}
      </>
   )
}

export default Button