import React from 'react';
import pepperChickenImage from '../assets/img/plate15.jpg'; 
function PepperChicken() {
    return (
        <>
            <img src={pepperChickenImage} alt="img" className="menu__img" />
            <h3 className="menu__name">Pepper Chicken</h3>
            <span className="menu__detail">Chicken cooked with black pepper and spices.</span>
            <span className="menu__price">₹200.00</span> 
        </>
    );
}

export default PepperChicken;
