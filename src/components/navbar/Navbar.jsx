import AppBar from '@mui/material/AppBar';
import { Box, Divider, Drawer, IconButton, List, Button, ListItem, ListItemText, ListItemButton, ListItemIcon, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import { UserContext } from '../../context/Context';
import toast from 'react-hot-toast';
import User from '../user/User';
const drawerWidth = 240;
const Navbar = (props) => {
    const { currentUser, dispatch } = useContext(UserContext);
    console.log(currentUser, "user")
    const navigate = useNavigate();
    const navItems = [
        {
            id: 1,
            title: "Home",
            to: "/",
            private: false
        },
        {
            id: 2,
            title: "Dashboard",
            to: `/dashboard`,
            private: true
        },

        {
            id: 3,
            title: "Jobs",
            to: `/jobs`,
            private: false
        },
        // {
        //     id: 4,
        //     title: "Login",
        //     to: `/login`,
        //     private: false,
        // },
        // {
        //     id: 5,
        //     title: "Logout",
        //     to: `/login`,
        //     private: true,
        // },
    ]

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleLogout = () => {
        dispatch({ type: "LOGOUT", currentUser: null });
        toast.success("Account Logout successfully");
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Management System
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => {
                    if (item.private && !currentUser) return
                    return (
                        <ListItem key={item.id} disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => navigate(item.to)}>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>)
                })}
                <ListItem disablePadding>
                    {currentUser ?
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={handleLogout}>
                            <ListItemText primary="Logout" />
                        </ListItemButton> :
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => navigate("/login")}>
                            <ListItemText primary="Login" />
                        </ListItemButton>
                    }
                </ListItem>

            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <>

            <AppBar position='sticky' component="nav" >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{ textDecoration: "none", flexGrow: 1, display: { xs: 'block', sm: 'block' }, color: "#fff", fontWeight: "bold" }}
                    >
                        Management System
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

                        {navItems.map((item) => {
                            if (item.private && !currentUser) return
                            return (

                                <Button key={item.id} sx={{ color: '#fff' }} onClick={() => navigate(item.to)}>
                                    {item.title}
                                </Button>
                            )
                        })}
                        {currentUser ?
                            <User /> : <Button sx={{ color: '#fff' }} onClick={() => navigate("/login")}>
                                Login
                            </Button>}
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
        </>
    )
}

export default Navbar