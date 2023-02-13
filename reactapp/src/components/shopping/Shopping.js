import { useState, useEffects, useEffect } from 'react';
import ShopItem from './ShopItem.js';
import Cart from './Cart.js';

function Item(name, price){
    this.name = name;
    this.price = price;
}
function Shopping(){
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    return (
        <div>
            <ShopItem name="Spike Bugatti 293" price="696969" imgsrc="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200"
       onBuy={(name, price) => setCartItems([...cartItems, new Item(name, price)])}/>
            <Cart arr={cartItems}/>
        </div>
    )
}

export default Shopping;