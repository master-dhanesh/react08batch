import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [{ username: "John Doe", email: "john@doe.example" }],
};

export const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
    },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
