import React from "react";
import AsaSideBar from "./asa/AsaSideBar";
import "./css/AddCmpt.css";
import nom from "./images/User_alt.svg";
import adr from "./images/adr.svg";
import mail from "./images/mail.svg";
import prenom from "./images/prenom.svg";
import role from "./images/role.svg";
import tel from './images/tel.svg';

const AddFourn = () => {
   
    return ( 
        <div className="pg">
            <AsaSideBar />
            <form >
                <span>ajouter un fournissour</span>
                <div className="flx1">
                    
                    <div className="lft">
                        <div className="nomf" >
                            <img src={nom} alt="" />
                            <textarea
                         
                      placeholder={"Nom ou raison sociale (mentionner la forme juridique):"}
                      />
                            
                        </div>
                        <div className="prenom">
                            <img src={prenom} alt="" />
                            <input type="text" placeholder="N° R.C:"  />
                        </div>
                        <div className="mail">
                            <img src={mail} alt="" />
                            <input type="email" name="email" id="" placeholder="email" />
                        </div>
                    </div>

                    <div className="rght">   
                    <div className="role">
                        <img src={role} alt="" />
                        <input type="text" placeholder="RIB (ou RIP) :" />
                        </div>  

                    <div className="tel">
                        <img src={tel} alt="" />
                   <input type="tel"  placeholder="Téléphone et Fax:" />
              
                        </div>         

                    <div className="adr">
                    <img src={adr} alt="" />
                    <input type="text" name="" id="" placeholder="Adresse" />
                        </div>   
                    </div>
                    
                </div>
                <div className="nf">
                <img src={role} alt="" />
                <input type="text" name="NIF" placeholder="numéro d'identification fiscale (NIF):" />
                </div>
                <button>confirmer</button>
            </form>
        </div>

     );
}
 
export default AddFourn;