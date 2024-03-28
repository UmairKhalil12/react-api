import React from 'react'
import './Card.css'

export default function Card({ brand, category, title, description, discountPercentage, price, thumbnail, stock }) {
    return (
        <div className='main-card'>
            <div className='card-container-2'>
                <h3>{title}</h3>
                <div className='card-thumbnail'>
                    <img src={thumbnail} alt='title' />
                </div>

                <div className='category-brand'>
                    <p><b>Category : </b>{category}</p>
                    <p><b>Brand : </b>{brand}</p>
                </div>

                <div className='price-discount'>
                    <p><b>Price : </b>{price}</p>
                    <p><b>Discounted Price : </b>{discountPercentage}</p>
                </div>

                <p><b>Stock : </b>{stock}</p>

            </div>

        </div>
    )
}
