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
                alt="wordle"
                height="200"
                width="200"
                image="/wordle.gif"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                    Wordle Clone
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    VueJS + CSS + Firebase web app inspired by Wordle. Features animations, dynamic keyboard, and
                    Firebase authentication and stat tracking for every user.
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: 'center'}}>
                <Button size="small" variant="outlined" href={'https://github.com/kylesmigelski/wordle-deployed'} sx={{m:1, p:1, ':hover': {backgroundColor: alpha(theme.palette.background.paper, 0.9), color: '#f58497'},fontSize: 18, color:'#000000', textTransform: 'none', fontFamily: 'Source Code Pro'}}>
                    Source Code
                </Button>
            </CardActions>
        </Card>
    );
}