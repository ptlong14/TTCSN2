import PropTypes from 'prop-types';
import { Box, Grid, Skeleton } from '@mui/material';

SkeletonList.propTypes = {
    length: PropTypes.number
};
function SkeletonList({ length=16 }) {
    return (
        <Box>
            <Grid container spacing={2}>
                {Array.from(new Array(length)).map((x, index) => (
                    <Grid item xs={3} sm={3} md={3} key={index}>
                        <Box padding={1}>
                            <Skeleton variant='rect' width='100%' height={120} />
                            <Skeleton />
                            <Skeleton/>
                            <Skeleton width='40%' />
                            <Skeleton width='60%' />
                            <Skeleton width='20%' />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
export default SkeletonList;