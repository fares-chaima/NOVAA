import React, { useState, useEffect } from "react";
import "../css/AddCmpt.css";
import add from "../images/Add.svg";
import art from "../images/article.svg";
import qnt from "../images/id.svg";
import nom from "../images/nom.svg";
import AsaSideBar from "./AsaSideBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddProduit = () => {
    const [name, setName] = useState("");
    const [chapitre, setChapitre] = useState("");
    const [quantite, setQuantite] = useState("");
    const [description, setDescription] = useState("");
    const [chapitreOptions, setChapitreOptions] = useState([]);
  
    // Fetch chapter names from backend on component mount
    useEffect(() => {
      fetchChapterNames();
    }, []);
  
    // Function to fetch chapter names from backend
    const fetchChapterNames = async () => {
      try {
        const response = await fetch('http://localhost:3001/apterss');
        if (!response.ok) {
          throw new Error('Failed to fetch chapter names');
        }
        const data = await response.json();
        const chapterNames = data.map(chapter => chapter.nom); // Extracting names
        setChapitreOptions(chapterNames);
      } catch (error) {
        console.error('Error fetching chapter names:', error);
        toast.error('Error fetching chapter names');
      }
    };
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch('http://localhost:3001/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, chapitre, quantite, description }),
        });
        if (!response.ok) {
          throw new Error('Failed to create article');
        }
        // Reset form fields after successful submission
        setName("");
        setChapitre("");
        setQuantite("");
        setDescription("");
        toast.success('product created successfully');
      } catch (error) {
        console.error('Error creating product:', error);
        toast.error('Error creating article');
      }
    };
    return (  
        <div className="pg">
        <AsaSideBar />
        <form onSubmit={handleSubmit}>
            <span style={{marginLeft: "90px"}} >ajouter un produit</span>
            <div className="flx3" style={{flexDirection: "row"}}>
                
                <div className="lft">
                    <div className="nom">
                        <img src={nom} alt="" />
                        <input type="text" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="artc">
                        <img src={art} alt="" />
                        <select value={chapitre} onChange={(e) => setChapitre(e.target.value)}>
              <option value="">Sélectionner un article</option>
              {chapitreOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
                    </div>
                    </div>
                    <div className="rght">
                    <div className="desc">
                        <img src={add} alt="" />
                        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        
                    </div>
                    <div className="quant">
                        <img src={qnt} alt="" />
                        <input type="text" placeholder="quantity" value={quantite} onChange={(e) => setQuantite(e.target.value)} />
                    </div>
                    </div>
                
                
            </div>
            <button  style={{marginLeft: "100px"}} >confirmer</button>
        </form>
    </div>

    );
}
 
export default AddProduit;