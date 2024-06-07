import {useDispatch, useSelector} from "react-redux";
import {addNowPlayingMovies} from "../utils/movieSlice";
import {useEffect} from "react";
import {OPTIONS} from "../utils/constants";

const useNowPLayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  const fetchMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      OPTIONS
    );

    const jsonData = await data.json();

    dispatch(addNowPlayingMovies(jsonData?.results));
  };

  useEffect(() => {
    !nowPlayingMovies && fetchMovies();
  }, []);
};

export default useNowPLayingMovies;
