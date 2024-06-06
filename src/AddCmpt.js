import React, { useState } from "react";
import SideBar from "./SideBar";
import "./css/AddCmpt.css";
import nom from "./images/User_alt.svg";
import hidePwdImg from './images/hide-password.svg';
import mail from "./images/mail.svg";
import pd from "./images/pd.svg";
import prenom from "./images/prenom.svg";
import role from "./images/role.svg";
import showPwdImg from './images/show-password.svg';

const AddCmpt = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        role: ''
    });

    const [isRevealPwd, setIsRevealPwd] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la création de l\'utilisateur');
            }

            const data = await response.json();
            console.log('Utilisateur créé avec succès:', data);
            // Réinitialiser le formulaire après la création réussie de l'utilisateur
            setFormData({
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                role: ''
            });
        } catch (error) {
            console.error('Erreur:', error.message);
        }
    };

    return ( 
        <div className="pg">
            <SideBar />
            <form onSubmit={handleSubmit}>
                <span>ajouter un compte</span>
                <div className="flx1">
                    
                    <div className="lft">
                        <div className="nom">
                            <img src={nom} alt="" />
                            <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="nom"/>
                        </div>
                        <div className="prenom">
                            <img src={prenom} alt="" />
                            <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="prenom"  />
                        </div>
                        <div className="mail">
                            <img src={mail} alt="" />
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email" />
                        </div>
                    </div>

                    <div className="rght">   
                    <div className="role">
                        <img src={role} alt="" />
                        <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder="role" />
                        </div>  

                    <div className="pd">
                        <img src={pd} alt="" />
                    <input
                name="password"
                placeholder="mot de passe"
                type={isRevealPwd ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                />
              <img
                title={isRevealPwd ? "Hide password" : "Show password"}
                src={isRevealPwd ? hidePwdImg : showPwdImg}
                onClick={() => setIsRevealPwd(prevState => !prevState)}
                />
                        </div>         

                    <div className="confpd">
                    <img src={pd} alt="" />
                        <input type="password" name="" id="" placeholder="confirmer le mot de passe"/>
                        </div>   
                    </div>
                    
                </div>
                <button type="submit">confirmer</button>
            </form>
        </div>
     );
}
 
export default AddCmpt;
