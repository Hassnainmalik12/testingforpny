import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
    count :0,
    count2 : 10
};
export const incrementDecrementSlice = createSlice({
    name: 'increment',
    initialState,


    reducers: {

        increment: (state) => {
            state.count += 1;
        },

        decrement: (state) => {
            state.count -= 1;
        },

        incrementByFive : (state,action)=>{
          state.count +=5;
          state.count2-=5;
        },
        incrementByValue : (state,action)=>{
          state.count = action.payload;

        },

    },

});

export const { increment,decrement, incrementByFive
    ,incrementByValue}
    = incrementDecrementSlice.actions;



export const selectCount = (state) => state.incrementDecrement.count;
export const selectCount2 = (state) => state.incrementDecrement.count2;
export default incrementDecrementSlice.reducer;
