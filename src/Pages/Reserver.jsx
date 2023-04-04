import { Link} from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Marquee from "react-fast-marquee";



export default function Reserver () {


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
        <li class="breadcrumb-item active" aria-current="page"> Réservations</li>
    </ol>
    </nav>
        <div className='container__content'>
        <h3 className='container__header'> Reservations</h3>
              <p> <strong> Miami Beach</strong> Réservez votre chambres poiyr bénéficier d'une meilleure immersion</p>
        </div>
    </div>
        <div className="container">
            <div className="container__form">
            <form class="row g-3">
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label"> La chambre selectionnée</label>
              <input type="text" class="form-control" placeholder="Exp:Miami beach"/>
            </div>
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">Nom & Prenoms</label>
              <input type="text" class="form-control" placeholder="Exp:Miami beach"/>
            </div>
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">Email</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Exp:miami.beach@gmail.com"/>
            </div>
            <div class="col-md-4">
              <label for="inputAddress" class="form-label">Contacts</label>
              <input type="texte" class="form-control" id="inputAddress" placeholder=""/>
            </div>
            <div class="col-md-4">
              <label for="inputAddress" class="form-label">Date d'arrivée</label>
              <input type="date" class="form-control" id="inputDate"/>
            </div>
            <div class="col-md-4">
              <label for="inputAddress" class="form-label">Date de départ</label>
              <input type="date" class="form-control" id="inputDate"/>
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">Adultes</label>
              <select id="inputState" class="form-select">
                <option selected>0 Adultes</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">Enfants</label>
              <select id="inputState" class="form-select">
                <option selected>0 Enfants</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
              </select>
            </div>
            <div class="col-12">
              <button type="submit" class="btn__form">Réserver</button>
            </div>
          </form>
            </div>
        </div>
  <Footer/>
  </div>
    )
}