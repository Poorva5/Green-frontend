import axios from "axios";
import { setLoading } from "./auth";

const apiWithToken = axios.create({
    baseURL: "http://localhost:8000",
    timeout: 15000,
    headers: {
        "Content-Type": "Application/json",
        "Authorization": `Token ${localStorage.getItem('accessToken')}`
    }
});

const apiWithoutToken = axios.create({
    baseURL: "http://localhost:8000",
    timeout: 15000
});

const { createSlice } = require("@reduxjs/toolkit");

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        productList: [],
        product: {},
        isLoading: false,
        fetchingList: []
    },

    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload;
        },
        setProducts: (state, action) => {
            state.productList = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = !state.isLoading
        }
    }
})

export const { setProducts, setProduct } = productSlice.actions;

export default productSlice.reducer;

export function fetchProductList(data) {
    return async function fetchProductListThunk(
        dispatch
    ) {
        dispatch(setLoading());
        try {
            const res = await apiWithoutToken.get(
                "/api/product/list"
            );
            dispatch(setProducts(res.data))
            dispatch(setLoading())
        }
        catch (err) {
            dispatch(setLoading());
        }
    };
}

export function fetchProduct(id) {
    return async function fetchProductThunk(
        dispatch
    ) {
        dispatch(setLoading());
        try {
            const res = await apiWithoutToken.get(
                `/api/product/detail/${id}`,
            );
            dispatch(setProduct(res.data))
            dispatch(setLoading());
        } catch (err) {
            dispatch(setLoading());
        }
    };
}