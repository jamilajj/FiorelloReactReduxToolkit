import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/Status";

const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
    productDetail: [],
    productDetailStatus: STATUS.IDLE,
}

export const getProducts = createAsyncThunk("getProducts", async () => {
    const response = await fetch('https://localhost:7178/api/Product/GetAll')
    const data = await response.json()
    return data
})

export const getCategoryProducts = createAsyncThunk("getCategoryProduct", async (category) => {
    const response = await fetch(`https://localhost:7178/api/${category}`)
    const data = await response.json()
    return data
})


export const getProductsDetail = createAsyncThunk("getProductsDetail", async (id) => {
    const response = await fetch(`https://localhost:7178/api/Product/${id}`)
    const data = await response.json()
    return data
})

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: [],
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.productsStatus = STATUS.LOADING
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload
                state.productsStatus = STATUS.SUCCESS
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.productsStatus = STATUS.ERROR
            })
            .addCase(getProductsDetail.pending, (state, action) => {
                state.productDetailStatus = STATUS.LOADING
            })
            .addCase(getProductsDetail.fulfilled, (state, action) => {
                state.productDetail = action.payload
                state.productDetailStatus = STATUS.SUCCESS
            })
            .addCase(getProductsDetail.rejected, (state, action) => {
                state.productDetailStatus = STATUS.ERROR
            })
            .addCase(getCategoryProducts.pending, (state, action) => {
                state.productsStatus = STATUS.LOADING
            })
            .addCase(getCategoryProducts.fulfilled, (state, action) => {
                state.products = action.payload
                state.productsStatus = STATUS.SUCCESS
            })
            .addCase(getCategoryProducts.rejected, (state, action) => {
                state.productsStatus = STATUS.ERROR
            })
    }
})

export default  productSlice.reducer