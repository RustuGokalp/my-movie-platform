import { create } from "zustand";

const useAuthStore = create((set) => ({
  accountId: null,
  sessionId: null,
  setAccountId: (id) => set({ accountId: id }),
  setSessionId: (id) => set({ sessionId: id }),
}));

export default useAuthStore;
