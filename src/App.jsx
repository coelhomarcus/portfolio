import React from 'react'
import './global.css'
import { Routes, Route, useLocation } from "react-router";

import Sidebar from './Sidebar/Sidebar'
import Home from './Home/Home'
import Contact from './Contact/Contact'
import Stack from './Stack/Stack'
import DeskSetup from './Stack/DeskSetup/DeskSetup'
import DevStack from './Stack/DevStack/DevStack'
import VSCode from './Stack/VSCode/VSCode'
import Certificates from './Certificates/Certificates'
import Projects from './Projects/Projects';
import Stuff from './Stuff/Stuff';
import NotFound from './NotFound/NotFound';

//other
import Aurora from './ReactBits/Aurora/Aurora';

function App() {
   const [isLoaded, setIsLoaded] = React.useState(false);
   const location = useLocation();

   React.useEffect(() => {
      const timer = setTimeout(() => {
         setIsLoaded(true);
      }, 500);

      return () => clearTimeout(timer);
   }, []);

   React.useEffect(() => scrollTo(top), [location]);

   return (
      <div className='container'>
         {isLoaded ? <Aurora
            colorStops={["#00D8FF", "#7CFF67", "#00D8FF"]}
            blend={1}
            amplitude={1}
            speed={1}
         /> : null}
         <div className='content'>
            <Sidebar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="contact" element={<Contact />} />
               <Route path="stack" element={<Stack />} />
               <Route path="stack/desk-setup" element={<DeskSetup />} />
               <Route path="stack/dev-stack" element={<DevStack />} />
               <Route path="stack/vs-setup" element={<VSCode />} />
               <Route path="certificates" element={<Certificates />} />
               <Route path="projects" element={<Projects />} />
               <Route path="stuff" element={<Stuff />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </div>
      </div>
   )
}

export default App
