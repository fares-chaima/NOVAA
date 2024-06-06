import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import "../css/SideBAr.css";
const SideBarRds = () => {
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
            
            
             <MenuItem icon={<BarChartIcon color="#F9FAFB" sx={{ fontSize: 38 }}/>} href="/DashRds" >dashboard</MenuItem>
             <MenuItem icon={ <AssignmentIcon  color="#F9FAFB" sx={{ fontSize: 38 }}/>} href="/ListeBCI"><span style={{fontSize: "1em"}}>Liste des BCI</span></MenuItem>

           
             
         
           </Menu>
          
         </Sidebar>
      
       
  </div>

     );
}
 
export default SideBarRds;