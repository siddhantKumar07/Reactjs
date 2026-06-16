import { createSlice } from "@reduxjs/toolkit";

const collectionSlice= createSlice({
        name:"collection",
 initialState:{
   data:[]
 },
 reducers:{
    setData(state,action){
        state.data=action.payload
    }
 }
})
export const {setData} = collectionSlice.actions;
export default collectionSlice.reducer