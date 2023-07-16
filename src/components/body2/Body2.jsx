import React from 'react'
import './Body2.css'
import hero from '../images/hero-bg.png'
import strawberry from '../images/strawberry.png'
import icecream from '../images/icecream.png'
import chicken from '../images/chicken.png'
import fish from '../images/fish.png'
function Body2() {
  return (
    <div className='body2'>
      <div className='threeboxes'>
<div className='box'>
  <img src={strawberry}  className='i1'/>
  <div className='strawtext'>Strawberries</div>
  <div className='fresh'>Fresh Strawberries</div>
  
  <div className='dollorandnum'>
    <div className='dollor'>$</div>
    <div className='num'>10</div>
  </div>
</div>
<div className='box'>
  <img src={chicken}  className='i1'/>
  <div className='strawtext'>Chicken</div>
  <div className='mixedfresh'>Mixed Kebab</div>
  
  <div className='dollorandnum'>
    <div className='dollor'>$</div>
    <div className='num'>20.09</div>
  </div>
</div>
<div className='box'>
  <img src={fish}  className='i1'/>
  <div className='tilopiatext'>Tilopia</div>
  <div className='freshtilopia'>Rosted Tilopia</div>
  
  <div className='dollorandnum'>
    <div className='dollor'>$</div>
    <div className='num'>15.25</div>
  </div>
</div>
</div>
<div className='lastbox'>
  <img src={icecream}  className='i12'/>
  <div className='icetext'>Ice Cream</div>
  <div className='fresh'>Choclate & vanilla</div>
  
  <div className='dollorandnum'>
    <div className='dollor'>$</div>
    <div className='num'>5.25</div>
  </div>
</div>
<img src={hero} className='background'/>

    </div>
  )
}

export default Body2