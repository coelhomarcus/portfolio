import React from 'react'
import Head from '../../Head/Head'

const VSCode = () => {
   return (
      <div className='stackItems'>
         <Head title="VSCode" />
         <div className="button"><button onClick={() => window.history.back()}>↫ Back</button></div>
         <div className='stackInfo'>
            <div className='titlebox'>
               <h1>Visual Studio Code Setup</h1>
            </div>
            <p>My vscode settings.</p>
         </div>
         <div className='titlebox'>
            <h2>Extensions</h2>
            <p>• Themes: Vesper, Min Theme, Aura Theme</p>
            <p>• Icon Theme: Symbols</p>
            <p>• ESLint</p>
            <p>• GitLens</p>
            <p>• Live Server</p>
            <p>• Color Highlight</p>
            <p>• ES7+ React/Redux/React-Native snippets</p>
         </div>
      </div>
   )
}

export default VSCode