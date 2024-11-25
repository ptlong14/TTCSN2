import { t } from "i18next";
import { useSelector } from "react-redux";
import { Box, Grid, Typography, Pagination } from "@mui/material";
import { useState } from "react";
import RenderStar from "../Course/RenderStar/RenderStar";
import { formatCurrency } from "../../utils/utils";

WishList.propTypes = {};

function WishList() {
    const favoriteItems = useSelector((state) => state.courses.favorites);
    const [currentPage, setCurrentPage] = useState(1); 
    const itemsPerPage = 6;

    const totalPages = Math.ceil(favoriteItems.length / itemsPerPage);

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = favoriteItems.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <Box sx={{ padding: '20px' }}>
            {favoriteItems.length > 0 ? (
                <>
                    <Grid container spacing={2}>
                        {currentItems.map((item) => (
                            <Grid item xs={12} sm={6} md={4} key={item.id}>
                                <Box sx={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img
                                        src={item.thumbnail}
                                        alt={item.name}
                                        style={{ width: '100%', maxWidth: '200px', height: 'auto', objectFit: 'cover' }}
                                    />
                                    <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'center' }}>
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                                        {item.author}
                                    </Typography>
                                    <Box sx={{display:'flex'}}>
                                        {item.star}
                                        <RenderStar numStars={item.star}></RenderStar>
                                    </Box>
                                    <Typography>{item.hour} hours total</Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: '5px' }}>
                                        {formatCurrency(item.price)}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                    <Pagination
                        sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                    />
                </>
            ) : (
                <Typography variant="h6" sx={{ textAlign: 'center', color: 'text.secondary' }}>
                    {t('No favorite items')}
                </Typography>
            )}
        </Box>
    );
}

export default WishList;
