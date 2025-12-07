'use client';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
     h4 :{
    fontSize:'1rem',
     '@media (min-width:700px)': {
       fontSize:'1.5rem',
    },
    
    '@media (min-width:1000px)': {
       fontSize:'2.5rem',
    },
    
  },
    h6 :{
    fontSize:'0.8rem',
     '@media (min-width:700px)': {
       fontSize:'1.2rem',
    },
    
    '@media (min-width:1000px)': {
       fontSize:'2rem',
    },
    
  },

  },
 });

export default theme;
