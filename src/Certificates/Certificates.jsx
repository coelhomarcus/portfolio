import React from 'react'
import Text from '../Components/Text/Text';
import Head from '../Head/Head';
import NavButton from '../Components/NavButton/NavButton';

import { IoLogoHtml5, IoLogoCss3, IoLogoReact } from "react-icons/io5";
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
import { FaSwift, FaGithub, FaUnity, FaGitAlt } from "react-icons/fa6";
import { SiXcode, SiBlender, SiNodered, SiVite, SiReactrouter, SiTailwindcss } from "react-icons/si";
import { TbBrandCSharp, TbJson } from "react-icons/tb";


const Certificates = () => {
   return (
      <div className='main'>
         <Head title="Certificados" />
         <Text h1="Meus Certificados" p="Conhecimento nunca é pouco :D" />
         <div className="options">
            <NavButton
               cert="13f9b32b"
               date="mar/2025"
               href="https://www.origamid.com/certificate/13f9b32b"
               h1="React Completo"
               p="Origamid">
               <IoLogoReact title="React" />
               <SiReactrouter title="React Router" />
               <BiLogoJavascript title="JavaScript" />
               <IoLogoHtml5 title="HTML" />
               <IoLogoCss3 title="CSS" />
               <SiVite title="Vite" />
            </NavButton>
            <NavButton
               cert="84974e3e"
               date="mar/2025"
               href="https://www.origamid.com/certificate/84974e3e"
               h1="TypeScript"
               p="Origamid">
               <BiLogoTypescript title="TypeScript" />
            </NavButton>
            <NavButton
               cert="3fe3a556 "
               date="mar/2025"
               href="https://www.origamid.com/certificate/3fe3a556"
               h1="Tailwind"
               p="Origamid">
               <SiTailwindcss title="Tailwind" />
               <IoLogoHtml5 title="HTML" />
               <IoLogoCss3 title="CSS" />
            </NavButton>
            <NavButton
               cert="b1ee7546"
               date="fev/2025"
               href="https://www.origamid.com/certificate/b1ee7546"
               h1="JavaScript ES6+"
               p="Origamid">
               <BiLogoJavascript title="JavaScript" />
               <IoLogoHtml5 title="HTML" />
               <IoLogoCss3 title="CSS" />
               <TbJson title="JSON" />
            </NavButton>
            <NavButton
               cert="56fa7c5f-f904-40bd-829a-1bc41898df2b"
               date="dez/2024"
               href="https://ticemtrilhas.org.br/certificate-validation?code=56fa7c5f-f904-40bd-829a-1bc41898df2b"
               h1="Versionamento de Código"
               p="PUCRS" >
               <FaGitAlt title="Git" />
               <FaGithub title="GitHub" />
            </NavButton>
            <NavButton
               cert="8e8ad089-6179-4b5b-acd7-ede483cdd348"
               date="dez/2024"
               href="https://ticemtrilhas.org.br/certificate-validation?code=8e8ad089-6179-4b5b-acd7-ede483cdd348"
               h1="Fundamentos de Desenvolvimento Web"
               p="TIC em Trilhas">
               <BiLogoJavascript title="JavaScript" />
               <IoLogoHtml5 title="HTML" />
               <IoLogoCss3 title="CSS" />
            </NavButton>
            <NavButton
               cert="731272b6-5951-4b31-928f-5ae202e4b56c"
               date="out/2024"
               href="https://ticemtrilhas.org.br/certificate-validation?code=731272b6-5951-4b31-928f-5ae202e4b56c"
               h1="Introdução ao Desenvolvimento de Jogos - Unity"
               p="TIC em trilhas">
               <FaUnity title="Unity" />
               <TbBrandCSharp title="C#" />
            </NavButton>
            <NavButton
               cert="29d9cad9-266c-4079-b076-98557f861e37"
               date="out/2024"
               href="https://ticemtrilhas.org.br/certificate-validation?code=29d9cad9-266c-4079-b076-98557f861e37"
               h1="Modelagem 3D para Jogos - Blender"
               p="TIC em trilhas">
               <SiBlender title="Blender" />
            </NavButton>
            <NavButton
               cert="65c60c03-904c-4550-8a66-5670ac120004"
               date="fev/2024"
               href="https://lms.hackatruck.com.br/mod/simplecertificate/verify.php"
               h1="Práticas de Cloud Services usando Swift com ênfase em Serviços Cognitivos"
               p="Instituto Eldorado (HACKATRUCK)">
               <FaSwift title="Swift" />
               <SiNodered title="Node Red" />
            </NavButton>
            <NavButton
               cert="656dc90b-3fd8-46a6-8a2c-ca59ac120003"
               date="dez/2023"
               href="https://lms.hackatruck.com.br/mod/simplecertificate/verify.php"
               h1="Algoritmos e Programação Orientada a Objetos com Swift"
               p="Instituto Eldorado (HACKATRUCK)">
               <FaSwift title="Swift" />
               <SiXcode title="Xcode" />
            </NavButton>
         </div>
      </div>
   )
}

export default Certificates
