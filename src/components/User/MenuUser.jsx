import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { deepOrange } from '@mui/material/colors';
import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function MenuUser() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = (event) => {
        setAnchorEl(event.currentTarget);
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
        setAnchorEl(null);
    };
    const handleMenuItemClick = (path) => {
        setIsHovered(false);
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
                open={isHovered}
                onClose={handleMouseLeave}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >

                <Grid container>
                    <Grid item ><Avatar>TL</Avatar></Grid>
                    <Grid item>
                        <Typography>Nguyễn</Typography>
                        <Typography>linh1105@gmail.com</Typography>
                    </Grid>

                </Grid>
                <MenuItem onClick={() => handleMenuItemClick('/my-course/my-learning')}>My learning</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('/my-course/my-wishlist')}>Wishlist</MenuItem>
                <MenuItem onClick={handleMouseLeave}>Account settings</MenuItem>
                <MenuItem onClick={handleMouseLeave}>Log out</MenuItem>
            </Menu>
        </div>
    );
}

export default MenuUser;
