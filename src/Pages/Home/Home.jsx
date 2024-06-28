// import React, { useState } from 'react'
// import  './Home.css'
// import Sidebar from '../../Components/Sidebar/Sidebar'
// import Feed from '../../Components/Feed/Feed'

// const Home = ({sidebar}) => {

//   const [category,setCategory]=useState(0);
//   return (
//     <>
// <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
// <div className={`container ${sidebar?"":'large-container'}`}>
//     <Feed category={category}/>
// </div>
//     </>
//   )
// }

// export default Home

// src/Components/Home/Home.jsx
import React, { useState } from 'react';
import './Home.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';
import { useTheme } from '../../ThemeContext'; // Assuming you have a ThemeContext for managing dark mode

const Home = ({ sidebar }) => {
  const { theme } = useTheme(); // Theme context hook

  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div className={`container ${sidebar ? '' : 'large-container'} ${theme === 'dark' ? 'dark-mode' : ''}`}>
        <Feed category={category} />
      </div>
    </>
  );
};

export default Home;
