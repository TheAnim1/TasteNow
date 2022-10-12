import React, { useState } from 'react'
import Menu from '../Menu'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PizzaIcon from '../assests/pizzaIcon.png'
import BurgerIcon from '../assests/burgerIcon.png' 
import SaladIcon  from '../assests/SaladIcon.png' 
import ComboIcon  from '../assests/ComboIcon.png' 
import Badge  from '../assests/badge.png' 

const Categories = () => {
    const [items, setItems] = useState(Menu)
    const filterItem = (catItem) => {
        const updatedItems = Menu.filter((curElm)=>{
            return curElm.category === catItem
        })
        setItems(updatedItems)
        
    }
  return (
    <section>
        <div className="container">
            <div className="category-header">
                <h2>Our Popular <span>Categories</span></h2>
            </div>
            <div className="categories">
                <button className="single-category pizza-cat" onClick={()=>filterItem('pizza')}>
                    <img src={PizzaIcon} alt="" className='pizza-img'/>
                    <p>Pizzas</p>
                </button>
                <button className= "single-category" onClick={()=>filterItem('burger') }>
                    <img src={BurgerIcon} alt="" />
                    <p>Burgers</p>
                </button>
                 <button className="single-category" onClick={()=>filterItem('salad')}>
                    <img src={SaladIcon} alt="" />
                    <p>Salads</p>
                </button>
                 <button className="single-category" onClick={()=>filterItem('combo')}>
                    <img src={ComboIcon} alt="" />
                    <p>Combos</p>
                </button>
            </div>
        </div>

        {/*Items Section*/}
        <div className="menu-items-slide container">
            <Swiper
            
                 breakpoints={{
                    // when window width is >= 640px
                    640: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 0,
                    },
                    // when window width is >= 768px
                    768: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    },
                }}
               
                loop={false}
                loopFillGroupWithBlank={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
               {
                    items.map((item)=>{
                        return(
                            <SwiperSlide key={item.id}>
                                <div className="single-item-card">
                                    <img src={item.url} alt="" className='single-item-img' />
                                    <h3 className='single-item-heading'>{item.name}</h3>
                                    <p className='single-item-desc'>{item.desc}</p>
                                    <p className='single-item-price'>{item.price}</p>
                                    <button className='single-item-btn'>Add to cart</button>
                                    <div className="single-item-badge">
                                        <img src={Badge} alt="" />
                                        <p className='ratingNumber'>{item.rating}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    </section>
  )
}

export default Categories