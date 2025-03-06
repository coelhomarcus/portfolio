import React from 'react'
import Text from '../Components/Text/Text';
import Head from '../Head/Head';
import NavButton from '../Components/NavButton/NavButton';

const Certificates = () => {
   return (
      <div className='main'>
         <Head title="Certificates" />
         <Text h1="Certificates" p="My certificates" />
         <div className="options">
            <NavButton
               cert="b1ee7546"
               date="feb/2025"
               href="https://www.origamid.com/certificate/b1ee7546"
               h1="Complete JavaScript ES6+"
               p="Origamid" />
            <NavButton
               cert="56fa7c5f-f904-40bd-829a-1bc41898df2b"
               date="dec/2024"
               href="https://ticemtrilhas.org.br/certificate-validation?code=56fa7c5f-f904-40bd-829a-1bc41898df2b"
               h1="Code Versioning"
               p="PUCRS" />
            <NavButton
               cert="656dc90b-3fd8-46a6-8a2c-ca59ac120003"
               date="dec/2023"
               href="https://lms.hackatruck.com.br/mod/simplecertificate/verify.php"
               h1="Algorithms and Object-Oriented Programming with Swift"
               p="Instituto Eldorado (HACKATRUCK)" />
            <NavButton

               cert="65c60c03-904c-4550-8a66-5670ac120004"
               date="feb/2024"
               href="https://lms.hackatruck.com.br/mod/simplecertificate/verify.php"
               h1="Cloud Services Practices using Swift with an Emphasis on Cognitive Services"
               p="Instituto Eldorado (HACKATRUCK)"
            />
            <NavButton
               cert="8e8ad089-6179-4b5b-acd7-ede483cdd348"
               date="dec/2024"
               href="https://ticemtrilhas.org.br/certificate-validation?code=8e8ad089-6179-4b5b-acd7-ede483cdd348"
               h1="Fundamentals of Web Development"
               p="TIC em Trilhas"
            />
         </div>
      </div>
   )
}

export default Certificates