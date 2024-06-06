import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import SideBar from "./SideBar";
import "./css/AddCmpt.css";
import nom from "./images/User_alt.svg";
import mail from "./images/mail.svg";
import pd from "./images/pd.svg";
import role from "./images/tel.svg";
const ModifProfile = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [rol, setRol] = useState("");
    const { id } = useParams(); 
    useEffect(() => {
        // Récupérer les données de l'utilisateur depuis l'API
        fetch(`/api/uusers/${id}`) // Remplacez "1" par l'ID de l'utilisateur approprié
            .then(response => response.json())
            .then(data => {
                setFirstname(data.firstname);
                setLastname(data.lastname);
                setEmail(data.email);
                setPass(data.password);
                setRol(data.role);
            })
            .catch(error => console.error('Error fetching user data:', error));
    }, []); // Appel à l'API lors du chargement initial du composant

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'firstname':
                setFirstname(value);
                break;
            case 'lastname':
                setLastname(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'pass':
                setPass(value);
                break;
            case 'rol':
                setRol(value);
                break;
            default:
                break;
        }
    };

    return (
        <div className="pg">
            <SideBar />
            <form>
                <span>Modifier le profil</span>
                <div className="flx1">
                    <div className="lft">
                        <div className="nomprenom">
                            <h6>Nom et prénom</h6>
                            <div className="inpt">
                                <img src={nom} alt="" />
                                <input type="text" name="firstname" value={firstname} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="eml">
                            <h6>Email</h6>
                            <div className="inpt">
                                <img src={mail} alt="" />
                                <input type="email" name="email" value={email} onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                    <div className="rght">
                        <div className="pass">
                            <h6>Mot de passe</h6>
                            <div className="inpt">
                                <img src={pd} alt="" />
                                <input type="password" name="pass" value={pass} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="rle">
                            <h6>Role</h6>
                            <div className="inpt">
                                <img src={role} alt="" />
                                <input type="number" name="rol" value={rol} onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <button>Confirmer</button>
            </form>
        </div>
    );
}

export default ModifProfile;
