import './css/Calc.css'
import { useState } from 'react';

function Calc(){
    const [val, setVal] = useState(0);
    const [valB, setValB] = useState(0);
    const [op, setOp] = useState("+");
    return (
        <>
            <div id="calc">
                <h1>Calculator</h1>
                <p id="a"></p><p id="b"></p>
                <input class="calcInput" onChange={(e) => setVal(e.target.value)}></input>
                <input class="calcInput" onChange={(e) => setValB(e.target.value)}></input>
                <br></br>
                <button class="calc-button" onClick={() => setOp("+")}>+</button>
                <button class="calc-button" onClick={() => setOp("-")}>-</button>
                <button class="calc-button" onClick={() => setOp("*")}>*</button>
                <button class="calc-button" onClick={() => setOp("/")}>/</button>
                <p id="output" >{eval(val+op+valB)}</p>
            </div>
        </>
    )
}

export default Calc;