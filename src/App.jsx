// import React,{useState} from 'react'
// import Navbar from './Components/Navbar/Navbar'
// /*import Sidebar from './Components/Sidebar/Sidebar'*/
// import { Route, Routes } from 'react-router-dom'
// import Home from './Pages/Home/Home'
// import Video from './Pages/Video/Video'



// const App = () => {
//   const[sidebar,setSidebar]=useState(true);
//   return (
//     <div>
//       <Navbar setSidebar={setSidebar}/>
      
//       <Routes>
//         <Route path='/' element={<Home sidebar={sidebar}/>}/>
//         <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App




// src/App.jsx
import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import { useTheme } from './ThemeContext'

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-mode' : 'dark-mode';
  }, [theme]);

  return (
    <div>
      <Navbar setSidebar={setSidebar} toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </div>
  )
}

export default App



