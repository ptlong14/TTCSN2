import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import NewestCources from "./NewestCources";
import AllCourseInCategory from "./AllCourseInCategory"
import PropTypes from 'prop-types';
TabCourse.propTypes = {
    course: PropTypes.array,
};
function TabCourse({course=[]}) {
    const [value, setValue] = useState('one');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box sx={{ width: '100%', marginTop: '10px' }}>
                <Typography variant="h5" fontWeight='bolder'>Courses to get you started</Typography>
                <Typography sx={{ color: 'grey' }}>Explore courses from experienced, real-world experts</Typography>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="one" label="Most popular" />
                    <Tab value="two" label="Newest cources" />
                </Tabs>
            </Box>
            {
                value === 'one' && (
                    <AllCourseInCategory course={course}></AllCourseInCategory>
                )
            }
            {
                value === "two" && (
                    <NewestCources course={course} />
                )
            }
        </>
    );
}

export default TabCourse;