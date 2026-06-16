import { createSlice } from "@reduxjs/toolkit";
import {Bounce, toast} from 'react-toastify'
const collectionSlice= createSlice({
        name:"collection",
 initialState:{
   data:[]
 },
 reducers:{
    setData(state,action){
        state.data=action.payload
    },
    addedToast:()=>{
    toast.success('Added to Collection❤️', {
position: "top-center",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
closeButton: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
    },
    removeToast:()=>{
       toast.success('❌ removed From Collection', {
position: "top-center",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
closeButton: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
    }
 }
})
export const {setData,addedToast,removeToast} = collectionSlice.actions;
export default collectionSlice.reducer