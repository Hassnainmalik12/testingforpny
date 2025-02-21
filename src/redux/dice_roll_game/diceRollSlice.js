import {  createSlice } from '@reduxjs/toolkit';
const initialState = {
    dice1 : 1,
    dice2 : 1
};
export const diceRollSlice = createSlice({
    name: 'dice_roll',
    initialState,
    reducers: {

        setDice1Value : (state,action)=>{
            state.dice1 = action.payload;
        },
        setDice2Value : (state,action)=>{
            state.dice2 = action.payload;
        },
    },
});

export const { setDice1Value,setDice2Value}
    = diceRollSlice.actions;
export const selectDice1 = (state) => state.diceRollSlice.dice1;
export const selectDice2 = (state) => state.diceRollSlice.dice2;
export default diceRollSlice.reducer;
