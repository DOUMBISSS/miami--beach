import Navbar from "../Pages/Navbar";


export default function UserDetails () {
    return (
        <div>
             <Navbar/>
        <div className="container">
            <div className="user__details__container">
                    <div className="user__details__container__left">
                        <div className="left__content">
                            <p> <i className="fa-solid fa-user"></i> Votre compte</p>
                        </div>
                    </div>
                    <div className="user__details__container__right">
                        <h5 className="user__details__container__right__header">Votre compte</h5>
                        <div className="user__details__container__right__content">
                            <div className="user__details__container__right__content__box">
                                <h5 className="user__details__container__right__header">informations personnelles</h5>
                                <p>Doumbia Fode</p>
                                <p>doumbia77fode@gmail.com</p>
                            </div>
                            <div className="user__details__container__right__content__box">
                                <h5 className="user__details__container__right__header">Adresses</h5>
                                <p>Cocody Angré terminus 81/82</p>
                                <p>+225 07 77 88 00 82</p>
                                <button className="btn__modif">Modifier</button>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    )
}