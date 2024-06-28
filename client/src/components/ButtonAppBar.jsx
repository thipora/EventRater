import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Login from './Login.jsx';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useState, useContext } from 'react';
import { UserContext } from '../UserProvider';
import PersistentDrawerRight from './PersistentDrawerRight.jsx';
import auth from '../auth.js';


export default function ButtonAppBar(props) {
    const { user, setCurrentUser } = useContext(UserContext);
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleLogout = () => {
        auth.logout();
        setCurrentUser(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleSetting = (setting) => {
        switch (setting) {
            case "Logout":
                handleLogout();
                break;

            default:
                break;
        }
    }
    return (
        <AppBar position="fixed" >
            <Toolbar>
                <PersistentDrawerRight />
                <Link to={"/Home"}>הכל לאירוע</Link>
                {user == null ? <Login /> :
                    <Box>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}>
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={() => { handleSetting(setting) }}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                }
            </Toolbar>
        </AppBar>
    );
}
