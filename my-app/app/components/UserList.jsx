"use client";

import { useEffect, useState } from "react";
import axios from "axios";
export default function UserList() {

  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
           axios
            .get("https://dummyjson.com/users?limit=10&skip=0")
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
  <div>
            <h1>Posts</h1>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.firstName}</li>
                ))}
            </ul>
        </div>
    );
}