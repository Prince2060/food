import React from 'react'
import './Body5.css'
import { ImSpoonKnife } from 'react-icons/im';
import { GiChickenOven,GiFruitTree ,GiBeerBottle} from 'react-icons/gi';
import { MdOutlineFastfood,MdOutlineIcecream } from 'react-icons/md';
import { FaFish,FaBowlRice } from 'react-icons/fa';
import { BiBowlRice} from 'react-icons/bi';
function Body5() {
  return (
    <div className='body5'>
        <div className='ourspecial'><h1>Our Hot Dishes</h1></div>
        <div className='nineboxes'>
            <div className='hotbox'>
                <div className='round'>
                <ImSpoonKnife  className='spoon'/>
                </div>
                <div className='menu'>Menu</div>
            </div>
            <div className='hotbox'>
                <div className='round'>
                <GiChickenOven  className='spoon'/>
                </div>
                <div className='menu'>Chicken</div>
            </div>
            <div className='hotbox'>
                <div className='round'>
                <GiFruitTree  className='spoon'/>
                </div>
                <div className='menu'>Fruits</div>
            </div>
            <div className='hotbox'>
                <div className='round'>
                <GiBeerBottle  className='spoon'/>
                </div>
                <div className='menu'> Soft Drinks</div>
            </div>
            <div className='hotbox'>
                <div className='round'>
                <MdOutlineFastfood  className='spoon'/>
                </div>
                <div className='menu'>Desserts</div>
            </div>
            <div className='hotbox'>
                <div className='round'>
                <MdOutlineIcecream  className='spoon'/>
                </div>
                <div className='menu'>Ice Creams</div>
            </div>
            <div className='hotbox'>
                <div className='round'>
                <FaFish  className='spoon'/>
                </div>
                <div className='menu'>Fish</div>
            </div>
            <div className='hotbox'>
                <div className='round'>
                <BiBowlRice  className='spoon'/>
                </div>
                <div className='menu'>Rice</div>
            </div>
            <div className='hotbox'>
                <div className='round'>
                <MdOutlineFastfood  className='spoon'/>
                </div>
                <div className='menu'>Curry</div>
            </div>
        </div>
    </div>
  )
}

export default Body5