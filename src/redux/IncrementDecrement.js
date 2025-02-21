import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    changeByValue,
    decrement,
    increment,
    incrementByFive, incrementByValue,
    selectCount,
    selectCount2
} from "./incrementDecrementSlice";

const IncrementDecrement = () => {

   const dispatch = useDispatch();
   const count = useSelector(selectCount);
   const count2 = useSelector(selectCount2);
    console.log('count 1 value',count)
    console.log('count 2',count2)


    return (
        <>
            <div>

                <h1>count value {count}</h1>
                <h1>second count value {count2}</h1>

                <input type="text" onChange={e=>{
                    dispatch(incrementByValue(e.target.value));
                }}/>
                <button>apply</button>
                <br/>
            </div>

            <div>

            <button onClick={event => {
                dispatch(increment())
            }}> increment </button>


            <button onClick={event => {
                dispatch(decrement())
            }}> decrement </button>


            <button onClick={event => {
                dispatch(incrementByFive())
            }}> incrementby5 </button>

            </div>










        </>
    );
};

export default IncrementDecrement;