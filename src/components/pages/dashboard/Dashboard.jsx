import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import { Tooltip } from '@mui/material';
import { Home } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


export default function Dashboard() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    return (
        <Box sx={{ display: 'flex', backgroundColor: "aliceblue", height: "100vh" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ backgroundColor: "aliceblue" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => setOpen(!open)}
                        edge="start"
                        sx={{
                            color: "#00bfa5"
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Tooltip title="back to Home page">
                        <IconButton onClick={() => navigate("/")} sx={{ color: "#00bfa5" }}>
                            <Home />
                        </IconButton>
                    </Tooltip>
                    <Typography variant="h6" noWrap component={Link} to="/dashboard" sx={{ color: "#333", textDecoration: "none" }}>
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Sidebar {...{ open, setOpen }} />
        </Box>
    );
}
