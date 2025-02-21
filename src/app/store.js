import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import incrementDecrementReducer from "../redux/incrementDecrementSlice";
import progressBarReducer from "../redux/progress_bar/progressBarSlice";
import diceRollReducer from "../redux/dice_roll_game/diceRollSlice";
import udhaarBookReducer from "../redux/UdhaarBook/udhaarBookSlice";
import formValidationReducer from "../redux/Form_Validation/FormValidationSlice";
import fragmentReducer from "../redux/navigation_controller/mainSlice";
export const store = configureStore({
  reducer: {
    incrementDecrement : incrementDecrementReducer,
    progressBar:progressBarReducer,
    diceRollSlice:diceRollReducer,
    udharBookSLice:udhaarBookReducer,
    formValidationSLice:formValidationReducer,
    fragmentSlice:fragmentReducer
  },
});
