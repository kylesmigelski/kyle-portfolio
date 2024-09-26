import * as React from "react"
import Theme from "../src/theme";
import Particles from "../components/ParticleBG";
import Typography from "@mui/material/Typography";
import {ThemeProvider} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Head from "next/head";
import Copyright from "../src/Copyright";
import Slides from "../components/Slides";

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
                            Hi! I am a software development professional with a background in computer science, having recently worked as a contract software developer at EnablePoint. I graduated from Grand Valley State University in 2024.
                        </Typography>
                        <Typography variant="h5" component="h5" gutterBottom sx={{color: 'white', mb: 2}}>
                            My passion for technology, combined with my experience in web development and UI design, has driven me to continually grow in the field. I enjoy solving complex problems, designing intuitive interfaces, and building reliable web applications.
                        </Typography>
                        <Typography variant="h5" component="h5" gutterBottom sx={{color: 'white', mb: 6}}>
                            I am currently seeking a full-time software development position where I can apply my skills in ASP.NET, C#, SQL, and front-end technologies, while continuing to learn and grow in my career.
                        </Typography>

                    </Box>
                </Container>
            </Box>
            <Box sx={{mx: 2, my: 2}}>
                <Container maxWidth="sm">
                    <Slides/>
                </Container>
            </Box>

            <Copyright/>
        </ThemeProvider>
    )
}