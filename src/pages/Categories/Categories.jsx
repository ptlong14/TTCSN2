import { useEffect, useState, useCallback, useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import productApi, { getCourseByCategory } from "../../apis/course";
import { Container, Typography } from "@mui/material";
import queryString from 'query-string';
import BasicDetail from "../../components/FindByCategory/BasicDetail/BasicDetail";
import TabCourse from "../../components/FindByCategory/TabCourse/TabCourse";
import SkeletonCategory from "../../components/FindByCategory/Skeleton/SkeletonCategory";
import FilterCourse from "../../components/FindByCategory/FilterCourse/FilterCourse";

const Categories = () => {
    const { categoryId } = useParams();
    const [courses, setCourses] = useState([]);
    const [filterCourses, setFilterCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const LoadAllCourse = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await getCourseByCategory(categoryId);
            setCourses(res.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
            setError("Failed to load courses");
        } finally {
            setLoading(false);
        }
    }, [categoryId]);

    useEffect(() => {
        LoadAllCourse();
    }, [LoadAllCourse]);

    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search);
        const price = Array.isArray(params.price) ? params.price : (params.price ? [params.price] : []);
        const duration = Array.isArray(params.duration) ? params.duration : (params.duration ? [params.duration] : []);

        return {
            ...params,
            duration,
            price,
            rating: params.rating || undefined,
            sort: params.sort || 'all-courses',
        };
    }, [location.search]);

    const fetchCourseFilter = async (queryParams) => {
        try {
            const res = await productApi.getAll(queryParams, categoryId);
            console.log("queryParams", queryParams);
            console.log('Respond course by filters:', res.data.courses);
            setFilterCourses(res.data.courses);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    useEffect(() => {
        const { duration, price, rating, sort } = queryParams;
        fetchCourseFilter({
            duration, price, rating, sort,
        });
    }, [queryParams, categoryId]);

    const handleFiltersChange = (newFilters) => {
        const filters = {
            ...queryParams,
            ...newFilters,
        };
        const newUrl = {
            pathname: window.location.pathname,
            search: queryString.stringify(filters),
        };
        navigate(`${newUrl.pathname}?${newUrl.search}`, { replace: false });
    };

    if (error) {
        return <Typography variant="h6" color="error">{error}</Typography>;
    }

    return (
        <div>
            {loading ? (
                <Container>
                    <SkeletonCategory />
                </Container>
            ) : (
                <Container>
                    <BasicDetail course={courses} />
                    <TabCourse course={courses.courses} />
                    <FilterCourse course={courses} filterCourses={filterCourses} filters={queryParams} onFilterChange={handleFiltersChange} />
                </Container>
            )}
        </div>
    );
};

export default Categories;
