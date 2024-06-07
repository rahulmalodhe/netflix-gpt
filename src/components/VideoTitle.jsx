import Play from "../assets/play.png";

const VideoTitle = ({original_title, overview}) => {
  const truncateString = (text) => {
    return text.substring(0, 200) + "...";
  };
  return (
    <div className="absolute w-screen aspect-video bg-gradient-to-tr from-black text-white px-12 pt-[20%]">
      <h1 className="font-bold text-2xl mb-4 md:text-5xl w-1/2">
        {original_title}
      </h1>
      <p className="hidden md:inline-block py-6 text-sm w-1/3">
        {truncateString(overview)}
      </p>
      <div className="flex flex-row w-1/4">
        <button className="px-8 py-2 mr-8 bg-white text-black flex items-center rounded-md hover:opacity-80">
          <img className="w-6 mr-2" src={Play} alt="play" />
          <p className="text-lg">Play</p>
        </button>
        <button className="px-8 py-3 bg-slate-700 flex items-center rounded-md  hover:opacity-80">
          <svg
          className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            role="img"
            data-icon="CircleIStandard"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
              fill="currentColor"
            ></path>
          </svg>
          <p>More info</p>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
