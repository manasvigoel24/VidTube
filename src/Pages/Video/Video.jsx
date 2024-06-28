import React from 'react';
import './Video.css';
import PlayVideo from '../../Components/PlayVideo/PlayVideo';
import Recommended from '../../Components/Recommended/Recommended';
import { useParams } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';

const Video = () => {
  const { videoId, categoryId } = useParams();
  const { theme } = useTheme();

  return (
    <div className={`play-container ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <PlayVideo videoId={videoId} />
      <Recommended categoryId={categoryId} />
    </div>
  );
}

export default Video;
