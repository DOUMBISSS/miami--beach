import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"; 



export default function Login ({userAuthentication,isUserLoggedIn}){
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleEmail =(event)=>{
      setEmail(event.target.value)
  }

  const handlePassword = (event)=>{
    setPassword(event.target.value)
  }

  // const auth = localStorage.getItem("user");

  const Connexion= (e) =>{
    e.preventDefault();
    const dataLogin = {
      email,
      password
    }
    fetch('http://localhost:8080/login',{
          method:"POST",
          headers :{'Content-Type':"application/json"},
          body: JSON.stringify(dataLogin)
      }).then((res)=>res.json())
       .then((user)=> {
        localStorage.setItem("user",JSON.stringify(user))
        navigate('/')
        setSuccess(true)
        // notify("")    
        }).catch(err => {console.log(err)});
        console.log(localStorage)
  };

    return (
            <div>
                <div className='login--content'>
                  <h2 className='login--content--header'>Se connecter</h2>
                  <div className="type--of--connexion">
                    <div className="google">
                        <p>Connexion avec google</p>
                    </div>
                    <div className="facebook">
                        <p>Connexion avec facebook</p>
                    </div>
                  </div>
                    <p>ou</p>
                      <form onSubmit={Connexion}>
                      <div className="form-floating mb-3">
                          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required  onChange={handleEmail}/>
                          <label htmlFor="floatingInput">Email </label>
                        </div>
                        <div className="form-floating">
                          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required  onChange={handlePassword}/>
                          <label htmlFor="floatingPassword">Mot de passe</label>
                        </div>
                        <button type="submit" className="btn__login" >Connexion</button>
                      </form>
                  <div>
                    <p>En passant votre commande, vous acceptez les Conditions générales de vente d’Amazon. 
                      Veuillez consulter notre Notice Protection de vos informations personnelles, 
                      notre Notice Cookies et notre Notice Annonces publicitaires basées sur vos centres d’intérêt.</p>
                  </div>
                </div>
                    
            </div>
    )
}