import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import 'animate.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Slider from '../components/Slider';
import { AddArticle, addToCart, getAllArticles, getALLLaptop, getCatArticlesSmart, getNew } from '../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import ProductCart from '../components/ProductCart';
import Carousel from 'react-elastic-carousel';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Marquee from "react-fast-marquee";

export default function Accueil () {
    const dispatch = useDispatch()
  const [display,setDisplay]= useState(false);

  const [cart,setCart]= useState(false);

  const closeCart = ()=> {
    setCart (false)
}
const showCart =()=>{
    setCart (true)
}
const AddArticle = (id) => {
  dispatch(addToCart(id))
}

  const newArrivages = useSelector(state=>state.categoryReducer.newArrivages);
  const categoryArticles = useSelector(state=>state.categoryReducer.categoryArticles);
  const carts = useSelector(state => state.cartReducer.carts);
//   const [articles,setCat]=useState(categoryArticles);
// useEffect(()=>{
//   localStorage.setItem("carts",JSON.stringify(carts));
// },[])

  useEffect(() => {
    fetch('http://127.0.0.1:8080/newarrivage')
    .then((res)=>res.json())
    .then((newArrivages)=>{dispatch(getNew(newArrivages))
    })
    .catch(e => { console.log(e)})
    }, [])

    useEffect(() => {
      fetch('http://127.0.0.1:8080/products')
      .then((res)=>res.json())
      .then((categoryArticles)=>{dispatch(getAllArticles(categoryArticles))
      })
      .catch(e => { console.log(e)})
      }, [])

      useEffect(()=>{
        localStorage.setItem("carts",JSON.stringify(carts));
    })

    return (
      <div>
               <Navbar/>
               <Marquee className="marquee" speed={80}>
                    OFFRE SPECIALE -20% DE RÉDUCTION* POUR LE WEEK-END DU 26 MAI AU 02 JUIN
                 </Marquee>
                  <Slider/>
          <div className="container">
              <h3 className='container__header'>Vivez une nouvelle expérience</h3>
              <p className='container__description'>En couple, en famille, entre amis ou collaborateurs, découvrez une autre Côte d’Ivoire, à la Baie des Sirènes. 
              Niché sur les promontoires de la baie de Grand Béréby, baigné par des eaux calmes et translucides, l'hôtel Miami Beach, construit en 1982, a été grandement rénové. 
              Son site naturel et la beauté de ses paysages lui confèrent un caractère unique. Entre tradition et modernité, face océan ou sur les bords de la rivière Néro, au village ou en soins massage, pour vous relaxer ou vous dépenser, vivez une nouvelle expérience à moins d’1h30 d’Abidjan.</p>
              <div className='container__details'>
              <div class="card">
                <img src="https://static.wixstatic.com/media/0e2f30_f62e11fbe6cd4d03a45eaad25234fde2~mv2.jpeg/v1/fill/w_613,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0e2f30_f62e11fbe6cd4d03a45eaad25234fde2~mv2.jpeg" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Évènement privé</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link className='liste' to="/">Découvrir</Link>
                </div>
              </div>

              <div class="card">
              <img src="https://static.wixstatic.com/media/0e2f30_7602cd42f8f048bf86a9fe1f04c1390c~mv2.jpeg/v1/fill/w_613,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0e2f30_7602cd42f8f048bf86a9fe1f04c1390c~mv2.jpeg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Escapades Romantiques</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link className='liste' to="/">Découvrir</Link>
              </div>
            </div>

            <div class="card">
              <img src="https://static.wixstatic.com/media/0e2f30_0b562b8b47aa4947b6b6fb490bdb3cad~mv2.jpeg/v1/fill/w_613,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0e2f30_0b562b8b47aa4947b6b6fb490bdb3cad~mv2.jpeg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Bien-être</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link className='liste' to="/">Découvrir</Link>
              </div>
            </div>

              </div>
           <div className='part__newsletter'>
              <div className='part__newsletter__first'>
                  <h3>Inscrivez vous à notre Newsletter</h3>
                  <p>Soyez le premier à recevoir les dernières nouvelles sur les tendances, les promotions et bien plus encore !</p>
              </div>
              <div className='part__newsletter__second'>
                  <div class="form-floating col-10 col-md-8">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Entrer votre adresse email</label>
                </div>
                <button className='btn__newsletter'>Envoyer</button>
              </div>
              </div>
          </div>
          <Footer/>
        </div>

    );
}

