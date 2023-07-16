import React from 'react'
import './Footer6.css'
import chef from '../images/chef1.png'
import { RxDiscordLogo } from 'react-icons/rx';
import { BsLinkedin,BsGithub,BsTwitter,BsInstagram,BsFacebook } from 'react-icons/bs';
import {useState} from "react" 
function Footer6() {
 
  const [color ,setColor]=useState({})
  console.log()
  function Clickhandler(){

setColor({backgroundColor:"black"})
  }
  return (
    <div style={color} className='footer6' >
        <div className='imageandtext'>
            <img src={chef} className='chef'/>
            <div className='foodiefooter'>Foodie</div>
        </div>
        <div className='footerline'></div>
        <div className='footercontainer'>
        <div className='footertext'>© 2022 Bentilzone™. All Rights Reserved.</div>
        <div className='logos'>
            <RxDiscordLogo className='flogo'/>
            <BsLinkedin className='flogo'/>
            <BsGithub className='flogo'/>
            <BsTwitter className='flogo'/>
            <BsInstagram className='flogo'/>
            <BsFacebook className='flogo'/>
        </div>
        <button onClick={Clickhandler}>click me</button>
        </div>
    </div>
  )
}

export default Footer6