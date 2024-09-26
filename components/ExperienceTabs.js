import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { Divider, List, ListItem } from "@mui/material";

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

const experiences = [
    {
        company: "EnablePoint Inc.",
        role: "Software Developer (Contract)",
        period: "June 2024 - Present",
        details: [
            "Developed and deployed key features using ASP.NET WebForms, C#, and Microsoft SQL Server, including a registration charge/importing automation system, saving customers and internal staff significant time.",
            "Handled full-stack bug fixes and testing, resolving front-end, server, and back-end issues in live applications used regularly by customers and internal support teams.",
            "Led design work using Figma and Photoshop to enhance front-end interfaces and customer documents, and collaborated through Git/Bitbucket to ensure smooth deployment processes on test servers."
        ]
    },
    {
        company: "Fuji Yama Japanese Steakhouse",
        role: "Server",
        period: "September 2023 - September 2024",
        details: [
            "Delivered exceptional service for hibachi grill dining, ensuring an enhanced guest experience through attentive service and optimized seating coordination.",
            "Proactively addressed customer inquiries and concerns, consistently upholding high standards of service and guest satisfaction.",
            "Collaborated with kitchen staff to ensure timely and accurate orders."
        ]

    },
    {
        company: "Tropical Smoothie Cafe",
        role: "Shift Manager",
        period: "February 2019 - August 2023",
        details: [
            "Assisted with daily operations of the restaurant; reviews inventory levels, monitors delivery of supplies, inspects food preparation, store cleanliness and new items or promotions",
            "Managed the activities of team members in multiple stations of the business",
            "Trained new employees on the proper procedures and for management positions",
            "Resolved customer questions, issues, and complaints"
        ]
    },
    {
        company: "GM Design YM@D Program",
        role: "General Motors Technology",
        period: "February 2017 - October 2018",
        details: [
            "Learned design techniques related to automotive technical drawings",
            "Collaborated in a group setting with peers and automotive designers",
            "Gained further knowledge of the design workflow and procedures",
            "Presented a completed car design and prototype at a General Motors design event"
        ]
    },
];

export default function CustomizedTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ bgcolor: 'transparent', display: 'flex', width: "100%"}}>
            <Box sx={{ bgcolor: 'rgba(0, 0, 0, 0.85)'}}>
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="styled tabs example"
                    variant={"scrollable"}
                    scrollButtons={"on"}
                >
                    {experiences.map((experience, index) => (
                        <StyledTab key={index} label={experience.company} sx={{ my: 2}} />
                    ))}
                </StyledTabs>
                <Box sx={{ padding: 2 }}>
                    {experiences.map((experience, index) => (
                        value === index && (
                            <Box key={index}>
                                <Typography sx={{fontFamily: 'Fjalla One', my: 2, color: '#f58497', fontSize:"36px"}}>
                                    {experience.company}
                                </Typography>
                                <Typography sx={{color: 'white', fontSize:"20px", my: 1}}>
                                    {experience.role}
                                </Typography>
                                <Typography sx={{color: 'gray', fontSize:"16px"}}>
                                    {experience.period}
                                </Typography>
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
                                    {experience.details.map((detail, detailIndex) => (
                                        <ListItem key={detailIndex}>{detail}</ListItem>
                                    ))}
                                </List>
                            </Box>
                        )
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
