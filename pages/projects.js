import * as React from 'react';
import Link from '../src/Link';
import Container from "@mui/material/Container";
import {ThemeProvider} from "@mui/material/styles";
import Theme from "../src/theme";
import Box from "@mui/material/Box";

export default function projects() {
    return (
        <ThemeProvider theme={Theme}>
            <Box sx={{ mx: 2, my: 2}}>
                <Container maxWidth="lg">
                <h1>Projects</h1>

                </Container>
            </Box>
        </ThemeProvider>
    );
}
