
import PropTypes from 'prop-types';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

FillterBySort.propTypes = {
    onFilterChange: PropTypes.func,
    filters: PropTypes.object,
};

function FillterBySort({ onFilterChange, filters }) {
    const handleSortChange = (event) => {
        onFilterChange({ sort: event.target.value });
    };
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginLeft: '20px' }}>
                <FormControl variant="outlined" sx={{ minWidth: 150 }}>
                    <InputLabel id="sort-label">Sort by</InputLabel>
                    <Select
                        labelId="sort-label"
                        value={filters.sort||'all-courses'}
                        label="Sort by"
                        onChange={handleSortChange}
                    >
                        <MenuItem value="all-courses">All courses</MenuItem>
                        <MenuItem value="newest-course">Newest</MenuItem>
                        <MenuItem value="highest-rate">Highest rate</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
}

export default FillterBySort;