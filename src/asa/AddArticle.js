import React, { useState, useEffect } from "react";
import "../css/AddCmpt.css";
import add from "../images/Add.svg";
import nom from "../images/article.svg";
import chp from "../images/chapitre.svg";
import AsaSideBar from "./AsaSideBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddArticle = () => {
  const [name, setName] = useState("");
  const [chapitre, setChapitre] = useState("");
  const [tva, setTVA] = useState("");
  const [description, setDescription] = useState("");
  const [chapitreOptions, setChapitreOptions] = useState([]);

  // Fetch chapter names from backend on component mount
  useEffect(() => {
    fetchChapterNames();
  }, []);

  // Function to fetch chapter names from backend
  const fetchChapterNames = async () => {
    try {
      const response = await fetch('http://localhost:3001/chapterss');
      if (!response.ok) {
        throw new Error('Failed to fetch chapter names');
      }
      const data = await response.json();
      const chapterNames = data.map(chapter => chapter.name); // Extracting names
      setChapitreOptions(chapterNames);
    } catch (error) {
      console.error('Error fetching chapter names:', error);
      toast.error('Error fetching chapter names');
    }
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, chapitre, tva, description }),
      });
      if (!response.ok) {
        throw new Error('Failed to create article');
      }
      // Reset form fields after successful submission
      setName("");
      setChapitre("");
      setTVA("");
      setDescription("");
      toast.success('Article created successfully');
    } catch (error) {
      console.error('Error creating article:', error);
      toast.error('Error creating article');
    }
  };

  return (
    <div className="pg">
      <AsaSideBar />
      <form onSubmit={handleSubmit}>
        <span style={{ marginLeft: "150px" }}>ajouter un article</span>
        <div className="flx3" style={{ flexDirection: "column" }}>
          <div className="nom">
            <img src={nom} alt="" />
            <input type="text" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="chap">
            <img src={chp} alt="" />
            <select value={chapitre} onChange={(e) => setChapitre(e.target.value)}>
              <option value="">Sélectionner un chapitre</option>
              {chapitreOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="desc">
            <img src={add} alt="" />
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="desc">
            <img src={add} alt="" />
            <input type="text" placeholder="TVA" value={tva} onChange={(e) => setTVA(e.target.value)} />
          </div>
        </div>
        <button style={{ marginLeft: "150px" }}>confirmer</button>
      </form>
    </div>
  );
}

export default AddArticle;
