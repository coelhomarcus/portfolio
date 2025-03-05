import React from 'react'

// My Components
import Head from '../../Head/Head'
import Button from '../../Components/Button/Button';
import Text from '../../Components/Text/Text';

import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoPython, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { FaJava, FaSwift, FaFigma, FaBrave, FaGithub, FaUnity } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { SiInsomnia, SiTodoist, SiMysql, SiMongodb, SiXcode } from "react-icons/si";

const DevStack = () => {
   return (
      <div className='stackItems'>
         <Head title="Dev Stack" />
         <div className="button"><button onClick={() => window.history.back()}>↫ Back</button></div>

         <Text h1="Development Stack" p="All of the apps, tools, languages and services I use to build my projects." />

         <div className='flexColumn'>
            <Text h2="Programming & Typesetting Languages" />

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
               <Button onlyIcon title="JavaScript"><IoLogoJavascript /></Button>
               <Button onlyIcon title="HTML"><IoLogoHtml5 /></Button>
               <Button onlyIcon title="CSS"><IoLogoCss3 /></Button>
               <Button onlyIcon title="Python"><IoLogoPython /></Button>
               <Button onlyIcon title="Java"><FaJava /></Button>
               <Button onlyIcon title="Swift"><FaSwift /></Button>
            </div>
         </div>

         <div className='flexColumn'>
            <Text h2="Frameworks, Libraries & More" />

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
               <Button onlyIcon title="React"><IoLogoReact /></Button>
               <Button onlyIcon title="NodeJs"><IoLogoNodejs /></Button>
            </div>
         </div>

         <div className='flexColumn'>
            <Text h2="Database" />
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
               <Button onlyIcon title="MySQL"><SiMysql /></Button>
               <Button onlyIcon title="MongoDB"><SiMongodb /></Button>
            </div>
         </div>

         <div className='flexColumn'>
            <Text h2="Apps" />
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
               <Button onlyIcon title="VSCode"><VscVscode /></Button>
               <Button onlyIcon title="Figma"><FaFigma /></Button>
               <Button onlyIcon title="Insomnia"><SiInsomnia /></Button>
               <Button onlyIcon title="Unity"><FaUnity /></Button>
               <Button onlyIcon title="Brave"><FaBrave /></Button>
               <Button onlyIcon title="GitHub"><FaGithub /></Button>
               <Button onlyIcon title="Todoist"><SiTodoist /></Button>
               <Button onlyIcon title="XCode"><SiXcode /></Button>
            </div>
         </div>

      </div>
   )
}
export default DevStack