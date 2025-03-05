import React from 'react'

import style from './Text.module.css'

const Text = (props) => {
   return (
      <div className={style.title}>
         {props.h1 && <h1>{props.h1}</h1>}
         {props.h2 && <h2>{props.h2}</h2>}
         {props.h3 && <h3>{props.h3}</h3>}
         {props.p && <p>{props.p}</p>}
         {props.pArray &&
            Array.from(props.pArray).map((sentence, index) => {
               return <p key={index}>{sentence}</p>
            })
         }
      </div>
   )
}

export default Text;