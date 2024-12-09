import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { deepOrange } from '@mui/material/colors';
import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function MenuUser() {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const handleMouseEnter = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMouseLeave = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (path) => {
        navigate(path);
        setAnchorEl(null);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Avatar
                sx={{
                    bgcolor: deepOrange[500],
                    cursor: 'pointer',
                    marginRight: '40px',
                }}
            >
                TL
            </Avatar>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMouseLeave}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                MenuListProps={{
                    onMouseLeave: handleMouseLeave,
                }}
            >
                <Grid container alignItems="center" padding={1}>
                    <Grid item><Avatar>TL</Avatar></Grid>
                    <Grid item marginLeft={1}>
                        <Typography>Thanh Long</Typography>
                        <Typography>long@gmail.com</Typography>
                    </Grid>
                </Grid>
                <MenuItem onClick={() => handleMenuItemClick("/my-profile")}>Public profile</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('/my-course/my-learning')}>My learning</MenuItem>
                <MenuItem onClick={()=>handleMenuItemClick("/my-profile")}>My cart </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('/my-course/my-wishlist')}>Wishlist</MenuItem>
                <MenuItem>Purchase history</MenuItem>
                <MenuItem onClick={handleMouseLeave}>Log out</MenuItem>
            </Menu>
        </div>
    );
}

export default MenuUser;
