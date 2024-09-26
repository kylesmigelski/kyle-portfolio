import * as React from 'react';
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../src/theme";
import Box from "@mui/material/Box";
import Head from "next/head";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Project from "../components/ProjectCard";
import Copyright from "../src/Copyright";
import Particles from "../components/ParticleBG";

const projectData = [
    {
        title: "InnoValuation TST",
        description: "Contributed to a mobile app to streamline Tuberculin Skin Tests. Integrated ROC Enroll for biometric security and secure photo uploading for test analysis.",
        image: "/innoval.png",
        link: "https://github.com/kylesmigelski/InnoValuationTST",
        button_text: "View on GitHub"
    },
    {
        title: "Personal Website",
        description: "Developed a personal portfolio using Next.js and MUI with modern design aesthetics and interactive elements. Optimized for performance and search engine visibility.",
        image: "/personalwebsite.png",
        link: "https://kylesmigelski.com",
        button_text: "View Site"
    },
    {
        title: "Martha’s Pizza Online Ordering",
        description: "Collaborated to lead the UI/UX design for MyPizza, an online ordering system for Martha’s Pizza, using Figma for prototyping and final design.",
        image: "/marthapizza.png",
        link: "https://www.figma.com/proto/3hRPiyVdO7z7525RrWYooc/Matha's-Pizza?page-id=0%3A1&node-id=5-5&node-type=canvas&viewport=813%2C110%2C0.13&t=TDm8UW0tA2ua3Avq-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5%3A5",
        button_text: "View on Figma"
    },
    {
        title: "Trip Planner",
        description: "Designed and implemented a trip planner web app using React and Firebase, with a focus on user experience and responsive design.",
        image: "/tripplanner.png",
        link: "https://trip-planner-one-iota.vercel.app",
        button_text: "View Site"
    },
    {
        title: "TALK Fitness",
        description: "Played a key role in a collaborative effort to design and implement a fitness application, focusing on integration of\n" +
            "external APIs with comprehensive documentation.",
        image: "/talkfitness.png",
        link: "https://github.com/nhutu1911/GVSU-CIS350-TeamTALK",
        button_text: "View on GitHub"
    },
    {
        title: "Connect 4",
        description: "For CIS 343, I implemented a command line Connect 4 game in five languages: C, Scheme, Javascript, Ruby, and Kotlin.",
        image: "/connect4.jpg",
        link: "https://github.com/kylesmigelski/Connect-4-In-C",
        button_text: "View on GitHub"
    },
    {
        title: "Wordle Clone",
        description: "VueJS + Firebase web app inspired by Wordle. Features animations, dynamic keyboard, and Firebase authentication with Firestore stat tracking for every user.",
        image: "/wordle.gif",
        link: "https://wordle-deployed.vercel.app",
        button_text: "View Site"
    }
];

export default function Projects() {
    return (
        <ThemeProvider theme={Theme}>
            <Head>
                <title>Projects - Kyle Smigelski</title>
                <meta name="description" content="Projects page" />
            </Head>
            <Particles id="tsparticles"/>
            <Box alignContent="center">
                <Container maxWidth="lg">
                    <Typography variant="h2" component="h2" align="center" sx={{ my: 4, fontFamily: 'Fjalla One', color: 'white' }}>
                        My Projects
                    </Typography>
                    <Grid container spacing={3} align="center" justify="center">
                        {projectData.map((project, index) => (
                            <Grid item xs={12} sm={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Project
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    link={project.link}
                                    button_text={project.button_text}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
            <Copyright/>
        </ThemeProvider>
    );
}
