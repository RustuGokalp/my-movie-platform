import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      accountID: null,
      sessionID: null,
      isLoggedIn: false,
      setAccountID: (id) => set({ accountID: id }),
      setSessionID: (id) => set({ sessionID: id }),
      setIsLoggedIn: (status) => set({ isLoggedIn: status }),
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
      partialize: (state) => ({
        accountID: state.accountID,
        sessionID: state.sessionID,
        isLoggedIn: state.isLoggedIn,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isLoggedIn = !!state.sessionID;
        }
      },
    }
  )
);

export default useAuthStore;
