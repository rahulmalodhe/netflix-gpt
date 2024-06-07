import useNowPLayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPLayingMovies();
  return (
    <div>
      <Header />
      <div className="">
        <MainContainer />
      </div>
    </div>
  );
};

export default Browse;
