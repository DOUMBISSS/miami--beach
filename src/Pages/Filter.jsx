import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllArticles } from '../Redux/actions';

export default function  Filter ({setDis,products,filterResult}) {

  const [filter,setFilter] = useState(false);
//   const products = useSelector(state=>state.categoryReducer.products);
  const [items,setCat]=useState(products);
  const dispatch = useDispatch()
    
  useEffect(() => {
    fetch('http://127.0.0.1:8080/products')
    .then((res)=>res.json())
    .then((products)=>{dispatch(getAllArticles(products))
    })
    .catch(e => { console.log(e)})
    }, [items])

    const closeFilter = ()=> {
        setFilter (false)
    }
    const showFilter =()=>{
        setFilter (true)
    }
//     const filterResult = (catItem)=>{
//       const filterData = products.filter((product) =>  product.categorie === catItem )
//           setCat(filterData);
//           setDis(false)
//   }
            
    return (
      <div>
          <div className="filter" onMouseOver={showFilter}>
                        <i className="fa-solid fa-arrow-up-wide-short"></i>
                        <p>Filtre</p>
            </div>
                <div className={filter ? "filterbar show--filterbar" : "filterbar"}>
                        <div className='filterbar--content' onMouseLeave={closeFilter}>
                          <div className='btn--close--sidebar'onClick={closeFilter}> <i className="fa-solid fa-xmark"></i></div>

                          <div className='filter--sidebar'>
                          <div className="filter--container">
                            <h4>Catalogue par produit</h4>
                            <h6>{items.length} produit(s)</h6>
                            
                            <div className="col-12 col-md-12">
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
                              </div>
                            </div>
                          </div>
                  </div>
        </div>

    );
}

