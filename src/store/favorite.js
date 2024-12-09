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
            const index = state.favorites.findIndex(fav => fav.courseId === course.courseId);
            if (index === -1) {
                state.favorites.push(course);
            } else {
                state.favorites.splice(index, 1);
            }
        },
    },
});

export const { setCourses, toggleFavorite } = courseSlice.actions;
export default courseSlice.reducer;
