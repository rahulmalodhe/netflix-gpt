import {POSTER_URL} from "../utils/constants";

const MovieCard = ({poster}) => {
  if (!poster) return null;

  return (
    <div className="w-36 md:w-48 pr-4">
      <img src={POSTER_URL + poster} alt="movie" />
    </div>
  );
};

export default MovieCard;
