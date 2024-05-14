import React from 'react';
import plate1Image from '../assets/img/plate4.jpg';

function ChickenRice() {
    return (
        <>
            <img src={plate1Image} alt="img" className="menu__img" />
            <h3 className="menu__name">Chicken Rice</h3>
                <span className="menu__detail">Chicken rice with South Indian spices.</span>

            <span className="menu__price">₹180.00</span>
        </>
    );
}

export default ChickenRice;
