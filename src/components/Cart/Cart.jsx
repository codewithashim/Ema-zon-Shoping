import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart)

    let total = 0;
    let shepping = 0
    for (const product of cart) {
        total += product.price
        shepping += product.shipping
    }

    const text = (total * 0.1).toFixed(2)
    const grandTotal = total + shepping + parseFloat(text)
    return (
        <section className='cardCont'>
            <h4>Selected Items : {cart.length}</h4>
            <p>Total Price : $ {total} </p>
            <p>Total Shepping :$ {shepping} </p>
            <p>Tex : {text}</p>
            <h3>Geand Total :$ {grandTotal}</h3>
        </section>
    );
};

export default Cart;