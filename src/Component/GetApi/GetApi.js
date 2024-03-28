import React, { useCallback, useEffect, useState } from 'react'
import Card from '../Card/Card';
import './GetApi.css'

export default function GetApi() {
    const [data, setData] = useState([]);
    const apiFect = useCallback(() => {
        fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                console.log(data);
            })
    }, [data])

    useEffect(() => {
        apiFect()
    }, [apiFect])
    return (
        <div>
            <h1>Product Api fetch power</h1>

            <div className='product-div'>
                {data.products?.map((products) => {
                    return (
                        <Card
                            brand={products.brand}
                            category={products.category}
                            title={products.title}
                            discountPercentage={products.discountPercentage}
                            price={products.price}
                            thumbnail={products.thumbnail}
                            stock={products.stock}
                        />
                    )
                })}
            </div>
        </div>
    )
}
