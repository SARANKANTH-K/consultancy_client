import React from 'react';
import plate1Image from '../assets/img/plate5.png'; // assuming you have a new image for Szechuan Chicken Rice

function SzechuanChickenRice() {
    return (
        <>
            <img src={plate1Image} alt="img" className="menu__img" />
            <h3 className="menu__name">schezwan Chicken Rice</h3>
            <span className="menu__detail">Chicken rice with schezwan spices.</span>
            <span className="menu__price">₹200.00</span>
        </>
    );
}

export default SzechuanChickenRice;
