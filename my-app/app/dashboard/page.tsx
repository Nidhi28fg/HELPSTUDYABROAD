import { redirect } from 'next/navigation';
import { Typography, Container, Button } from '@mui/material';
import { auth } from '@/auth';
import SignOut from "../components/SignOut";


export default async function Dashboard() {
  const session = await auth();
  console.log(session);
  if (!session) {
    return redirect("/signin");
  }
  const { user } = session;
 
  return (<>
    {user && (<Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Welcome, {user.name}!
      </Typography>
      <Typography variant="body1" paragraph>
        This is the protected dashboard.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        DummyJSON Token (Zustand/localStorage): 
      </Typography>
      <SignOut />
    </Container>
  )}
  </>);
}