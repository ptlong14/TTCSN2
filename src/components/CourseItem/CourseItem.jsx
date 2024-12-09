import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
//import { getAllItemCourse } from "../../apis/course";
import Course from "../Course/Course";
import SkeletonList from "./CourseItemSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../../store/favorite";
import axios from "axios";

const CourseItem = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch= useDispatch();
    const { courses} = useSelector(state => state.courses);
    console.log(courses)
    const LoadAllCourse = async () => {
        setLoading(true);
        setError(null);
        try {
            //const res = await getAllItemCourse()
            const res = await axios.get('http://localhost:8080/api/v1/courses/categorycourse')
            console.log('res',res)
            dispatch(setCourses( res.data.data));
            console.log('course:', courses)
        } catch (error) {
            console.error('Error fetching courses:', error);
            setError("Failed to load courses");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        LoadAllCourse();
    }, [dispatch]);

    if (loading) {
       return <SkeletonList/>
    }

    if (error) {
        return <Typography variant="h6" color="error">{error}</Typography>;
    }

    return (
        <Container>
            <Typography variant="h4" gutterBottom >
                What to learn next ?
            </Typography>
            {loading ? (<SkeletonList />) : (<Course courses={courses}/>)}
        </Container>
    );
};

export default CourseItem;
