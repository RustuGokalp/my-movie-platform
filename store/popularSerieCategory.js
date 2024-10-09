import { create } from "zustand";

const usePopularSeriesCategoryStore = create((set) => ({
  popularSeries: [],
  selectedCategory: { id: "", series: [] },
  tvGenres: [],

  setPopularSeries: (series) => set({ series }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setTvGenres: (tvGenres) => set({ tvGenres }),
}));

export default usePopularSeriesCategoryStore;
