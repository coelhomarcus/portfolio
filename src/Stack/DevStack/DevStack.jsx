import React from 'react'

// My Components
import Head from '../../Head/Head'
import Button from '../../Components/Button/Button';
import Text from '../../Components/Text/Text';

import { IoLogoHtml5, IoLogoCss3, IoLogoPython, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { FaJava, FaSwift, FaFigma, FaGithub, FaUnity } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { SiInsomnia, SiMysql, SiMongodb, SiBlender, SiVite, SiReactrouter, SiGodotengine, SiTailwindcss, SiExpress } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoTypescript, BiLogoJavascript, BiLogoPostgresql } from "react-icons/bi";


const DevStack = () => {
   return (
      <div className='main'>
         <Head title="Stack" />
         <button className="backButton" onClick={() => window.history.back()}>↫ Voltar</button>
         <Text h1="Stack" p="Todos os app, ferramentas, linguagens, serviços que uso." />
         <div className='flexColumn'>
            <Text h2="Linguagens de Programação e Tipagem" />
            <div className='flexRow'>
               <Button onlyIcon title="JavaScript"><BiLogoJavascript /></Button>
               <Button onlyIcon title="TypeScript"><BiLogoTypescript /></Button>
               <Button onlyIcon title="HTML"><IoLogoHtml5 /></Button>
               <Button onlyIcon title="CSS"><IoLogoCss3 /></Button>
               <Button onlyIcon title="Python"><IoLogoPython /></Button>
               <Button onlyIcon title="Java"><FaJava /></Button>
               <Button onlyIcon title="Swift"><FaSwift /></Button>
               <Button onlyIcon title="C#"><TbBrandCSharp /></Button>
            </div>
         </div>

         <div className='flexColumn'>
            <Text h2="Frameworks, Bibliotecas & Outros" />

            <div className='flexRow'>
               <Button onlyIcon title="Node.js"><IoLogoNodejs /></Button>
               <Button onlyIcon title="Express.js"><SiExpress /></Button>
               <Button onlyIcon title="React"><IoLogoReact /></Button>
               <Button onlyIcon title="React Router"><SiReactrouter /></Button>
               <Button onlyIcon title="Vite"><SiVite /></Button>
               <Button onlyIcon title="Tailwind"><SiTailwindcss /></Button>

            </div>
         </div>

         <div className='flexColumn'>
            <Text h2="Banco de Dados" />
            <div className='flexRow'>
               <Button onlyIcon title="PostgreSQL"><BiLogoPostgresql /></Button>
               <Button onlyIcon title="MySQL"><SiMysql /></Button>
               <Button onlyIcon title="MongoDB"><SiMongodb /></Button>
            </div>
         </div>

         <div className='flexColumn'>
            <Text h2="Apps" />
            <div className='flexRow'>
               <Button onlyIcon title="GitHub"><FaGithub /></Button>
               <Button onlyIcon title="VSCode"><VscVscode /></Button>
               <Button onlyIcon title="Insomnia"><SiInsomnia /></Button>
               <Button onlyIcon title="Figma"><FaFigma /></Button>
               <Button onlyIcon title="Unity"><FaUnity /></Button>
               <Button onlyIcon title="Godot"><SiGodotengine /></Button>
               <Button onlyIcon title="Blender"><SiBlender /></Button>
            </div>
         </div>

      </div>
   )
}
export default DevStack
