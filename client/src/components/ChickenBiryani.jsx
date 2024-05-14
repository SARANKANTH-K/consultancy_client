import React from 'react';
import chickenBiryaniImage from '../assets/img/plate7.jpg'; // assuming you have an image for Chicken Biryani

function ChickenBiryani() {
    return (
        <>
            <img src={chickenBiryaniImage} alt="img" className="menu__img" />
            <h3 className="menu__name">Chicken Biryani</h3>
            <span className="menu__detail">Fragrant rice cooked with tender chicken and aromatic spices.</span>
            <span className="menu__price">₹220.00</span> {/* Price may vary */}
        </>
    );
}

export default ChickenBiryani;
