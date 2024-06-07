import {useSelector} from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoTrailer from "./VideoTrailer";

const MainContainer = () => {
  const store = useSelector((store) =>store.movies?.nowPlayingMovies);

  if (!store) return;

  const mainMovie = store[0];
  const {id, overview, original_title} = mainMovie

  return (
    <div>
      <VideoTitle original_title={original_title} overview={overview} />
      <VideoTrailer movieId={id} />
    </div>
  );
};

export default MainContainer;
