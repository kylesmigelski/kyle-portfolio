import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {alpha} from "@mui/material";
import theme from "../src/theme";

const pages = ['Projects', 'Experience', 'About', 'Contact'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{backgroundColor: "Black"}}       >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* profile  photo */}
                    <a href='/'>
                        <Avatar src={'../profile.jpeg'} style={{
                            border: '2px solid lightgray',
                            width: 50,
                            height: 50,
                        }}/>
                    </a>

                    {/*  */}
                    <Box sx={{ flexGrow: 1, justifyContent: "space-between", display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Button size="small" variant="contained" href={'https://docs.google.com/document/d/1JIhGM345fVbXQ_WO8XoTGOngSrI3olIphZjYhudlcqA/export/pdf'} sx={{m:1, p:1, ':hover': {backgroundColor: alpha(theme.palette.background.paper, 0.9), color: '#f58497'},fontSize: 18, color:'#ffffff', textTransform: 'none', fontFamily: 'Source Code Pro'}}>
                            Resume
                        </Button>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Button key={page} color="inherit" href={`/${page.toLowerCase()}`} sx={{':hover': {backgroundColor: alpha(theme.palette.background.paper, 0.2),
                                            color: '#f58497',
                                        },fontSize: 18, color:'#f58497', textTransform: 'none', fontFamily: 'Source Code Pro'}}>
                                        {page}
                                    </Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Wide screen */}
                    <Box m={1} justifyContent="flex-end" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
                        {pages.map((page) => (
                            <Button key={page} color="inherit" href={`/${page.toLowerCase()}`} sx={{':hover': {backgroundColor: alpha(theme.palette.background.paper, 0.2),
                                    color: '#f58497',
                                },fontSize: 18, color:'#f58497', p: 2, textTransform: 'none', fontFamily: 'Source Code Pro'}}>
                                {page}
                            </Button>
                        ))}
                        {/* Resume download button */}
                        <Button size="small" variant="contained" href={'./resume.pdf'} sx={{m:1, p:1, ':hover': {backgroundColor: alpha(theme.palette.background.paper, 0.9), color: '#f58497'},fontSize: 18, color:'#ffffff', textTransform: 'none', fontFamily: 'Source Code Pro'}}>
                            Resume
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
