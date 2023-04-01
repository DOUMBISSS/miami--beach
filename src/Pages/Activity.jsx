import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Pages/Footer';
import Marquee from "react-fast-marquee";
import Navbar from './Navbar';

export default function Activity () {
            
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
      <li class="breadcrumb-item active" aria-current="page"> Nos activités</li>
  </ol>
  </nav>
      <div className='container__content'>
      <h3 className='container__header'> Nos activités</h3>
            <p>Miami Beach vous propose des activités gratuites pour les résidents de l'hôtel comme:</p>
            <p>Terrain de pétanque</p>
            <p>Jeux de cartes divers</p>
            <p>Terrain de volley et Badminton</p>
            <p>Canoé, pédalo et balancoire de cocotier</p>
            <p>Massage (payant directement à la masseuse)</p>
            <p>Jeux de société.. ou bien encore des jeux traditionnel de la côte d'ivoire comme l'Awale...</p>
      </div>
  </div>
      <div className="container__cards">
            <div className="container__images">
               <div className="images_box">
                  <img src="https://sncdn.com/imagecache/db/id/3928026/6584392a.jpg" alt="" />
               </div>
               <div className="images_box">
                  <img src="http://www.hotel-zion.com/img/04-activitesNew.jpg" alt="" />
               </div>
               <div className="images_box">
                  <img src="http://www.hotel-zion.com/img/06-activitesNew.jpg" alt="" />
               </div>
               <div className="images_box">
                  <img src="https://exp.cdn-hotels.com/hotels/2000000/1210000/1207000/1206907/bbb5cfab_z.jpg?impolicy=fcrop&w=500&h=333&q=medium" alt="" />
               </div>

               <div className="images_box">
                  <img src="https://coucoue-lodge.com/wp-content/uploads/2013/04/sports-loisirs-Assinie-Hotel-Coucoue-Lodge-18-1030x607.jpg" alt="" />
               </div>
               <div className="images_box">
                  <img src="https://coucoue-lodge.com/wp-content/uploads/2013/04/Bar-Assinie-Le-Margouillat-Hotel-Coucoue-Lodge-08-1030x685.jpg" alt="" />
               </div>
               <div className="images_box">
                  <img src="https://levoyageducalao.com/wp-content/uploads/2019/01/IMG_1433.jpg" alt="" />
               </div>
               <div className="images_box">
                  <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/28/62/d6/piscine.jpg" alt="" />
               </div>

            </div>
      </div>
<Footer/>
</div>
    );
}

