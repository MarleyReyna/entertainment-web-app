import { configureStore } from '@reduxjs/toolkit';
import mediaSlice from './mediaSlice';

export default configureStore({
    reducer: {
        media: mediaSlice,
    },
});