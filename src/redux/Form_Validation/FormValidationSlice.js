import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
  name :{
    value : '',
      error: null
  },
    email :{
    value : '',
    error: null
  },

};
export const formValidationSlice = createSlice({
    name: 'formValidation',
    initialState,


    reducers: {

        setName: (state,action) => {
            state.name = {
                value : action.payload,
                error :null
            };
        },
        setNameError: (state,action) => {
            state.name = {
                value : '',
                error :true
            };
        },
        setEmail: (state,action) => {
            state.email = {
                value : action.payload,
                error :null
            };
        },
        setEmailError: (state,action) => {
            state.email = {
                value : '',
                error :true
            };
        },


    },

});

export const { setName,
setEmail,
setNameError,
setEmailError}
    = formValidationSlice.actions;



export const selectName = (state) => state.formValidationSLice.name;
export const selectEmail = (state) => state.formValidationSLice.email;

export default formValidationSlice.reducer;
