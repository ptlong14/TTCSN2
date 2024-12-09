import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
//import { getCourseById } from '../../apis/course';
import Detail from '../../components/Detail/Detail';
import axios from 'axios';

const CourseDetailPage = () => {
    const { courseId } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    console.log('ID', courseId)
    const LoadDetail = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
           // const res = await getCourseById(courseId);
            const res = await axios.get(`http://localhost:8080/api/v1/courses/${courseId}`);
            console.log('Course data:', res.data.data);
            setCourse(res.data.data);
        } catch (e) {
            console.error('Error fetching courses:', e);
            setError("Failed to load courses");
        } finally {
            setLoading(false);
        }
    }, [courseId]);

    useEffect(() => {
        LoadDetail(); 
    }, [LoadDetail]); 

    if (loading) return <div>Đang tải...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <Detail course={course}></Detail>
        </div>
    );
};

export default CourseDetailPage;
