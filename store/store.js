import { create } from "zustand";

const useAuthStore = create((set) => ({
  accountID: null,
  sessionID: null,
  setAccountID: (id) => set({ accountID: id }),
  setSessionID: (id) => set({ sessionID: id }),
}));

export default useAuthStore;
