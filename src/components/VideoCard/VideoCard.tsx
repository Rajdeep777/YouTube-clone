const VideoCard = (props: any) => {
  return (
    <>
      <div className="p-2">
      <img className="rounded-lg hover:rounded-none w-lg h-75 object-cover"src={props.image} alt="salar" />
      <div className="grid grid-cols-8 pt-2">
        <div className="col-span-1">
          <img
            className="w-16 h-16 rounded-full"
            src={props.image}
            alt="salar"
          />
        </div>
        <div className="col-span-7 text-lg pl-2">
          <div>{props.title}</div>
          <div className="col-span-7 text-gray-400 text-xs">
            {props.channelName}
          </div>
          <div className="col-span-7 text-gray-400 text-xs">
            {props.views} | {props.timestamp}
          </div>
        </div>
        </div>
      </div>
        
    </>
  );
};
export default VideoCard;
