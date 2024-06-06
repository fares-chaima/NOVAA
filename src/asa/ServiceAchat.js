import { useState } from "react";
import "../css/ServiceAchat.css";
import cb from "../images/Cb.svg";
import article from "../images/artc.svg";
import chapitre from "../images/chp.svg";
import produit from "../images/prd.svg";
import prf from "../images/prf.svg";
import prfl from "../images/prfl.jpg";
import stat from "../images/stat.svg";
import AsaSideBar from "./AsaSideBar";
const ServiceAchat = () => {
    const [nom, setNom] = useState("name");
    const [act, setAct] = useState(false);
    return ( 
        <div className="asa">
                   
                <AsaSideBar />       
        
       
          <div className="pages">
          
          <div className="fx">
            <div >
          <h2>bonjour ,<span>{nom}</span> </h2> <br />
          <p>Bienvenue dans votre système de gestion de stock</p>
          </div>
          <a  href="#" class="profile"  onClick={() => setAct(prev =>!prev)} >  <img src={prfl} alt="" /></a>
          {
        act &&
        
            
            <div className="menu2">
            <a href="#">déconnexion</a>
            <a href="/ModifAsa">modifier le profile</a>
           </div>
        
      }
          </div>

          <div className="fx2">
            <div className="tp">
                  <a className="prd" href="/Produits">
                   
                    <img src={produit} alt="" />
                    <span>Produits</span>
                  </a>
                  <a className="artcl" href="/Articles">
                  <img src={article} alt="" />
                  <span>Articles</span>
                  </a>
                  <a className="chp" href="/Chapitres">
                  <img src={chapitre} alt="" />
                  <span>Chapitres</span>
                  </a>
            </div>
            <div className="btm">
                <a className="cbe">
                <img src={cb} alt="" />
                <span>CBE</span>
                </a>
                <a className="stat">
                <img src={stat} alt="" />
                <span>Statistique</span>
                </a>
                <a className="prf"  href="/ModifAsa">
                <img src={prf} alt="" />
                <span>Profil </span>
                </a>

            </div>
          </div>


        

          </div>
      </div>
     );
}
 
export default ServiceAchat;