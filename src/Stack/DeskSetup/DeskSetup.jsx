import React from 'react'
import Head from '../../Head/Head'
import Text from '../../Components/Text/Text';



const DeskSetup = () => {
   return (
      <div className='stackItems'>
         <Head title="PC" />
         <div className="button"><button onClick={() => window.history.back()}>↫ Back</button></div>
         <Text h1="Desk Setup" p="My workspace." />
         <Text h2="PC"
            pArray={[
               "• i5 10400f",
               "• RTX 4060",
               "• 24gb RAM",
               "• SSD 500gb &  HD 1tb"
            ]} />
         <Text h2="Peripherals"
            pArray={[
               "• ASRock Phantom Gaming PG27FF1A",
               "• AOC 27B1HM",
               "• Logitech g435",
               "• Ajazz AJ139 PRO",
               "• JBL Quantum Stream Studio"
            ]} />
      </div>
   )
}

export default DeskSetup