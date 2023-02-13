import { useState } from 'react';
import '../css/Shopping.css';

function ShopItem(props){
    return (
        <div id="item">
            <h1>{props.name}</h1>
            <h3>{props.price}</h3>
            <img class="thumb" src={props.imgsrc}></img>
            <button onClick={() => props.onBuy(props.name, props.price)}>Add to Cart!</button>
        </div>
    )
}

export default ShopItem;

