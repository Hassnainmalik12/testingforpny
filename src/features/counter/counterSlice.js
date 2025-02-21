import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
  count :0
};
export const counterSlice = createSlice({
  name: 'counter',
  initialState,


  reducers: {
    increment: (state) => {
      state.value += 1;
    },



  },

});

export const { increment, decrement, incrementByAmount }
    = counterSlice.actions;


// selectors
export const selectCount = (state) => state.counter.count;
export default counterSlice.reducer;
