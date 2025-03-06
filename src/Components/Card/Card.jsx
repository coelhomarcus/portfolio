import React from 'react'
import Text from '../Text/Text'
import style from './Card.module.css'
import Button from '../Button/Button'
import { FaGlobe, FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

const Card = ({ img, github, link, title, desc }) => {
   return (
      <div className={style.card}>
         <img src={img} />

         <Text h2={title} p={desc} />
         <span>
            {link && <Button href={link} title="Link"><FiExternalLink /></Button>}
            {github && <Button href={github} title="GitHub"><FaGithub /></Button>}
         </span>
      </div>
   )
}

export default Card