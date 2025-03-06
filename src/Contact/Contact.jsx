import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import Head from '../Head/Head'
import Button from '../Components/Button/Button';
import Text from '../Components/Text/Text';

const Contact = () => {
   return (
      <div className='main'>
         <Head title="Contact" />
         <Text h1="Contact" />
         <Text h2="Hi there!" />
         <Text p="Talk to me on one of these platforms, just click:" />
         <div className='flexRow'>
            <Button href="https://www.linkedin.com/in/coelhomarcus" title="LinkedIn"><FaLinkedin /></Button>
            <Button href="mailto:marcusrangelcoelho@gmail.com?subject=Assunto&body=Olá!" title="Email"><MdEmail /></Button>
            <Button href="https://github.com/coelhomarcus" title="GitHub"><FaGithub /></Button>
         </div>
         <Text p="I enjoy meeting new people, so feel free to send me a message!" />
      </div>
   )
}

export default Contact