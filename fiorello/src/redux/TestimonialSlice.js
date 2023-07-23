import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";                                      
import { STATUS } from "../utils/Status";

const initialState = {
    testimonials: [],
    testimonialsStatus: STATUS.IDLE
}
export const getTestimonials = createAsyncThunk("getTestimonials", async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
})
const TestimonialSlice = createSlice({
    name: "testimonials",
    initialState,
    reducers: [],
    extraReducers: (builder) => {
        builder
            .addCase(getTestimonials.pending, (state) => {
                state.testimonialsStatus = STATUS.LOADING
            })
            .addCase(getTestimonials.fulfilled, (state, action) => {
                state.experts = action.payload
                state.testimonialsStatus = STATUS.SUCCESS
            })
            .addCase(getTestimonials.rejected, (state) => {
                state.testimonialsStatus = STATUS.ERROR
            })

    }


})
export default TestimonialSlice.reducer


