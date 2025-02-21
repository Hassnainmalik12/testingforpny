import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {apply, decrement, increment, incrementByValue, selectCount, selectCount2} from "./progressBarSlice";
import app from "../../App";

const ProgressBar = () => {

    const dispatch = useDispatch();
    const count = useSelector(selectCount);
    const count2 = useSelector(selectCount2);
    console.log(count)
    console.log('count 2 value',count2)

    return (
        <div>
            <button onClick={event => {
                dispatch(increment())
            }}>+</button>


            <input type="text" value={count} onChange={e=>{
                dispatch(incrementByValue(parseInt(e.target.value)))
            }}/>



            <button onClick={event => {
                dispatch(decrement())
            }}>-</button>


            <button onClick={event => {
                dispatch(apply())
            }}>apply</button>
            <div className={""} style={{width:"500px", border:"1px solid red" , height:"100px"}}>

                <div className={""} style={{width:`${count2}px`, height:"100%", background:"black"}}></div>

            </div>
        </div>
    );
};

export default ProgressBar;