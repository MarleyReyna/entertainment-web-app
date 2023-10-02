import { createSlice } from "@reduxjs/toolkit";
import { movieInfo } from "../data/MovieInfo";
import {type ItemType} from '../lib/types';

export const mediaSlice = createSlice({
    name: 'media',
    initialState: {
        media: movieInfo,
    },
    reducers: {
        addToBookmarks: (state, action) => {
            state.media.forEach((item: ItemType) => {
                if (item.id === action.payload) {
                    item.isBookmarked = true;
                }
            })
        },
        removeFromBookmarks: (state, action) => {
            state.media.forEach((item: ItemType) => {
                if (item.id === action.payload) {
                    item.isBookmarked = false;
                }
            })
        },
    }
})

export const { addToBookmarks, removeFromBookmarks } = mediaSlice.actions;
export default mediaSlice.reducer;