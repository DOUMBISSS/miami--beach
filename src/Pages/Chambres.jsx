import { Link} from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Marquee from "react-fast-marquee";
import { useDispatch, useSelector } from "react-redux";



export default function Chambres () {
        const homes = useSelector(state=>state.homeReducer.homes);

    return (
        <div>
                <Marquee className="marquee" speed={80}>
                    OFFRE SPECIALE -20% DE RÉDUCTION* POUR LE WEEK-END DU 26 MAI AU 02 JUIN
                 </Marquee>
            <Navbar/>
            <div className="cover__wrapper">
                <h1 className="cover__header">Nos chambres</h1>
            </div>
            <div className="container">
            <div className='container__content'>
                <p>Après avoir métamorphosé la décoration du site, remis en forme certaines chambres, amélioré le confort de celle ci,  <strong> Miami Beach </strong>est fière de vous accueillir.
                        Aménagées et décorées aux couleurs de l’Afrique ; nos huit chambres classiques et nos six suites sont équipées de TV (13 chaines), de télèphonne intra, de la climatisation, et de l'eau chaude sur le réseau d'eau courante de la sodeci.
                        Nous sommes aussi équipés d’une literie de haute qualité, pour votre confort. <strong> Miami Beach </strong> met donc à votre disposition deux types de chambres : </p>
                        </div>
                        
                <div className="container__cards">
                       {homes.map((home) => <div className="cards">
                                <div className="cards__images">
                                        <Link to={`/detail/${home.id}`}><img src={home.img[0]} alt="" /></Link>
                                </div>
                                <div className="cards__body">
                                        <p className="cards__body__description">{home.name}</p>
                                        <p className="cards__body__price">à partir {home.price} XOF</p>
                                       <Link to='/reserver'><button className="btn__details" >Reserver</button></Link>
                                </div>
                        </div>
                       )}
                </div>
            </div>
        <Footer/>
        </div>
    )
}