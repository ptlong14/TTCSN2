/* eslint-disable react/prop-types */
import { Typography, Box, Button } from "@mui/material";
import styles from "./styles";
const CurrentFilters = ({ filters, resetFilters }) => {
    return (
        <Box
            sx={styles.box}
        >
            <Typography
                variant="h6"
                sx={styles.typo1}
            >
                Current Filters:
            </Typography>
            <Typography
                sx={styles.typo2}
            >
                {filters.isPaid ? `Price: ${filters.isPaid === 'true' ? 'Paid' : 'Free'}` : 'Price: All'}<br />
                {filters.hourRange.length > 0 ? `Duration: ${filters.hourRange.join(', ')}` : 'Duration: All'}<br />
                {filters.starRating ? `Rating: ${filters.starRating}` : 'Rating: All'}
            </Typography>
            <Button
                variant="outlined"
                color="secondary"
                onClick={resetFilters}
                sx={styles.button}
            >
                Clear Filters
            </Button>
        </Box>
    );
};

export default CurrentFilters;
