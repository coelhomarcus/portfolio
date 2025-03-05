import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import Head from '../Head/Head'


const Contact = () => {
   return (
      <div className='contact'>
         <Head title="Contact" />
         <div className='titlebox'>
            <h1>Contact</h1>
         </div>
         <div className="textbox">
            <p>Reach me at <a href="mailto:marcusrangelcoelho@gmail.com">marcusrangelcoelho@gmail.com</a></p>
            <p>or connect on social media below.</p>
            <p>I enjoy meeting fellow developers and creators, so feel free to schedule a quick call!</p>
         </div>
         <div className='socials'>
            <div className="button">
               <a href="https://www.linkedin.com/in/coelhomarcus" target='_blank'>
                  <FaLinkedin className='customIcon' />
               </a>
            </div>
            <div className="button">
               <a href="https://github.com/coelhomarcus" target='_blank'>
                  <FaGithub className='customIcon' />
               </a>
            </div>
         </div>
      </div>
   )
}

export default Contact