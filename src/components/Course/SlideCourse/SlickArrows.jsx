
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PropTypes from 'prop-types';
import styles from './stylesSlickArrow';

const SlickArrowLeft = ({ currentSlide, onClick }) => (
        <NavigateBeforeIcon
            onClick={onClick}
            className={
                "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            sx={styles.beforeArrow}
        />
);
const SlickArrowRight = ({ currentSlide, slideCount, onClick }) => (
        <NavigateNextIcon
        onClick={onClick}
        className={
            "slick-next slick-arrow" + (currentSlide === slideCount - 1 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
            sx={styles.afterArrow}
        />
);

SlickArrowLeft.propTypes = {
    currentSlide: PropTypes.number,
    slideCount: PropTypes.number,
    onClick: PropTypes.func,
};

SlickArrowRight.propTypes = {
    currentSlide: PropTypes.number,
    slideCount: PropTypes.number,
    onClick: PropTypes.func,
};
export { SlickArrowLeft, SlickArrowRight };
