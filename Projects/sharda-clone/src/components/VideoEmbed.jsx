import React from "react";

const VideoEmbed = ({ videoId }) => {
  return (
    <div className="overflow-hidden h-[310px] md:h-[200px] 2xl:w-[375px] 2xl:h-[209px] rounded-lg">
      <iframe
        className=" w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
