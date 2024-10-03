import axios from "axios";
import useAuthStore from "@/store/authStore";
const API_URL = "https://api.themoviedb.org/3/";

const fetchMovieApi = async (pathname, query = "") => {
  try {
    const response = await axios.get(`${API_URL}${pathname}`, {
      params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
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

// Create Request Token
const createRequestToken = async () => {
  try {
    const response = await axios.get(`${API_URL}authentication/token/new`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_AUTH}`,
      },
    });
    return response.data.request_token;
  } catch (error) {
    throw new Error(
      error.response ? error.response.data.status_message : error.message
    );
  }
};

// Validate Request Token (Login)
const validateWithLogin = async (username, password, requestToken) => {
  try {
    const response = await axios.post(
      `${API_URL}authentication/token/validate_with_login`,
      {
        username,
        password,
        request_token: requestToken,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_AUTH}`,
        },
      }
    );
    return response.data.request_token;
  } catch (error) {
    throw new Error(
      error.response ? error.response.data.status_message : error.message
    );
  }
};

// Create Session ID and set it to localStorage
const createSession = async (requestToken) => {
  try {
    const response = await axios.post(
      `${API_URL}authentication/session/new`,
      {
        request_token: requestToken,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_AUTH}`,
        },
      }
    );

    const sessionId = response.data.session_id;

    const accountResponse = await axios.get(`${API_URL}account`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_AUTH}`,
      },
      params: {
        session_id: sessionId,
      },
    });
    const accountId = accountResponse.data.id;

    const { setAccountID, setSessionID } = useAuthStore.getState();
    setAccountID(accountId);
    setSessionID(sessionId);

    return { sessionId, accountId };
  } catch (error) {
    throw new Error(
      error.response ? error.response.data.status_message : error.message
    );
  }
};

const accountDetail = async (accountID) => {
  try {
    const response = await axios.get(`${API_URL}account/${accountID}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_AUTH}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response ? error.response.data.status_message : error.message
    );
  }
};

// Delete Session (Signout)
const deleteSession = async (sessionId) => {
  try {
    const response = await axios.delete(`${API_URL}authentication/session`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_AUTH}`,
      },
      data: {
        session_id: sessionId,
      },
    });

    const { setAccountID, setSessionID } = useAuthStore.getState();
    setAccountID(null);
    setSessionID(null);
    localStorage.removeItem("auth-storage");

    return response.data;
  } catch (error) {
    throw new Error(
      error.response ? error.response.data.status_message : error.message
    );
  }
};

const addToWatchlist = async (movieId) => {
  const { sessionID, accountID } = useAuthStore.getState();

  if (!sessionID || !accountID) {
    throw new Error("Session ID or Account ID is missing");
  }

  try {
    const response = await axios.post(
      `${API_URL}account/${accountID}/watchlist`,
      {
        media_type: "movie",
        media_id: movieId,
        watchlist: true,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_AUTH}`,
        },
        params: {
          session_id: sessionID,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response ? error.response.data.status_message : error.message
    );
  }
};

const getSingleCategory = async (genreId, page) => {
  return fetchMovieApi("discover/movie", { with_genres: genreId, page });
};

const getPopularMovies = async (page) => {
  return fetchMovieApi("movie/popular", { page });
};

const getTopRatedMovies = async (page) => {
  return fetchMovieApi("movie/top_rated", { page });
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

const getCast = async (movieID) => {
  return fetchMovieApi(`movie/${movieID}/credits`);
};

const getMovieTags = async (movieID) => {
  return fetchMovieApi(`movie/${movieID}/keywords`);
};

const getSimilarMovie = async (movieID) => {
  return fetchMovieApi(`movie/${movieID}/similar`);
};

const getMoviesInTheaters = async (page) => {
  return fetchMovieApi(`movie/now_playing`, { page });
};

const getUpcomingMovies = async (page) => {
  return fetchMovieApi(`movie/upcoming`, { page });
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
  createRequestToken,
  validateWithLogin,
  createSession,
  accountDetail,
  deleteSession,
  addToWatchlist,
  getCast,
  getMovieTags,
  getSimilarMovie,
  getMoviesInTheaters,
  getUpcomingMovies,
};
