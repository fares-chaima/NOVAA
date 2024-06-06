import "./css/Accueil.css";
import log from "./images/Logo.svg";
import com from "./images/com.svg";
import dmd from "./images/dmnd.svg";
import dwd from "./images/dwd.svg";
import face from "./images/faceb.svg";
import prm from "./images/prm.svg";
import x from "./images/twiter.svg";
import vrf from "./images/vrf.svg";
import web from "./images/web.svg";
const Accueil = () => {
  
    return (
<div className="cnt">

        <div className="home">
        <div className="outer">
          <div className="inside">
             <h1>Maîtrisez vos <br /> stocks,</h1><br />
             <h3>libérez votre potentiel.</h3><br />
             <p>avec efficacité et fluidité pour une <br /> gestion d'entreprise optimale</p>
          </div>
        </div>     
        </div>
        <div className="miNnav">
          <a href="#" style={{textDecoration: "underline 5px solid #01C7BE"}}>nos services</a>
          <a href="#">Télécharger App</a>
        </div>

        <div className="serv">
          <div className="dmd">
            <img src={dmd} alt="" />
            <span>demander <br /> un besoin</span>
          </div>
          <div className="vrf">
            <img src={vrf} alt="" />
            <span>verifier la <br /> demande</span>
          </div>
        </div>

        <div className="dcvr">
         <p>"<span>Découvrez</span> notre <br /> solution  pour  simplifier <br />
          votre processus  dès <br /> aujourd'hui."</p>
          <div className="dwnd">
            <img src={dwd} alt="" />
          </div>
        </div>

        <div className="prm">
          <div className="gr">
            <div className="mg">
            <img src={prm} alt="" />
            </div>
            <span>gérer <br /> la demande</span>
          </div>
          <div className="comm">
          <div className="mg">
            <img src={com} alt="" />
            </div>          
              <span>gérer la <br />  communication</span>
          </div>

        </div>

        <footer>
          <div className="entr">
            <img src={log} alt="" />
            <span>NOVABYTE</span>
          </div>
          <div className="ct">
            <div className="sol">
            <span>Solution</span>
             <ul>
              
              <li>vos besoins</li>
              <li>Nos fonctionnalités</li>
              <li>Notre offre</li>
             </ul>
            </div>

            <div className="ent">
            <span>Entreprise</span>
            <ul>
              
              <li>Qui sommes nous</li>
              <li>Ils nous font confiance</li>
              <li>Nos actualitée</li>
             </ul>
            </div>
            <div className="socl">
              <span>Contact</span>
              <div className="links">
                <a href="#"><img src={web} alt="" /></a>
                <a href="#"><img src={x} alt="" /></a>
                <a href="#"><img src={face} alt="" /></a>
              </div>
            </div>
          </div>
          <div className="copr">
          <span>2015 copyright &nbsp; &nbsp; &nbsp;   all rights reserved</span>

          </div>
        </footer>


        </div>    
      );
}

export default Accueil;