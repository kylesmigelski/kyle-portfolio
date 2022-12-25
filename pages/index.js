import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 8 }}>
        <Typography variant="h5" component="h1" gutterBottom sx={{ my: 4 }}> Welcome to the portfolio of </Typography>
        <Typography variant="h1" sx = {{fontFamily: 'Fjalla One'}}> Kyle Smigelski </Typography>


        <Copyright />
      </Box>
    </Container>
  );
}
