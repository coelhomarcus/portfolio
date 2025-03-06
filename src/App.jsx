import React from 'react'
import './global.css'
import { Routes, Route } from "react-router";

import Sidebar from './Sidebar/Sidebar'
import Home from './Home/Home'
import Contact from './Contact/Contact'
import Stack from './Stack/Stack'
import DeskSetup from './Stack/DeskSetup/DeskSetup'
import DevStack from './Stack/DevStack/DevStack'
import VSCode from './Stack/VSCode/VSCode'
import Repos from './Repos/Repos'
import Projects from './Projects/Projects';
import Stuff from './Stuff/Stuff';


function App() {
   return (
      <div className='content'>
         <Sidebar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="stack" element={<Stack />} />
            <Route path="stack/desk-setup" element={<DeskSetup />} />
            <Route path="stack/dev-stack" element={<DevStack />} />
            <Route path="stack/vs-setup" element={<VSCode />} />
            <Route path="repos" element={<Repos />} />
            <Route path="projects" element={<Projects />} />
            <Route path="stuff" element={<Stuff />} />
         </Routes>

      </div>
   )
}

export default App
