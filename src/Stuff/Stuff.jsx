import React from 'react'
import Head from '../Head/Head'
import Text from '../Components/Text/Text'
import Button from '../Components/Button/Button'

import { SiMonkeytype } from "react-icons/si";
import { FaSteam, FaYoutube } from "react-icons/fa6";

const Stuff = () => {
   return (
      <div className='main'>
         <Head title="Stuff" />
         <Text h1="My Stuff" p="Some things I like :D" />
         <div className='flexRow'>
            <Button href="https://monkeytype.com/profile/coelhomarcus" title="MonkeyType"><SiMonkeytype /></Button>
            <Button href="https://steamcommunity.com/id/bakanull/" title="My Steam"><FaSteam /></Button>
            <Button href="https://www.youtube.com/@bakanull" title="My Channel"><FaYoutube /></Button>
         </div>
         <Text h2="Favorite Games" pArray={["• Cyberpunk 2077", "• Elden Ring", "• Dark Souls III"]} />
         <Text h2="Favorite Mangas" pArray={["• Kaiji", "• Berserk", "• 20th Century Boys", "• Chainsaw Man", "• Death Note"]} />
         <Text h2="Favorite Singer" p="• Enygma 🐐" />
      </div>
   )
}

export default Stuff