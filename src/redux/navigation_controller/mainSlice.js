import {  createSlice } from '@reduxjs/toolkit';
import {FRAMENTS} from "./fragments";


const initialState = {
   fragments :[
       {
       fragment: FRAMENTS.DEFAULT
}
   ]
};
export const fragmentSlice = createSlice({
    name: 'FRAGMENTS',
    initialState,


    reducers: {

        navigateToFragment : (state,action)=>{
            state.fragments = [

                ...initialState.fragments,
                action.payload

            ]

        },

    },

});

export const {navigateToFragment}
    = fragmentSlice.actions;



export const selectFragment = (state) => state.fragmentSlice.fragments;

export default fragmentSlice.reducer;
