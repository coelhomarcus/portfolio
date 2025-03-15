import React from 'react'
import Head from '../../Head/Head'
import Text from '../../Components/Text/Text'

const VSCode = () => {
   return (
      <div className='main'>
         <Head title="VSCode" />
         <button className="backButton" onClick={() => window.history.back()}>↫ Voltar</button>
         <Text h1="Visual Studio Code Setup" p="Minhas configurações no vscode" />
         <Text h2="Extensões"
            pArray={[
               "• Tema: Vesper",
               "• Icones: Symbols",
               "• ESLint",
               "• GitLens",
               "• Live Server",
               "• Color Highlight",
               "• ES7+ React/Redux/React-Native snippets",
               "• Tailwind CSS IntelliSense"
            ]} />
      </div>
   )
}

export default VSCode
