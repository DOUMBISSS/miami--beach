import { Link } from "react-router-dom";




export default function sssss () {
    return (
        <div>
            <div className="form--part">
                <div className='form--part--content'>
                <p>Vous n’avez pas trouvé la pièce dont vous avez besoin sur notre site ? Remplissez le formulaire et nous chercherons cette pièce pour vous.</p>
                <Link to='/formulaire'> <p>Formulaire de demande de pièce</p></Link>
                </div>
          </div>

          <div classNameName="box-containers">
              <div classNameName="box2 animate__animated animate__fadeInRightBig">
                <h2 className='finding'>Trouver une pièce d'ordinateur portable en 1 clic</h2>
               <Link to='/identification'className='liste'><p>En savoir plus</p></Link>
              </div>
          </div>
          <div className="navbar--right">
            <div className="navbar--right--content">
              {/* <Link className='liste' to='/cart'><i className="fa-solid fa-cart-shopping"></i></Link> */}
              {/* <div className="cart--icon" onClick={showCart}> */}
                         <Link className='liste' to='/cart'><i className="fa-solid fa-cart-shopping"></i></Link>
                        {/* <div className="counter">{carts.length}</div> */}
                    </div>
              <Link className='liste' to='/loginPage'><i className="fa-solid fa-user"></i>Mon compte</Link>
            </div>
         
          {/* </div> */}
            {/* <div className="rows">
                <div className="cols">
                    <p className="titre">Ecran</p>
                    <div className="images">
                    <div className='images--content'>
                    <img src="https://www.piece-pc-portable.com/wp-content/uploads/2022/05/Ecran.png" alt=''/>
                    </div>
                    </div>
                    <div className="name">
                    <Link to='/article'><p>Ecran Acer</p></Link>
                    <Link to='/article'><p>Ecran Apple</p></Link>
                    <Link to='/article'><p>Ecran Asus</p></Link>
                    <Link to='/article'><p>Ecran Dell</p></Link>
                    <Link to='/article'><p>Ecran HP</p></Link>
                    <Link to='/article'><p>Ecran Lenovo</p></Link>
                    <Link to='/article'><p>Ecran Microsoft</p></Link>
                    <Link to='/article'><p>Ecran Samsung</p></Link>
                    <Link to='/article'><p>Ecran Toshiba</p></Link>
                </div>
                </div>


                <div className="cols">
                    <p className="titre">Clavier</p>
                    <div className="images">
                    <div className='images--content'>
                    <img src="https://www.piece-pc-portable.com/wp-content/uploads/2022/05/Clavier.png" alt=''/>
                    </div>
                    </div>
                    <div className="name">
                    <Link to='/article'><p>Clavier Acer</p></Link>
                    <Link to='/article'><p>Clavier Apple</p></Link>
                    <Link to='/article'><p>Clavier Asus</p></Link>
                    <Link to='/article'><p>Clavier Dell</p></Link>
                    <Link to='/article'><p>Clavier HP</p></Link>
                    <Link to='/article'><p>Clavier Lenovo</p></Link>
                    <Link to='/article'><p>Clavier Microsoft</p></Link>
                    <Link to='/article'><p>Clavier Samsung</p></Link>
                    <Link to='/article'><p>Clavier Toshiba</p></Link>
                    </div>
                </div>

                <div className="cols">
                    <p className="titre">Ventilateur</p>
                    <div className="images">
                    <div className='images--content'>
                    <img src="https://www.piece-pc-portable.com/wp-content/uploads/2022/05/Ventilateur.png" alt='' />
                    </div>
                    </div>
                    <div className="name">
                    <Link to='/article'><p>Ventilateur Acer</p></Link>
                    <Link to='/article'><p>Ventilateur Apple</p></Link>
                    <Link to='/article'><p>Ventilateur Asus</p></Link>
                    <Link to='/article'><p>Ventilateur Dell</p></Link>
                    <Link to='/article'><p>Ventilateur HP</p></Link>
                    <Link to='/article'><p>Ventilateur Lenovo</p></Link>
                    <Link to='/article'><p>Ventilateur Microsoft</p></Link>
                    <Link to='/article'><p>Ventilateur Samsung</p></Link>
                    <Link to='/article'><p>Ventilateur Toshiba</p></Link>
                    </div>
                </div>

                <div className="cols">
                    <p className="titre">Batterie</p>
                    <div className="images">
                    <div className='images--content'>
                    <img src="https://www.piece-pc-portable.com/wp-content/uploads/2022/05/Batterie.png" alt=''/>
                    </div>
                    </div>
                    <div class="name">
                    <Link to='/article'><p>Batterie Acer</p></Link>
                    <Link to='/article'><p>Batterie Apple</p></Link>
                    <Link to='/article'><p>Batterie Asus</p></Link>
                    <Link to='/article'><p>Batterie Dell</p></Link>
                    <Link to='/article'><p>Batterie HP</p></Link>
                    <Link to='/article'><p>Batterie Lenovo</p></Link>
                    <Link to='/article'><p>Batterie Microsoft</p></Link>
                    <Link to='/article'><p>Batterie Samsung</p></Link>
                    <Link to='/article'><p>Batterie Toshiba</p></Link>
                    </div>
                </div>

                <div className="cols">
                    <p className="titre">Chargeur</p>
                    <div className="images">
                    <div className='images--content'>
                    <img src="https://www.piece-pc-portable.com/wp-content/uploads/2022/05/Chargeur.png" alt='' />
                    </div>
                    </div>
                    <div className="name">
                    <Link to='/article'><p>Chargeur Acer</p></Link>
                    <Link to='/article'><p>Chargeur Apple</p></Link>
                    <Link to='/article'><p>Chargeur Asus</p></Link>
                    <Link to='/article'><p>Chargeur Dell</p></Link>
                    <Link to='/article'><p>Chargeur HP</p></Link>
                    <Link to='/article'><p>Chargeur Lenovo</p></Link>
                    <Link to='/article'><p>Chargeur Microsoft</p></Link>
                    <Link to='/article'><p>Chargeur Samsung</p></Link>
                    <Link to='/article'><p>Chargeur Toshiba</p></Link>
                    </div>
                </div>

                <div className="cols">
                    <p className="titre">Connecteur</p>
                    <div className="images">
                    <div className='images--content'>
                    <img src="https://www.piece-pc-portable.com/wp-content/uploads/2022/05/Connecteur.png" alt=''/>
                    </div>
                    </div>
                    <div className="name">
                    <Link to='/article'><p>Connecteur Acer</p></Link>
                    <Link to='/article'><p>Connecteur Apple</p></Link>
                    <Link to='/article'><p>Connecteur Asus</p></Link>
                    <Link to='/article'><p>Connecteur Dell</p></Link>
                    <Link to='/article'><p>Connecteur HP</p></Link>
                    <Link to='/article'><p>Connecteur Lenovo</p></Link>
                    <Link to='/article'><p>Connecteur Microsoft</p></Link>
                    <Link to='/article'><p>Connecteur Samsung</p></Link>
                    <Link to='/article'><p>Connecteur Toshiba</p></Link>
                    </div>
                    </div>

                            </div> */}

{/* <div className="filter--container">
            <h4>Filter par categorie</h4>
            <h6>produit(s)</h6>

            <div className="col-3 col-md-12">
            <div className="filter--content">
            <select class="form-select" aria-label="Default select example" onChange={e => setCat(e.target.value)} defaultValue={cat}>
                <option selected>Categories</option>
                <option value="Apple">Batterie</option>
                <option value="Ecran">Ecran</option>
                <option value="Chargeurs">Chargeur</option>
                <option value="Connecteurs">Connecteur</option>
                </select>   
                </div>  
            </div>

            <div className="col-3 col-md-12">
                <div className="filter--content">
                <select class="form-select" aria-label="Default select example" onChange={e => setBrand(e.target.value)} defaultValue={brand}>
            <option selected>Modèles</option>
                <option value="Apple">Apple</option>
                <option value="Huawei">Huawei</option>
                <option value="Honor">Honor</option>
                <option value="Samsung">Samsung</option>
                <option value="Xiaomi">Xiaomi</option>
                </select>  
                </div>          
            </div>
            <div className="col-3 col-md-12">
                <div className="filter--content">
                    <button>Batterie</button> 
                </div>          
            </div>
            <button className="btn__search" type="submit" >Recherche</button>
                </div> */}
                
        </div>
    )
}