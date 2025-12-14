"use client";

import Box, { BoxProps } from "@mui/material/Box";

interface DetailBoxProps {
  detailname: string;
  detail: string | number; // jo bhi aa raha ho (role, age, etc.)
}
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

const DetailBox: React.FC<DetailBoxProps>=({detailname, detail})=>{
 
return <>
 <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 0.2,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
           border: '1px solid',
        }}
      >
        <Item
        sx={{
          border: 'none',
          bgcolor: 'white',

        }}
        >{detailname} </Item>
        <Item>{detail}</Item>
    
      </Box>
</>

}

export default DetailBox;