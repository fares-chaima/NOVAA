import React, { useEffect, useState } from 'react';
import SideBar from "./SideBar";
import "./css/AddCmpt.css";
import add from "./images/Add.svg";
import nom from "./images/User_alt.svg";

const AddStructure = () => {
    const [responsables, setResponsables] = useState([]);
    const [selectedResponsable, setSelectedResponsable] = useState('');
    const [libelle, setLibelle] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/api/responsables')
            .then(response => response.json())
            .then(data => setResponsables(data))
            .catch(error => console.error('Erreur lors de la récupération des responsables :', error));
    }, []);

    const handleChangeResponsable = (event) => {
        setSelectedResponsable(event.target.value);
    };

    const handleChangeLibelle = (event) => {
        setLibelle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newStructure = {
            libelle: libelle,
            responsable: selectedResponsable
        };

        fetch('http://localhost:3001/api/structures', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newStructure)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Structure ajoutée avec succès:', data);
            // Réinitialiser le formulaire après soumission
            setLibelle('');
            setSelectedResponsable('');
        })
        .catch(error => {
            console.error('Erreur lors de l\'ajout de la structure :', error);
        });
    };

    return (
        <div className="pg">
            <SideBar />
            <form onSubmit={handleSubmit}>
                <span style={{marginLeft: "150px"}}>ajouter une structure</span>
                <div className="flx2" style={{flexDirection: "column"}}>
                    <div className="nom">
                        <img src={add} alt="" />
                        <input type="text" placeholder="le nom de structure" value={libelle} onChange={handleChangeLibelle} />
                    </div>
                    <div className="respn">
                        <img src={nom} alt="" />
                        <select value={selectedResponsable} onChange={handleChangeResponsable}>
                            <option value="" disabled>Sélectionnez un responsable</option>
                            {responsables.map((responsable, index) => (
                                <option key={index} value={responsable.nom}>
                                    {responsable.nom}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button type="submit" style={{marginLeft: "150px"}}>confirmer</button>
            </form>
        </div>
    );
};

export default AddStructure;
