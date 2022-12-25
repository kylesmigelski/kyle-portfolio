import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../src/Copyright';
import Particles from "../components/ParticleBG";

export default function Index() {
  return (
    <Container maxWidth="lg">
        <Particles id="tsparticles" />
      <Box sx={{ my: 8 }}>
        <Typography variant="h5" component="h1" gutterBottom sx={{ my: 4, color: 'white'}}> Welcome to the portfolio of </Typography>
        <Typography variant="h1" sx = {{fontFamily: 'Fjalla One', color: 'white'}}> Kyle Smigelski </Typography>


        <Copyright />
      </Box>
    </Container>
  );
}
