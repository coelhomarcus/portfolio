import React from 'react'
import Text from '../Components/Text/Text';


const NotFound = () => {
   return (
      <div className='main' style={{ justifyContent: "center", alignItems: "center" }}>
         <Text h1="Essa pagina não existe" p="Mas pense pelo lado positivo, você verá essa fofura:" />
         <video
            style={{ background: "var(--bgButton)", padding: "20px", border: "1px solid var(--borderButton)", borderRadius: '6px' }}
            width="300px"
            height="500px"
            controls
            src="https://img.coelhomarcus.com/banner/gutsplaying.webm" type="video/webm">
            Seu navegador não suporta a tag video.
         </video>
      </div>
   )
}

export default NotFound
