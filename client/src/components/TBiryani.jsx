import React from 'react';
import thokkuBiryaniImage from '../assets/img/plate9.jpg'; // assuming you have an image for Thokku Biryani

function ThokkuBiryani() {
    return (
        <>
            <img src={thokkuBiryaniImage} alt="img" className="menu__img" />
            <h3 className="menu__name">Thokku Biryani</h3>
            <span className="menu__detail">Spicy rice dish cooked with a tangy tomato-based gravy and meat.</span>
            <span className="menu__price">₹200.00</span> {/* Price may vary */}
        </>
    );
}

export default ThokkuBiryani;
