import {useDispatch, useSelector} from "react-redux";
import {addTrailerVideos} from "../utils/movieSlice";
import {useEffect} from "react";
import {OPTIONS} from "../utils/constants";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector((store) => store.movies.trailerVideos);

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos",
      OPTIONS
    );
    const jsondata = await response.json();
    const movieTrailer = jsondata;
    const filterTrailer = movieTrailer.results.filter((movie)=> movie.type === "Trailer")
    console.log("filterTrailer", filterTrailer[0])
    const trailerVideo = filterTrailer? filterTrailer[0] :movieTrailer?.results[0]
    dispatch(addTrailerVideos(trailerVideo));
  };

  useEffect(() => {
    !movieTrailer && fetchMovies();
  }, []);
};

export default useTrailerVideo;