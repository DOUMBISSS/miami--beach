import { useNavigate } from "react-router-dom";
import { useState } from 'react';




export default function Register (){
  const [name,setName]= useState();
  const [email,setEmail]=useState();
  const [numero,setNum]=useState();
  const [password,setPassword]=useState();
  const [password2,setPassword2]=useState();
  const navigate = useNavigate();


  const handleEmail =(event)=>{
      setEmail(event.target.value)
  }

  const handlePassword = (event)=>{
    setPassword(event.target.value)
  }
  const handlePassword2 = (event)=>{
    setPassword2(event.target.value)
  }

  const handleName = (event)=>{
    setName(event.target.value)
  }
  const handleNum = (event)=>{
    setNum(event.target.value)
  }
 


  const handleRegister = (e)=>{
    e.preventDefault();
    const registerData ={
      name,
      email,
      numero,
      password,
      password2
    }
    fetch('http://localhost:8080/register',{
          method:"POST",
          headers :{'Content-Type':"application/json"},
          body: JSON.stringify(registerData)
      }).then((res)=>res.json())
       .then((user)=>{
        localStorage.clear();
        localStorage.setItem("user",JSON.stringify(user));
        navigate('/');
       }).catch(err => {console.log(err)});
       console.log(localStorage)
  }

    return (
        <div>
              <div className='login--content'>
                  <h2 className='login--content--header'>Créer mon compte</h2>
                  <div className="type--of--connexion">
                    <div className="google">
                        <p>Inscription avec google</p>
                    </div>
                    <div className="facebook">
                        <p>Inscription avec facebook</p>
                    </div>
                  </div>
                    <p>ou</p>
                      <form onSubmit={handleRegister}>
                      <div className="form-floating mb-3">
                          <input type="text" className="form-control" id="floatingInput" placeholder="Name" value={name} onChange={handleName}/>
                          <label htmlFor="floatingInput">Nom d'utilisateur</label>
                        </div>
                      <div className="form-floating mb-3">
                          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required value={email} onChange={handleEmail}/>
                          <label htmlFor="floatingInput">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" required value={numero} onChange={handleNum}/>
                          <label htmlFor="floatingInput">Numero de téléphone</label>
                        </div>
                        <div className="form-floating">
                          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required value={password} onChange={handlePassword}/>
                          <label htmlFor="floatingPassword">Mot de passe </label>
                        </div>
                        <div className="form-floating ">
                          <input type="password" className="form-control" id="floatingPassword" placeholder="Confirm Password" value={password2} onChange={handlePassword2}/>
                          <label htmlFor="floatingPassword">Mot de passe (confirmation)</label>
                        </div>
                          <button type="submit" className="btn__login">Inscription</button>
                      </form>
                </div>

                <div>
                  <p>En créant un compte, vous acceptez les conditions générales de vente d’Amazon. 
                    Veuillez consulter notre notice Protection de vos Informations Personnelles, 
                    notre notice Cookies et notre notice Annonces publicitaires basées sur vos centres d’intérêt.</p>
                </div>
        </div>
    )
}