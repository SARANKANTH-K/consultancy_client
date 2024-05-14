import React from 'react';
import dragonChickenImage from '../assets/img/plate14.jpg'; 

function DragonChicken() {
    return (
        <>
            <img src={dragonChickenImage} alt="img" className="menu__img" />
            <h3 className="menu__name">Dragon Chicken</h3>
            <span className="menu__detail">Indo-Chinese style spicy chicken stir-fry.</span>
            <span className="menu__price">₹220.00</span> 
        </>
    );
}

export default DragonChicken;
