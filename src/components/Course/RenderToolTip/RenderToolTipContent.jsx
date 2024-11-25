import { Box, Button, styled, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styles from './stylesRenderToolTip';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../../store/favorite'
RenderToolTipContent.propTypes = {
    course: PropTypes.object,
};

//hiển thị tool tip
const DotIcon = styled(FiberManualRecordSharpIcon)(({ theme }) => ({
    fontSize: 'small',
    marginLeft: theme.spacing(1),
}));

function RenderToolTipContent({ course = {} }) {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.courses.favorites);
    const isFavorite = favorites.some(fav => fav.id === course.id);
    const handleToggleFavorite = () => {
        dispatch(toggleFavorite(course));
    };

    return (
        <Box>
            <Typography variant="subtitle1" sx={styles.courseName}>{course.name}</Typography>
            <Typography>
                <span style={styles.typo1}>Updated: </span>
                <span style={styles.typo2}>{course.date}</span>
            </Typography>
            <Typography variant="body2" sx={styles.hour}>
                {course.hour} total hours
                <DotIcon /><span>All level</span>
                <DotIcon /><span>Subtiles</span>
            </Typography>
            <Typography variant='body2' sx={{ fontSize: '16px' }}>{course.description}</Typography>
            <ul>
                {course.contents.slice(0, 3).map((item, index) => (
                    <li key={index}>
                        <CheckSharpIcon sx={styles.checkIcon}></CheckSharpIcon>
                        <Typography variant="body2" sx={{ fontSize: '16px' }}>{item}</Typography></li>
                ))}
            </ul>

            <Box sx={styles.box}>
                <Button sx={styles.cart}>Add to cart</Button>
                <Box onClick={() => handleToggleFavorite(course.id)} sx={styles.circle}>
                    {isFavorite ? (
                        <FavoriteIcon sx={{ ...styles.heart, transform: 'scale(1.1)' }} />
                    ) : (
                        <FavoriteBorderIcon sx={styles.heart} />
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default RenderToolTipContent;