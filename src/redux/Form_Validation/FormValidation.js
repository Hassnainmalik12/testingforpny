import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectEmail, selectName, setEmail, setEmailError, setName, setNameError} from "./FormValidationSlice";

const FormValidation = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    console.log(name.error)
    const email = useSelector(selectEmail);
    return (
        <>
            <div>
                <input type="text" placeholder={"Enter Name"} value={name.value} style={{border:"2px solid black"}}
                onChange={event => {
                    dispatch(setName(event.target.value))
                }}
                />
                {name.error && <p className={"text-red-500"}> name field is required</p> }
            </div>
            <div>
                <input type="text" placeholder={"Enter Email"} value={email.value} style={{border:"2px solid black"}}
                       onChange={event => {
                           dispatch(setEmail(event.target.value))
                       }}
                />
                {email.error && <p className={"text-red-500"}> email field is required</p> }
            </div>
            <div>
                <button className={"p-4 bg-black text-white"}

                        onClick={event => {

                            if (name.value === '') {

                                dispatch(setNameError())
                            }
                           else if (email.value === '') {
                                dispatch(setEmailError())
                            }


                         }}
                > submit </button>
            </div>
        </>

    );
};

export default FormValidation;