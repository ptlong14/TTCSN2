import PropTypes from 'prop-types';
import { Box, Grid, Skeleton } from '@mui/material';

SkeletonCategory.propTypes = {
    length: PropTypes.number
};
function SkeletonCategory({ length=24 }) {
    return (
        <Box sx={{marginTop:'45px'}}>
            <Skeleton variant='rect' width='50%' height={30} />
            <br></br>
            <Skeleton variant='rect' width='100%' height={20} />
            <Skeleton variant='rect' width='100%' height={20} />
            <br></br>
            <Skeleton />
            <Grid container spacing={2}>
                {Array.from(new Array(length)).map((x, index) => (
                    <Grid item xs={12} sm={12} md={12} key={index}>
                        <Box padding={1}>
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
export default SkeletonCategory;