import React, { useState, useEffect } from "react";
import "../css/AddCmpt.css";
import nome from "../images/User_alt.svg";
import role from "../images/tel.svg";
import AsaSideBar from "./AsaSideBar";
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const ModifAsa = () => {
    const { id } = useParams();
    const [nom, setName] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setTva] = useState("");
    const [chapitre, setChapitre] = useState("");
    useEffect(() => {
        const fetchChapter = async () => {
            try {
                const response = await fetch(`http://localhost:3001/produit/${id}`);
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données du article');
                }
                const data = await response.json();
                setName(data.name);
                setDescription(data.description);
                setTva(data.quantity);
                setChapitre(data.nom_chapitre);
            } catch (error) {
                console.error('Erreur lors de la récupération des données du article :', error.message);
            }
        };
        fetchChapter();
    }, [id]);

    const updateChapter = async () => {
        try {
            const response = await fetch(`http://localhost:3001/products/${id}`, {
                method: 'PUT', // ou 'PATCH' selon votre API
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nom, description ,quantity}), // Utilisez les nouvelles données du chapitre
            });
            if (!response.ok) {
                throw new Error('Erreur lors de la mise à jour du produit');
            }
            // Si la mise à jour réussit, affichez un message toast.success
            toast.success('produit mis à jour avec succès');
        } catch (error) {
            console.error('Erreur lors de la mise à jour du produit :', error.message);
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
                <span>Modifier Produit</span>
                <div className="flx1">
                    <div className="lft">
                        <div className="nomprenom">
                            <h6>Nom de Produit</h6>
                            <div className="inpt">
                                <img src={nome} alt="" />
                                <input type="text" value={nom} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>
                        <div className="nomprenom">
                            <h6>Nom de L'article</h6>
                            <div className="inpt">
                                <img src={nome} alt="" />
                                <input type="text" value={chapitre} onChange={(e) => setChapitre(e.target.value)} />
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
                        <div className="rle">
                            <h6>La Quantité</h6>
                            <div className="inpt">
                                <img src={role} alt="" />
                                <input type="text" value={quantity} onChange={(e) => setTva(e.target.value)} />
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
