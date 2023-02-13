function Cart(props){
    var t = 0;
    for(var i = 0; i < props.arr.length; i++){
        t += parseInt(props.arr[i].price);
        console.log(parseInt(props.arr[i].price));
    }
    return (
        <div id="cart">
            <h1>Your Cart</h1>
            <h3>Price: {t}</h3>
        </div>
    )
}

export default Cart;