import * as React from 'react';
import Link from '../src/Link';
import Container from "@mui/material/Container";
import {ThemeProvider} from "@mui/material/styles";
import Theme from "../src/theme";
import Box from "@mui/material/Box";
import ParticleBG from "../components/ParticleBG";
import Head from "next/head";
import Typography from "@mui/material/Typography";
import ExperienceTabs from "../components/ExperienceTabs";
import Copyright from "../src/Copyright";

export default function projects() {
    return (
        <ThemeProvider theme={Theme}>
            <Head>
                <title>Projects - Kyle Smigelski</title>
                <meta name="description" content="Projects page"/>
            </Head>
            <ParticleBG id="tsparticles"/>
            <Box sx={{mx: 2, my: 4}}>
                <Container maxWidth="lg">
                    <Typography variant="h2" component="h2" align="center"
                                sx={{my: 2, fontFamily: 'Fjalla One', color: 'white'}}> My Projects </Typography>
                </Container>
            </Box>
            <Copyright/>
        </ThemeProvider>
    );
}
