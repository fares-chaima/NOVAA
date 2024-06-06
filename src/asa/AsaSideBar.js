import ArticleIcon from '@mui/icons-material/Article';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupsIcon from '@mui/icons-material/Groups';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu, useProSidebar } from "react-pro-sidebar";
import "../css/SideBAr.css";
const AsaSideBar = () => {
    const { collapseSidebar     } = useProSidebar();
    
    const [col, setCol] = useState(false);
    return ( 
        <div  id="sd" >
          
        <Sidebar id="sidebar" 
        width="315px"
        backgroundColor="#041F5A"
        
        style={({ height: "110vh" })} >
           <Menu>
           <MenuItem
           id="ln"
               icon={  <MenuOutlinedIcon  color="#F9FAFB" sx={{ fontSize: 38 }}/>  }
               onClick={() => {
                   setCol(prev => !prev);
                 collapseSidebar();
                 
               }}
               style={({ textAlign: "center" })}
             >
   
              
             </MenuItem>
            
            
             <MenuItem icon={<BarChartIcon color="#F9FAFB" sx={{ fontSize: 38 }}/>} href="/Dashasa" >dashboard</MenuItem>
             <MenuItem icon={ <GroupsIcon  color="#F9FAFB" sx={{ fontSize: 38 }}/>} href="/Fournisseurs"><span style={{fontSize: "1em"}}>les fournisseurs</span></MenuItem>

            <SubMenu icon={<Inventory2Icon color="#F9FAFB" sx={{ fontSize: 38 }}/>  }  label="Produits">
               <MenuItem  href="/Produits">affficher les Produits</MenuItem>
               <MenuItem href="/AddProduit">ajouter un Produit</MenuItem>
              
         </SubMenu>
             
         <SubMenu icon={<ArticleIcon color="#F9FAFB" sx={{ fontSize: 38 }}/>  }  label="Articles">
               <MenuItem href="/Articles" >affficher les Articles</MenuItem>
               <MenuItem href="/AddArticle" >ajouter un Article</MenuItem>
              
         </SubMenu>
          
             <SubMenu icon={<LibraryBooksIcon color="#F9FAFB" sx={{ fontSize: 35 }}/>  }  label="Chapitres">
               <MenuItem href="/Chapitres" >afficher les chapitres</MenuItem>
               <MenuItem href="/AddChapitre" >ajouter un chapitre</MenuItem>
         </SubMenu>
         <MenuItem href="/ListeBce" icon={<ListAltIcon color="#F9FAFB" sx={{ fontSize: 38 }} />}>CBE</MenuItem>
           </Menu>
          
         </Sidebar>
      
       
  </div>

     );
}
 
export default AsaSideBar;