import {useDispatch, useSelector} from "react-redux";
import {addTopRated} from "../utils/movieSlice";
import {useEffect} from "react";
import {OPTIONS} from "../utils/constants";

const useTopRated = () => {
  const dispatch = useDispatch();

  const topRated = useSelector(
    (store) => store.movies.topRated
  );

  const fetchTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      OPTIONS
    );

    const jsonData = await data.json();

    dispatch(addTopRated(jsonData.results));
  };

  useEffect(() => {
    !topRated && fetchTopRated();
  }, []);
};

export default useTopRated;