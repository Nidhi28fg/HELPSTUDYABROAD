'use client'
 
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";
import axios from "axios";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));



export default function UserDetail() {
    const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [data, setData] = useState(null);
  const params = useParams();

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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 4, md: 4 }}>
          <Item>
      <img src={data.image} alt={`${data.firstName} ${data.lastName}`} />

            <Typography>{data.firstName}</Typography>
          </Item>
        </Grid>
        <Grid size={{ xs: 8, md: 8 }}>
          <Item>
           <h2>{data.firstName} {data.lastName}</h2>

      <p>Maiden Name: {data.maidenName}</p>
      <p>Age: {data.age}</p>
      <p>Gender: {data.gender}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Username: {data.username}</p>
      <p>Birth Date: {data.birthDate}</p>
      <p>Blood Group: {data.bloodGroup}</p>
      <p>Height: {data.height}</p>
      <p>Weight: {data.weight}</p>
      <p>Eye Color: {data.eyeColor}</p>
      <p>Hair: {data.hair.color} ({data.hair.type})</p>

      <h3>Address</h3>
      <p>{data.address.address}</p>
      <p>{data.address.city}, {data.address.state} ({data.address.stateCode})</p>
      <p>{data.address.postalCode}, {data.address.country}</p>
      <p>Coordinates: {data.address.coordinates.lat}, {data.address.coordinates.lng}</p>

      <h3>Bank</h3>
      <p>Card Number: {data.bank.cardNumber}</p>
      <p>Card Type: {data.bank.cardType}</p>
      <p>Expiry: {data.bank.cardExpire}</p>
      <p>IBAN: {data.bank.iban}</p>
      <p>Currency: {data.bank.currency}</p>

      <h3>Company</h3>
      <p>{data.company.title} - {data.company.department}</p>
      <p>{data.company.name}</p>
      <p>{data.company.address.address}, {data.company.address.city}</p>
      <p>{data.company.address.state} ({data.company.address.stateCode})</p>
      <p>{data.company.address.postalCode}, {data.company.address.country}</p>
      <p>Coordinates: {data.company.address.coordinates.lat}, {data.company.address.coordinates.lng}</p>

      <h3>Crypto</h3>
      <p>Coin: {data.crypto.coin}</p>
      <p>Wallet: {data.crypto.wallet}</p>
      <p>Network: {data.crypto.network}</p>

      <h3>Other Info</h3>
      <p>University: {data.university}</p>
      <p>IP: {data.ip}</p>
      <p>MAC Address: {data.macAddress}</p>
      <p>EIN: {data.ein}</p>
      <p>SSN: {data.ssn}</p>
      <p>User Agent: {data.userAgent}</p>
      <p>Role: {data.role}</p>
    




          </Item>
        </Grid>
       
      </Grid>
    </Box>
</>
}