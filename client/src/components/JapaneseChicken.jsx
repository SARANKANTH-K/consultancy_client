import React from 'react';
import plate1Image from '../assets/img/plate3.jpg';

function JapaneseChicken() {
    return (
        <>
            <img src={plate1Image} alt="img" className="menu__img" />
            <h3 className="menu__name">Japan Chicken</h3>
            <span className="menu__detail">Tender chicken made with </span>
            <span className="menu__price">₹215.00</span>
        </>
    );
}

export default JapaneseChicken;
