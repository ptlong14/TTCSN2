import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import PropTypes from 'prop-types';
import StarIcon from '@mui/icons-material/Star';
RenderStar.propTypes = {
    numStars: PropTypes.number,
};

//hiển thị sao
function RenderStar({numStars}) {
    const styles = {
        star: {
            color: '#FFD700',
            marginRight: 4
        },
    }
    const fullStars = Math.floor(numStars);
    const hasHalfStar = numStars % 1 >= 0.35;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    return (
        <div>
            {[...Array(fullStars)].map((_, index) => (
                <StarIcon
                    key={`full-${index}`}
                    style={styles.star}
                    fontSize='small'
                />
            ))}
            {hasHalfStar && (
                <StarHalfIcon
                    key="half"
                    style={styles.star}
                    fontSize='small'
                />
            )}
            {[...Array(emptyStars)].map((_, index) => (
                <StarBorderIcon
                    key={`empty-${index}`}
                    style={{ color: '#e0e0e0', marginRight: 4 }}
                    fontSize='small'
                />
            ))}
        </div>
    );
}

export default RenderStar;