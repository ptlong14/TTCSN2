import PropTypes from 'prop-types';
import { Accordion, AccordionActions, AccordionSummary, Box, Checkbox, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';

FilterByDuration.propTypes = {
    filters: PropTypes.object,
    onFilterChange: PropTypes.func.isRequired,
};

function FilterByDuration({ filters, onFilterChange }) {
    const [selectedDuration, setSelectedDuration] = useState(filters.duration || []);

    useEffect(() => {
        setSelectedDuration(filters.duration || []);
    }, [filters]);
    
    const handleDurationChange = (event) => {
        const value = event.target.value;
        const newSelectedDuration = event.target.checked
            ? [...selectedDuration, value]
            : selectedDuration.filter((duration) => duration !== value);

        setSelectedDuration(newSelectedDuration);
        onFilterChange({ duration: newSelectedDuration });
    };

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography variant="h6" fontWeight='bolder'>Course durations</Typography>
                </AccordionSummary>
                <AccordionActions sx={{ justifyContent: 'flex-start' }}>
                    <Box display="flex" flexDirection="column">
                        {['0-3', '3-6', '6-9', '9-12', '12+'].map((label) => (
                            <Box display="flex" alignItems="center" key={label}>
                                <Checkbox
                                    color="primary"
                                    value={label}
                                    checked={selectedDuration.includes(label)}
                                    onChange={handleDurationChange}
                                />
                                <Typography variant="body1">{label} total hours</Typography>
                            </Box>
                        ))}
                    </Box>
                </AccordionActions>
            </Accordion>
        </div>
    );
}

export default FilterByDuration;
