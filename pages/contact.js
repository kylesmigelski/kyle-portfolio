import * as React from "react"
import {ThemeProvider} from "@mui/material/styles"
import Theme from "../src/theme";
import Head from "next/head";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ParticleBG from "../components/ParticleBG";

export default function contact() {
    return (
        <ThemeProvider theme={Theme}>
            <Head>
                <title>Projects - Kyle Smigelski</title>
                <meta name="description" content="Projects page"/>
            </Head>
            <ParticleBG id="tsparticles"/>
            <Box alignContent="center">
                <Typography variant="h4" component="h2" align="center"
                            sx={{my: 4, fontFamily: 'Fjalla One', color: 'white'}}> This page is under construction! Check back soon.</Typography>
            </Box>
        </ThemeProvider>

    )
}