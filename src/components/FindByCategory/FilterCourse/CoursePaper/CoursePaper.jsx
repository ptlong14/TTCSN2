import { Box, Card, CardMedia, Grid, styled, Tooltip, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import RenderStar from '../../../Course/RenderStar/RenderStar';
import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';
import { formatCurrency } from '../../../../utils/utils';
import styles from './styles';
import TooltipFilter from '../TooltipFilter/TooltipFilter';
import { useNavigate } from 'react-router-dom';

CoursePaper.propTypes = {
    course: PropTypes.array,
};

const DotIcon = styled(FiberManualRecordSharpIcon)(({ theme }) => ({
    fontSize: 'small',
    marginLeft: theme.spacing(1),
}));

function CoursePaper({ course = [] }) {
    const navigate = useNavigate();

    const handleCourseClick = (courseId) => {
        navigate(`/courses/${courseId}`);
    };
    return (
        <div>
            {course.map(courseItem => (
                <Tooltip
                    key={courseItem.id}
                    title={<TooltipFilter course={courseItem} />}
                    placement="top"
                    arrow
                    slotProps={{
                        tooltip: {
                            sx: {
                                ...styles.tooltip, 
                                width: '400px', 
                                maxWidth: 'none', 
                                padding: '8px', 
                            },
                        },
                        arrow: { sx: { color: 'grey' } } 
                    }}
                >
                    <div style={styles.container} onClick={()=>handleCourseClick(courseItem.id)}>
                        <Grid container>
                            <Grid item md={3}>
                                <Card sx={styles.card}>
                                    <CardMedia
                                        component="img"
                                        image={courseItem.thumbnail}
                                        alt={courseItem.name}
                                    />
                                </Card>
                            </Grid>
                            <Grid item md={7}>
                                <Typography style={styles.title}>{courseItem.name}</Typography>
                                <Typography variant='body2' style={styles.description}>
                                    {courseItem.description}
                                </Typography>
                                <Typography style={styles.author}>{courseItem.author}</Typography>
                                <Box style={styles.hours}>
                                    <Typography variant='body2'>{courseItem.star}</Typography>
                                    <RenderStar numStars={courseItem.star} />
                                </Box>
                                <Typography variant="body2">
                                    {courseItem.hour} total hours
                                    <DotIcon /><span>All level</span>
                                    <DotIcon /><span>Subtitles</span>
                                </Typography>
                            </Grid>
                            <Grid item md={2}>
                                <Typography style={styles.price}>{formatCurrency(courseItem.price)}</Typography>
                            </Grid>
                        </Grid>
                        <hr style={{ margin: '16px 0', border: '0.5px solid #ccc' }} />
                    </div>
                </Tooltip>
            ))}
        </div>
    );
}

export default CoursePaper;