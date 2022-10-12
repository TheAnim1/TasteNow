import React from 'react'
import FooterLogo from '../assests/mobile-nav-logo.png'
import Facebook from '../assests/facebook.png'
import Instagram from '../assests/instagram.png'
import Twitter from '../assests/twitter.png'
import Youtube from '../assests/youtube.png'
const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className="container">

                <div className="mobile-footer-img">
                    <img src={FooterLogo} alt="logo" />
                </div>

                <div className="footer-grid">
                    <div className="footer-logos">
                        <div className="footer-logo">
                            <img src={FooterLogo} alt="" />
                        </div>
                        <div className="social-logos">
                            <a href="#"><img src={Facebook} alt="" /></a>
                            <a href="#"><img src={Instagram} alt="" /></a>
                            <a href="#"><img src={Twitter} alt="" /></a>
                            <a href="#"><img src={Youtube} alt="" /></a>
                        </div>
                    </div>
                    <div className="footer-links">
                        <a href="#">Seslendirme ve Alt Jazz</a>
                        <a href="#">Media Market</a>
                        <a href="#">Gillie</a>
                        <a href="#">Size Last</a>
                    </div>
                    <div className="footer-links">
                        <a href="#">Self Betimes</a>
                        <a href="#">Yatırımcı İlişkileri</a>
                        <a href="#">Basal Himmler</a>
                    </div>
                    <div className="footer-links">
                        <a href="#">Yard Market</a>
                        <a href="#">Is İmkanları</a>
                        <a href="#">Car Tercihleri</a>
                    </div>
                    <div className="footer-links">
                        <a href="#">Yard Market</a>
                        <a href="#">Is İmkanları</a>
                        <a href="#">Car Tercihleri</a>
                    </div>
                </div>
                <div className="mobile-social-logos">
                        <a href="#"><img src={Facebook} alt="" /></a>
                        <a href="#"><img src={Instagram} alt="" /></a>
                        <a href="#"><img src={Twitter} alt="" /></a>
                        <a href="#"><img src={Youtube} alt="" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer