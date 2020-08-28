import React from 'react';
import './Courses.css'

const Courses = (props) => {
    return (
        <div className="course-component">
          <h2>Course: {props.product.name}</h2>
          
          <br></br>
          <p>Price: ${props.product.price}</p>
          <button class="enroll-button" onClick={()=>props.handleAddProduct(props.product)}>Enroll now</button>
        </div>
    );
};

export default Courses;