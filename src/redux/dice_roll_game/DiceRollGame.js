import React from 'react';
import {useSelector} from "react-redux";
import {selectDice1, selectDice2} from "./diceRollSlice";

const DiceRollGame = () => {
    const dice1 = useSelector(selectDice1);
    const dice2 = useSelector(selectDice2);
    const numbers = [2,3,4,5,6,7,8,9,10,11,12];

    return (
        <div className={"w-full h-full bg-gray-700 flex flex-col items-center justify-evenly"}>

            {numbers.map((v,i)=> {
                const classes = 'w-16 h-16 flex justify-center items-center text-white text-xl border-4 border-white border-solid'.split(' ');
                if (dice1+dice2 === v){
                    classes.push("bg-green-700");

                }
                return  <div key={i} className={classes.join(' ')}>{v}</div>

            })}

        </div>
    );
};

export default DiceRollGame;