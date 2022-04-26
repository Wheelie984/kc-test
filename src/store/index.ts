import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducers from './modules';
import Api from './middlewares/api';

const enhancers: any[] = [];
const middleware = [thunk, Api];

const store = configureStore({
    reducer: rootReducers,
    middleware,
    enhancers,
    devTools: true,
});

export default store;
