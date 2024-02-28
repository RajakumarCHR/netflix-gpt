import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/videos`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results?.filter(
      (result) => result.type === "Trailer"
    );
    const trailer = filterData?.length ? filterData[2] : json?.result[0];

    dispatch(addTrailerVideo(trailer));
  };
};
export default useMovieTrailer;
