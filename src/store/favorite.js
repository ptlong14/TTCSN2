import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    courses: [],
    favorites: [],
};

const courseSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        setCourses(state, action) {
            state.courses = action.payload;
        },
        toggleFavorite(state, action) {
            const course = action.payload;
            // Kiểm tra xem khóa học đã có trong danh sách yêu thích chưa
            const index = state.favorites.findIndex(fav => fav.id === course.id);
            if (index === -1) {
                // Nếu chưa có, thêm khóa học vào danh sách yêu thích
                state.favorites.push(course);
            } else {
                // Nếu đã có, xóa khóa học khỏi danh sách yêu thích
                state.favorites.splice(index, 1);
            }
        },
    },
});

export const { setCourses, toggleFavorite } = courseSlice.actions;
export default courseSlice.reducer;
