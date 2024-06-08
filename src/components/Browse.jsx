import { useSelector } from "react-redux";
import useNowPLayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";

const Browse = () => {
  useNowPLayingMovies();
  usePopularMovies();
  useTopRated();

  const isGpt = useSelector((store)=>store.gpt.toggleShowGpt)

  return (
    <div>
      <Header />
      <div>
        {isGpt? <GptSearch />: <>
          <MainContainer />
        <SecondaryContainer />
        </>}
        
      </div>
    </div>
  );
};

export default Browse;
