import React from 'react';
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";

export default ({path}) =>{
  return (
    <div>
      { path && <Player
                  autoPlay
                  fluid={false}
                  height={400}
                  width={400}
                  src={path}
                />}
    </div>
  );
}
