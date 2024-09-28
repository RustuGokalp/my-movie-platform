import { create } from "zustand";
import { persist } from "zustand/middleware";

const useMovieCastStore = create(
  persist(
    (set) => ({
      movieCast: [],
      setMovieCast: (cast) => set({ movieCast: cast }),
    }),
    {
      name: "movie-cast-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useMovieCastStore;
