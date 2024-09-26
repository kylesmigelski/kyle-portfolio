import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alpha } from "@mui/material";
import theme from "../src/theme";

export default function Project({ title, description, image, link, button_text }) {
    return (
        <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', height: 'auto' }}>
            <CardMedia
                component="img"
                alt={title}
                height="200"
                width="200"
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
                <Button size="small" variant="outlined" href={link} sx={{ m: 1, p: 1, ':hover': { backgroundColor: alpha(theme.palette.background.paper, 0.9), color: '#f58497' }, fontSize: 18, color: '#000000', textTransform: 'none', fontFamily: 'Source Code Pro' }}>
                    {button_text}
                </Button>
            </CardActions>
        </Card>
    );
}
