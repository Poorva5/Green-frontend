import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth';
import productReducer from './product'

const store = configureStore(
    {
        reducer: {

            auth: authReducer,

            product: productReducer,

        }
    }
)

export default store;


