import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import * as React from 'react';
import { useState,useEffect } from 'react';
import "../css/AfficherCmpt.css";
import dlt from "../images/delete.svg";
import mdf from "../images/modf.svg";
import AsaSideBar from "./AsaSideBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modbc = () => {
  
    const [modal, setModal] = useState(false);
    const [fournisseurs, setFournisseurs] = useState([]);
    const [selectedFournisseur, setSelectedFournisseur] = useState('');
    const [adresse, setAdresse] = useState('');
    const [number, setTelephone] = useState('');
    const [chapitre, setChapitre] = useState("");
    const [chapitres, setChapitress] = useState("");
    const [chapitress, setChapitresss] = useState("");
    const [article, setArticle] = useState("");
    const [denomination, setDenomination] = useState('');

    const [tva, setTva] = useState('');
    const [ttc, setTtc] = useState('');

    const [tot, setTot] = useState('');
    const [RC, setNRC] = useState('');
  
    const [chapitreOptions, setChapitreOptions] = useState([]);
    const [articleOptions, setArticleOptions] = useState([]);
    const [formData, setFormData] = useState();
  
   
    const handleConfirmation = () => {
      const newData = {
        fournisseur: selectedFournisseur,
        adresse: adresse,
        telephone: number,
        tot: tot,
        tva: tva,
        ttc: ttc,
        RC: RC,
      };
    
      // Envoi des données du formulaire à l'API
      fetch('http://localhost:3001/a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Erreur lors de l\'envoi des données');
          }
          // Réinitialiser les états après confirmation si l'envoi est réussi
          setSelectedFournisseur('');
          setAdresse('');
          setTelephone('');
          setChapitre('');
          setArticle('');
          setTot('');
          setTva('');
          setTtc('');
          setNRC('');
          return response.json();
        })
        .then(data => {
          // Gérer la réponse de l'API si nécessaire
          console.log('Données envoyées avec succès:', data);
        })
        .catch(error => {
          console.error('Erreur:', error);
        });
    };
    
    


    const handleSelect = (productName, quantity) => {
      // Send the product name and quantity to the backend
      fetch('http://localhost:3001/select', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productName, quantity }), // Include quantity here
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to select product');
        }
        console.log('Product selected successfully');
      })
      .catch(error => {
        console.error('Error selecting product:', error);
      });
    };
    





        
    








   
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
    useEffect(() => {
        fetchFournisseurs();
        fetchChapterNames();
  
        fetchProducts();
        fetchPara();

    }, []);

// Lorsque l'utilisateur sélectionne un chapitre
const handleChapitreChange = (e) => {
  const selectedChapitre = e.target.value;
  setChapitre(selectedChapitre); // Mettez à jour le chapitre sélectionné
  fetchArticles(selectedChapitre); // Récupérez les articles associés au chapitre sélectionné
};
























    
    const fetchChapterNames = async () => {
      try {
        const response = await fetch('http://localhost:3001/chapterss');
        if (!response.ok) {
          throw new Error('Failed to fetch chapter names');
        }
        const data = await response.json();
    
        // Vérifiez si les données sont au format attendu
        console.log(data);
    
        // Assurez-vous que les données sont sous forme de tableau d'objets avec une propriété 'name'
        const chapterNames = data.map(chapter => chapter.name);
        setChapitreOptions(chapterNames);
      } catch (error) {
        console.error('Error fetching chapter names:', error);
        toast.error('Error fetching chapter names');
      }
    };
    const fetchArticles = async (chapitreName) => {
      try {
        const response = await fetch('http://localhost:3001/azrticles', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ chapitreName }),
        });
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await response.json();
        setArticleOptions(data); // Update article options with received data
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
  
  

    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/chapterssx');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des chapitres');
      }
      const data = await response.json(); 
      setChapitress(data); 
  } catch (error) {
      console.error(error);
  }
};
    

