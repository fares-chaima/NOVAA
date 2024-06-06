import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './css/SignIn.css';
import codeconf from './images/codeconf.svg';
const CodeConf = () => {
    return ( 
        <>
        <div className="form">
        <form className="pwdOub">
         <span>mot de passe <br /> oubli <span className="err">é</span> </span>

         <div className="email">
            <img src={codeconf} alt=""  />
            <input type="number" name="email" id="email" placeholder='entrer le code de vérification' />

         </div>

         
         <Link to="/SignIn" className="rtr">Retour à la connexion</Link>
         <button>confirmer</button>
        </form>
    </div>
    </>
     );
}
 
export default CodeConf;