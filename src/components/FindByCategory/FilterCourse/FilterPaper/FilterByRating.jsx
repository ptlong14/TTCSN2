import { Accordion, AccordionActions, AccordionSummary, Box, Radio, RadioGroup, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PropTypes from 'prop-types';

FilterByRating.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filters: PropTypes.object.isRequired,
};

function FilterByRating({ onFilterChange, filters }) {
    const handleRatingChange = (event) => {
        onFilterChange({ rating: event.target.value });
    };

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography variant="h6" fontWeight='bolder'>Rating</Typography>
            </AccordionSummary>

            <AccordionActions sx={{ justifyContent: 'flex-start', }}>
                <RadioGroup value={filters.rating||null} onChange={handleRatingChange}>
                    {[5, 4, 3].map((rating) => (
                        <Box display="flex" alignItems="center" key={rating} sx={{ mb: 1 }}>
                            <Radio value={rating.toString()} />
                            <Typography component="span" display="flex" alignItems="center">
                                {[...Array(5)].map((_, index) => (
                                    index < rating ? <StarIcon key={index} sx={{ color: 'gold' }} /> : <StarBorderIcon key={index} sx={{ color: 'gray' }} />
                                ))}
                                <Typography component="span" sx={{ ml: 0.5 }}>{rating} & up</Typography>
                            </Typography>
                        </Box>
                    ))}
                </RadioGroup>
            </AccordionActions>
        </Accordion>
    );
}

export default FilterByRating;
