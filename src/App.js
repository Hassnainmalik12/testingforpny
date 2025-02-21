import React from 'react';
import logo from '../src/drawable/dicee_logo.png';
import dice1 from '../src/drawable/dice1.png';
import dice2 from '../src/drawable/dice2.png';
import dice3 from '../src/drawable/dice3.png';
import dice4 from '../src/drawable/dice4.png';
import dice5 from '../src/drawable/dice5.png';
import dice6 from '../src/drawable/dice6.png';
import DiceRollGame from "./redux/dice_roll_game/DiceRollGame";
import {useDispatch, useSelector} from "react-redux";
import {selectDice1, selectDice2, setDice1Value, setDice2Value} from "./redux/dice_roll_game/diceRollSlice";
function App() {
    const dispatch = useDispatch();
    const value1 = useSelector(selectDice1);
    const value2 = useSelector(selectDice2);

const images = [dice1,dice2,dice3, dice4, dice5, dice6];
    function getRandomNumber(){

        let random1 = Math.floor(Math.random()*6 + 1);
        let random2 = Math.floor(Math.random()*6  +1);
        return {random1 , random2}
    }

  return (
    <div className="App w-screen h-screen bg-gray-800 flex">

        <div className="weight-1 h-full  bg-gray-700 flex flex-col">

            <div className="weight-1 bg-gray-800  flex justify-center items-center">
                <img src={logo} alt=""/>
            </div>
            <div className="weight-1 bg-slate-700 flex justify-evenly items-center">
                <img src={images[value1-1]} alt=""/>
                <img src={images[value2-1]} alt=""/>
            </div>
            <div className="weight-1 bg-slate-800 flex items-center justify-center">
                <button className={"w-32 h-12 bg-slate-700 text-white text-xl tracking-widest"} onClick={event => {
                   let {random1 , random2 } = getRandomNumber();
                    dispatch(setDice1Value(random1));
                    dispatch(setDice2Value(random2));
                }}>ROLL</button>
            </div>

        </div>
        <div className="weight-1 h-full  bg-gray-600">
            <DiceRollGame/>
        </div>
    </div>
  );
}
export default App;


