import PropTypes from 'prop-types';
import { Box, Breadcrumbs, Container, Typography, Link as MuiLink, Grid, Button, Dialog, DialogContent, DialogActions } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import styles from '.';
import HomeIcon from '@mui/icons-material/Home';
import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import RenderStar from "../Course/RenderStar/RenderStar";
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import UpdateIcon from '@mui/icons-material/Update';
import ReactDOM from 'react-dom';
import { formatCurrency } from '../../utils/utils'
import { useState } from 'react';
Detail.propTypes = {
    course: PropTypes.object,
};
const CartPortal = ({ course }) => {
    return ReactDOM.createPortal(
        <Box sx={styles.cart}>
            <Box sx={styles.boxImage}>
                {course.thumbnail && (
                    <img
                        src={course.thumbnail}
                        alt="Course Image"
                        style={{ width: '346px', height: '200px', }}
                    />
                )}
            </Box>

            <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '24px', color: '#3f51b5' }}>
                    {formatCurrency(course.price)}
                </Typography>
            </Box>

            <Box sx={{ textAlign: 'center', mt: 3, }}>
                <Button variant="contained" sx={styles.addToCartButton}>Add to cart</Button>
            </Box>

            <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Button variant="outlined" sx={styles.buyNowButton}>Buy now</Button>
            </Box>
        </Box>,
        document.body
    );
};

function Detail({ course = {} }) {
    const navigate = useNavigate();

    const handleNameClick = () => {
        navigate('/');
    };
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box>
            <Box sx={styles.box}>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item sm={8}>
                            <Breadcrumbs aria-label="breadcrumb" sx={styles.breadcrumb}>
                                <MuiLink
                                    component={RouterLink}
                                    to="/"
                                    sx={styles.homeLink}
                                    onClick={handleNameClick}
                                >
                                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                    Home
                                </MuiLink>
                                <Typography sx={styles.grainText}>
                                    <PlayLessonIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                    {course.name}
                                </Typography>
                            </Breadcrumbs>
                            <Typography sx={styles.title}>{course.name}</Typography>
                            <Typography sx={styles.description}>{course.description}</Typography>
                            <Box sx={styles.star}>
                                {course.star}
                                <RenderStar numStars={course.star} />
                            </Box>
                            <Typography sx={styles.author} component="span">
                                <span>Created by: </span>
                                <Box component="span" sx={{ color: '#6699FF' }}>
                                    {course.author}
                                </Box>
                            </Typography>
                            <Typography sx={styles.date} component="span">
                                <Box>
                                    <UpdateIcon />
                                </Box>
                                <Box>Last updated: {course.date}</Box>
                            </Typography>
                        </Grid>

                        <Grid item sm={4}></Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={styles.contents}>
                <Container sx={styles.container}>
                    <Grid container>
                        <Grid item sm={8} sx={styles.itemContents}>
                            <Typography variant="h5" sx={styles.learnTitle}>What you will learn</Typography>
                            <Grid container spacing={2}>
                                {course.contents && course.contents.map((content, index) => (
                                    <Grid item sm={6} key={index}>
                                        <Box sx={styles.learnContentBox}>
                                            <CheckSharpIcon sx={styles.checkIcon} />
                                            <Typography variant="body1" component="span">{content}</Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>

                <Container>
                    <Grid container>
                        <Grid item sm={8}>
                            <Box sx={{ border: '1px solid black' }}>
                                <Typography>Top companies offer this course to their employees</Typography>
                                <Typography>This course was selected for our collection of top-rated courses trusted by businesses worldwide.
                                    <span style={{ color: 'blue' , cursor:'pointer'}} onClick={handleClickOpen}>Learn more</span>

                                </Typography>
                                <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                                    <img src="https://download.logo.wine/logo/Nasdaq/Nasdaq-Logo.wine.png" alt="Company 1" style={{ width: '200px', height: 'auto' }} />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/1200px-Volkswagen_logo_2019.svg.png" alt="Company 2" style={{ width: '100px', height: 'auto' }} />
                                    <img src="https://banner2.cleanpng.com/20180423/ljq/kisspng-logo-box-business-management-company-5adde056322b24.1243016815244903262055.jpg" alt="Company 3" style={{ width: '100px', height: 'auto' }} />
                                    <img src="https://svtech.com.vn/wp-content/uploads/2023/04/NetApp-logo-776x400.png" alt="Company 4" style={{ width: '100px', height: 'auto' }} />
                                    <img src="https://e7.pngegg.com/pngimages/488/383/png-clipart-orange-and-white-eventbrite-logo-eventbrite-logo-icons-logos-emojis-tech-companies.png" alt="Company 5" style={{ width: '100px', height: 'auto' }} />
                                </Box>
                                {/* Dialog content */}
                                <Dialog open={open} onClose={handleClose}>
                                    <DialogContent>
                                        <Box sx={styles.dialogContentStyle}>
                                            {/* Hình ảnh */}
                                            <img
                                                src="https://hardywood.vn/uploads/images/day-may-cong-nghiep-medal(1).png"
                                                alt="Medal Image"
                                                style={styles.imageStyle}
                                            />

                                            {/* Tiêu đề */}
                                            <Typography variant="h5" sx={styles.titleStyle}>
                                                Learn from our very best
                                            </Typography>

                                            {/* Nội dung */}
                                            <Typography sx={styles.paragraphStyle}>
                                                Our Udemy Business collection is a curation of top-rated courses for individuals and organizations to upskill and reach their goals.
                                            </Typography>

                                            <Typography sx={styles.sectionTitleStyle}>
                                                Always fresh
                                            </Typography>
                                            <Typography sx={styles.paragraphStyle}>
                                                We add to the collection based on market trends and feedback from learners and their organizations.
                                            </Typography>

                                            <Typography sx={styles.sectionTitleStyle}>
                                                Data driven
                                            </Typography>
                                            <Typography sx={styles.paragraphStyle}>
                                                We curate the collection based on unique data points to identify new and emerging skills.
                                            </Typography>

                                            <Typography sx={styles.sectionTitleStyle}>
                                                Better every day
                                            </Typography>
                                            <Typography sx={styles.paragraphStyle}>
                                                We continuously refine the collection to help learners and businesses stay one step ahead.
                                            </Typography>
                                        </Box>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} color="primary">
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <CartPortal course={course} />
        </Box>
    );
}

export default Detail;
