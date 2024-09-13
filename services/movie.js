import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/";

const fetchMovieApi = async (pathname, query = "") => {
  try {
    const response = await axios.get(`${API_URL}${pathname}`, {
      params: {
        api_key: process.env.API_KEY,
        ...query,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response ? error.response.data.status_message : error.message
    );
  }
};

const getSingleCategory = async (genreId) => {
  return fetchMovieApi("discover/movie", { with_genres: genreId });
};

const getPopularMovies = async () => {
  return fetchMovieApi("movie/popular", { page: 1 });
};

const getTopRatedMovies = async () => {
  return fetchMovieApi("movie/top_rated", { page: 1 });
};

const getCategories = async () => {
  return fetchMovieApi("genre/movie/list");
};

const getActors = async () => {
  return fetchMovieApi("person/popular");
};

const getActorDetail = async (id) => {
  return fetchMovieApi(`person/${id}`);
};

const getMovie = async (movieId) => {
  return fetchMovieApi(`movie/${movieId}`);
};

export {
  fetchMovieApi,
  getSingleCategory,
  getPopularMovies,
  getTopRatedMovies,
  getCategories,
  getActors,
  getActorDetail,
  getMovie,
};
