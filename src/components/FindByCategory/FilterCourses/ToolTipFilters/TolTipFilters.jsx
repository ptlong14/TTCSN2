import { Box, Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../../../store/favorite'

TooltipFilter.propTypes = {
    course: PropTypes.object,
};


function TooltipFilter({ course = {} }) {

    const dispatch = useDispatch();
    const favorites = useSelector(state => state.courses.favorites);

    const isFavorite = favorites.some(fav => fav.courseId === course.courseId);

    const handleToggleFavorite = () => {
        dispatch(toggleFavorite(course));
    };
    return (
        <Box>
            <Typography sx={styles.title}>What you will learn </Typography>
            <ul>
                {course.contents.split(';').slice(0, 3).map((item, index) => (
                    <li key={index}>
                        <CheckSharpIcon sx={styles.checkIcon} />
                        <Typography variant="body2" sx={{ fontSize: '14px' }}>{item}</Typography>
                    </li>
                ))}
            </ul>

            <Box sx={{ display: 'flex', marginBottom: '6px', padding: '10px' }}>
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

export default TooltipFilter;