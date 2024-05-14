import React from 'react';
import paneerRiceImage from '../assets/img/plate12.jpg';

function MushroomRice() {
    return (
        <>
            <img src={paneerRiceImage} alt="img" className="menu__img" />
            <h3 className="menu__name">Mushroom Rice</h3>
            <span className="menu__detail">Flavored rice cooked with mushrooms and spices.</span>
            <span className="menu__price">₹180.00</span>
        </>
    );
}

export default MushroomRice;

