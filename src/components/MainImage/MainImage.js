// src/components/MainImage/MainImage.js
import React from 'react';
import './MainImage.css';

function MainImage(){
    return (
        <div className='main-image-container'>
            <img src='/birria.png' alt='Main Dish' className='main-image' />
        </div>
    );
};

export default MainImage;