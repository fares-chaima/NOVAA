import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu, useProSidebar } from "react-pro-sidebar";
import "../css/SideBAr.css";
import logo from "../images/Logo.svg";
import articles from "../images/article.svg";
import cbe from "../images/cbe.svg";
import chap from "../images/chapitre.svg";
import dashb from "../images/dashb.svg";
import inn from "../images/in.svg";
import produits from "../images/produits.svg";
import "../css/Sidebnr.css";
const Sidebnr = () => {
    const { collapseSidebar   } = useProSidebar();
    
    const [col, setCol] = useState(false);
    return ( 
        <div  id="sd" >
          
        <Sidebar id="sidebar" 
        width="310px"
        backgroundColor="#00837D"
        
        style={({ height: "110vh" })} >
           <Menu>
           <MenuItem
           id="ln"
               icon={col ?  <MenuOutlinedIcon />:<img src={inn}className="inn" />  }
               onClick={() => {
                   setCol(prev => !prev);
                 collapseSidebar();
                 
               }}
               style={({ textAlign: "center" })}
             >
   
              <div className="prfl" >
               <img src={logo} alt="" />
               <a className="titremagazinier" href="/Magazinier">MAGAZINIER</a>
               </div> 
             </MenuItem>
            
            
             <MenuItem icon={<img src={dashb} />} href="#" >dashboard</MenuItem>
            <SubMenu icon={<img src={produits} />  }  label="Produits">
               <MenuItem  href="/Produits">affficher les Produits</MenuItem>
               <MenuItem href="/AddProduit">ajouter un Produit</MenuItem>
              
         </SubMenu>
             
         <SubMenu icon={<img src={articles} />  }  label="Articles">
               <MenuItem href="/Articles" >affficher les Articles</MenuItem>
               <MenuItem href="/AddArticle" >ajouter un Article</MenuItem>
              
         </SubMenu>
          
             <SubMenu icon={<img src={chap} />  }  label="Chapitres">
               <MenuItem href="/Chapitres" >afficher les chapitres</MenuItem>
               <MenuItem href="/AddChapitre" >ajouter un chapitre</MenuItem>
         </SubMenu>
         <MenuItem href="/ListeBce" icon={<img src={cbe}  />}>CBE</MenuItem>
           </Menu>
          
         </Sidebar>
      
       
  </div>

     );
}
 
export default Sidebnr;