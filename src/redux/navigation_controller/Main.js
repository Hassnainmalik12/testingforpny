import React from 'react';
import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";

const Main = () => {
    return (
        <>
           <div className={"h-screen w-screen flex flex-col"}>
        <div className={"h-16 w-full bg-red-500"}>

            <Navbar/>

        </div>
            <div className="flex-1 bg-green-300">

                <Outlet/>

            </div>
           </div>
        </>
    );
};

export default Main;