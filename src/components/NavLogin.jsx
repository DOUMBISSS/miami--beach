import React, { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function NavLogin ({nav,setNav}) {

  const navigate = useNavigate();
  // const notify = (e) => {
  //   toast('Veuillez vous connecter svp !!', {
  //     position: "top-right",
  //     autoClose: 3001,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //     });
  // };
  const closeNav = ()=>{
    setNav(false)
  }
  const logout =()=>{
    localStorage.clear();
    navigate('/');
    // notify('')
  }

  const auth = localStorage.getItem("user");

  return (
    <div>
            <div className={nav ? "log__part open__log__part" : "log__part"}>
                                <div className="btn--close--part">
                                    <p>Mon compte</p>
                                    <i className="fa-solid fa-xmark" onClick={closeNav}></i>
                                </div>

                            {/* <div className="col-3 col-md-12">
                                 <Link to='/loginPage'><button className="btn__log"> Se connecter</button></Link>
                            </div> */}
                            {/* <Link className='liste' to='/loginPage'><i className="fa-solid fa-user"></i> Mon compte</Link> */}
                              <div className="user__part">
                                <p className='na'><i class="fa-solid fa-user"></i>  {JSON.parse(auth).email}</p>
                              </div>
                            <div className="user__part">
                              <Link to='/userDetail' className='na'> <i class="fa-solid fa-user"></i> Votre Compte</Link>
                            </div>

                            <div className="user__part">
                            <Link to='/cart' className='na'><i class="fa-solid fa-cart-shopping"></i> Votre panier</Link>
                            </div>
                            <Link to='/loginPage'><button className="btn--log" onClick={logout}><i class="fa-solid fa-right-from-bracket"></i> Logout</button></Link>
             </div>
        
        </div>
  )
}