import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import {Divider, List, ListItem} from "@mui/material";


const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
        sx={{ margin: 'auto'}}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#f58497',
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
            color: '#fff',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 1)',
        },
        scroller: {
            flexGrow: "0"
        }
    }),
);

export default function CustomizedTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ bgcolor: 'transparent', display: 'flex', width: "100%" }}>
            <Box sx={{ bgcolor: 'transparent', }}>
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="styled tabs example"
                    variant={"scrollable"}
                    scrollButtons={"on"}
                >
                    <StyledTab label="Tropical Smoothie Cafe" sx={{ my: 2}} />
                    <StyledTab label="GM Design YM@D Program" sx={{ my: 2}}/>
                    <StyledTab label="Twin Brothers Construction LLC" sx={{ my: 2}}/>
                </StyledTabs>
                <Box sx={{ padding: 2 }}>
                    {value === 0 && (
                        <Box>
                            <Typography sx={{fontFamily: 'Fjalla One', my: 2, color: '#f58497', fontSize:"36px"}}>Tropical Smoothie Cafe</Typography>
                            <Typography sx={{color: 'white', fontSize:"20px", my: 1}}>Shift Manager</Typography>
                            <Typography sx={{color: 'gray', fontSize:"16px"}}>February 2019 - August 2022</Typography>
                            <Divider variant={"middle"} sx={{my: 3, bgcolor: "white" }}/>
                            <List
                                sx = {{
                                    listStyleType: 'disc',
                                    pl: 2,
                                    '& .MuiListItem-root': {
                                        display: 'list-item',
                                    },
                                    color: 'white',
                                }}>
                                <ListItem>
                                    Assisted with daily operations of the restaurant; reviews inventory levels, monitors delivery of supplies, inspects food preparation, store cleanliness and new items or promotions
                                </ListItem>
                                <ListItem>
                                    Managed the activities of team members in multiple stations of the business
                                </ListItem>
                                <ListItem>
                                    Trained new employees on the proper procedures and for management positions
                                </ListItem>
                                <ListItem>
                                    Resolved customer questions, issues, and complaints
                                </ListItem>
                            </List>
                        </Box>
                    )}
                    {value === 1 && (
                        <Box>
                            <Typography sx={{fontFamily: 'Fjalla One', my: 2, color: '#f58497', fontSize:"36px"}}>GM Design YM@D Program</Typography>
                            <Typography sx={{color: 'white', fontSize:"20px", my: 1}}>General Motors Technology</Typography>
                            <Typography sx={{color: 'gray', fontSize:"16px"}}>February 2017 - October 2018</Typography>
                            <Divider variant={"middle"} sx={{my: 3, bgcolor: "white" }}/>
                            <List
                                sx = {{
                                    listStyleType: 'disc',
                                    pl: 2,
                                    '& .MuiListItem-root': {
                                        display: 'list-item',
                                    },
                                    color: 'white',
                                }}>
                                <ListItem>
                                    Learned design techniques related to automotive technical drawings
                                </ListItem>
                                <ListItem>
                                    Collaborated in a group setting with peers and automotive designers
                                </ListItem>
                                <ListItem>
                                    Gained further knowledge of the design workflow and procedures
                                </ListItem>
                                <ListItem>
                                    Presented a completed car design and prototype at a General Motors design event
                                </ListItem>
                            </List>
                        </Box>
                    )}
                    {value === 2 && (
                        <Box>
                            <Typography sx={{fontFamily: 'Fjalla One', my: 2, color: '#f58497', fontSize:"36px"}}>Twin Brothers Construction LLC</Typography>
                            <Typography sx={{color: 'white', fontSize:"20px", my: 1}}>Web Designer</Typography>
                            <Typography sx={{color: 'gray', fontSize:"16px"}}>December 2022 - Present</Typography>
                            <Divider variant={"middle"} sx={{my: 3, bgcolor: "white" }}/>
                            <List
                                sx = {{
                                    listStyleType: 'disc',
                                    pl: 2,
                                    '& .MuiListItem-root': {
                                        display: 'list-item',
                                    },
                                    color: 'white',
                                }}>
                                <ListItem>
                                    Designed and developed a website for a local construction company using Next.js
                                </ListItem>
                                <ListItem>
                                    Maintained and updated the website as needed
                                </ListItem>
                                <ListItem>
                                    Created a custom theme for the website using Material-UI
                                </ListItem>
                                <ListItem>
                                    Created a custom contact form
                                </ListItem>
                            </List>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

