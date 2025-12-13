import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';  

export type UserState = {
  user:  { name: string; email: string; image: string } | null; 
  data: null;
}

export type UserActions = {
  setUser: (newUser: { name: string; email: string; image: string } | null) => void;
  setData: (newData : any) => void;
  clearUser: () => void;  
}

export type UserStore = UserState & UserActions;

export const useAuthStore = create<UserStore>()(
  devtools(  
    persist(  
      (set, get) => ({
        user: null,
        data: null,
        setUser: (newUser) => {
          console.log("🔥 setUser called:", newUser);  
          set({ user: newUser });
        },
        setData: (newData) => {
          set({data: newData})
        },
        clearUser: () => {          
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
