import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../src/Copyright';
import Particles from "../components/ParticleBG";
import {alpha, Grid, Icon, makeStyles, Stack, SvgIcon, Tooltip} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import Container from "@mui/material/Container";
import {ThemeProvider} from "@mui/material/styles";
import {motion, useAnimation, AnimatePresence} from "framer-motion";
import Theme from "../src/theme";
import {useEffect} from "react";
import Head from "next/head";

export default function Index() {
    return (
        <ThemeProvider theme={Theme}>
            <Head>
                <title>Home - Kyle Smigelski</title>
                <meta name="description" content="Home page"/>
            </Head>
            <Box sx={{mx: 2, my: 2}}>
                <Container maxWidth="lg">
                    <Particles id="tsparticles"/>
                    <Grid container direction={'column'}>
                        <Grid item xs>
                            <Typography variant="h5" component="h5" sx={{color: '#f58497'}}> Welcome to the portfolio
                                of </Typography>
                        </Grid>
                        <Grid item xs>
                            {/*<motion.div initial="hidden" animate="visible" variants={{
                                hidden: {
                                    scale: .8,
                                    opacity: 0
                                },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: .2
                                    }
                                },
                            }}>*/}
                                <Typography variant="h1" component="h1"
                                            sx={{my: 2, fontFamily: 'Fjalla One', color: 'white'}}> Kyle
                                    Smigelski </Typography>
                           {/* </motion.div>*/}
                        </Grid>
                        <Grid item xs>
                            <Typography variant="h5" component="h5" gutterBottom sx={{color: 'grey'}}> Grand Valley
                                State
                                University 2020 - 2024</Typography>
                            <Typography variant="h4" component="h4" gutterBottom sx={{my: 4, color: 'white'}}> I am a
                                current
                                computer science student with a passion for coding, design, and photography.
                                Check out my links for more info!</Typography>
                        </Grid>
                        {/*<Card sx={{ backgroundColor: alpha('#000000', 0.7), flexGrow: 1, width: '70vw', height: '10vw', pl: 2, pt: 0}}>*/}
                        <Grid container spacing={6} justifyContent={'Center'}>
                            <Grid item>

                                <Tooltip title="Github">
                                    <a target="_blank" href='https://www.github.com/kylesmigelski'
                                       rel="noopener noreferrer">
                                        <GitHubIcon sx={{color: '#f58497', fontSize: 75}}/>
                                    </a>
                                </Tooltip>
                            </Grid>
                            <Grid item>
                                <Tooltip title="LinkedIn">
                                    <a target="_blank" href='https://www.linkedin.com/in/kylesmigelski/'
                                       rel="noopener noreferrer">
                                        <LinkedInIcon sx={{color: '#f58497', fontSize: 80}}/>
                                    </a>
                                </Tooltip>
                            </Grid>
                            <Grid item>
                                <Tooltip title="Photography">
                                    <a target="_blank" href='https://kylesmigelski2.myportfolio.com/'
                                       rel="noopener noreferrer">
                                        <PhotoLibraryIcon sx={{color: '#f58497', fontSize: 80}}/>
                                    </a>
                                </Tooltip>
                            </Grid>
                            <Grid item>
                                <Tooltip title="Download Resume">
                                    <a href={'./resume.pdf'} target="_blank" rel="noreferrer">
                                        <FileOpenIcon  href={'./resume.pdf'} sx={{color: '#f58497', fontSize: 80}}/>
                                    </a>
                                </Tooltip>
                            </Grid>
                        </Grid>
                        <Box sx={{my: 4}}>
                        </Box>
                        <Copyright/>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    );
}
