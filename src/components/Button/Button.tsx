import React from 'react'
import "@/components/Button/Button.css"


export default function Buttion({onClick ,children}) {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
     
  )
}
