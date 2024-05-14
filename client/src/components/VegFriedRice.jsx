import React from 'react';
import vegFriedRiceImage from '../assets/img/plate10.jpg';

function VegFriedRice() {
    return (
        <>
            <img src={vegFriedRiceImage} alt="img" className="menu__img" />
            <h3 className="menu__name">Veg Fried Rice</h3>
            <span className="menu__detail">Delicious fried rice with assorted vegetables.</span>
            <span className="menu__price">₹150.00</span> 
        </>
    );
}

export default VegFriedRice;
