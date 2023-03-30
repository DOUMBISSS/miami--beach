import React, { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import {DeleteArticle, getUserCart,AddArticle } from "../Redux/actions"

export default function ProductCart () {

    let id = useParams().id;

  const carts = useSelector(state => state.cartReducer.carts)
  const dispatch = useDispatch();

//   for (let products of carts){
//     console.log(products)
//   }
//   for (let i=0; i<carts.length;i++){
//     console.log(carts[1])
// }

  const [cartShop , setCartShop] = useState(false);
  const [quantity,setQuantity]=useState(1)
  
  const showCart = ()=>{
    setCartShop(true);
  }
  const closeCart = ()=>{
    setCartShop(false)
  }

  const removeArticle = (id) =>{
    dispatch(DeleteArticle(id))
  }

    const decreaseQty = ()=>{
        dispatch(AddArticle(id))
    }
    const increaseQty = ()=>{
        dispatch(AddArticle(id))
    }


 
//   useEffect(() =>{
//     fetch('https://fakestoreapi.com/carts/user/2')
//     .then(res => res.json())
//     .then(carts => {dispatch(getUserCart(carts))
//     })  
// },[]);

// useEffect(() =>{
//     fetch('https://fakestoreapi.com/carts/2',{
//             method:"PUT",
//             body:JSON.stringify(
//                 {
//                     userId:2,
//                     date:2019-12-10,
//                     products:[{productId:2,quantity:6}]
//                 }
//             )
//         })
//     .then(res => res.json())
//     .then(carts => {dispatch(cartReducer(carts))
//     })  
// },[]);

  return (
    <div>
        <div className="aside">
                <div>
                    <div className="cart--icon" onClick={showCart}>
                        <i className="fa-solid fa-bag-shopping"></i>
                        <div className="counter">{carts.length}</div>
                    </div>
                    <div className={cartShop ? "cart--container OpenCart" : "cart--container"}>
                        {/* <h3>Your cart is empty</h3> */}
                        <div className="cart--container--block">
                            <div className="cart--container--header">
                                <div className="cart--description">
                                    <i className="fa-solid fa-bag-shopping"></i>
                                    <p className="numbers--articles">{carts.length} articles</p>
                                </div>
                                <div className="btn--close" onClick={closeCart}>
                                    <i className="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                        
                            <div className="cart--container--content">
                             { carts.length !== 0 ? carts.map((cart,i)=> <div key={i} className="cart--articles">
                                    {/* <div className="button-block">
                                        <div className="handle--quantity">
                                        <div className="minus" onClick={()=>decreaseQty(carts)}><h5>-</h5></div>
                                        <div className="qty"><h5>{cart.qty}</h5></div>
                                        <div className="plus" onClick={()=>increaseQty(carts)}><h5>+</h5></div>
                                        </div>
                                    </div> */}
                        
                                    <div className="cart--articles--descriptions">
                                        <div className="block--articles">
                                            <div className="articles">
                                                <img src={cart.img} alt="" />
                                            </div>
                        
                                            <div className="articles--details">
                                                <p className="names--articles">{cart.title}</p>
                                                <p className="names--articles">{cart.categorie}</p>
                                                <p className="quantity">{quantity} unité (s)</p>
                                                <p className="price--articles"> {cart.price} FCFA</p>
                                            </div>
                                        </div>
                                    </div>
                        
                                    <div className="btn--remove--article" onClick={removeArticle}>
                                         <i className="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                             ) :  <div className="cart--container--content"> Votre panier est vide</div>
                        }
                            </div>
                            <div className="col-3 col-md-12">
                                    <div className="cart--prices">
                                        <Link to='/cart'><button className="btn--order" > Voir mon panier</button></Link>
                                    </div>
                            </div>
                        </div>
        
                    </div>
                </div>
          </div>
    </div>
  )
}