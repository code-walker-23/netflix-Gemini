import React from 'react'

const VideoBack = () => {
  return (
    <div>VideoBack</div>
  )
}

export default VideoBack

/* import React, { useState } from "react";
import { getYouTubeTrailerUrl_MUTE } from "../../utils/constant";

const VideoBackground = ({ id }) => {
  const [trailer, setTrailer] = useState(null);

  const youtubeKey = trailer?.key;
  const youtubeTrailerUrl = getYouTubeTrailerUrl_MUTE(youtubeKey);

  return (
    <div className="w-screen">
      {youtubeKey && (
        <iframe
          className="w-screen aspect-video absolute top-0 left-0 z-0 object-cover "
          src={youtubeTrailerUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
 */