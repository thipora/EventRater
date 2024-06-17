import React, { useEffect }  from 'react';
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
import { useState} from 'react';
import PersistentDrawerRight from './PersistentDrawerRight.jsx';


export default function ButtonAppBar(props) {
  
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const [displayLogIn,setDisplayLogIn]=useState(props.isLoggedIn)
    const [anchorElUser, setAnchorElUser] = useState(null);
    useEffect(()=>{
        setDisplayLogIn(props.isLoggedIn)  
    },[])
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar>
                    {displayLogIn ?<Login color="inherit">הירשם</Login>:
                        <Box sx={{ flexGrow: 0 }}>
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
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        }
                    <Typography variant="h6" component="div" textAlign={"end"} paddingRight={"inherit"} sx={{ flexGrow: 1 }}>
                        EVENTS
                    </Typography>
                    <PersistentDrawerRight/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
