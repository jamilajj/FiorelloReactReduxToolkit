import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/Status";

const initialState = {
    experts: [],
    expertsStatus: STATUS.IDLE
}
export const getExperts = createAsyncThunk("getExperts", async () => {
    const response = await fetch('https://fakestoreapi.com/users?limit=4')
    const data = await response.json()
    return data
})
const ExpertSlice = createSlice({
    name: "experts",
    initialState,
    reducers: [],
    extraReducers: (builder) => {
        builder
            .addCase(getExperts.pending, (state) => {
                state.expertsStatus = STATUS.LOADING
            })
            .addCase(getExperts.fulfilled, (state, action) => {
                state.experts = action.payload
                state.expertsStatus = STATUS.SUCCESS
            })
            .addCase(getExperts.rejected, (state) => {
                state.expertsStatus = STATUS.ERROR
            })

    }


})
export default ExpertSlice.reducer