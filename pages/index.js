import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../src/Copyright';
import Particles from "../components/ParticleBG";
import Card from "@mui/material/Card";
import {alpha, Grid, Icon, makeStyles, Stack, SvgIcon, Tooltip} from "@mui/material";
import Button from "@mui/material/Button";
import GitHubIcon from '@mui/icons-material/GitHub';
import * as PropTypes from "prop-types";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import Container from "@mui/material/Container";


export default function Index() {
    return (
        <Box>
            <Container maxWidth="lg">
                <Particles id="tsparticles"/>
                <Grid sx={{flexGrow: 1}} container spacing={2}>
                    <Grid item>
                        <Typography variant="h5" component="h5" sx={{my: 4, color: '#f58497'}}> Welcome to the portfolio
                            of </Typography>
                        <Typography variant="h1" component="h1" sx={{fontFamily: 'Fjalla One', color: 'white'}}> Kyle
                            Smigelski </Typography>
                    </Grid>
                    <Grid item>
                    <Typography variant="h6" component="h6" gutterBottom sx={{color: 'grey'}}> Grand Valley State
                        University 2020 - 2024</Typography>
                    <Typography variant="h5" component="h1" gutterBottom sx={{my: 4, color: 'white'}}> I am a current
                        computer science student with a passion for coding, design, and photography.
                        Check out my links for more info!</Typography>
                    </Grid>
                    {/*<Card sx={{ backgroundColor: alpha('#000000', 0.7), flexGrow: 1, width: '70vw', height: '10vw', pl: 2, pt: 0}}>*/}
                    <Grid container spacing={2}>
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
                                <a target="_blank" href='https://photos.app.goo.gl/b1qXwLsajX6cUfDh9'
                                   rel="noopener noreferrer">
                                    <PhotoLibraryIcon sx={{color: '#f58497', fontSize: 80}}/>
                                </a>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <Tooltip title="Download Resume">
                                <a target="_blank"
                                   href='https://docs.google.com/document/d/1JIhGM345fVbXQ_WO8XoTGOngSrI3olIphZjYhudlcqA/export/pdf'
                                   rel="noopener noreferrer">
                                    <FileOpenIcon sx={{color: '#f58497', fontSize: 80}}/>
                                </a>
                            </Tooltip>
                        </Grid>
                        </Grid>
                        <Copyright/>
                    </Grid>
            </Container>
        </Box>
);
}
