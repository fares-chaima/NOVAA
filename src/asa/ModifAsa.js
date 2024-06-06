import React, { useState } from "react";
import "../css/AddCmpt.css";
import nom from "../images/User_alt.svg";
import mail from "../images/mail.svg";
import modif from "../images/modif.svg";
import pd from "../images/pd.svg";
import prfl from "../images/prfl.jpg";
import role from "../images/tel.svg";
import AsaSideBar from "./AsaSideBar";


const ModifAsa = () => {
    const [name, setName] = useState("belhouari essadjidet");
const [email, setEmail] = useState("e.belhouari@esi-sba.dz");
const [pass, setPass] = useState("123");
const [rol, setRol] = useState("0554443034");
    return (
<div className="pg">
            <AsaSideBar />
            <form >
                <span>modifier le profile</span>
                <img src={prfl} alt=""className="profileImg"/>
               <a href="#" className="modif">
                    <img src={modif} alt="" />
                    </a>
                <div className="flx1">
                    
                    <div className="lft">
                        <div className="nomprenom">
                            
                            <h6>nom et prénom</h6>
                           <div className="inpt">
                           <img src={nom} alt="" />
                            <input type="text"   value={name} onChange={(e)=>{setName(e.target.value);}} />
                           </div>
                        </div>

                        <div className="eml">
                            <h6>email</h6>
                           <div className="inpt">
                           <img src={mail} alt="" />
                            <input type="email" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value);}} />
                           </div>
                        </div>
                        
                    </div>

                    <div className="rght">   
                    
                    <div className="pass">
                            <h6>mot de passe</h6>
                           <div className="inpt">
                           <img src={pd} alt="" />
                           <input type="password" name=""  value={pass} onChange={(e)=>{setPass(e.target.value);}} />
                           </div>
                        </div>

                      <div className="rle">
                            <h6>numéro de téléphone</h6>
                           <div className="inpt">
                           <img src={role} alt="" />
                           <input type="number" name=""  value={rol} onChange={(e)=>{setRol(e.target.value);}}/>
                           </div>
                        </div>  
                    </div>
                    
                </div>
                <button>confirmer</button>
            </form>
        </div>
      );
}
 
export default ModifAsa;