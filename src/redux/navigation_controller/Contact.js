import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {navigateToFragment, selectFragment} from "./mainSlice";
import {FRAMENTS} from "./fragments";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";

const Contact = () => {
    const dispatch = useDispatch();
    const fragments = useSelector(selectFragment);
    const newFragment = [...fragments]
    const lastFragment = newFragment.pop();

    console.log(newFragment)
    console.log(lastFragment)
    return (
        <div className={"w-full h-full bg-slate-700 flex"}>

            <div className={"sidebar w-96 h-full bg-red-400 "}>

                <button className={"p-3 bg-black text-white mt-1"}

                onClick={event => {
                    dispatch(navigateToFragment({
                        fragment : FRAMENTS.COMPONENT1
                    }))
                }}

                >change top section (component 1)</button>
                <button className={"p-3 bg-black text-white mt-1"}

                        onClick={event => {
                            dispatch(navigateToFragment({
                                fragment : FRAMENTS.COMPONENT2
                            }))
                        }}

                >change top section (component 2)</button>
                <button className={"p-3 bg-black text-white mt-1"}

                        onClick={event => {
                            dispatch(navigateToFragment({
                                fragment : FRAMENTS.COMPONENT3
                            }))
                        }}

                >change bottom section (component 3)</button>
                <button className={"p-3 bg-black text-white mt-1"}


                        onClick={event => {
                            dispatch(navigateToFragment({
                                fragment : FRAMENTS.COMPONENT4
                            }))
                        }}

                >change bottom section (component 4)</button>

            </div>
            <div className={"hero-section flex-1 bg-red-500"}>
                <div className={"h-1/2 w-full hero-section-top bg-red-300"}>

                    {(()=>{
                        if (lastFragment.fragment === FRAMENTS.DEFAULT){
                            return "hello"
                        }

                        else if(lastFragment.fragment === FRAMENTS.COMPONENT1){
                            return  <Component1/>
                        }


                        else if(lastFragment.fragment === FRAMENTS.COMPONENT2){
                            return  <Component2/>
                        }
                        else if(lastFragment.fragment === FRAMENTS.COMPONENT3){
                            return  <Component2/>
                        }
                        else if(lastFragment.fragment === FRAMENTS.COMPONENT4){
                            return  <Component2/>
                        }
                    }) ()}


                </div>
                <div className={"h-1/2 w-full hero-section-bottom bg-red-200"}>

                    {(()=>{
                        if (lastFragment.fragment === FRAMENTS.DEFAULT){
                            return "hero section bottom"
                        }

                        else if(lastFragment.fragment === FRAMENTS.COMPONENT1){
                            return  "hero section bottom"
                        }
                        else if(lastFragment.fragment === FRAMENTS.COMPONENT2){
                            return "hero section bottom"
                        }
                        else if(lastFragment.fragment === FRAMENTS.COMPONENT3){
                            return  <Component3/>
                        }


                        else if(lastFragment.fragment === FRAMENTS.COMPONENT4){
                            return  <Component4/>
                        }
                    }) ()}

                </div>

            </div>

        </div>
    );
};

export default Contact;