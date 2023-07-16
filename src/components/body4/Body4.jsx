import React from 'react'
import './Body4.css'
import cartlogo from '../images/cartlogo.png'
import blue from '../images/blueberries.png'
import pine from '../images/pineapple.png'
import red from '../images/redberries.png'
import pomo from '../images/pomogranate.png'
import water from '../images/watermelon.png'
function Body4() {
  return (
    <div className='body4'>
      <div className='inside'>
        <div className="twoimages">
        <img src={blue} className='blueimage'/>
<img src={cartlogo}  className='cartlogo'/>
</div>
<div className='blueberries'>Blueberries</div>
<div className='blueberries1'>Blueberries</div>
<div className='pounds'>
<div className='pound'>£</div>
<div className='pound1'>12.25</div>
</div>
      </div>
      <div className='inside'>
        <div className="twoimages">
        <img src={pine} className='blueimage'/>
<img src={cartlogo}  className='cartlogo'/>
</div>
<div className='blueberries'>Pineapple</div>
<div className='pounds'>
<div className='pound'>£</div>
<div className='pound1'>6.00</div>
</div>
      </div>
      <div className='insiderasp'>
        <div className="twoimagesrasp">
        <img src={red} className='blueimage'/>
<img src={cartlogo}  className='cartlogo'/>
</div>
<div className='rasp'>Raspberry</div>
<div className='blueberries1'>Cascade Delight</div>
<div className='pounds'>
<div className='pound'>£</div>
<div className='pound1'>16.99</div>
</div>
      </div>
      <div className='insiderasp'>
        <div className="twoimagespomo">
        <img src={pomo} className='blueimage'/>
<img src={cartlogo}  className='cartlogo'/>
</div>
<div className='pomo'>Pomegranate</div>
<div className='pounds'>
<div className='pound'>£</div>
<div className='pound1'>16.99</div>
</div>
      </div>
      <div className='insiderasp'>
        <div className="twoimagesrasp">
        <img src={water} className='blueimage'/>
<img src={cartlogo}  className='cartlogo'/>
</div>
<div className='watermelon'>WaterMelon</div>
<div className='blueberries1'>Cascade Delight</div>
<div className='pounds'>
<div className='pound'>£</div>
<div className='pound1'>16.99</div>
</div>
      </div>
    </div>
  )
}

export default Body4