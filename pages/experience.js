import * as React from 'react';
import Container from "@mui/material/Container";
import {ThemeProvider} from "@mui/material/styles";
import Theme from "../src/theme";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ExperienceTabs from "../components/ExperienceTabs";
import Particles from "../components/ParticleBG";
import Copyright from "../src/Copyright";

export default function experience() {
    return (
        <ThemeProvider theme={Theme}>
            <Particles id="tsparticles"/>
            <Box sx={{mx: 2, my: 4}}>
                <Container maxWidth="lg">
                    <Typography variant="h2" component="h2" align="center"
                                sx={{my: 2, fontFamily: 'Fjalla One', color: 'white'}}> Professional Experience </Typography>
                    <ExperienceTabs />
                </Container>
            </Box>
            <Copyright/>
        </ThemeProvider>
    );
}