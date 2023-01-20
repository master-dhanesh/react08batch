import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice/userSlice";
export const store = configureStore({
    reducer: {
        users: UserReducer,
    },
});

// 1.Create store
