import React, { useState } from 'react';
import Courses from '../Courses/Courses';
import fakeData from '../../fakeData';
import './Class.css';
import Cart from '../Cart/Cart';

const Class = () => {
    
    const [products]=useState(fakeData);
    const [cart, setCart]=useState([]);

    const handleAddProduct= (product)=>{
        
        const newCart = [...cart,product];
        setCart(newCart);

    }
    
    return (
        <div className="class">
            <div className="course-container">
            {
                products.map(product => <Courses product={product}
                    handleAddProduct = {handleAddProduct} >
                    </Courses>)
            }
           
            </div>
            <div className="cart-container">
            <Cart cart={cart}></Cart>
            
            
            </div>
        </div>
    );
};

export default Class;