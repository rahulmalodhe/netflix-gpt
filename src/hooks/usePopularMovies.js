import {useDispatch, useSelector} from "react-redux";
import {addPopularMovies} from "../utils/movieSlice";
import {useEffect} from "react";
import {OPTIONS} from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector(
    (store) => store.movies.popularMovies
  );

  const fetchPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      OPTIONS
    );

    const jsonData = await data.json();

    dispatch(addPopularMovies(jsonData.results));
  };

  useEffect(() => {
    !popularMovies && fetchPopularMovies();
  }, []);
};

export default usePopularMovies;