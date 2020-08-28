import React from 'react';

const Cart = (props) => {
    let total=0;
    for(let i=0;i<props.cart.length;i++){
        const product = props.cart[i];
        total=total+product.price;
    }
    return (
        <div>
            <h2>Total Course Enrolled: {props.cart.length}</h2>
            <h2>To be Paid: {total}</h2>
        </div>
    );
};

export default Cart;