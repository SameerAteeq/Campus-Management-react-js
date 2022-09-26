import { Logout, PersonAdd, Settings } from '@mui/icons-material'
import { Avatar, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useContext } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/Context'
import Loading from '../common/loading/Loading'

const User = () => {
    const navigate = useNavigate();
    const { currentUser, dispatch } = useContext(UserContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openLoading, setOpenLoading] = useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogOut = () => {
        setOpenLoading(true)
        dispatch({ type: "LOGOUT", currentUser: null });
        setOpenLoading(false);
        toast.success("Account Logout successfully");
    }
    return (
        <>
            <Tooltip title="Your Account">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar src={currentUser.imgUrl} sx={{ width: 32, height: 32 }} />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                        width: "200px"
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >

                <MenuItem onClick={() => navigate("/dashboard/Profile")}>
                    <Avatar src={currentUser.imgUrl} /> {currentUser.name}
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleLogOut}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
            <Loading {...{ openLoading, setOpenLoading }} />
        </>
    )
}

export default User