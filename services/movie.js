import axios from "axios";
import useAuthStore from "@/store/store";
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

const addToWatchlist = async (movieId) => {
  const { sessionID, accountID } = useAuthStore.getState();

  if (!sessionID || !accountID) {
    throw new Error("Session ID or Account ID is missing");
  }

  try {
    const response = await axios.post(
      `${API_URL}account/${accountId}/watchlist`,
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
  createRequestToken,
  validateWithLogin,
  createSession,
  addToWatchlist,
};
