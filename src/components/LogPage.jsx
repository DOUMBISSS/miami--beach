import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Login from "./Login";
import Register from "./Register";


export default function LogPage (){
    const [signUp,setSignUp] = useState(true);
    const [user,setUser] = useState("");
    const navigate = useNavigate();

    // const auth = localStorage.getItem("user");


    return (
        <div>
            <Navbar/>
            <div className="container">
            <div className="log__page">
            <div className="login--container">
            <div className='container--login'>
              <div className='container--login--header'>
                  <button className='btn--header' style={{background :signUp ? "#f0c14b" :"#031b4e" }} onClick={()=>setSignUp(true)}>Se connecter</button>
                  <button className='btn--header' style={{background :signUp ? "#031b4e" :"#f0c14b" }} onClick={()=>setSignUp(false)}>S'inscrire</button>
              </div>
              {signUp ? <Login/> : <Register/>}
            </div>
            </div>
            </div>
            </div>
            
        </div>
    )
}