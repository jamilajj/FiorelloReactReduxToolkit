import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    categories:[]
}

export const getCategories = createAsyncThunk('category',async()=>{
    const response=await fetch('https://localhost:7178/')
    const data = response.json();
    return data;
})

const categorySlice=createSlice({
    name:"categories",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getCategories.fulfilled,(state,action)=>{
            state.categories=action.payload;
        })
    }
})
export default categorySlice.reducer;