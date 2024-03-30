import React from 'react'
import './Button.css'

export default function Button({text , onClick}) {
  return (
    <button className='shop-button'  onClick={onClick} >{text}</button>
  )
}
