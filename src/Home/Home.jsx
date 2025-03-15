import React from 'react'
import Head from '../Head/Head'
// My Components
import Text from '../Components/Text/Text'
import Button from '../Components/Button/Button'

import Stack from '../ReactBits/Stack/Stack'

const images = [
   { id: 1, img: "/img/Pessoal/hackatruck.webp" },
   { id: 2, img: "./img/Pessoal/cafundis.webp" },
   { id: 3, img: "/img/Pessoal/nos.webp" },
   { id: 4, img: "./img/Pessoal/marcus.webp" },

];


const Home = () => {
   return (
      <div className="main">
         <Head title="Home" />
         <Text h1="Home" />
         <Text h2="About" pArray={[
            "I’m Marcus Coelho, a 20-year-old Fullstack Developer currently pursuing a Bachelor's degree in Information Systems at UNIFESSPA.",
            "As a Junior Developer, I’m always looking for new challenges to improve my skills and expand my knowledge.",
            "Passionate about technology and continuous learning, I strive to deliver high-quality solutions in every project I work on."]} />
         <Button to="stack/dev-stack">Check out my skills</Button>
         <Text h2="Professional Experience" h3="🦎 Exception Jr | Jul 2024 - Present" p="Junior Enterprise at the Federal University of Southern and Southeastern Pará, working as a Full Stack Developer." />
         <Text h3="🐴 Steed | Jul 2024 - Present" p="A startup specializing in website development, where I serve as the Founder and Full Stack Developer." />
         <div>
            <Stack
               randomRotation={true}
               sensitivity={180}
               sendToBackOnClick={false}
               cardDimensions={{ width: 300, height: 300 }}
               cardsData={images}
            />
         </div>
      </div>
   )
}

export default Home
