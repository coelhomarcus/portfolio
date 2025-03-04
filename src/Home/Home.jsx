import React from 'react'
import Head from '../Head/Head'
import { NavLink } from 'react-router'

const Home = () => {
   return (
      <div className="home">
         <Head title="Home" />
         <div className='titlebox'>
            <h1>Home</h1>
         </div>
         <div className="textbox">
            <h1>About</h1>
            <p>I’m Marcus Coelho, a 20-year-old Fullstack Developer currently pursuing a Bachelor's degree in Information Systems at UNIFESSPA. As a Junior Developer, I’m always looking for new challenges to improve my skills and expand my knowledge. Passionate about technology and continuous learning, I strive to deliver high-quality solutions in every project I work on.</p>
         </div>
         <div style={{ width: "200px" }} >
            <NavLink className="button" to="stack/dev-stack">Check out my skills</NavLink>
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