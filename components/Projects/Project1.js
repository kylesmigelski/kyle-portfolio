import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {alpha} from "@mui/material";
import theme from "../../src/theme";

export default function Project1() {
    return (
        <Card sx={{maxWidth: 345, borderRadius: '16px'}}>
            <CardMedia
                component="img"
                alt="connect 4 command line"
                height="200"
                width="200"
                image="/connect4.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                    Connect 4
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    For CIS 343, I implemented a command line Connect 4 game in five languages: C, Scheme,
                    Javascript, Ruby, and Kotlin.
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: 'center'}}>
                <Button size="small" variant="outlined" href={'https://github.com/kylesmigelski/Connect-4-In-C'} sx={{m:1, p:1, ':hover': {backgroundColor: alpha(theme.palette.background.paper, 0.9), color: '#f58497'},fontSize: 18, color:'#000000', textTransform: 'none', fontFamily: 'Source Code Pro'}}>
                    Source Code
                </Button>
            </CardActions>
        </Card>
    );
}