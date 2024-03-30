import React from 'react'
import './Card.css'
import Button from '../Button/Button'



export default function Card({ title, description, discountPercentage, price, thumbnail }) {

    function reduceWords(inputString, wordLimit) {
        const words = inputString.trim().split(/\s+/);
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + " ...";
        } else {
            return inputString;
        }
    }

    return (
        <div className='main-card'>
            <div className='card-container-2'>
                <div className='card-thumbnail'>
                    <img src={thumbnail} alt='title' />
                </div>
                <div className='product-title' >
                    <p>{title}</p>
                </div>
                <div className='card-description'>
                    <p>{reduceWords(description, 10)}</p>
                </div>

                <div className='button-div'>
                    <p className='button-div-price'>{price}$</p>
                    <Button text='Cart' />
                    <Button text='Buy Now' />
                </div>
            </div>

        </div>
    )
}
