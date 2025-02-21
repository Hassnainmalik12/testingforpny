import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
    name:'',
    amount : '',
    data:[],
    totalLiye:0,
    totalDIye:0
};
export const udhaarBookSlice = createSlice({
    name: 'udhaarBook',
    initialState,


    reducers: {

        setName: (state,action) => {
            state.name = action.payload
        },
        setAmount: (state,action) => {
            state.amount = action.payload
        },
        setData: (state,action) => {
            state.data = [
                ...state.data ,
                action.payload
            ]
        },

    },

});

export const { setName,
    setAmount,
setData
}
    = udhaarBookSlice.actions;



export const selectName = (state) => state.udharBookSLice.name;
export const selectAmount = (state) => state.udharBookSLice.amount;
export const selectData = (state) => state.udharBookSLice.data;
export default udhaarBookSlice.reducer;
