import React from 'react'
import Text from '../Components/Text/Text';


const NotFound = () => {
   return (
      <div className='main' style={{ justifyContent: "center", alignItems: "center" }}>
         <Text h1="This page does not exist" p="But think on the bright side, you'll see this cuteness:" />
         <video
            style={{ background: "var(--bgButton)", padding: "20px", border: "1px solid var(--borderButton)", borderRadius: '6px' }}
            width="300px"
            height="500px"
            controls
            src="https://img.coelhomarcus.com/banner/gutsplaying.webm" type="video/webm">
            Your browser does not support the video tag.
         </video>
      </div>
   )
}

export default NotFound