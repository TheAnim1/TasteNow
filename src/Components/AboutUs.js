import React from 'react'
import About1 from '../assests/about1.png'
import About2 from '../assests/about2.png'
const AboutUs = () => {
  return (
    <section className='section'>
        <div className="about-header container">
        <h2>
            Get to know <span>us</span>
        </h2>
        </div>
          <div className="container grid grid-two-coloumn">

                <div>
                    <img src={About1} alt="" className='hero-image'/>
                </div>
                  <div className="section-hero-data">
                    <h1 className='about-heading'> <span>Teamwork </span> is the key to <br /> our sucess </h1>
                    <p className='about-para'>We deliver the food of your choice wherever, whenever. Select <br /> your food from only the top restaurants in the area, and get it in <br /> a flash. Download the app now to discover more.</p>
                   
                </div>
            </div>

           <div className="about-bottom">
             <div className="container grid grid-two-coloumn">
                <div className="section-hero-data">
                    <h1 className='about-heading'> We are all in for the <br /> <span>environment </span> </h1>
                    <p className='about-para'>TasteNow donates $1 penny for every purchase made from the app to an organization that takes care of our enviromet. We belive that with everyone´s help, we can make a better world.</p>
                   
                </div>

                <div>
                    <img src={About2} alt="" className='hero-image'/>
                </div>
                  
            </div>
           </div>
    </section>
  )
}

export default AboutUs