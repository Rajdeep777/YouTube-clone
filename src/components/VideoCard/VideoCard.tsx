const VideoCard = (props: any) => {
  return (
    <>
      <div className="p-2">
        <img
          className="rounded-xl hover:rounded-none cursor-pointer sm:w-3xl sm:h-96 md:w-lg md:h-64 lg:w-md lg:h-48 object-cover"
          src={props.image}
          alt="salar"
        />
        <div className="grid grid-cols-8 pt-2 cursor-pointer">
          <div className="col-span-1">
            <img
              className="w-18 h-12 rounded-full object-cover"
              src={props.image}
              alt="salar"
            />
          </div>
          <div className="col-span-7 pl-3 cursor-pointer">
            <div className="font-bold">{props.title}</div>
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
