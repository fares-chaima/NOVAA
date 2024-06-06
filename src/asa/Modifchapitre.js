import React, { useState, useEffect } from "react";
import "../css/AddCmpt.css";
import nom from "../images/User_alt.svg";
import role from "../images/tel.svg";
import AsaSideBar from "./AsaSideBar";
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const ModifAsa = () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        const fetchChapter = async () => {
            try {
                const response = await fetch(`http://localhost:3001/chapters/${id}`);
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données du chapitre');
                }
                const data = await response.json();
                setName(data.name);
                setDescription(data.description);
            } catch (error) {
                console.error('Erreur lors de la récupération des données du chapitre :', error.message);
            }
        };
        fetchChapter();
    }, [id]);

    const updateChapter = async () => {
        try {
            const response = await fetch(`http://localhost:3001/chapters/${id}`, {
                method: 'PUT', // ou 'PATCH' selon votre API
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, description }), // Utilisez les nouvelles données du chapitre
            });
            if (!response.ok) {
                throw new Error('Erreur lors de la mise à jour du chapitre');
            }
            // Si la mise à jour réussit, affichez un message toast.success
            toast.success('Chapitre mis à jour avec succès');
        } catch (error) {
            console.error('Erreur lors de la mise à jour du chapitre :', error.message);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Appeler la fonction pour mettre à jour le chapitre avec les nouvelles données
        updateChapter();
    };

    return (
        <div className="pg">
            <AsaSideBar />
            <form onSubmit={handleSubmit}>
                <span>Modifier le Chapitre</span>
                <div className="flx1">
                    <div className="lft">
                        <div className="nomprenom">
                            <h6>Nom de Chapitre</h6>
                            <div className="inpt">
                                <img src={nom} alt="" />
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="rght">
                        <div className="rle">
                            <h6>Description</h6>
                            <div className="inpt">
                                <img src={role} alt="" />
                                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit">Confirmer</button>
            </form>
        </div>
    );
}

export default ModifAsa;
