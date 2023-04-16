import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types'
import { A11y, Navigation, Pagination, Scrollbar, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Detail () {
  const homes = useSelector(state=>state.homeReducer.homes);
  let id = useParams().id
  let home =homes.find(home => home.id == id);
  
    return (
     <div>
        <Navbar/>
        <div className='container'>
        <div className="container--header">
            {/* <h4 className="name--article">Iphone 14 Pro Max</h4> */}
          </div>
              <div className="container--home">
                <div className="container--left--part">
                  <div className="container--left--part--content">
                    <div className="container--left--part--container--image">  
                    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img src={home.img[0]} className="d-block w-100" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src={home.img[1]}  className="d-block w-100" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src={home.img[2]}  className="d-block w-100" alt="..."/>
                          </div>
                          {/* {home.img.map((item,i) => <div className="carousel-item active">
                          <img src={item.img} key={i} className="d-block w-100" alt="..."/>
                      </div>
                      )} */}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>

                  </div>
                
                </div>
                </div>

                <div className="container--right--part">
                        <p className='home__name'>{home.name}</p>
                        <h5>Descriptions</h5>
                        <p>- chambre principale autonome </p>
                        <p>– toilette visiteur </p>
                        <p>– séjour staffé </p>
                        <p>- immense terrasse </p>
                         {/* <h4 className="name--article">{home.description}</h4> */}
                        <p className="price"> à partir de {home.price} FCFA</p>
                        {/* <p className='rating'>3 ratings</p> */}            
                        <Link to='/reserver'> <button className="btn__details" >Reserver en ligne</button></Link>
                    </div>         
              </div>

         
        </div>
        <Footer/>
     </div>
    );
}

