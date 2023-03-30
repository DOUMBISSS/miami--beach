import React, { useEffect } from 'react';
import Navbar from './Navbar';
import {Link, useParams} from 'react-router-dom';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,getNew,getProduct } from '../Redux/actions';
import Carousel from 'react-elastic-carousel';
import ProductCart from '../components/ProductCart';

export default function Detail () {

  const dispatch = useDispatch();
  const article = useSelector(state=>state.categoryReducer.article);
  const newArrivages = useSelector(state=>state.categoryReducer.newArrivages);
  let id = useParams().id

  useEffect(() => {
    fetch(`http://127.0.0.1:8080/products/${id}`)
    .then((res)=>res.json())
    .then((article)=>{dispatch(getProduct(article))
    })
    }, [id])

    useEffect(() => {
      fetch('http://127.0.0.1:8080/newarrivage')
      .then((res)=>res.json())
      .then((newArrivages)=>{dispatch(getNew(newArrivages))
      })
      .catch(e => { console.log(e)})
      }, [])
      

    const AddArticle = (id) => {
      dispatch(addToCart(id))
    }

            
    return (
     <div>
        <Navbar/>
        <div className='container'>
        <div className="container--header">
            {/* <h4 className="name--article">Iphone 14 Pro Max</h4> */}
          </div>
          <ProductCart/>
              <div className="container--article">
                <div className="container--article--left--part">
                  <div className="container--article--left--part--content">
                    <div className="container--article--left--part--container--image">  
                      <div className='container--article--left--part--container--image--box'>
                      <img src={`${process.env.PUBLIC_URL}/${article.img}`} alt="" />
                      </div>
                    </div>
                    <div className="thumb">
                      <div className="thumb__images">
                        <img src="https://static.zara.net/photos///2023/V/0/2/p/6462/417/251/2/w/872/6462417251_2_1_1.jpg?ts=1678190846275" alt="" />
                      </div>
                      <div className="thumb__images">
                        <img src="https://static.zara.net/photos///2023/V/0/2/p/6462/417/251/2/w/872/6462417251_2_1_1.jpg?ts=1678190846275" alt="" />
                      </div>
                    </div>

                  </div>
                
                </div>

                <div className="container--article--right--part">
                        {/* <p className='label'>{article.title}</p> */}
                        <h4 className="name--article">{article.description}</h4>
                        <p className="price"> {article.price} FCFA</p>  
                        {/* <p className='label'>Marque : {article.brand}</p> */}
                        {/* <p className='reference--article'>Référence: {article.reference}</p> */}
                        {/* <p className='rating'>3 ratings</p> */}
                        {/* <p className='availability'>En stock</p> */}
                        <div className="col-3 col-md-12">
                        <select class="form-select" aria-label="Default select example">
                          <option selected>Selectionner la Taille</option>
                          <option value="1">XS</option>
                          <option value="2">S</option>
                          <option value="3">M</option>
                          <option value="3">L</option>
                        </select>
                        </div>              
                          <button className='btn--add--cart' onClick={() => AddArticle(article)}> <i className="fa-sharp fa-solid fa-cart-plus"></i> Ajouter au panier</button>
                    </div>         
              </div>

         
        </div>
        <Footer/>
     </div>
    );
}

