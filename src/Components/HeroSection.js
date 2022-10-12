import React from 'react'
import HeroImg from '../assests/HeroImg.png'
const HeroSection = () => {
  return (
    <div>

        <section className="section-hero section">
            <div className="container grid grid-two-coloumn">
                
                <div className="section-hero-data">
                    <h1 className='hero-heading'>Experience food <br /> <span>Delivery</span> like no other</h1>
                    <p className='hero-para'>We deliver the food of your choice wherever, whenever. Select <br /> your food from only the top restaurants in the area, and get it in <br /> a flash. Download the app now to discover more.</p>
                   
                </div>

                <div className="section-hero-image">
                    <img src={HeroImg} alt="" className='hero-image'/>
                </div>
            </div>
             <span className="curve"></span>
        </section>
  
    </div>
  )
}

export default HeroSection