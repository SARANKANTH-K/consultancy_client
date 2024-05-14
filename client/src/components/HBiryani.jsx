import React from 'react';
import hyderabadiBiryaniImage from '../assets/img/plate8.jpg'; // assuming you have an image for Hyderabadi Biryani

function HyderabadiBiryani() {
    return (
        <>
            <img src={hyderabadiBiryaniImage} alt="img" className="menu__img" />
            <h3 className="menu__name">Hyderabadi Biryani</h3>
            <span className="menu__detail">Traditional rice dish with marinated meat, herbs, and spices.</span>
            <span className="menu__price">₹250.00</span> {/* Price may vary */}
        </>
    );
}

export default HyderabadiBiryani;
