import { create } from "zustand";
import { persist } from "zustand/middleware";
const useMovieDetailStore = create(
  persist(
    (set) => ({
      movieDetail: [],
      setMovieDetail: (detail) => set({ movieDetail: detail }),
    }),
    {
      name: "movie-detail-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useMovieDetailStore;
