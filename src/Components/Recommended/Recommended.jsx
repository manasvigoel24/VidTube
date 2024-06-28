// import React, { useEffect, useState } from 'react'
// import './Recommended.css'

// import { API_KEY, value_converter } from '../../data'
// import { Link } from 'react-router-dom';
// const Recommended = ({categoryId}) => {

// const [apiData,setApidata]=useState([]);

// const fetchData=async()=>{
//     const relatedVideo_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
//     await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApidata(data.items));
// }

// useEffect(()=>{
// fetchData();
// },[])
//   return (
//     <div className='recommended'>
//         {apiData.map((item,index)=>{
//             return(
//                 <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index}className="side-video-list">
//                 <img src={item.snippet.thumbnails.medium.url} alt="" />
//                 <div className="vid-info">
//                     <h4>{item.snippet.title}</h4>
//                     <p>{item.snippet.channelTitle}</p>
//                     <p>{value_converter(item.statistics.viewCount)} Views</p>
//                 </div>
//             </Link>
//             )
//         })}
       
       
//     </div>
//   )
// }

// export default Recommended

// src/Components/Recommended/Recommended.jsx
import React, { useEffect, useState } from 'react';
import './Recommended.css';
import { API_KEY, value_converter } from '../../data';
import { Link } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  const { theme } = useTheme();

  const fetchData = async () => {
    const relatedVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideoUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  return (
    <div className={`recommended ${theme === 'dark' ? 'dark-mode' : ''}`}>
      {apiData.map((item, index) => (
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <div className="vid-info">
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.channelTitle}</p>
            <p>{value_converter(item.statistics.viewCount)} Views</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommended;

