import React from "react";
import "./css/Contact.css";
import home from "./images/Home.svg";
import n from "./images/N.svg";
import ml from "./images/ml.svg";
import tl from "./images/tel.svg";

const Contact = () => {
    return ( 
        <div className="pg1">
        
        <form style={{marginLeft: "18%"}}>
            <span>Contacter nous</span>
            <div className="flx">
                <div className="nt">
                    <div className="cn">
                        <img src={n} alt="" />
                    </div>
                    <a href="#">NOVABYTE Entreprise</a>

                </div>
                <div className="ml">
                <div className="cn">
                        <img src={ml} alt="" />
                    </div>
                    <a href="#">Email:contact@NOVABYTE.com</a>

                </div>
                <div className="ad">
                <div className="cn">
                        <img src={home} alt="" />
                    </div>
                    <a href="#">Adress:Algerie, sidi bel abbès</a>

                </div>
                <div className="phone">
                <div className="cn">
                        <img src={tl} alt="" />
                    </div>
                    <a href="#">Phone:+123-456-7890</a>
                    
                </div>
                
            </div>
        </form>
    </div>
     );
}
 
export default Contact;