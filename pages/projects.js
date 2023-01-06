import * as React from 'react';
import Container from "@mui/material/Container";
import {ThemeProvider} from "@mui/material/styles";
import Theme from "../src/theme";
import Box from "@mui/material/Box";
import ParticleBG from "../components/ParticleBG";
import Head from "next/head";
import Typography from "@mui/material/Typography";
import Copyright from "../src/Copyright";
import Grid from "@mui/material/Grid";
import Project1 from "../components/Projects/Project1";
import Project2 from "../components/Projects/Project2";
import Project3 from "../components/Projects/Project3";

export default function projects() {
    return (
        <ThemeProvider theme={Theme}>
            <Head>
                <title>Projects - Kyle Smigelski</title>
                <meta name="description" content="Projects page"/>
            </Head>
            <ParticleBG id="tsparticles"/>
            <Box alignContent="center">
                <Container maxWidth="lg">
                    <Typography variant="h2" component="h2" align="center"
                                sx={{my: 4, fontFamily: 'Fjalla One', color: 'white'}}> My Projects </Typography>
                </Container>
                <Grid container spacing={3} align = "center" justify = "center" alignItems = "center">
                    <Grid item xs={12} sm={4}>
                        <Project1/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Project2/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Project3/>
                    </Grid>
                </Grid>
            </Box>
            <Copyright/>
        </ThemeProvider>
    );
}
