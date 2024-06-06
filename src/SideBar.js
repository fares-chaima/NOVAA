import ArchiveIcon from '@mui/icons-material/Archive';
import BarChartIcon from '@mui/icons-material/BarChart';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu, useProSidebar } from "react-pro-sidebar";
import "./css/SideBAr.css";
const SideBar = () => {
    const { collapseSidebar     } = useProSidebar();
    
  const [col, setCol] = useState(false);
  const [did, setDis] = useState("");
 
 
  
    return ( 
   
        
         <div  id="sd" >
          
              <Sidebar id="sidebar" 
              width="315px"
              backgroundColor ="#041F5A"
              style={({ height: "110vh" })}
               >
                 <Menu>
                 <MenuItem
                 id="ln"
                     icon={  <MenuOutlinedIcon />  }
                     onClick={() => {
                         setCol(prev => !prev);
                       collapseSidebar();
                       
                     }}
                     style={({ textAlign: "center" })}
                   >
         
                    
                   </MenuItem>
                  
                  
                   <MenuItem icon={<BarChartIcon color="#F9FAFB" sx={{ fontSize: 38 }} />} href="/DashAdmin" ><span style={{fontSize: "1em"}}>dashboard</span></MenuItem>
                  <SubMenu icon={<ManageAccountsIcon color="#F9FAFB" sx={{ fontSize: 38 }}/>  }  label="gérer les comptes">
                     <MenuItem  href="/AfficherComptes"><span>affficher les comptes</span></MenuItem>
                     <MenuItem href="/AddCmpt"> <span>ajouter un compte</span></MenuItem>
                    
               </SubMenu>
                   
               <SubMenu icon={<ContentCopyIcon color="#F9FAFB" sx={{ fontSize: 34 }}/>  }  label="gérer les structures">
                     <MenuItem href="/Structure" ><span >affficher les structures</span></MenuItem>
                     <MenuItem href="/AddStructure" ><span>ajouter un structure</span></MenuItem>
                    
               </SubMenu>
                   <MenuItem icon={<ArchiveIcon color="#F9FAFB" sx={{ fontSize: 38 }}/>}> <span style={{fontSize: "1em"}}>archivage</span> </MenuItem>
                   <SubMenu icon={<SettingsIcon color="#F9FAFB" sx={{ fontSize: 38 }}/>  }  label="paramètres">
                     <MenuItem  >modifier le logo</MenuItem>
                     <MenuItem >modifier le thème</MenuItem>
                     <MenuItem >modifier le nom du site</MenuItem>
               </SubMenu>
                 </Menu>
                
               </Sidebar>
            
             
        </div>
     );
}
 
export default SideBar;