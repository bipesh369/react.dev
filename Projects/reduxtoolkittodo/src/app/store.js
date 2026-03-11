import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

// it mostly takes object
export const store = configureStore({
    reducer: todoReducer
})