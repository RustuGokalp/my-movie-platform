import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      accountID: null,
      sessionID: null,
      setAccountID: (id) => set({ accountID: id }),
      setSessionID: (id) => set({ sessionID: id }),
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
