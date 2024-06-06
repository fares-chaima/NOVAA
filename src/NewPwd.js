import React, { useState } from "react";
import './css/SignIn.css';
import ConfPwd from './images/ConfPwd.svg';
import hidePwdImg from './images/hide-password.svg';
import pwdIcon from './images/pwdsvg.svg';
import showPwdImg from './images/show-password.svg';
const NewPwd = () => {
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    return ( 
        <>
        <div className="form">
            <form >
            <span>mot de passe <br /> oubli <span className="err">é</span> </span>

            <div className="pwd" style={{marginTop: "4px"}}>
                <img src={pwdIcon} alt="" />
                <input
                name="pwd"
                placeholder="nouveau mot de passe"
                type={isRevealPwd ? "text" : "password"}
                value={pwd}
                onChange={e => setPwd(e.target.value)}
                />
              <img
                title={isRevealPwd ? "Hide password" : "Show password"}
                src={isRevealPwd ? hidePwdImg : showPwdImg}
                onClick={() => setIsRevealPwd(prevState => !prevState)}
                />


             </div>
             <div className="pwd" style={{marginTop: "4px"}}>
                <img src={ConfPwd} alt="" />
                <input
                name="pwd"
                placeholder="confirmer le mot de passe"
                type="password"
                
               
                />
              


             </div>

            
             
             <button>confirmer</button>
            </form>
        </div>
        </>
     );
}
 
export default NewPwd;