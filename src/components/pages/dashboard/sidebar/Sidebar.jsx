import { ChevronLeft, Dashboard, Group, Inbox, Leaderboard, Mail, Person, PostAdd, StarBorder } from '@mui/icons-material';
import { IconButton, Divider, List, ListItem, ListItemButton, Box, Typography, ListItemIcon, ListItemText, styled, Paper, Collapse, Tooltip } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { useMemo, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Candidate from '../candidate/Candidate';
import Main from '../main/Main';
import Profile from '../profile/Profile';
import Manage from '../vacancy/Manage';
import PostVacancy from '../vacancy/PostVacancy';
const drawerWidth = 240;
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),

);
const Sidebar = ({ open, setOpen }) => {
    const [opencoll, setOpenColl] = useState(true);

    const handleClick = () => {
        setOpenColl(!open);
    };
    const [selectedLink, setSelectedLink] = useState('');
    const navigate = useNavigate();
    const list = useMemo(
        () =>
            [
                { title: "Main", icon: <Dashboard />, link: "", components: <Main {...{ setSelectedLink, link: '' }} />, tooltip: "Dashboard" },
                { title: "Profile", icon: < Person />, link: "Profile", components: <Profile {...{ setSelectedLink, link: '' }} />, tooltip: "Profile" },
                { title: "Add Vacancy", icon: <PostAdd />, link: "Vacancy", components: <PostVacancy {...{ setSelectedLink, link: "vacancy" }} />, tooltip: "Add Vacancy" },
                { title: "Manage Vacancy", icon: <Leaderboard />, link: "Manage", components: <Manage {...{ setSelectedLink, link: "Manage" }} />, tooltip: "Manage Vacancy" },
                { title: "Candidates", icon: <Group />, link: "Candidate_list", components: <Candidate {...{ setSelectedLink, link: "Manage" }} />, tooltip: "Candidate" },
            ],
        [],
    );

    return (
        <>
            <Drawer variant="permanent" open={open} sx={{
                '& .MuiDrawer-paper': { backgroundColor: "#00bfa5" },
            }}>
                <DrawerHeader sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                    <Typography >CMS</Typography>
                </DrawerHeader>
                <Divider />
                <List>

                    {list.map((item) => (
                        <Tooltip title={!open ? item.tooltip : ""} >
                            <ListItem key={item.title} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                    onClick={() => navigate(item.link)}
                                    selected={selectedLink === item.link}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                            color: "grey"
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0, color: "#333", fontSize: "24px" }} />
                                </ListItemButton>
                            </ListItem>
                        </Tooltip>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: { xs: 1, md: 2 } }}>
                <DrawerHeader />
                <Routes>
                    {list.map((item) => (
                        <Route key={item.title} path={item.link} element={item.components} />
                    ))}
                </Routes>
            </Box>
        </>
    )
}

export default Sidebar