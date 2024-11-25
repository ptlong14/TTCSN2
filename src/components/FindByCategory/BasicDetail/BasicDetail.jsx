
import PropTypes from 'prop-types';
import { Divider, Paper, Stack, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import styles from './styles';
BasicDetail.propTypes = {
    course: PropTypes.object,
};

function BasicDetail({ course = [] }) {
    const totalStar = course.courses.reduce((sum, current) => sum + current.star, 0);
    const averageStar = course.courses.length ? (totalStar / course.courses.length).toFixed(2) : 0;

    return (
        <div  style={styles.paper}>
            <Typography variant="h3" style={styles.title}>
                {course.category} Courses
            </Typography>
            <Typography variant="body1" style={styles.description}>
                {course.description}
            </Typography>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                style={{ marginBottom: '16px' }}
            >
                <Paper style={styles.item}>
                    <Typography style={styles.titleItem}>Number of courses</Typography>
                    <Typography style={styles.titleContent}>{course.courses.length}</Typography>
                </Paper>
                <Paper style={styles.item}>
                    <Typography style={styles.titleItem}>Average courses rating</Typography>
                    <Stack direction="row"  spacing={2}>
                        <Typography style={styles.titleContent}>{averageStar}</Typography>
                        <StarIcon style={styles.star} /> 
                    </Stack>
                </Paper>
            </Stack>
        </div>
    );
}

export default BasicDetail;