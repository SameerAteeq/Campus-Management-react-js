import AppBar from '@mui/material/AppBar';
import { Box, Divider, Drawer, IconButton, List, Button, ListItem, ListItemText, ListItemButton, ListItemIcon, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContext, useMemo, useState } from 'react';
import { Context } from '../../context/Context';
const drawerWidth = 240;
const Navbar = (props) => {
    const { currentUser } = useContext(Context);
    const navigate = useNavigate();
    const navItems = [

        {
            id: 1,
            title: "Home",
            to: "/"
        },
        {
            id: 2,
            title: "Dashboard",
            to: `/dashboard`
        },

        {
            id: 3,
            title: "Jobs",
            to: `/jobs`
        },
        {
            id: 4,
            title: "Login",
            to: `/login`
        },
    ]

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Management System
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => navigate(item.to)}>
                            <ListItemText primary={item.title} />
                            <ListItemIcon>

                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                ))}
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

                        {navItems.map((item) => (
                            <Button key={item.id} sx={{ color: '#fff' }} onClick={() => navigate(item.to)}>
                                {item.title}
                            </Button>
                        ))}

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