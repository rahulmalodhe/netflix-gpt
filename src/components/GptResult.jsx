import {useSelector} from "react-redux";
import MovieList from "./MovieList";

const GptResult = () => {
  const {movieResults, movieNames} = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="p-6 m-4 bg-black text-white bg-opacity-90 rounded-md md:absolute md:z-20 md:top-[70%]">
      <div>
        {movieNames.map((movieName, index) => {
          return (
            <MovieList
              key={index}
              title={movieName}
              movies={movieResults[index]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GptResult;
