import React from 'react'
import Text from '../Components/Text/Text';
import Head from '../Head/Head';
import NavButton from '../Components/NavButton/NavButton';

import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { FaSwift, FaGithub, FaUnity, FaGitAlt } from "react-icons/fa6";
import { SiXcode, SiBlender, SiNodered, SiVite, SiReactrouter } from "react-icons/si";
import { TbBrandCSharp, TbJson } from "react-icons/tb";

const Certificates = () => {
   return (
      <div className='main'>
         <Head title="Certificates" />
         <Text h1="My Certificates" p="Knowledge is never too much :D" />
         <div className="options">
            <NavButton
               cert="13f9b32b"
               date="mar/2025"
               href="https://www.origamid.com/certificate/13f9b32b"
               h1="Complete React with JavaScript"
               p="Origamid">
               <IoLogoReact title="React" />
               <SiReactrouter title="React Router" />
               <IoLogoJavascript title="JavaScript" />
               <IoLogoHtml5 title="HTML" />
               <IoLogoCss3 title="CSS" />
               <SiVite title="Vite" />
            </NavButton>
            <NavButton
               cert="b1ee7546"
               date="feb/2025"
               href="https://www.origamid.com/certificate/b1ee7546"
               h1="Complete JavaScript ES6+"
               p="Origamid">
               <IoLogoJavascript title="JavaScript" />
               <IoLogoHtml5 title="HTML" />
               <IoLogoCss3 title="CSS" />
               <TbJson title="JSON" />
            </NavButton>
            <NavButton
               cert="56fa7c5f-f904-40bd-829a-1bc41898df2b"
               date="dec/2024"
               href="https://ticemtrilhas.org.br/certificate-validation?code=56fa7c5f-f904-40bd-829a-1bc41898df2b"
               h1="Code Versioning"
               p="PUCRS" >
               <FaGitAlt title="Git" />
               <FaGithub title="GitHub" />
            </NavButton>
            <NavButton
               cert="8e8ad089-6179-4b5b-acd7-ede483cdd348"
               date="dec/2024"
               href="https://ticemtrilhas.org.br/certificate-validation?code=8e8ad089-6179-4b5b-acd7-ede483cdd348"
               h1="Fundamentals of Web Development"
               p="TIC em Trilhas">
               <IoLogoJavascript title="JavaScript" />
               <IoLogoHtml5 title="HTML" />
               <IoLogoCss3 title="CSS" />
            </NavButton>
            <NavButton
               cert="731272b6-5951-4b31-928f-5ae202e4b56c"
               date="oct/2024"
               href="https://ticemtrilhas.org.br/certificate-validation?code=731272b6-5951-4b31-928f-5ae202e4b56c"
               h1="Introduction to Game Development - Unity"
               p="TIC em trilhas">
               <FaUnity title="Unity" />
               <TbBrandCSharp title="C#" />
            </NavButton>
            <NavButton
               cert="29d9cad9-266c-4079-b076-98557f861e37"
               date="oct/2024"
               href="https://ticemtrilhas.org.br/certificate-validation?code=29d9cad9-266c-4079-b076-98557f861e37"
               h1="3D Modeling for Games - Blender"
               p="TIC em trilhas">
               <SiBlender title="Blender" />
            </NavButton>
            <NavButton
               cert="65c60c03-904c-4550-8a66-5670ac120004"
               date="feb/2024"
               href="https://lms.hackatruck.com.br/mod/simplecertificate/verify.php"
               h1="Cloud Services Practices using Swift with an Emphasis on Cognitive Services"
               p="Instituto Eldorado (HACKATRUCK)">
               <FaSwift title="Swift" />
               <SiNodered title="Node Red" />
            </NavButton>
            <NavButton
               cert="656dc90b-3fd8-46a6-8a2c-ca59ac120003"
               date="dec/2023"
               href="https://lms.hackatruck.com.br/mod/simplecertificate/verify.php"
               h1="Algorithms and Object-Oriented Programming with Swift"
               p="Instituto Eldorado (HACKATRUCK)">
               <FaSwift title="Swift" />
               <SiXcode title="Xcode" />
            </NavButton>
         </div>
      </div>
   )
}

export default Certificates