import BarChartIcon from '@mui/icons-material/BarChart';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";
import { RiFileList2Fill } from "react-icons/ri";
import { Menu, MenuItem, Sidebar, SubMenu, useProSidebar } from "react-pro-sidebar";
import "../css/SideBAr.css";
import "../css/Sidebnr.css";
import inn from "../images/in.svg";

const Sidebarbci = () => {
    const { collapseSidebar   } = useProSidebar();
    
    const [col, setCol] = useState(false);
    return ( 
        <div  id="sd" >
          
        <Sidebar id="sidebar" 
        width="310px"
        backgroundColor="#041F5A"
        
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
   
              
             </MenuItem>
            
            
            
         
             
         <SubMenu className=' sidebci'icon={<RiFileList2Fill size="2rem" />  }  label="BCI">
               <MenuItem   className='white' href="/Bci"  >Liste de BCI</MenuItem>
               <MenuItem  className='white' href="/Creerbci" >Etablir un BCI</MenuItem>
              
         </SubMenu>
          
          
         <MenuItem className=' sidebci' icon={ <BarChartIcon color="#F9FAFB" sx={{ fontSize: 38 }}/>} href="/Dashconso" >dashboard</MenuItem>
           </Menu>
          
         </Sidebar>
      
       
  </div>

     );
}
 
export default Sidebarbci;