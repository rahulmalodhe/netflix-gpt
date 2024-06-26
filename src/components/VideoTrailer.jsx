import {useSelector} from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoTrailer = ({movieId}) => {
  const movieTrailer = useSelector((store) => store.movies?.trailerVideos);

  useTrailerVideo(movieId);

  return (
    <div className="w-screen md:p-0 pt-[45%] ">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${movieTrailer?.key}?autoplay=1&mute=1&controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; "
      ></iframe>
    </div>
  );
};

export default VideoTrailer;
