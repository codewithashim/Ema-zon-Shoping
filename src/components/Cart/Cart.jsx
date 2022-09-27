import React from 'react';

const Cart = ({ cart }) => {
    return (
        <section>
            <h4>Selected Items : {cart.length}</h4>
        </section>
    );
};

export default Cart;