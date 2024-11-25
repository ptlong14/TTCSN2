import PropTypes from 'prop-types';
import { Accordion, AccordionActions, AccordionSummary, Box, Checkbox, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';

FilterByPrice.propTypes = {
    filters: PropTypes.object.isRequired,
    onFilterChange: PropTypes.func.isRequired,
};

function FilterByPrice({ filters, onFilterChange }) {
    const [selectedPrice, setSelectedPrice] = useState(filters.price || []);
    useEffect(() => {
        setSelectedPrice(filters.price || []);
    }, [filters]);

    const handlePriceChange = (event) => {
        const value = event.target.value;
        const newSelectedPrice = event.target.checked
            ? [...selectedPrice, value]
            : selectedPrice.filter(price => price !== value);
        setSelectedPrice(newSelectedPrice);
        onFilterChange({ price: newSelectedPrice });
    };
    return (
        <Accordion defaultExpanded>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography variant="h6" fontWeight='bolder'>Price</Typography>
            </AccordionSummary>
            <AccordionActions sx={{ justifyContent: 'flex-start' }}>
                <Box display="flex" flexDirection="column">
                    {['paid', 'free'].map(option => (
                        <Box display="flex" alignItems="center" key={option}>
                            <Checkbox
                                color="primary"
                                value={option}
                                checked={selectedPrice.includes(option)}
                                onChange={handlePriceChange}
                            />
                            <Typography variant="body1">{option.charAt(0).toUpperCase() + option.slice(1)}</Typography>
                        </Box>
                    ))}
                </Box>
            </AccordionActions>
        </Accordion>
    );
}

export default FilterByPrice;
