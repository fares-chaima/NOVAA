import React, { useState } from "react";
import { Link } from "react-router-dom";
import './css/SignIn.css';
import emailIcon from './images/email.svg';
import hidePwdImg from './images/hide-password.svg';
import pwdIcon from './images/pwdsvg.svg';
import showPwdImg from './images/show-password.svg';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await fetch('http://localhost:8000/auth/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password: pwd }),
          });
  
          if (!response.ok) {
              throw new Error('Une erreur s\'est produite lors de la connexion');
          }
  
          const data = await response.json();
          console.log(data); // Traitez la réponse du serveur
      } catch (error) {
          console.error('Erreur:', error.message);
      }
  };
  
    return ( 
        <>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <span>Se connecter</span>

                    <div className="email">
                        <img src={emailIcon} alt="" />
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder='email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="pwd">
                        <img src={pwdIcon} alt="" />
                        <input
                            name="pwd"
                            placeholder="mot de passe"
                            type={isRevealPwd ? "text" : "password"}
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                        />
                        <img
                            title={isRevealPwd ? "Hide password" : "Show password"}
                            src={isRevealPwd ? hidePwdImg : showPwdImg}
                            onClick={() => setIsRevealPwd(prevState => !prevState)}
                        />
                    </div>
                    <Link to="/PwdOublieForm" className="rtr1">j’ai oublié le mot de passe</Link>
                    <button type="submit">confirmer</button>
                </form>
            </div>
        </>
    );
}

export default SignIn;
