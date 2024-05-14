import React from 'react';
import plate1Image from '../assets/img/plate1.jpg';

function ButterChicken() {
    return (
        <>
            <img src={plate1Image} alt="img" className="menu__img" />
            <h3 className="menu__name">Butter Chicken</h3>
            <span className="menu__detail">Creamy chicken cooked with butter</span>
            <span className="menu__price">₹205.00</span>
        </>
    );
}

export default ButterChicken;
