import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Marquee from "react-fast-marquee";



export default function Restaurant() {
        

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
        <li class="breadcrumb-item active" aria-current="page"> Restaurants & bars</li>
    </ol>
    </nav>
        <div className='container__content'>
        <h3 className='container__header'> Restaurants & bars</h3>
              <p> <strong> Miami Beach</strong> vous propose des expériences culinaires mettant vos 5 sens en éveil. Au restaurant, au bar, au bord de la piscine ou les pieds dans l'eau, <strong> Miami Beach</strong> vous offre avec son chef, la possibilité de célébrer les produits de la mer et de la terre, mettant ainsi en valeur le travail des producteurs locaux. Découvrez nos espaces de restauration!:</p>
        </div>
    </div>
        <div className="container__description">
            <div className="container__description__block">
                <div className="description__box">
                    <div className="description__images">
                        <img src="https://coucoue-lodge.com/wp-content/uploads/2013/04/Coucoue-Lodge-Hotel-Assinie-63-1030x685.jpg" alt="" />
                    </div>
                    <div className="description">
                        <h6 className="description__title">The Bay</h6>
                        <p >Face à la Baie, the Bay est un bar de plage proposant. Vous pourrez savourer des cocktails "maison" africains dans un lieu à la décoration atypique. </p>
                        <p className="horaires">Horaires</p>
                        <p>11:00-23:00</p>
                    </div>

                </div>
                <div className="description__box">
                    <div className="description__images">
                        <img src="https://static.wixstatic.com/media/226e21_cde736f8f5924b62bb5b2d36a6baaa9b~mv2.jpg/v1/fill/w_793,h_455,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_9918.jpg" alt="" />
                    </div>
                    <div className="description">
                        <h6 className="description__title">Room Service</h6>
                        <p>Disposez d'une cuisine fraîchement préparée et savoureuse dans le confort de la Baie des Sirènes, dans votre chambre, ou dans votre terrasse privée à l'heure qui vous convient.</p>
                        <p className="horaires">Horaires</p>
                        <p>10:00 jusqu'à tard dans la nuit</p>
                    </div>

                </div>

                <div className="description__box">
                    <div className="description__images">
                        <img src="https://static.wixstatic.com/media/0e2f30_7602cd42f8f048bf86a9fe1f04c1390c~mv2.jpeg/v1/fill/w_613,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0e2f30_7602cd42f8f048bf86a9fe1f04c1390c~mv2.jpeg" alt="" />
                    </div>
                    <div className="description">
                        <h6 className="description__title">Escapades Romantiques</h6>
                        <p>Disposez d'un cadre magnifique préparée et savoureuse pour vos rencontres</p>
                        <button className="btn__contact">Contactez-nous</button>
                    </div>

                </div>

                <div className="description__box">
                    <div className="description__images">
                        <img src="https://static.wixstatic.com/media/226e21_d3d5f573d9494996b8e51d511195557e~mv2.jpg/v1/fill/w_793,h_455,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_4673_JPG.jpg" alt="" />
                    </div>
                    <div className="description">
                        <h6 className="description__title">Évènements privés</h6>
                        <p>Merci de bien vouloir nous contacter pour toute demande d'expérience culinaire inédite (traiteurs, événementiels, meeetings, corporate, fiançailles, mariage, anniversaire, EVJF, etc.)</p>
                        <button className="btn__contact">Contactez-nous</button>
                    </div>

                </div>
                
                <div className="description__box">
                    <div className="description__images">
                        <img src="https://static.wixstatic.com/media/226e21_df273362224940b693d1acabecbdab87~mv2.jpg/v1/fill/w_793,h_455,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_4722_JPG.jpg" alt="" />
                    </div>
                    <div className="description">
                        <h6 className="description__title"> Jardins aromatiques & potager</h6>
                        <p>Parce que nous souhaitons vous offrir la meilleure des expériences locales, nous utilisons des herbes et des légumes frais pour notre cuisine. Nous nous ferons un plaisir de vous donner une visite personnelle du jardin pour discuter de la saisonnalité de nos ingrédients et de la philosophie derrière nos menus.</p>
                        <button className="btn__contact">Contactez-nous</button>
                    </div>

                </div>
            </div>
        </div>
  <Footer/>
  </div>
    )
}