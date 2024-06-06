import React from "react";
import "../css/AddCmpt.css";
import add from "../images/Add.svg";
import chp from "../images/chapitre.svg";
import AsaSideBar from "./AsaSideBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddChapitre = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const description = formData.get('description');
        const response = await fetch('http://localhost:3001/chapters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, description }),
            mode: 'cors'
        });
        if (response.ok) {
          
            toast.success('Chapitre créé avec succès');
            // Rediriger ou afficher un message de succès
        } else {
            console.error('Erreur lors de la création du chapitre :', response.statusText);
            // Afficher un message d'erreur
        }
    };

    return (
        <div className="pg">
            <AsaSideBar />
            <form onSubmit={handleSubmit}>
                <span style={{ marginLeft: "150px" }}>ajouter un chapitre</span>
                <div className="flx3" style={{ flexDirection: "column" }}>
                    <div className="nom">
                        <img src={chp} alt="" />
                        <input type="text" name="name" placeholder="nom" />
                    </div>
                    <div className="desc">
                        <img src={add} alt="" />
                        <input type="text" name="description" placeholder="Description" />
                    </div>
                </div>
                <button style={{ marginLeft: "150px" }}>confirmer</button>
            </form>
        </div>
    );
}

 
export default AddChapitre;