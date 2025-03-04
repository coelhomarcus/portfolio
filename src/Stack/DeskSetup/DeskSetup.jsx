import React from 'react'
import Head from '../../Head/Head'


const DeskSetup = () => {
   return (
      <div className='stackItems'>
         <Head title="PC" />
         <button onClick={() => window.history.back()}>↫ Back</button>
         <div className='stackInfo'>
            <div className='title'>
               <h1>Desk Setup</h1>
               <span className='textbox'>
                  <p>My workspace.</p>
               </span>
            </div>
            <h1 className="stackTitle">PC</h1>
            <span className='textbox'>
               <p>ASRock Phantom Gaming PG27FF1A</p>
               <p>AOC 27B1HM</p>
               <p>i5 10400f</p>
               <p>RTX 4060</p>
               <p>24gb RAM</p>
               <p>SSD 500gb &  HD 1tb</p>
               <p>Logitech g435</p>
               <p>Ajazz AJ139 PRO</p>
               <p>JBL Quantum Stream Studio</p>
            </span>
         </div>
      </div>
   )
}

export default DeskSetup