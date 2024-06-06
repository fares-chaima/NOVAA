import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './css/SignIn.css';
import emailIcon from './images/email.svg';
const PwdOublieForm = () => {

    
  

    return (
        <>
        <div className="form">
        <form className="pwdOub">
         <span>mot de passe <br /> oubli <span className="err">é</span> </span>

         <div className="email">
            <img src={emailIcon} alt="" />
            <input type="email" name="email" id="email" placeholder='email' />

         </div>

         
         <Link to="/SignIn" className="rtr">Retour à la connexion</Link>
         <button >confirmer</button>
        </form>
    </div>
    </>
      );
}
 
export default PwdOublieForm;