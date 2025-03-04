import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Head from '../Head/Head'


const Contact = () => {
   return (
      <div className='contact'>
         <Head title="Contact" />
         <div className="textbox">
            <h1>Reach me!</h1>
            <p>Reach me at <a href="mailto:marcusrangelcoelho@gmail.com">marcusrangelcoelho@gmail.com</a> or connect on social media below.</p>
            <p>I enjoy meeting fellow developers and creators, so feel free to schedule a quick call!</p>
         </div>
         <div className='socials'>
            <div className="button">
               <a href="https://www.linkedin.com/in/coelhomarcus" target='_blank'>
                  <LinkedInIcon className='customIcon' />
               </a>
            </div>
            <div className="button">
               <a href="https://github.com/coelhomarcus" target='_blank'>
                  <GitHubIcon className='customIcon' />
               </a>
            </div>
         </div>
      </div>
   )
}

export default Contact