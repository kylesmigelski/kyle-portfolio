import * as React from "react"
import Theme from "../src/theme";
import Particles from "../components/ParticleBG";
import Typography from "@mui/material/Typography";
import {ThemeProvider} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Head from "next/head";
import Copyright from "../src/Copyright";
import Carousel from "../components/Carousel";

const OPTIONS = { align: 'center' }
const SLIDE_COUNT = 2
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function about() {
    return (
        <ThemeProvider theme={Theme}>
            <Head>
                <title>About - Kyle Smigelski</title>
                <meta name="description" content="About page"/>
            </Head>
            <Particles id="tsparticles"/>
            <Box sx={{mx: 2, my: 4, bgcolor: 'rgba(0, 0, 0, 0.85)'}}>
                <Container maxWidth="lg">
                    <Typography variant="h2" component="h2" align="left"
                                sx={{my: 2, fontFamily: 'Fjalla One', color: 'white'}}> About Me </Typography>
                    <Box sx={{my: 4}}>
                        <Typography variant="h5" component="h5" gutterBottom sx={{color: 'white', mb: 2}}>
                            Hi! I am a computer science student at Grand Valley State University. I am currently a
                            Junior and expect to graduate in 2024. </Typography>
                        <Typography variant="h5" component="h5" gutterBottom sx={{color: 'white', mb: 2}}>
                            I have always had a knack for computers and technology, as well as art and design. For that reason, I
                            decided to pursue a career in computer science - with a focus on web development and UI design. </Typography>
                        <Typography variant="h5" component="h5" gutterBottom sx={{color: 'white', mb: 6}}>
                            I am currently looking for a summer internship for 2022! </Typography>
                    </Box>
                </Container>
            </Box>

            <Carousel slides={SLIDES} options={OPTIONS} />

            <Copyright />
        </ThemeProvider>
    )
}