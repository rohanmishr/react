import "./css/Page.css"
import React, { useState } from 'react';

function Page(){
    const [count, setCount] = useState(0);
    return (
        <div className="Page">
            <>
                <h1>293 Scouting App</h1>
                <h3>Scouting app for Team 293 Pennington, NJ</h3>

                <button onClick={() => setCount(count+1)}>Click</button>
                <p id="clicked">You clicked the button {count}</p>
            </>
        </div>
    )
}

export default Page