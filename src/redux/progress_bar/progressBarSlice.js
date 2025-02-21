import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
    count :0,
    count2 : 0
};
export const progressBarSLice = createSlice({
    name: 'progressbar',
    initialState,


    reducers: {

        increment: (state) => {
            state.count += 1;
            state.count2 = state.count;
        },

        decrement: (state) => {
            state.count -= 1;
            state.count2 = state.count;
        },


        incrementByValue : (state,action)=>{
            state.count = parseInt(action.payload);

        },
        apply : (state,action)=>{
            state.count2 = state.count;

        },

    },

});

export const { increment,decrement, incrementByFive
    ,incrementByValue,apply}
    = progressBarSLice.actions;



export const selectCount = (state) => state.progressBar.count;
export const selectCount2 = (state) => state.progressBar.count2;
export default progressBarSLice.reducer;
