import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
    productDetail: [],
    productDetailStatus: STATUS.IDLE,
}

export const getBlogs = createAsyncThunk("getBlogs", async () => {
    const response = await fetch('https://localhost:7178/api/Blog/GetAll')
    const data = await response.json()
    return data
})

export const getCategoryProducts = createAsyncThunk("getCategoryProduct", async () => {
    const response = await fetch(`https://localhost:7178/api/Catetgory/GetAll`)
    const data = await response.json()
    return data
})


export const getProductsDetail = createAsyncThunk("getProductsDetail", async (id) => {
    const response = await fetch(`https://localhost:7178/api/Product/GetCategoryByProduct/${id}`)
    const data = await response.json()
    return data
})

const BlogSlice = createSlice({
    name: "products",
    initialState,
    reducers: [],
    extraReducers: (builder) => {
        builder
            .addCase(getBlogs.pending, (state, action) => {
                state.productsStatus = STATUS.LOADING
            })
            .addCase(getBlogs.fulfilled, (state, action) => {
                state.products = action.payload
                state.productsStatus = STATUS.SUCCESS
            })
            .addCase(getBlogs.rejected, (state, action) => {
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

export default BlogSlice.reducer
