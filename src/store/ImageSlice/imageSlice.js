import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    images: [],
};

export const imageSlice = createSlice({
    name: "gallery",
    initialState,
    reducers: {
        getImages: (state, action) => {
            state.images = action.payload;
        },
    },
});

export const { getImages } = imageSlice.actions;

export const getImagesAsync = () => (dispatch, getStates) => {
    // console.log("Inside getimagesasync");
    // console.log(getStates());
    axios
        .get("https://picsum.photos/v2/list")
        .then((response) => {
            dispatch(getImages(response.data));
        })
        .catch((err) => console.log(err));
};

export default imageSlice.reducer;
