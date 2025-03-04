import React from 'react'
import Head from '../../Head/Head'

const DevStack = () => {
   return (
      <div className='stackItems'>
         <Head title="Dev Stack" />
         <button onClick={() => window.history.back()}>↫ Back</button>
         <div className='stackInfo'>
            <div className='title'>
               <h1>Development Stack</h1>
               <span className='textbox'>
                  <p>My main workspace.</p>
               </span>
            </div>
            <h1 className="stackTitle">Apps</h1>
            <span className='stackInfo'>
               <p>Visual Studio Code</p>
               <p>Cmder</p>
               <p>Brave</p>
               <p>Insomnia</p>
               <p>Figma</p>
            </span>
            <h1 className="stackTitle">VS Code Extensions</h1>
            <span className='stackInfo'>
               <p>Themes: Vesper, Min Theme, Aura Theme</p>
               <p>Icon Theme: Symbols</p>
               <p>ESLint</p>
               <p>GitLens</p>
               <p>Live Server</p>
               <p>Color Highlight</p>
               <p>ES7+ React/Redux/React-Native snippets</p>
            </span>
         </div>
      </div>
   )
}
export default DevStack