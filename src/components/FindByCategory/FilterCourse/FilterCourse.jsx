import { Box, Container, Grid, Icon, Paper, Typography } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CoursePaper from './CoursePaper/CoursePaper';
import FilterByPrice from './FilterPaper/FilterByPrice';
import FilterByDuration from './FilterPaper/FilterByDuration';
import FilterByRating from './FilterPaper/FilterByRating';
import InfoIcon from '@mui/icons-material/Info';
import FillterBySort from './FilterPaper/FillterBySort';
import styles from './stylesPaper';

FilterCourse.propTypes = {
    course: PropTypes.object,
    onFilterChange: PropTypes.func,
    filterCourses: PropTypes.array,
    filters: PropTypes.object,
};

function FilterCourse({ course, onFilterChange, filterCourses, filters }) {
    const [isFilterVisible, setIsFilterVisible] = useState(true);
    const [activeFiltersCount, setActiveFiltersCount] = useState(0);

    const handleFilterClick = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    const clearFilters = () => {
        onFilterChange({ price: [], duration: [], rating: undefined });
    };

    useEffect(() => {
        let count = 0;
        if (filters.price && filters.price.length > 0) count += filters.price.length;
        if (filters.duration && filters.duration.length > 0) count += filters.duration.length;
        if (filters.rating) count += 1;

        setActiveFiltersCount(count);
    }, [filters]);

    return (
        <Container>
            <Typography variant='h5' sx={styles.container}>
                All {course.category} courses
            </Typography>
            <Typography variant='body2' sx={styles.description}>
                Programming courses cover various topics, from beginner-friendly languages like
                Python and JavaScript to web development, mobile app creation, and data analysis.
                You can learn front-end and back-end technologies, mobile platforms like Android
                and iOS, and tools like React Native for cross-platform apps.
                Data programming courses focus on Python and SQL for analysis and database
                management.
                <br />
                Join more than 12 million learners and train up on {course.category} on Udemy.
            </Typography>
            <Box sx={styles.infoBox}>
                <Icon>
                    <InfoIcon />
                </Icon>
                <Typography ml={1} variant="body1">
                    Not sure? All courses have a 30-day money-back guarantee
                </Typography>
            </Box>

            <Box sx={styles.filterContainer}>
                <Box sx={styles.filterButton} onClick={handleFilterClick}>
                    <FilterListIcon />
                    <Box sx={{ display: 'flex' }}>
                        <Typography component="span" sx={{fontWeight:'bolder'}}>Filter </Typography>
                        <Typography component="span" sx={{fontWeight:'bolder', marginLeft:'1px'}}> ({activeFiltersCount})</Typography>
                    </Box>
                </Box>
                <FillterBySort onFilterChange={onFilterChange} filters={filters} />
                {activeFiltersCount >= 1 && (
                    <Box
                        onClick={clearFilters}
                        sx={styles.clear}
                    >
                        Clear Filter
                    </Box>
                )}
                <Box sx={styles.result}>
                    {filterCourses.length} {filterCourses.length > 0 ? 'results' : 'result'}
                </Box>
            </Box>

            <Grid container spacing={1} sx={styles.gridContainer}>
                {isFilterVisible && (
                    <Grid item md={3} sx={styles.filterPaper}>
                        <Paper>
                            <FilterByPrice onFilterChange={onFilterChange} filters={filters} />
                            <FilterByDuration onFilterChange={onFilterChange} filters={filters} />
                            <FilterByRating onFilterChange={onFilterChange} filters={filters} />
                        </Paper>
                    </Grid>
                )}
                <Grid item md={isFilterVisible ? 9 : 12}>
                    <Paper>
                        <CoursePaper course={filterCourses} />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default FilterCourse;
