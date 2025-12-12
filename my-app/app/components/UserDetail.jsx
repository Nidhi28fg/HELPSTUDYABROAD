'use client'
 
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";
import axios from "axios";



export default function UserDetail() {
    const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [data, setData] = useState(null);
  const params = useParams<{ id: string}>
  console.log(params)

 useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${params.id}`)
      .then((response) => {
        setData(response.data);
        

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

return <>

kjkl

</>
}