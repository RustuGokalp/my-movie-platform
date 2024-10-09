import { create } from "zustand";
import { persist } from "zustand/middleware";
const useSerieDetailStore = create(
  persist(
    (set) => ({
      serieDetail: [],
      setSerieDetail: (detail) => set({ serieDetail: detail }),
    }),
    {
      name: "serie-detail-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useSerieDetailStore;
