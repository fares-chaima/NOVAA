import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/NavBar.css';
import logo from './images/Logo.svg';

const NavBar = () => { 
   
    const [cont, setCont] = useState(false);
    const [hm, setHm] = useState(true);
    const [clck, setClck] = useState(false);
    
    
    return ( 
        <>
     <nav id='nav' >
        <div className="logo">
            <img src={logo} alt="sa" className='logo' />
            <span>NOVABYTE</span>

        </div>
        <div className="links">
            <Link to="/" className=""  onClick = {() => { setCont(false);setHm(true); setClck(false)} } style={ hm ? {textDecoration: "underline 5px solid #01C7BE"}: {}}  >Accueil</Link>
            <Link to="/Contact" onClick={()=>{setCont(true);setHm(false); setClck(false)}} style={cont ? {textDecoration: "underline 5px solid #01C7BE"}:{textDecoration: "none"}}>Contacter nous</Link>
            <Link to="/SignIn"    onClick={()=> {
        setClck(true); setHm(false); setCont(false); } } 
        style={clck ? {textDecoration: "underline 5px solid #01C7BE"}:{textDecoration: "none"}}>Se connecter
        </Link>
        </div>
    </nav>
    </>
     );
}
 
export default NavBar;