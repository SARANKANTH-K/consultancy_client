import React from 'react';
import paneerRiceImage from '../assets/img/plate11.jpg';

function PaneerRice() {
    return (
        <>
            <img src={paneerRiceImage} alt="img" className="menu__img" />
            <h3 className="menu__name">Paneer Rice</h3>
            <span className="menu__detail">Flavored rice cooked with paneer and spices.</span>
            <span className="menu__price">₹190.00</span>
        </>
    );
}

export default PaneerRice;
