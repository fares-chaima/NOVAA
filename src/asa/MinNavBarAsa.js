import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useState } from "react";
import "../css/MinNavBar.css";
import profile from "../images/prfl.jpg";
const MinNavBarAsa = () => {
    const [act, setAct] = useState(false);
    return ( 
        <>
        <div className="MinNavBar">
             
            <div ></div>
            
             <a href="#" className="notification"><NotificationsNoneOutlinedIcon  sx={{ fontSize: 38 }} /></a>
          <div className="pfl">
           <a  href="#" class="profile"  onClick={() => setAct(prev =>!prev)} >  <img src={profile} alt="" /></a>
           
           </div>
           </div>
          {
            act &&
            
                
                <div className="menu1">
                <a href="#">déconnexion</a>
                <a href="/ModifAsa">modifier le profile</a>
               </div>
            
          }
        
       </>
     );
}
 
export default MinNavBarAsa;