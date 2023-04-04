import React, { useEffect } from 'react';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';


function Navbar ({search,setSearch}) {
  const [display,setDisplay]=useState(false);
  const navigate = useNavigate();

  const showMenu = () =>{
    setDisplay(true)
}
const affi = ()=> {
  setDisplay (false)
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
              <Link to="/"> <img src={`${process.env.PUBLIC_URL}/miami.jpeg`} alt=""/></Link>
            </div>
          </div>
          <div className="navbar--center">
            <div className="navbar--center--content">
              <Link className='liste' to="/">Accueil</Link>
              <Link className='liste' to='/restaurant'> Restaurants & Bar</Link>
              <Link className='liste' to='/chambres'> Chambres </Link>
              <Link className='liste' to='/piscines'>Piscines</Link>
              <Link className='liste' to='/activity'> Activités</Link>
            </div>
            <div className='logo--resp'>
              <div className="navbar--logo--resp">
                <Link to="/"> <img src={`${process.env.PUBLIC_URL}/miami.jpeg`} alt=""/></Link>
              </div>
            </div>
               
          </div>

        
          <div className="navbar--right">
          <div className="navbar--right--content">
          <div className="col-6 col-md-2">
          <i class="fa-solid fa-magnifying-glass"></i>
              </div>
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
                            <Link className='liste' to='/restaurant'>  Restaurants & Bar</Link>
                          </div>
                            <div className='menu__content__liste'>
                            <Link className='liste' to='/piscines'>Piscines</Link>
                            </div>
                            <div className='menu__content__liste'>
                            <Link className='liste' to='/chambres'>Chambres</Link>
                            </div>
                            <div className='menu__content__liste'>
                            <Link className='liste' to='/activity'>Activités</Link>
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
