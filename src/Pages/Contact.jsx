import React from 'react';
import Navbar from './Navbar';
import Marquee from "react-fast-marquee";

export default function Contact () {
            
    return (
    <div>
               <Marquee className="marquee" speed={80}>
                    OFFRE SPECIALE -20% DE RÉDUCTION* POUR LE WEEK-END DU 26 MAI AU 02 JUIN
        </Marquee>
        <Navbar />
        <div className="cover__wrapper">
        <h1 className="cover__header"> Contacts</h1>
        </div>
        <div className="container">
          <div className="main--contact">
            <h5>N'hésitez pas à nous contacter grâce au formulaire ci-dessous pour toutes demandes de renseignements.
                  Notre équipe vous répondra dans les plus brefs délais.</h5>
            <div className="main--contact--content">
                <div className="main--contact--content--left">
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Veuillez entrer votre noms complets</label>
                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" className="form-label"> Entrez votre email</label>
                      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" className="form-label">Numéro de téléphone</label>
                      <input type="number" className="form-control" id="exampleFormControlInput1" placeholder=""/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleFormControlTextarea1" className="form-label">Votre message</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Envoyer</button>
                  </form>
                </div>
                <div className="main--contact--content--right">
                  <p>Aidez-nous à mieux comprendre vos besoins</p>
                  <p><i class="fa-solid fa-location-dot"></i> : Assinie Mafia</p>
                  <p><i class="fa-brands fa-whatsapp"></i> : +225 07 77 88 00 82 / +225 07 89 80 08 62</p>
                  <p><i class="fa-solid fa-envelope"></i> : miami@beach.com</p>
                  <p> <i class="fa-solid fa-globe"></i> : www.miami-beach.com</p>
                </div>
            </div>
          </div>
        </div>
        {/* <Footer/> */}
    </div>
    );
}