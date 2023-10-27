import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="player-wrapper">
      <video className='w-[3000px] mix-blend-multiply h-full' autoPlay muted loop>
        <source src={"https://res.cloudinary.com/ddeqh8bh3/video/upload/v1696062328/ogaxbzjyfd0bhhjgm7xg.mp4"} type="video/mp4"/>
      </video>
    </div>
  );
};

export default VideoPlayer;