const fetchPara = async () => {
  try {
    const response = await fetch('http://localhost:3001/chapterssxx');
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des chapitres');
  }
  const data = await response.json(); 
  setChapitresss(data); 
  setDenomination(data.denomination);
} catch (error) {
  console.error(error);
}
};




    const fetchFournisseurs = async () => {
        try {
            const response = await fetch('http://localhost:3001/fournisseurs/names');
            if (!response.ok) {
                throw new Error('Failed to fetch fournisseurs');
            }
            const data = await response.json();
            setFournisseurs(data);
        } catch (error) {
            console.error('Error fetching fournisseurs:', error);
            // Handle error
        }
    };

    const fetchFournisseurDetails = async (name) => {
      try {
          const response = await fetch(`http://localhost:3001/fournisseurs/${name}`);
          if (!response.ok) {
              throw new Error('Failed to fetch fournisseur details');
          }
          const data = await response.json();
          setAdresse(data.adresse);
          setTelephone(data.number);
          setNRC(data.RC);
      } catch (error) {
          console.error('Error fetching fournisseur details:', error);
          toast.error('Erreur lors de la récupération des détails du fournisseur');
      }
  };

  const handleFournisseurChange = async (e) => {
    const selectedName = e.target.value;
    setSelectedFournisseur(selectedName);
    try {
      const response = await fetch(`http://localhost:3001/fournisseurs/${selectedName}`);
      if (!response.ok) {
        throw new Error('Failed to fetch supplier data');
      }
      const { adresse, number, RC } = await response.json();
      setAdresse(adresse);
      setTelephone(number);
      setNRC(RC);
    } catch (error) {
      console.error('Error fetching supplier data:', error);
      toast.error('Error fetching supplier data');
    }
  };

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

    const columns = [
    
        {
          field: 'name',
          headerName: 'N° produit',
          headerClassName: 'hdr',
          flex: 1,
        },
        {
          field: 'description',
          headerName: 'Désignation',
          headerClassName: 'hdr',
          flex: 1,
        },
        {
          field: 'quantity',
          headerName: 'Quantité',
          headerClassName: 'hdr',
          flex: 1,
         
        },
        {
          field: 'price',
          headerName: ' Montant',
          headerClassName: 'hdr',
          flex: 1,
        },
 
      ];
      
      const rows = [
        { id: 1,  num: '1', design: "produit1" , quant:"20",  mont: "1000",},
   
       
      ];

      //les donnees de produits ajoutes dans le bce


      const columnsp = [
    
        {
          field: 'id',
          headerName: 'Id',
          headerClassName: 'hdr',
          flex: 1,
        },
        {
          field: 'name',
          headerName: 'Produit',
          headerClassName: 'hdr',
          flex: 1,
          
          
        },
      
       
       
        {
          field: "select",
          headerName: 'Selection',
          headerClassName: 'hdr',
          flex: 1,
          renderCell: (cellValues) => {
            return (
              <>
              <div className="change">
              <button className="slct" onClick={() => handleSelect(cellValues.row.name, cellValues.row.quantity)}>Select</button>
              </div>
              </>
            );
              }
        },
        {
            field: 'quantity',
            headerName: ' Quantité',
            headerClassName: 'hdr',
            flex: 1,
            type: 'number',
            editable: true,
          },
      ];
      const rowsp = [
        { id: 1,  produit: "prohhhhhhhhhhhhh" , quant:"20",  },
        { id: 2,  produit: "produit2" , quant:"20",  },
        { id: 3,  produit: "produit3" , quant:"20",  },
        { id: 4,  produit: "produit4" , quant:"20",  },
       
      ];

    return ( 
        <>
        
<div className="comptes">    
        <AsaSideBar />
<div className="cmpt">   
           <div className="bce">     
          <h1>Creation de Bon de  <br />Commande</h1>

         

<hr />

          <div className="d2">
          <div className="lf">
            <span>Identification du <br /> prestataire</span>
          </div>
            <div className="rt">
                <span>Nom ou raison sociale (mentionner la forme juridique):</span>
                <select value={selectedFournisseur} onChange={handleFournisseurChange}>
        <option value="">Sélectionner un fournisseur</option>
        {fournisseurs.map((fournisseur) => (
          <option key={fournisseur} value={fournisseur}>
            {fournisseur}
          </option>
        ))}
      </select>
                <span>Adresse:</span>
                <input type="text" defaultValue={adresse} onChange={(e) => setAdresse(e.target.value)} />
                <span>Téléphone et Fax:</span>
                <input type="text" defaultValue={number} onChange={(e) => setTelephone(e.target.value)} />
                <span>N° R.C:</span>
                <input type="text" defaultValue={RC} onChange={(e) => setNRC(e.target.value)} />
            </div>
          </div>

<hr />

          <div className="d3">
          <div className="lf">
            <span>Caractéristiques de la <br /> commande</span>
          </div>
            <div className="rt">
                <span>Chapitre :</span>
                <select value={chapitre} onChange={handleChapitreChange}>
              <option value="">Sélectionner un chapitre</option>
              {chapitreOptions.map((option, index) => (
                <option key={index} value={option}  >{option}</option>
              ))}
            </select>
                <span>Article :</span>
                <select value={article} onChange={(e) => setArticle(e.target.value)}>
          <option value="">Sélectionner un article</option>
          {articleOptions.map((article) => (
            <option key={article.id} value={article.id}>{article.nom}</option>
          ))}
        </select>
            </div>
          </div>

          <div className="d4">
            <div className="sd1">
            <span>Produit :</span>
            <div className="sd2">
            <DataGrid
      sx={{
        '.MuiDataGrid-columnSeparator': {
          display: 'none',
          
        },
        '&.MuiDataGrid-root': {
          border: 'none',
        },
        
       
        
      }}
      slots={{ toolbar: GridToolbar }}

      className='grid'
      style={{height: "66vh"}}
        rows={chapitres}
        columns={columns}    
        rowHeight={70}
        autoPageSize
        disableRowSelectionOnClick
       getRowClassName={(params) =>
    params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
  }
     
      />
      <button  onClick={toggleModal} className="btn-modal">ajouter un produit +</button>

      </div>
      </div>
          </div>
          <div className="d5">
            <div className="rt1">
                <div className="rtf">
                <span>TOTAL HT :</span>
                <span>TVA 19% :</span>
                <span>TOTAL TTC :</span>
                </div>
                <div className="rtr">
                <input type="text" name="" id="" onChange={(e) => setTot(e.target.value)}  />
                <input type="text" name="" id="" onChange={(e) => setTva(e.target.value)}  />
                <input type="text" name="" id="" onChange={(e) => setTtc(e.target.value)}  />
                </div>
            
           
            
          </div>
          <div className="lf1">
            <button onClick={handleConfirmation}>Confirmer</button>
          </div>
          </div>

          </div>   
 </div>
        
</div>


{modal && (
    <div className="modal">
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">
        <h2>Ajouter un produit</h2>
        <DataGrid
      sx={{
        '.MuiDataGrid-columnSeparator': {
          display: 'none',
          
        },
        '&.MuiDataGrid-root': {
          border: 'none',
        },
        
       
        
      }}
      slots={{ toolbar: GridToolbar }}
      className='grid1'
      style={{height: "66vh"}}
      rowHeight={70}
     // getRowHeight={() => 'auto'}
        rows={chapitres}
        columns={columnsp}    
        
        autoPageSize
        
       getRowClassName={(params) =>
    params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
  }
     
      />
      <div className="btnn">
       <button className="close-modal" onClick={toggleModal}>
         Annuler
        </button>
        <button className="cnr"  > Confirmer</button>
        </div>
      </div>
    </div>
  )}
</> 
    );
}
 
export default Modbc;