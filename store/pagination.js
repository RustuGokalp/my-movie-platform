import { create } from "zustand";

const usePaginationStore = create((set) => ({
  page: 1,
  totalPages: null,
  setPage: (newPage) => set({ page: newPage }),
  setTotalPages: (totalPages) => set({ totalPages }),
}));

export default usePaginationStore;
