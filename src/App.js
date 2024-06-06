import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Accueil from './Accueil';
import AddCmpt from './AddCmpt';
import AddFourn from './AddFourn';
import AddStructure from './AddStructure';
import Admin from './Admin';
import AfficherComptes from './AfficherComptes';
import './App.css';
import Bnreception from './Bnreception';
import CodeConf from './CodeConf';
import Contact from './Contact';
import DashAdmin from './DashAdmin';
import ChangeQuantDirect from './Directeur/ChangeQuantDirect';
import DashDirect from './Directeur/DashDirect';
import ListeBCIDirect from './Directeur/ListeBCIDirect';
import Fournisseurs from './Fournisseur';
import MinNavBar from "./MinNavBar";
import ModifProfile from './ModifProfile';
import NavBar from './NavBar';
import NewPwd from './NewPwd';
import PwdOublieForm from './PwdOublieForm';
import ChangeQuant from './RDS/ChangeQuant';
import DashRds from './RDS/DashRds';
import ListeBCI from './RDS/ListeBCI';
import SignIn from './SignIn';
import Structure from './Structure';
import AddArticle from './asa/AddArticle';
import AddBce from './asa/AddBce';
import AddChapitre from './asa/AddChapitre';
import AddProduit from './asa/AddProduit';
import Articles from './asa/Articles';
import AsaSideBar from './asa/AsaSideBar';
import Chapitres from './asa/Chapitres';
import Dashasa from './asa/Dashasa';
import ListeBce from './asa/ListeBce';
import MinNavBarAsa from './asa/MinNavBarAsa';
import Modbc from './asa/Modbc';
import ModifAsa from './asa/ModifAsa';
import Modifarticle from './asa/Modifarticle';
import Modifchapitre from './asa/Modifchapitre';
import Modifprod from './asa/Modifprod';
import Produits from './asa/Produits';
import ServiceAchat from './asa/ServiceAchat';
import Sidebnr from './asa/Sidebnr';
import Addbciprod from "./consomateur/Addbciprod.js";
import Bci from "./consomateur/Bci.js";
import Creerbci from "./consomateur/Creerbci.js";
import Dashconso from './consomateur/Dashconso';
import Details from './consomateur/Details.js';
import Modebci from './consomateur/Modbci.js';
import Moddebci from './consomateur/Moddbci.js';
import Sidebarbci from "./consomateur/Sidebarbci.js";
import Consulterbd from './magazinier/Consulterbd';
import Consulterbs from './magazinier/Consulterbs';
import Dashmaga from './magazinier/Dashmaga';
import Editbcimaga from './magazinier/Editbcimaga';
import Editbd from './magazinier/Editbd';
import Editbs from './magazinier/Editbs';
import Imprimerbnrecep from './magazinier/Imprimerbnrecep';
import Listbce from './magazinier/Listbce';
import Listbd from './magazinier/Listbd';
import Listbnrecep from './magazinier/Listbnrecep';
import Listbs from './magazinier/Listbs';
import Listebcimaga from './magazinier/Listebcimaga';
import Sidebarmag from "./magazinier/Sidebarmag";
function App() {
  const onSelectRow = (selectedRow) => {
    console.log('Ligne sélectionnée :', selectedRow);
    // Logique pour ajouter la ligne sélectionnée à une autre table
  };
  return (
    <Router>
      
    <div className="App">
     
      <div className="content">
      <ToastContainer />
        <Switch>
        <Route exact path="/">
          <NavBar />
        <Accueil  />
        </Route>

        <Route path="/Contact">
        <NavBar />
        <Contact />
       </Route>

      <Route  path="/SignIn">
      <NavBar />
      <SignIn />
      </Route>
      <Route path="/PwdOublieForm">
      <NavBar />
        <PwdOublieForm />
      </Route>

      <Route path="/CodeConf">
      <NavBar />
        <CodeConf  />
      </Route>

      <Route path="/NewPwd">
      <NavBar />
        <NewPwd  />
      </Route>
      
      <Route path="/Admin">
        <Admin />
      </Route>
      <Route path="/AfficherComptes">
      <MinNavBarAsa/>
                   <AfficherComptes />
      </Route>

      <Route path="/Structure">
        <MinNavBarAsa />
        <Structure />
      </Route>

     


      <Route path="/Fournisseurs" >
      <MinNavBarAsa />
        <Fournisseurs />
      </Route>

       <Route path="/AddCmpt">
       <MinNavBarAsa />
        <AddCmpt />
       </Route>

       <Route path="/AddStructure">
        <MinNavBarAsa />
        <AddStructure />
       </Route>

       <Route path="/AddFourn">
        <MinNavBarAsa />
        <AddFourn />
       </Route>

       <Route path="/ModifProfile/:id">
        <MinNavBarAsa />
        <ModifProfile />
       </Route>

       <Route path="/ServiceAchat">
        <ServiceAchat />
       </Route>

       <Route path="/Modifband/:id">
        <Modbc />
       </Route>




       <Route path="/Produits">
        <MinNavBarAsa />
        <Produits />
       </Route>

       <Route path="/Articles">
        <MinNavBarAsa/>
        <Articles />
       </Route>

       <Route path="/Chapitres">
        <MinNavBarAsa />
        <Chapitres />
       </Route>

       <Route path="/AddProduit">
        <MinNavBarAsa/>
        <AddProduit />
       </Route>
       
       <Route path="/AddArticle">
        <MinNavBarAsa />
        <AddArticle />
       </Route>

       <Route path="/AddChapitre">
        <MinNavBarAsa />
        <AddChapitre />
       </Route>
       <Route exact path="/Bnreception/:id">
        <MinNavBar  className=''/>
        <div className='align'>
        <Sidebnr/>
        <Bnreception  />
       
        </div>
        
       
        </Route>
       <Route path="/ModifAsa">
        <MinNavBarAsa />
        <ModifAsa />
       </Route>
       <Route path="/Modifchapitre/:id">
      <NavBar />
        <Modifchapitre />
      </Route>
      <Route path="/Modifarticle/:id">
      <NavBar />
        <Modifarticle />
      </Route>
      <Route path="/Modifproduit/:id">
      <NavBar />
        <Modifprod />
      </Route>
       <Route path="/ListeBce">
        <MinNavBarAsa />
        <ListeBce />
       </Route>

       <Route path="/AddBce">
        <MinNavBarAsa/>
        <AddBce />
       </Route>
       <Route exact path="/Bci">
          <MinNavBarAsa/>
          <div className='alignbci'>
          <Sidebarbci/>
           <Bci/>
         </div>             
        </Route>

        <Route exact path="/Creerbci">
        <MinNavBarAsa/>       
       <div className='aligncreerbci'>
          <Sidebarbci/>
          <Creerbci/>
          </div>            
        </Route>

        <Route exact path="/Addbciprod">
        <MinNavBarAsa/>   
       <div className='aligncreerbci'>
          <Sidebarbci/>
          <Addbciprod onSelectRow={onSelectRow}/>
          </div>             
        </Route>

        <Route exact path="/Sidebarmag">
        <MinNavBarAsa/>
       
       <div className='aligncreerbci'>
          <Sidebarmag/>        
          </div>            
        </Route>

          
        <Route exact path="/Listebcimaga">
          <MinNavBarAsa/>
          <div className='alignbci'>
          <Sidebarmag/>
          <Listebcimaga/>          
          </div>             
        </Route>


        
        <Route exact path="/Editbcimaga">
        <MinNavBarAsa/>       
       <div className='aligncreerbci'>
          <Sidebarbci/>
          <Editbcimaga/>
          </div>
        </Route>

        <Route exact path="/Modbci/:id">
        <MinNavBarAsa/>       
       <div className='aligncreerbci'>
          <Sidebarbci/>
          <Modebci/>
          </div>
        </Route>
        <Route exact path="/Moddbci/:id">
        <MinNavBarAsa/>       
       <div className='aligncreerbci'>
          <Sidebarbci/>
          <Moddebci/>
          </div>
        </Route>

        <Route exact path="/Listbs">
        <MinNavBarAsa/>
       <div className='aligncreerbci'>
       <Sidebarmag/>
          <Listbs/>       
          </div>             
        </Route>



        <Route exact path="/Editbs/:id">
        <MinNavBarAsa/>
       <div className='aligncreerbci'>
       <Sidebarmag/>
          <Editbs/>       
          </div>       
        </Route>


<Route exact path="/Consulterbs/:id">
        <MinNavBarAsa/>
       <div className='aligncreerbci'>
       <Sidebarmag/>
          <Consulterbs/>
          </div>
        </Route>

        <Route exact path="/Listbd">
        <MinNavBarAsa/>
       <div className='aligncreerbci'>
       <Sidebarmag/>
          <Listbd/>
          </div>
        </Route>

        <Route exact path="/Editbd/:id">
        <MinNavBarAsa/>
       <div className='aligncreerbci'>
       <Sidebarmag/>
          <Editbd/>
          </div>
        </Route>


        <Route exact path="/Consulterbd/:id">
        <MinNavBarAsa/>
       <div className='aligncreerbci'>
       <Sidebarmag/>
          <Consulterbd/>
          </div>
        </Route>

        <Route exact path="/Listbcem">
        <MinNavBarAsa/>
       <div className='aligncreerbci'>
       <Sidebarmag/>
          <Listbce/>
          </div>
        </Route>

        <Route exact path="/Listbnrecep">
        <MinNavBarAsa/>
       <div className='aligncreerbci'>
       <Sidebarmag/>
          <Listbnrecep/>
          </div>
        </Route>
        <Route exact path="/details/:id">
        <MinNavBarAsa/>
       <div className='aligncreerbci'>
       <Sidebarmag/>
          <Details/>
          </div>
        </Route>

        <Route exact path="/Imprimerbnrecep">
     
       <div className='aligncreerbci'>
     
          <Imprimerbnrecep/>
          </div>
        </Route>

        <Route exact path="/Dashasa">
        <MinNavBarAsa />
     <div className='aligncreerbci'>
     <AsaSideBar/>
        <Dashasa/>
        </div>
      </Route>

      <Route exact path="/Dashconso">
          <MinNavBarAsa/>
          <div className='alignbci'>
          <Sidebarbci/>
           <Dashconso/>
         </div>             
        </Route>
        <Route exact path="/Dashmaga">
          <MinNavBar/>
          <div className='alignbci'>
          <Sidebarmag/>
           <Dashmaga/>
         </div>             
        </Route>
       
       <Route path="/ListeBCI">
        <MinNavBarAsa />
        <ListeBCI />
       </Route>
       
       <Route path="/ChangeQuant">
        <MinNavBarAsa />
        <ChangeQuant />
       </Route>

       <Route path= "/ListeBCIDirect">
        <MinNavBarAsa />
        <ListeBCIDirect />
       </Route>
        
        <Route path="/ChangeQuantDirect">
          <MinNavBarAsa />
          <ChangeQuantDirect />
        </Route>

        <Route path="/DashRds">
        <MinNavBarAsa />
          <DashRds />
        </Route>

        <Route path= "/DashDirect">
          <MinNavBarAsa />
          <DashDirect />
        </Route>

        <Route path="/DashAdmin">
          <MinNavBarAsa />
          <DashAdmin />
        </Route>

      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
