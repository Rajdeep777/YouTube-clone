import React from "react";
import VideoCard from "../VideoCard/VideoCard";
const VideoGrid = () => {
  const videos = [
    {
      title: "Salaar: Part 1 - Ceasefire | Prabhas",
      channelName: "T-Series",
      views: "48M",
      timestamp: "1 months ago",
      image: "salar.jpg",
    },
    {
      title: "Extraction | Chis Hemsworth",
      channelName: "T-Series",
      views: "35M",
      timestamp: "2 years ago",
      image: "extraction.jpg",
    },
    {
      title: "Fighter | Hrithik Roshan",
      channelName: "T-Series",
      views: "28M",
      timestamp: "6 months ago",
      image: "fighter.jpg",
    },
    {
      title: "Avengers: Endgame | Robert Downy Junior",
      channelName: "T-Series",
      views: "280M",
      timestamp: "8 months ago",
      image: "endgame.jpg",
    },
    {
      title: "Kalki 2898 AD | Prabhas",
      channelName: "T-Series",
      views: "75M",
      timestamp: "3 months ago",
      image: "kalki.jpg",
    },
    {
      title: "K.G.F: Chapter 2 | Yash",
      channelName: "T-Series",
      views: "322M",
      timestamp: "1 years ago",
      image: "kgf.jpg",
    },
    {
      title: "John Wick | Keanu Reeves",
      channelName: "T-Series",
      views: "900M",
      timestamp: "8 months ago",
      image: "john.jpg",
    },
    {
      title: "Rocky Handsome | John Abraham",
      channelName: "T-Series",
      views: "40M",
      timestamp: "8 months ago",
      image: "rocky.jpg",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {videos.map((video) => (
          <div>
            <VideoCard
              title={video.title}
              channelName={video.channelName}
              views={video.views}
              timestamp={video.timestamp}
              image={video.image}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoGrid;
