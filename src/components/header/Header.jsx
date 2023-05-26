import React from 'react'
import './header.css'
import './CTA'
import CTA from './CTA'
import me from '../../assets/mine.jpg'
import HeaderSocial from './HeaderSocial'

export const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                 <h5>HELLO WELCOME!!! </h5>
                 <h1>BORIS DINNYUY</h1>
                 <h5 className='text-light'>SOFTWARE ENGINEER </h5>
                 <CTA/>
                 <HeaderSocial/>
                 <div className='my_image'>
                    <img src={me} alt='me'/>
                 </div>
                 <a href='#contact' className='scroll__down'>SCROLL DOWN</a>

            </div>
        </header>
    )
}
export default Header;
