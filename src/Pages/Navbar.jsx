import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import NavLogin from '../components/NavLogin';


function Navbar ({search,setSearch}) {
  const [user,setUser] = useState("");
  const [nav , setNav] = useState(false);
  const [cartShop , setCartShop] = useState(false);
  const [display,setDisplay]=useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const carts = useSelector(state => state.cartReducer.carts)

    const openLog = ()=>{
      setNav(true)
    }

    const showCart =()=>{
      setCartShop (true)
  }

  const showProfil =()=>{
    setDisplay(true)
  }
  const closeProfil =()=>{
    setDisplay(false)
  }
  const showMenu = () =>{
    setDisplay(true)
}
const affi = ()=> {
  setDisplay (false)
}

  const logout =()=>{
    localStorage.clear();
    navigate('/');
  }

  const handleSearch = (e)=>{
    setSearch(e.target.value)
  }
  const searching =(e)=>{
    navigate('/searching');
    setSearch(e.target.value)
  }

    return (
      <div>
      <header>

        <div className='navbar'>
          <div className="navbar--left">
          <div className='icon--menu' onClick={showMenu}>
               <i className="fa-solid fa-bars"></i>
               </div>
            <div className="navbar--logo">
              {/* <Link to="/"> <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt=""/></Link> */}
              <Link to="/"> <img src="https://thumbs.dreamstime.com/b/lettrage-%C3%A9crit-par-main-de-miami-beach-108812095.jpg" alt=""/></Link>
            </div>
          </div>
          <div className="navbar--center">
            <div className="navbar--center--content">
              <Link className='liste' to="/">Accueil</Link>
              <Link className='liste' to='/reserver'> Réserver</Link>
              <Link className='liste' to='/restaurant'> Restaurants & Bar</Link>
              <Link className='liste' to='/chambres'> Chambres </Link>
              <Link className='liste' to='/piscines'>Piscines</Link>
              <Link className='liste' to='/activity'> Activités</Link>
              <div className="col-3 col-md-4">
                <form class="d-flex" role="search">
                <input class="form-control me-1" type="search" placeholder="Cherchez un produit , une marque ou une categorie..." aria-label="Search" onChange={handleSearch} value={search}/>
                <button class="btn btn-outline-success" onClick={searching}>Search</button>
              </form>
              </div>
            </div>
            <div className='logo--resp'>
              <div className="navbar--logo--resp">
                <Link to="/"> <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt=""/></Link>
              </div>
            </div>
               
          </div>

        
          <div className="navbar--right">
          <div className="navbar--right--content">
                       <Link className='liste' ><button onClick={openLog} className="btn--connexion"><i className="fa-solid fa-user"></i> Mon profil </button></Link>
                  </div>
          </div>
         </div>

        <div className={display ? "menu show--menu" : "menu"}>
                    <div className='sidebar--menu'>
                        <div className='btn--close--sidebar' onClick={affi}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <div className='menu__content'>
                          <div className='menu__content__liste'>
                            <Link className='liste' to="/">Accueil</Link>
                          </div>
                          <div className='menu__content__liste'>
                            <Link className='liste' to='/men'> Réserver</Link>
                          </div>
                          <div className='menu__content__liste'>
                            <Link className='liste' to='/women'>  Restaurants & Bar</Link>
                          </div>
                            <div className='menu__content__liste'>
                            <Link className='liste' to='/child'>Piscines</Link>
                            </div>
                            <div className='menu__content__liste'>
                            <Link className='liste' to='/accessoires'>Chambres</Link>
                            </div>
                            <div className='menu__content__liste'>
                            <Link className='liste' to='/accessoires'>Activités</Link>
                            </div>
                          <div className="col-12 col-md-12">
                            <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Cherchez un produit , une marque ou une categorie..." aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                          </form>
                          </div>
                        </div>
                        </div>
        </div>

    </header>

              </div>
    );
}

export default Navbar;
