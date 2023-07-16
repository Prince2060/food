import React from 'react'
import './Body1.css'
import scooter from '../images/scooter.png'
function Body1() {
  return (
    <div className='mainbox'>
    <div className='deliverbox'>
  <div className='bikedelivery'>Bike Delivery</div>
  <img src={scooter}  className='scooterimage'/>    
    </div>
    <div className='thefaster'>The Fastest Food</div>
    <div className='deliverandnepal'>
        <div className='thefaster'>delivery in</div>
        <div className='nepal'>Nepal</div>
    </div>
    <div className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, minima libero fugiat veritatis, quae corrupti cumque ea explicabo odio quas odit eius eligendi tempore iusto quo sint.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, minima libero fugiat veritatis, quae corrupti 
    </div>
    <button className='ordernowbutton'>Order Now</button>
    </div>
  )
}

export default Body1