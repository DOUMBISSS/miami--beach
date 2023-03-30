import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {addToCart, getAllArticles} from "../Redux/actions";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductCart from "../components/ProductCart";
import Slider from '../components/Slider';
import Marquee from "react-fast-marquee";
import Filter from "./Filter";



export default function Reserver () {
    const dispatch = useDispatch();
    const products = useSelector(state=>state.categoryReducer.products);
    const [items,setCat]=useState(products);
    const [dis,setDis]=useState(true)


    const AddArticle = (id) => {
        dispatch(addToCart(id))
      }

    const filterResult = (catItem)=>{
      const filterData = products.filter((product) =>  product.categorie === catItem )
          setCat(filterData);
          setDis(false)
  }

    useEffect(() => {
        fetch('http://127.0.0.1:8080/men')
        .then((res)=>res.json())
        .then((products)=>{dispatch(getAllArticles(products))
        })
        .catch(e => { console.log(e)})
        }, [])


//     const handleChange = (event)=>{
//             setSearch(event.target.value)
//         }
     

    return (
        <div>
                <Marquee className="marquee">
                        I can be a React component, multiple React components, or just some text.
                 </Marquee>
            <Navbar/>
            <div className="container">
            <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Homme</li>
            </ol>
            </nav>
            <ProductCart/>
            <div className="part__products__header">
                <p className="container--header">Homme </p>
                <p>Découvrez les nouveautés de notre collection pour homme. Vous trouverez des must-haves de tous les jours tels que hauts et t-shirts, ensembles décontractés et sous-vêtements.
                         Et pour ce qui est des pantalons pour homme, il y a des joggings et des pantalons cargo de toutes les couleurs. 
                        Vous rêvez de denim ? Notre gamme de jeans pour homme offre un large choix de coupes, dont skinny entre autres. 
                        Portez-le vôtre avec une chemise oversize tendance ou une pièce en denim de notre sélection de chemises pour homme. </p>
                </div>
                <Filter setDis={setDis} dis={dis} products={products} filterResult={filterResult}/>
            </div>
        <div className="container-contents">
          <div className="sidebar">
          <div className="filter--container">
            <h4>Catalogue par produit</h4>
            <h6>{items.length} produit(s)</h6>
            <div className="col-3 col-md-12">
            <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingSeven">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                        T-shirts
                </button>
                </h2>
                <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                        <p className="btn__filter" onClick={()=>{filterResult('T-shirts')}}>T-shirts</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Débardeurs')}}>Débardeurs</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Polo')}}>Polo</p>
                </div>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Sweats
                </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                        <p className="btn__filter"  onClick={()=>{filterResult('Sweats a capuche')}}>Sweats a capuche</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Sweats')}}>Sweats et hoodies</p>
                </div>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        Shorts
                </button>
                </h2>
                <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                        <p className="btn__filter" onClick={()=>{filterResult('Sweats Shorts')}}>Sweats Shorts & Cargo</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Jeans Shorts')}}>Jeans Shorts</p>
                </div>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Jeans
                </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <p className="btn__filter" onClick={()=>{filterResult('Jogging')}}>Jogging</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Jeans')}}>Jeans</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Jeans Slim')}}>Jeans Slim</p>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" id="cata" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Chaussures
                </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        {/* <p className="btn__filter" onClick={()=>{filterResult('Adaptateur')}}>Adaptateurs</p> */}
                        <p className="btn__filter" onClick={()=>{filterResult('Baskets')}}>Baskets</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Scandales')}}>Scandales & espadrilles</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Bottes')}}>Bottes et Bottines</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Mocassins')}}>Mocassins</p>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingSix">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                        Sacs
                </button>
                </h2>
                <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                        <p className="btn__filter" onClick={()=>{filterResult('Bandoulières')}}>Bandoulières</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Sacs à dos')}}>Sacs à dos</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Portefeuille')}}>Portefeuille</p>
                </div>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingEight">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                        Chemises
                </button>
                </h2>
                <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                        <p className="btn__filter" onClick={()=>{filterResult('Chemises')}}>Manche Longues & Courtes</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Portefeuille')}}>Chemise a Carreaux</p>
                </div>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTen">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                        Sous-vêtements
                </button>
                </h2>
                <div id="flush-collapseTen" class="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                        <p className="btn__filter">Lot de sous-vêtements</p>
                        <p className="btn__filter">Slips</p>
                        <p className="btn__filter">Boxers Homme</p>
                </div>
                </div>
                </div>
                </div>
            </div>
            {/* <div className="col-3 col-md-12">
                    <button className="btn__filter" onClick={()=>{filterResult('Montre')}}>Accessoires</button>         
            </div> */}
            {/* <div className="col-3 col-md-12">
                    <button className="btn__filter" onClick={()=>{filterResult('Adaptateur')}}>Adaptateurs</button>    
                    <p className="btn__filter" onClick={()=>{filterResult('Adaptateur')}}>Adaptateurs</p>              
            </div> */}

            {/* <div className="col-3 col-md-12">
                    <button className="btn__filter" onClick={()=>{filterResult('Batterie')}}>Batteries</button>         
            </div> */}
            {/* <div className="col-3 col-md-12">
                    <button className="btn__filter" onClick={()=>{filterResult('Câble')}}>Câbles</button>         
            </div> */}
            {/* <div className="col-3 col-md-12">
                    <button className="btn__filter" onClick={()=>{filterResult('Chargeur')}}>Chargeurs</button>         
            </div> */}
            {/* <div className="col-3 col-md-12">
                    <button className="btn__filter" onClick={()=>{filterResult('Connecteur')}}>Connecteurs</button>         
            </div> */}
            {/* <div className="col-3 col-md-12">
                    <button className="btn__filter" onClick={()=>{filterResult('Coque')}}>Coques</button>         
            </div> */}
            {/* <div className="col-3 col-md-12">
                    <button className="btn__filter" onClick={()=>{filterResult('Ecran')}}>Ecrans</button>         
            </div> */}
            {/* <div className="col-3 col-md-12">
                    <button className="btn__filter" onClick={()=>{filterResult('Ecouteur')}}>Ecouteurs</button>         
            </div> */}
            {/* <div className="col-3 col-md-12">
                    <button className="btn__filter" onClick={()=>{filterResult('Montre')}}>Montres</button>         
            </div> */}
            {/* <div className="col-3 col-md-12">
            <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
            </div> */}
            
                </div>
            </div>
            

       <div className="part__products">
        { dis  ? (  <div id="carouselExampleCaptions" class="carousel slide">
                        <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="https://lp2.hm.com/hmgoepprod?set=width[1440],quality[80],options[limit]&source=url[https://www2.hm.com/content/dam/global_campaigns/season_07/sport/7417e/7417E-3x2-3-stormmove-M.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                                <h5 className="caroussel__detail">Le juste équilibre entre le style et l'utilité.</h5>
                                {/* <p>Some representative placeholder content for the first slide.</p> */}
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="https://lp2.hm.com/hmgoepprod?set=width[1440],quality[80],options[limit]&source=url[https://www2.hm.com/content/dam/global_campaigns/season_07/men/3077-essentials/3077a/3077A-the-essentials-teaser1-3x2.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                                <h5 className="caroussel__detail">Le juste équilibre</h5>
                                {/* <p>Some representative placeholder content for the second slide.</p> */}
                        </div>
                        </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                        </button>
                        </div>
         ) : (
       <div className="part__accessories">
          {items.map((item) => <div key={item._id}className='product__cards'>
                        <div className='product__cards__header'>
                        <p className='sales'>{item.title}</p>
                           <div className='product__cards__header__images'>
                           <Link to={`/detail/${item._id}`}><img src={`${process.env.PUBLIC_URL}/${item.img}`} alt="" /></Link>
                           </div>
                        </div>
                        <div className='product__cards__body'>
                                {/* <h5 className='product__title'>{article.title}</h5> */}
                                <p>{item.description}</p>
                               <p className='product__price'>{item.price} FCFA</p>
                               <div className='button--block'>
                               {/* <Link className='link__btn' to={`/detail/${article._id}`}><button className='btn__buy'>Acheter</button></Link> */}
                               <button className='btn__add'onClick={() => AddArticle(item)}>Ajouter au panier</button>
                                </div>  
                        </div>
                    </div> 
                        )}
                    
          </div>
         )} 
       </div>
          
          </div>
        <Footer/>
        </div>
    )
}