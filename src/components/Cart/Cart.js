import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    console.table(cart);

    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = total * 0.1;
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: ${total}</p>
            <p>Shipping: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: </h5>
        </div>
    );
};

export default Cart;