import Navbar from "./Navbar";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { AddArticle, getAllArticles } from "../Redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";



export default function SearchingPage() {
    const products = useSelector(state=>state.categoryReducer.products);
    const keys = ["categorie"];
    const [items,setCat]=useState(products);
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()

  
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
             <Navbar search={search} setSearch={setSearch}/>
            <div className="container">
                <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Recherche</li>
                </ol>
                </nav>
                <div className="container-contents">
                        <div className="part__products">
                        <div className="part__accessories">
                    {items.filter((item) => keys.some((key) => {
                            if (search === ""){
                                return 0;
                            }
                            else if (item[key].toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                                return item;
                            }
                            return 0;
                            })).map((item) => <div key={item._id}className='product__cards'>
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
        </div>
    )
}