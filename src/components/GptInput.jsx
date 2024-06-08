import {useDispatch, useSelector} from "react-redux";
import {BACKGROUND_IMG, OPTIONS} from "../utils/constants";
import languageConfig from "../utils/languageConfig";
import openai from "../utils/openai";
import {useRef} from "react";
import {addGptMovieResult} from "../utils/gptSearchSlice";

const GptInput = () => {
  const lanConfig = useSelector((store) => store.config.lang);
  const searchMovieText = useRef(null);
  const dispatch = useDispatch();

  const searchImdbMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&page=1",
      OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    const movieQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchMovieText.current.value +
      ". only give me names of 10 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const movieRecommendation = await openai.chat.completions.create({
      messages: [{role: "user", content: movieQuery}],
      model: "gpt-3.5-turbo",
    });

    const gptMovies =
      movieRecommendation?.choices[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movie) => searchImdbMovie(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults})
    );
  };

  return (
    <>
      <div className="fixed -z-10">
        <img src={BACKGROUND_IMG} alt="Wallpaper" className="w-screen h-screen object-cover"/>
      </div>
      <div className="text-white flex justify-center pt-[50%] md:pt-[15%]">
        <div className="md:w-1/2 md:absolute md:z-20">
          <form className="w-full flex md:justify-around ">
            <input
              ref={searchMovieText}
              className="p-2 rounded-md md:p-4 md:w-[80%] text-black w-[100%]"
              type="search"
              placeholder={languageConfig[lanConfig].gptPlaceHolder}
            ></input>
            <button
              className="rounded-md bg-rose-600 px-8 ml-4 cursor-pointer hover:bg-rose-700"
              onClick={(e) => handleSearch(e)}
            >
              {languageConfig[lanConfig].search}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default GptInput;
