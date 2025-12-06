import SignOut from "../components/SignOut";
import { useAuthStore } from "@/stores/useAuthStore";
import { useEffect } from 'react';



export default function Page() {

   const clearUser = useAuthStore((state) => state.clearUser);
   useEffect(()=>{
    clearUser();
   },[]);
  return (
    <SignOut/>
  );
}