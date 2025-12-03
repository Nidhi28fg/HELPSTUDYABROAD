// "use client";
// // pages/dashboard.js
// import { useSession, signOut } from 'next-auth/react';
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { Typography, Container, Button } from '@mui/material';
// import { useAuthStore } from '@/stores/useAuthStore';

// export default function Dashboard() {
//   const { data: session, status } = useSession();
//   const router = useRouter();
//   const setToken = useAuthStore((state) => state.setToken);
//   const token = useAuthStore((state) => state.token); // Token from Zustand

//   // **Route Protection Logic**
//   useEffect(() => {
//     if (status === 'loading') return; // Do nothing while loading
    
//     if (status === 'unauthenticated') {
//       // Redirect unauthenticated users to the login page
//       router.push('/signIn');
//     }
//     // } else if (session?.accessToken) {
//     //   // **Store the token in Zustand (and localStorage via the store)**
//     //   setToken(session.accessToken);
//     // }
//   }, [status, session, router, setToken]);

//   if (status === 'loading' || status === 'unauthenticated') {
//     return <Typography align="center" sx={{ mt: 4 }}>Loading...</Typography>;
//   }

//   // Content for authenticated users
//   return (
//     <Container sx={{ mt: 4 }}>
//       <Typography variant="h3" gutterBottom>
//         Welcome, {session.user.username}!
//       </Typography>
//       <Typography variant="body1" paragraph>
//         This is the protected dashboard.
//       </Typography>
//       <Typography variant="body2" color="text.secondary">
//         DummyJSON Token (Zustand/localStorage): **{token}**
//       </Typography>
//       <Button
//         variant="contained"
//         color="secondary"
//         onClick={() => {
//           signOut({ redirect: false }); // Log out from NextAuth
//           setToken(null); // Clear token from Zustand/localStorage
//           router.push('/login');
//         }}
//         sx={{ mt: 3 }}
//       >
//         Sign Out
//       </Button>
//     </Container>
//   );
// }