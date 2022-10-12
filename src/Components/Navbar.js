import React, { useRef } from 'react'
import Logo from '../assests/Logo.png'
import Cart from '../assests/Cart.png'
import MenuBar from '../assests/fi_menu.png'
import MobileNavLogo from '../assests/mobile-nav-logo.png'
import CloseBtn from '../assests/CloseBtn.png'

const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

  return (
    <>
    <header>
         <button className='nav-btn' onClick={showNavbar}>
                <img src={MenuBar} alt="" />
        </button>
        <img src={Logo} alt="" className='logo' />
        <nav ref={navRef}>
            <div className="mobile-nav-logo">
                <img src={MobileNavLogo} alt="" />
            </div>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
            <a href="#"><img src={Cart} alt="cart" className='desktop-cart'/></a>
            <button className='signup-btn'>
                Sign up
            </button>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <img src={CloseBtn} alt="" />
            </button>
           

        </nav>
        
       <img src={Cart} alt="cart" className='mobile-cart'/>
    </header>
    </>
  )
}

export default Navbar