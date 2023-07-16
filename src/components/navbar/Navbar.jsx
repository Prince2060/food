import React from 'react'
import './Navbar.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { LuLogIn } from 'react-icons/lu';
import chef from '../images/chef1.png'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='foodieandlogo'>
                <img src={chef} className='logochef'/>
            <div className='foodie'>Foodie</div>
            </div>
            <div className='mid'>
                <div className='home'>Home</div>
                <div className='home'>Menu</div>
                <div className='home'>Services</div>
                <div className='home'>About Us</div>
                <div className='home'>Contact Us</div>
                <div className='notificationandcart'>
                    <AiOutlineShoppingCart className='cartreact' />
                    <div className='circle'>
                        <div className='zero'>0</div>
                    </div>
                </div>
            </div>
                <button className='button'>
                    <LuLogIn className='downloadbutton' />
                    <div className='login'>Login</div>
                </button>
            
        </div>
    )
}

export default Navbar