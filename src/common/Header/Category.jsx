import { useEffect, useState } from "react";
import { getAllItemCategories } from "../../apis/categories";
import { Link } from "react-router-dom";

const CategoryItem = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const LoadAllCategories = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await getAllItemCategories();
            console.log('categories', res.data);
            setCategories(res.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
            setError("Failed to load categories");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        LoadAllCategories();
    }, []);

    if (loading) {
        return <p className="category-title">Categories</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="navbar-category-wrapper">
            <p className="category-title">Categories</p>
            <div className="category-menu">
                {categories.map((category) => (
                    <p key={category.id} className="category-item">
                        <Link to={`/category/${category.id}`} className="category-item">
                            {category.name}
                        </Link>
                    </p>
                ))}
            </div>
        </div>
    );
}

export default CategoryItem;
