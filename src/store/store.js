import { configureStore } from '@reduxjs/toolkit'
import { taskReducer } from "./reducers/reduser";
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        task: taskReducer,
    },
});
