import React from 'react'
import Head from '../../Head/Head'
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoPython, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { FaJava, FaSwift, FaFigma, FaBrave, FaGithub, FaUnity } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { SiInsomnia, SiTodoist, SiMysql, SiMongodb, SiXcode } from "react-icons/si";

const DevStack = () => {
   return (
      <div className='stackItems'>
         <Head title="Dev Stack" />
         <div className="button"><button onClick={() => window.history.back()}>↫ Back</button></div>
         <div className='stackInfo'>
            <div className='titlebox'>
               <h1>Development Stack</h1>
            </div>
            <p>All of the apps, tools, languages and services I use to build my projects.</p>
         </div>
         <div className='languages'>
            <div className='titlebox'>
               <h2>Programming & Typesetting Languages</h2>
            </div>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
               <div className="button" title="JavaScript"><IoLogoJavascript className='customIcon' /></div>
               <div className="button" title="HTML"> <IoLogoHtml5 className='customIcon' /></div>
               <div className="button" title="CSS"><IoLogoCss3 className='customIcon' /></div>
               <div className="button" title="Python"><IoLogoPython className='customIcon' /></div>
               <div className="button" title="Java"><FaJava className='customIcon' /></div>
               <div className="button" title="Swift"><FaSwift className='customIcon' /></div>
            </div>
         </div>
         <div className='languages'>
            <div className='titlebox'>
               <h2>Frameworks, Libraries & More</h2>
            </div>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
               <div className="button" title="React"><IoLogoReact className='customIcon' /></div>
               <div className="button" title="NodeJs"><IoLogoNodejs className='customIcon' /></div>
            </div>
         </div>
         <div className='languages'>
            <div className='titlebox'>
               <h2>Database</h2>
            </div>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
               <div className="button" title="MySQL"><SiMysql className='customIcon' /></div>
               <div className="button" title="MongoDB"><SiMongodb className='customIcon' /></div>
            </div>
         </div>
         <div className='languages'>
            <div className='titlebox'>
               <h2>Apps</h2>
            </div>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
               <div className="button" title="VSCode"><VscVscode className='customIcon' /></div>
               <div className="button" title="Figma"><FaFigma className='customIcon' /></div>
               <div className="button" title="Insomnia"><SiInsomnia className='customIcon' /></div>
               <div className="button" title="Unity"><FaUnity className='customIcon' /></div>
               <div className="button" title="Brave"><FaBrave className='customIcon' /></div>
               <div className="button" title="GitHub"><FaGithub className='customIcon' /></div>
               <div className="button" title="Todoist"><SiTodoist className='customIcon' /></div>
               <div className="button" title="XCode"><SiXcode className='customIcon' /></div>
            </div>
         </div>
      </div>
   )
}
export default DevStack