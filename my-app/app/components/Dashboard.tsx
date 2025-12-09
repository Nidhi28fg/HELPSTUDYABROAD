"use client";

import { Typography, Button, Avatar } from '@mui/material';
import SignOut from "../components/SignOut";
import { useAuthStore } from "@/stores/useAuthStore";
import { useEffect } from 'react';
import Sidebar from './Sidebar';
import PaginationRounded from './Pagination';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/GridLegacy';


interface Props {
  user1: {
    name: string;
    email: string;
    image: string;
  };
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  height: '100vh',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function Dashboard({ user1 }: Props) {

  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore(((state) => state.user));
  const clearUser = useAuthStore((state) => state.clearUser);
  useEffect(() => {
    setUser(user1);
  }, [user1, setUser]);

  if (!user) {
    clearUser();
  }

  return (<>
    {user && (<>
     <Box 
      sx={{ flexGrow: 1,
 
       }}
      >
        <Grid container spacing={2}>
          <Grid item xs={3} md={1}>
            <Item>
              <Sidebar />
            </Item>
          </Grid>

          <Grid item xs={9} md={11} >
            <Item>
              <div className='flex justify-center items-center gap-5 '>
                <Avatar alt={user.name} src={user.image} 
                sx={{ width:{ 
                  xs:34,
                  sm:44,
                  md:84,
                }, height:{
                  xs:34,
                  sm:44,
                  md:84,
                }, 
              }}
                 />
                 <div className='flex flex-col justify-center items-center'>
                <Typography variant="h4" gutterBottom >
                  Welcome, {user.name}!
                  
                </Typography>
                <Typography variant="h6" gutterBottom >
                    Email: {user.email}
                  </Typography>
                  </div>
              </div>
              </Item>
               <Item>User List </Item> 
               <Item><PaginationRounded /> </Item>
           
          </Grid>
        </Grid>
      </Box>

    </>
    )}
  </>);
}