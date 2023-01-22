import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice/userSlice";
import ImageReducer from "./ImageSlice/imageSlice";
export const store = configureStore({
    reducer: {
        users: UserReducer,
        images: ImageReducer,
    },
});

// 1.Create store
