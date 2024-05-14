import React from 'react';
import chicken65Image from '../assets/img/plate13.jpg';
function Chicken65() {
    return (
        <>
            <img src={chicken65Image} alt="img" className="menu__img" />
            <h3 className="menu__name">Chicken 65</h3>
            <span className="menu__detail">Spicy and flavorful deep-fried chicken dish.</span>
            <span className="menu__price">₹180.00</span> {/* Price may vary */}
        </>
    );
}

export default Chicken65;
