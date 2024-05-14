import React from 'react';
import spicyChickenRiceImage from '../assets/img/plate6.jpg'; // assuming you have an image for Spicy Chicken Rice

function SpicyChickenRice() {
    return (
        <>
            <img src={spicyChickenRiceImage} alt="img" className="menu__img" />
            <h3 className="menu__name">Spicy Chicken Rice</h3>
            <span className="menu__detail">Chicken rice cooked with spicy seasonings.</span>
            <span className="menu__price">₹190.00</span> {/* Price may vary */}
        </>
    );
}

export default SpicyChickenRice;
