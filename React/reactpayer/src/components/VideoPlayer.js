import React from "react";
import { Player } from "react-player";

const VideoPlayer = () => {
  return (
    <div>
      <Player
        src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        width="100%"
        height="100vh"
        controls
        loop
        muted
        autoPlay
      />
    </div>
  );
};

export default VideoPlayer;
