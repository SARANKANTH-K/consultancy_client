import React from 'react';
import plate1Image from '../assets/img/plate2.jpg';

function ChettinadChicken() {
    return (
        <>
            <img src={plate1Image} alt="img" className="menu__img" />
            <h3 className="menu__name">Chettinad Chicken</h3>
            <span className="menu__detail">Traditional South Indian spices</span>
            <span className="menu__price">₹240.00</span>
        </>
    );
}

export default ChettinadChicken;
