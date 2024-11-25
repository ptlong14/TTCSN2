import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.store";
import courseReducer from './favorite'

export const store = configureStore({
    reducer:{
        "auth": authReducer,
        courses: courseReducer ,
    }
})