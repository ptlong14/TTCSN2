import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseById } from '../../apis/course';
import Detail from '../../components/Detail/Detail';

const CourseDetailPage = () => {
    const { courseId } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const LoadDetail = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await getCourseById(courseId);
            console.log('Course data:', res);
            setCourse(res.data);
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
