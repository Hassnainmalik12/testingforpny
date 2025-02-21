import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectAmount, selectData, selectName, setAmount, setData, setName} from "./udhaarBookSlice";


const Form = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectName)
    const amount = useSelector(selectAmount);
    const data = useSelector(selectData);

    console.log(data)
    return (
        <div className={"h-screen w-screen bg-gray-700 flex "}>
            <div className="w-[300px] h-[400px] bg-gray-500 flex flex-col justify-evenly items-center">

                <input type="text" placeholder={"Enter Name"} value={name} className={"bg-gray-900 text-white outline-none w-full p-1"}
                onChange={event => {
                    dispatch(setName(event.target.value))
                }}
                />
                <input type="text" placeholder={"Enter Amount"} value={amount} className={"bg-gray-900 text-white outline-none w-full p-1"}
                       onChange={event => {
                           dispatch(setAmount(event.target.value))
                       }}
                />
                <div className={"flex gap-x-5"}>
                    <button className={"px-5 py-2 bg-slate-700 text-white font-bold"}

                    onClick={event => {
                        dispatch(setData({
                            name: name,
                            amount: amount,
                            type: 'Liye'
                        }))
                    }}
                    > Liye </button>
                    <button className={"px-5 py-2 bg-slate-700 text-white font-bold"}

                            onClick={event => {
                                dispatch(setData({
                                    name: name,
                                    amount: amount,
                                    type: 'Diye'
                                }))
                            }}
                    > Diye </button>
                </div>

            </div>

            <div className={"h-auto w-full bg-green-700"}>
                <table className="table-auto">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Type</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((dataList)=> {
                       return <tr>
                            <td>{dataList.name}</td>
                            <td>{dataList.amount}</td>
                            <td>{dataList.type}</td>
                        </tr>
                    })}


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Form;