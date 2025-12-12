"use client";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAuthStore } from "@/stores/useAuthStore";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from '@mui/material/Link';
// import Link from 'next/link';


export default function User() {
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const setData = useAuthStore((state) => state.setData);
const data = useAuthStore(((state) => state.data));


  useEffect(() => {
    axios
      .get("https://dummyjson.com/users?limit=12&skip=0")
      .then((response) => {
        setData(response.data.users);
        console.log(response.data.users);

        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  console.log(data);

   
  return (
    <>
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: "10px",
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          height: "80px",
          zIndex: 1,
        }}
        elevation={3}
      >
        All Customer 
      </Typography>
      <ul className="flex flex-wrap gap-8 p-4 mt-30">
        {data.map((user, index) => (
          <li key={index}>
            <Card sx={{ maxWidth: 345, minHeight: 310 }}>
              <CardMedia
                sx={{ height: 100, width: 100 }}
                component="img"
                alt="green iguana"
                height="100"
                image={user.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {user.firstName} {user.maidenName} {user.lastName}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", minHeight: 80 }} >
                  {user.firstName} was student of {user.university},now he is work for {user.company.name} as {user.company.title} in {user.company.department} department.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="outlined" >Share</Button>
                <Button size="small" component={Link} href={`/dashboard/user/${user.id}`} variant="contained" >Learn More</Button>
          <Link href={`/dashboard/user/${user.id}`} >About Us</Link>
              </CardActions>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}
