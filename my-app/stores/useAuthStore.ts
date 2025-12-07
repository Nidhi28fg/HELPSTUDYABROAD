import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';  // Optional: persistence + devtools

export type UserState = {
  user:  { name: string; email: string; image: string } | null;  // number | string → string | null बेहतर
}

export type UserActions = {
  setUser: (newUser: { name: string; email: string; image: string } | null) => void;
  clearUser: () => void;  
}

export type UserStore = UserState & UserActions;

export const useAuthStore = create<UserStore>()(
  devtools(  
    persist(  
      (set, get) => ({
        user: null,  
        setUser: (newUser) => {
          console.log("🔥 setUser called:", newUser);  // Debug log
          set({ user: newUser });
        },
        clearUser: () => {
          console.log("🗑️ clearUser called");
          set({ user: null });
          if (typeof window !== "undefined") {
            localStorage.removeItem("auth-storage");
          }
        }
      }),
      {
        name: 'auth-storage', 
      }
    ),
    { name: 'AuthStore' } 
  )
);


export const authStore = useAuthStore;
