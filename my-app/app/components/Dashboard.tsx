"use client";

import { Typography, Container, Button } from '@mui/material';
import SignOut from "../components/SignOut";
import { useAuthStore } from "@/stores/useAuthStore";
import { useEffect } from 'react';
import Image from 'next/image';

interface Props {
  user1: {
    name: string;
    email: string;
    image: string;
  };
}

export default function Dashboard({ user1 }: Props) {
  
    const setUser = useAuthStore((state) => state.setUser);
    const user = useAuthStore(((state) => state.user));
    const clearUser = useAuthStore((state) => state.clearUser);
    useEffect(() => {
        setUser(user1);
    }, [user1, setUser]);

    if(!user){
        clearUser();
    }

  return (<>
    {user && (<Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Welcome, {user.name}!
      </Typography>
      <Typography variant="body1" paragraph>
        This is the protected dashboard. {user.email}!
      </Typography>
      <Typography variant="body2" >
        <Image 
        src={user.image}
        alt={user.name}
        height={100}
        width={100}
        />
         </Typography>
      <SignOut />
    </Container>
  )}
  </>);
}