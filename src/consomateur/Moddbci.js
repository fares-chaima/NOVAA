import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useState } from 'react';
import { IoMdListBox } from "react-icons/io";
import { MdOutlinePerson, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useHistory, useParams } from 'react-router-dom';
import './Creerbci.css';

function Creerbci() {
  const { id } = useParams(); // Capture the id from the route parameters
  const [direction, setDirection] = useState('');
  const [demendeur, setDemendeur] = useState('');
  const [reste, setReste] = useState(0);
  const [rows, setRows] = useState([]);
  const [error, setError] = useState(null);
  const [updatedRows, setUpdatedRows] = useState([]); // State to store updated rows

  const history = useHistory();

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/bcci/${id}`);
      if (!response.ok) {
        throw new Error('Une erreur s\'est produite lors de la récupération des données !');
      }
      const data = await response.json();
      console.log("Fetched Data:", data);

      setDirection(data.bciData.direction);
      setDemendeur(data.bciData.demendeur);
      setReste(data.bciData.reste);
      setRows(data.produits.map((row, index) => ({ ...row, id: index + 1 }))); // Assign unique IDs to rows
    } catch (error) {
      setError(error.message);
      console.error("Une erreur s'est produite lors de la récupération des données !", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleQuantiteChange = (id, value) => {
    const newValue = parseInt(value, 10) || 0; // Ensure the value is a number
    const updatedRow = { ...rows.find(row => row.id === id), quantiteAccordee: newValue };
    setUpdatedRows(prev => {
      const index = prev.findIndex(row => row.id === id);
      if (index !== -1) {
        prev[index] = updatedRow;
        return [...prev];
      }
      return [...prev, updatedRow];
    });
    setRows(rows.map(row => row.id === id ? { ...row, quantiteAccordee: newValue } : row));
  };

  const handleButtonClicked = async (rowId, quantiteAccordee) => {
    console.log(`ID: ${rowId}, Quantité accordée: ${quantiteAccordee}`);
    try {
      const response = await fetch('http://localhost:3001/api/updateQuantityAccordedd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bciId: id, rowId, quantiteAccordee }), // Include bciId from useParams
      });

      if (!response.ok) {
        throw new Error('Failed to update quantity accorded');
      }

      console.log('Quantité accordée mise à jour avec succès');
    } catch (error) {
      console.error('Error updating quantity accorded:', error);
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'produit', headerName: 'Produit', flex: 1 },
    { field: 'quantite', headerName: 'Quantité demandée', flex: 1 },
    {
      field: 'quantiteAccordee',
      headerName: 'Quantité accordée',
      flex: 1,
      align: 'center',
      editable: true,
      renderCell: (params) => (
        <input
          type="number"
          min="0"
          value={params.value || ''}
          onChange={(e) => handleQuantiteChange(params.row.id, e.target.value)}
          style={{ width: '100%' }}
        />
      )
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      align: 'center',
      renderCell: (params) => (
        <button onClick={() => handleButtonClicked(params.row.id, params.row.quantiteAccordee)}>
          Récupérer
        </button>
      )
    }
  ];

  return (
    <div className='contcreerbci'>
      <div className='partie1'>
        <div className='icnbci'>
          <IoMdListBox size='2rem' />
        </div>
        <h3 className='titrebci' style={{ paddingTop: '25px' }}>Bon de commande interne</h3>
      </div>

      <div className='partiesec'>
        <div>
          <div className='partie2'>
            <div className='icndemandeur'>
              <MdOutlinePerson size='2rem' />
            </div>
            <h3 className='titredemandeur' style={{ paddingTop: '20px' }}>Information de demandeur</h3>
          </div>
          <div>
            <form className='partieform'>
              <div className='partiedircetion'>
                <label className='labeldirection' htmlFor="directionInput">Direction</label>
                <input
                  className='inputdirection'
                  type="text"
                  id="directionInput"
                  value={direction}
                  onChange={(e) => setDirection(e.target.value)}
                  placeholder='Sécretariat général'
                />
              </div>
              <div className='partiedemandeur'>
                <label className='labeldemandeur' htmlFor="demandeurInput">Le demandeur</label>
                <input
                  className='inputdemandeur'
                  type="text"
                  id="demandeurInput"
                  value={demendeur}
                  onChange={(e) => setDemendeur(e.target.value)}
                  placeholder='Comité des œuvres sociales'
                />
              </div>
              <div className='partierestant'>
                <label className='labelrestant' htmlFor="resteInput">Les produits restent à l'école</label>
                <select
                  className='inputrestant'
                  id="resteInput"
                  value={reste}
                  onChange={(e) => setReste(e.target.value)}
                >
                  <option value=""></option>
                  <option value="1">Oui</option>
                  <option value="0">Non</option>
                </select>
              </div>
            </form>
          </div>
        </div>

        <div className='partie3'>
          <div className='partieproduit'>
            <div>
              <MdOutlineProductionQuantityLimits size='2rem' />
            </div>
            <h3 className='lesproduits'>Les produits</h3>
          </div>
          <div className="cmpt">
            <div style={{ height: 300, width: '100%' }}>
              <DataGrid
                sx={{
                  '.MuiDataGrid-columnSeparator': { display: 'none' },
                  '&.MuiDataGrid-root': { border: 'none' },
                }}
                slots={{ toolbar: GridToolbar }}
                className='grid '
                style={{ height: "66vh" }}
                rows={rows}
                columns={columns}
                rowHeight={70}
                autoPageSize
              />
            </div>
          </div>
        </div>

        {error && <div className="error">{error}</div>}

        <div className='partiebouton'>
          <div className='btngroup'>
            <button className='annuler'>Annuler</button>
            <button className='confirmer' >Confirmer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creerbci;
