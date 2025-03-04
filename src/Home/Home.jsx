import React from 'react'
import Head from '../Head/Head'

const Home = () => {
   return (
      <div className="home">
         <Head title="Home" />
         <div className="textbox">
            <h1>About</h1>
            <p> I'm Marcus Coelho</p>
            <p>Information Systems student at UNIFESSPA, currently in my 5th period.</p>
            <p>Focused on Web Development for now.</p>
         </div>
         <div className="textbox">
            <h1>Skills</h1>
            <p>Natural Language: Portuguese (Native); English (Ongoing);</p>
            <p>Programming Language: Python; C#; Java; Swift; JavaScript;</p>
            <p>Typesetting Language: HTML; CSS;</p>
            <p>Frameworks & Libraries: React (Ongoing);</p>
         </div>
         <div className="textbox">
            <h1>Professional Experience</h1>
            <span>
               <h1>🦎 Exception Jr | Jul 2024 - Present</h1>
               <p>Junior Enterprise at the Federal University of Southern and Southeastern Pará, working as a Full Stack Developer.</p>
            </span>
            <span>
               <h1>🐴 <a href="https://steed.com.br" target="_blank" rel="noopener noreferrer">Steed</a> | Jan 2025 – Present</h1>
               <p>A startup specializing in website development, where I serve as the Founder and Full Stack Developer.</p>
            </span>
         </div>
      </div>
   )
}

export default Home