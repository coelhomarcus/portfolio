import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa6";

import Head from '../Head/Head'
import Button from '../Components/Button/Button';
import Text from '../Components/Text/Text';



const Contact = () => {
   return (
      <div className='main'>
         <Head title="Contact" />
         <Text h1="Contact" />
         <Text h2="👋 Hello!" />
         <Text p="Reach me at marcusrangelcoelho@gmail.com or connect on social media below." />
         <div className='flexRow'>
            <Button href="https://www.linkedin.com/in/coelhomarcus" title="LinkedIn"><FaLinkedin /></Button>
            <Button href="https://github.com/coelhomarcus" title="GitHub"><FaGithub /></Button>
         </div>
         <Text p="I enjoy meeting fellow developers and creators, so feel free to schedule a quick call!" />
      </div>
   )
}

export default Contact