import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Pages/Footer';
import Marquee from "react-fast-marquee";
import Navbar from './Navbar';

export default function Activity () {
            
    return (
      <div>
      <Marquee className="marquee" speed={80}>
                    OFFRE SPECIALE -20% DE RÉDUCTION* POUR LE WEEK-END DU 26 MAI AU 02 JUIN
         </Marquee>
  <Navbar/>
  <div className="cover__wrapper">
        <h1 className="cover__header">Nos activités</h1>
    </div>
  <div className="container">
      <div className='container__content'>
            <p>Miami Beach vous propose des activités gratuites pour les résidents de l'hôtel comme:</p>
            <p>Terrain de pétanque</p>
            <p>Jeux de cartes divers</p>
            <p>Terrain de volley et Badminton</p>
            <p>Canoé, pédalo et balancoire de cocotier</p>
            <p>Massage (payant directement à la masseuse)</p>
            <p>Jeux de société.. ou bien encore des jeux traditionnel de la côte d'ivoire comme l'Awale...</p>
      </div>
  <div className="container__cards">
               <div className="cards">
                                <div className="cards__images">
                                <img src="https://sncdn.com/imagecache/db/id/3928026/6584392a.jpg" alt="" />
                                </div>
                                <div className="cards__body">
                                        <p className="cards__body__description">Balancoire de cocotier</p>
                                </div>
                        </div>
                        <div className="cards">
                                <div className="cards__images">
                                <img src="http://www.hotel-zion.com/img/04-activitesNew.jpg" alt="" />
                                </div>
                                <div className="cards__body">
                                        <p className="cards__body__description">Massage (payant directement à la masseuse)</p>
                                </div>
                        </div>

                        <div className="cards">
                                <div className="cards__images">
                                <img src="http://www.hotel-zion.com/img/06-activitesNew.jpg" alt="" />
                                </div>
                                <div className="cards__body">
                                        <p className="cards__body__description">Promenade en bateau</p>
                                </div>
                        </div>
                        <div className="cards">
                                <div className="cards__images">
                                <img src="https://exp.cdn-hotels.com/hotels/2000000/1210000/1207000/1206907/bbb5cfab_z.jpg?impolicy=fcrop&w=500&h=333&q=medium" alt="" />
                                </div>
                                <div className="cards__body">
                                        <p className="cards__body__description">Canoé, pédalo et balancoire de cocotier</p>
                                </div>
                        </div>
                        <div className="cards">
                                <div className="cards__images">
                                <img src="https://coucoue-lodge.com/wp-content/uploads/2013/04/sports-loisirs-Assinie-Hotel-Coucoue-Lodge-18-1030x607.jpg" alt="" />
                                </div>
                                <div className="cards__body">
                                        <p className="cards__body__description">Jeu aquatique gonflable</p>
                                </div>
                        </div>
                        <div className="cards">
                                <div className="cards__images">
                                <img src="https://coucoue-lodge.com/wp-content/uploads/2013/04/Bar-Assinie-Le-Margouillat-Hotel-Coucoue-Lodge-08-1030x685.jpg" alt="" />
                                </div>
                                <div className="cards__body">
                                        <p className="cards__body__description">Terrain de volley et Badminton</p>
                                </div>
                        </div>
                        <div className="cards">
                                <div className="cards__images">
                                <img src="https://levoyageducalao.com/wp-content/uploads/2019/01/IMG_1433.jpg" alt="" />
                                </div>
                                <div className="cards__body">
                                        <p className="cards__body__description">Terrain de pétanque</p>
                                </div>
                        </div>
                        <div className="cards">
                                <div className="cards__images">
                                <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/28/62/d6/piscine.jpg" alt="" />
                                </div>
                                <div className="cards__body">
                                        <p className="cards__body__description">Concours de natations</p>
                                </div>
                        </div>
                </div>
                </div>
<Footer/>
</div>
    );
}

