import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Marquee from "react-fast-marquee";


export default function Piscines (){
    return (
      <div>
       <Marquee className="marquee" speed={80}>
                    OFFRE SPECIALE -20% DE RÉDUCTION* POUR LE WEEK-END DU 26 MAI AU 02 JUIN
         </Marquee>
  <Navbar/>
   <div className="cover__wrapper">
         <h1 className="cover__header">Notre espace de tranquilité,La piscine</h1>
      </div>
  <div className="container">
  <div className='container__content'>
      <p>Vue aeriénne de l'hôtel, 14 chambres dans un écrin de verdure de 2ha.
          Entourée d’une charmante terrasse avec des Transats, Lits Balinais et parasols, notre piscine familliale dans une eau à 30 degré est à votre disposition.
          La deuxième piscine "ZEN" (interdite aux enfants et adolescents) vous offre le cadre parfait pour des moments de détente inoubliables.
          Le service du bar est à votre disposition pour siroter un Cocktail rafraîchissant en vous relaxant et en jouissant du soleil de la Côte D'Ivoire. </p>
          </div>
      <div className="container__cards">
            <div className="container__images">
               <div className="images_box">
                  <img src="https://p0.storage.canalblog.com/01/61/1286660/97838412_o.jpg" alt="" />
               </div>
               <div className="images_box">
                  <img src="https://coucoue-lodge.com/wp-content/uploads/2013/04/Bar-Assinie-Le-Margouillat-Hotel-Coucoue-Lodge-21.jpg" alt="" />
               </div>
               <div className="images_box">
                  <img src="https://akwaba-ci.com/wp/wp-content/uploads/2021/05/IMG_9570-1.jpg" alt="" />
               </div>
               <div className="images_box">
                  <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/28/62/d6/piscine.jpg" alt="" />
               </div>

               <div className="images_box">
                  <img src="https://www.bookmedial.com/storage/hotel%20coucou%C3%A9%20lodge%20assinie%20cot%C3%A9%20mer/WhatsApp%20Image%202021-10-25%20at%2001.37.49.jpeg" alt="" />
               </div>
               <div className="images_box">
                  <img src="https://www.bookmedial.com/storage/hotel%20coucou%C3%A9%20lodge%20assinie%20cot%C3%A9%20mer/WhatsApp%20Image%202021-10-25%20at%2001.38.20.jpeg" alt="" />
               </div>
               <div className="images_box">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa3OjWpRrIT6E1oc74uQnj4dHTMrR4958Qsg&usqp=CAU" alt="" />
               </div>
               <div className="images_box">
                  <img src="https://www.hotel-zion.com/album/10-zion-galerie-big.jpg" alt="" />
               </div>

            </div>
      </div>
      </div>
<Footer/>
</div>
    );
}