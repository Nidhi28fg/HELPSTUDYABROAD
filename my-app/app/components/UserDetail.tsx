"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import DetailBox from "./DetailBox";
import { Interface } from "readline";


function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={[
        (theme) => ({
          p: 1,
          m: 1,
          // bgcolor: 'grey.100',
          color: 'grey.800',
          // border: '1px solid',
          borderColor: 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          ...theme.applyStyles('dark', {
            bgcolor: '#101010',
            color: 'grey.300',
            borderColor: 'grey.800',
          }),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    />
  );
}



export default function UserDetail() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null as any);
  const params = useParams();

  console.log(params);


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

  return (
    <Box>
      <Grid
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: 2,
        }}
      >
        <Grid>
          <Item >
            <div className="flex  justify-center items-center">
              <img
                src={data.image}
                alt={`${data.firstName} ${data.lastName}`}
              />
            </div>
            <Typography variant="h4" sx={{ textAlign: "center"}}>
              {data.firstName} {data.maidenName} {data.lastName}
            </Typography>
        
          <DetailBox detailname="Age" detail={data.age} />
<DetailBox detailname="Gender" detail={data.gender} />
<DetailBox detailname="Email" detail={data.email} />
<DetailBox detailname="Phone" detail={data.phone} />
<DetailBox detailname="Username" detail={data.username} />
          
          </Item>
        </Grid>
        <Grid>
          <Item>
          <Typography variant="h4" sx={{ textAlign: "center"}}>
              {data.lastName}'s Details
            </Typography>    
           
<DetailBox detailname="Birth Date" detail={data.birthDate} />
<DetailBox detailname="Blood Group" detail={data.bloodGroup} />
<DetailBox detailname="Height" detail={data.height} />
<DetailBox detailname="Weight" detail={data.weight} />
<DetailBox detailname="Eye Color" detail={data.eyeColor} />
<DetailBox
  detailname="Hair"
  detail={`${data.hair.color} (${data.hair.type})`}
/>

{/* Address */}
<DetailBox detailname="Address" detail={data.address.address} />
<DetailBox
  detailname="City / State"
  detail={`${data.address.city}, ${data.address.state} (${data.address.stateCode})`}
/>
<DetailBox
  detailname="Postal / Country"
  detail={`${data.address.postalCode}, ${data.address.country}`}
/>
<DetailBox
  detailname="Coordinates"
  detail={`${data.address.coordinates.lat}, ${data.address.coordinates.lng}`}
/>

{/* Bank */}
<DetailBox detailname="Card Number" detail={data.bank.cardNumber} />
<DetailBox detailname="Card Type" detail={data.bank.cardType} />
<DetailBox detailname="Expiry" detail={data.bank.cardExpire} />
<DetailBox detailname="IBAN" detail={data.bank.iban} />
<DetailBox detailname="Currency" detail={data.bank.currency} />

{/* Company */}
<DetailBox
  detailname="Job"
  detail={`${data.company.title} - ${data.company.department}`}
/>
<DetailBox detailname="Company" detail={data.company.name} />
<DetailBox
  detailname="Company Address"
  detail={`${data.company.address.address}, ${data.company.address.city}`}
/>
<DetailBox
  detailname="Company State"
  detail={`${data.company.address.state} (${data.company.address.stateCode})`}
/>
<DetailBox
  detailname="Company Postal / Country"
  detail={`${data.company.address.postalCode}, ${data.company.address.country}`}
/>
<DetailBox
  detailname="Company Coordinates"
  detail={`${data.company.address.coordinates.lat}, ${data.company.address.coordinates.lng}`}
/>

{/* Crypto */}
<DetailBox detailname="Coin" detail={data.crypto.coin} />
<DetailBox detailname="Wallet" detail={data.crypto.wallet} />
<DetailBox detailname="Network" detail={data.crypto.network} />

{/* Other Info */}
<DetailBox detailname="University" detail={data.university} />
<DetailBox detailname="IP" detail={data.ip} />
<DetailBox detailname="MAC Address" detail={data.macAddress} />
<DetailBox detailname="EIN" detail={data.ein} />
<DetailBox detailname="SSN" detail={data.ssn} />
<DetailBox detailname="User Agent" detail={data.userAgent} />
<DetailBox detailname="Role" detail={data.role} />

          </Item>
        </Grid>
      </Grid>
  
    </Box>
  );
}
