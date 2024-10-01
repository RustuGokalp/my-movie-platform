import { create } from "zustand";

const usePopularMovieCategoryStore = create((set) => ({
  popularmovies: [],
  selectedCategory: { id: "", movies: [] },
  genres: [],

  setPopularMovies: (movies) => set({ movies }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setGenres: (genres) => set({ genres }),
}));

export default usePopularMovieCategoryStore;
