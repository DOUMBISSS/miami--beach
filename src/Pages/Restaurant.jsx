import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {addToCart, getAllArticles, getCatArticlesSmart, getCateSmart } from "../Redux/actions";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductCart from "../components/ProductCart";
import Marquee from "react-fast-marquee";



export default function Restaurant() {
    const dispatch = useDispatch();

    let slug = useParams().slug;
    const products = useSelector(state=>state.categoryReducer.products);
    const keys = ["title","brand","categorie","reference"];
    const [items,setCat]=useState(products);
    const [brand,setBrand]=useState("");
    const [search,setSearch]=useState("");

    const AddArticle = (id) => {
        dispatch(addToCart(id))
      }
      
    const filterResult = (catItem)=>{
      const filterData = products.filter((product) =>  product.categorie === catItem )
          setCat(filterData);
          console.log(filterData)
  }

    useEffect(() => {
        fetch('http://127.0.0.1:8080/products')
        .then((res)=>res.json())
        .then((products)=>{dispatch(getAllArticles(products))
        })
        .catch(e => { console.log(e)})
        }, [items])


        

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
                <li class="breadcrumb-item active" aria-current="page">Accessoires</li>
            </ol>
            </nav>
            <ProductCart/>
            <div className="part__products__header">
                <p className="container--header"> Accessoires </p>
                <p>Restez au top de la mode avec les dernières tendances et dénichez vos favoris parmi notre sélection de nouveautés.</p>
                </div>
            </div>
        <div className="container-contents">
          <div className="sidebar">
          <h3>{slug}</h3>
          <div className="filter--container">
            <h4>Catalogue par produit</h4>
            <h6>{items.length} produit(s)</h6>
  
             <div className="col-3 col-md-12">
                    <p className="btn__filter" onClick={()=>{filterResult('Bijoux')}}>Bijoux</p>              
            </div>

            <div className="col-3 col-md-12">
                    <p className="btn__filter" onClick={()=>{filterResult('Chaussettes')}}>Chaussettes</p>         
            </div>
            <div className="col-3 col-md-12">
                    <p className="btn__filter" onClick={()=>{filterResult('Lunettes')}}>Lunettes</p>         
            </div>
            {/* <div className="col-3 col-md-12">
                    <p className="btn__filter" onClick={()=>{filterResult('Chapeaux')}}>Chapeaux & Casquettes</p>         
            </div> */}
                </div>
            </div>
            

       <div className="part__products">
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
          
       </div>
          
          </div>
        <Footer/>
        </div>
    )
}