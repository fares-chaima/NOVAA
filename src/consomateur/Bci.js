import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
import SendIcon from '@mui/icons-material/Send';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import EtatCell from './EtatCell'; // Assurez-vous de spécifier le chemin correct

import './Bci.css';

function Bci() {
  const [rows, setRows] = useState([]);
  const history = useHistory();
  const [etatInfo, setEtatInfo] = useState({ text: '', color: '' });

  const handleIconClick = (id) => {
    fetch('http://localhost:3001/api/print', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    }).catch(error => {
      console.error('Error sending data:', error);
    });
  };
  const handlePrintIconClick = (id) => {
    // Construct the filename dynamically using the id
    const pdfFilePath = `C:\Users\USER\Desktop\novastock-souha\public\BandeCammandeinterne${id}.pdf`;
    // Open the PDF file in a new tab
    alert(`Votre fichier a été téléchargé. `);
};


  const fetchEtatInfo = async (rowId) => {
    try {
        const response = await fetch(`/api/bci/${rowId}/etat`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching etat:', error);
        return { text: '', color: '' }; // Retourne une valeur par défaut en cas d'erreur
    }
};



  // Utiliser useEffect pour récupérer les données de l'API
  useEffect(() => {
    fetch('http://localhost:3001/getBciData')
      .then(response => response.json())
      .then(data => {
        // Mettre à jour les données
        console.log(data);
        const formattedData = data.map(item => ({
          id: item.id,
          num: ` N° ${item.id}`,
          date: new Date(item.date_insertion).toLocaleDateString(), 
          etat: 'Pret'
        }));
        setRows(formattedData);
      })
      .catch(error => console.error('Erreur lors de la récupération des données :', error));
  }, []);

  const handleEnvoyerClick = async (id) => {
    try {
        const response = await fetch('http://localhost:3001/api/rds', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id})
        });
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();
      console.log('Record added:', data);
  } catch (error) {
      console.error('Error adding record:', error);
  }
};

  const handleSupprimer = (id) => {fetch(`http://localhost:3001/deletebci/${id}`, {
    method: 'DELETE',
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete BCI entry');
    }
    // Mettre à jour les données après la suppression réussie
    setRows(rows.filter(row => row.id !== id));
  })
  .catch(error => console.error('Erreur lors de la suppression de l\'entrée BCI :', error));
};

  const handleModifier = (id) => {
    history.push(`/Modbci/${id}`);
  };

  const columns = [
    { field: 'num',headerName: 'N° DE BCE', flex: 1 },
    { field: 'date', headerName: 'Date', flex: 1 },
    
   
   
    {
      field: 'etat',
      headerName: 'État',
      flex: 1,
      renderCell: (params) => (
       
        <EtatCell row={params.row} />
      ),
    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      renderCell: (params) => (
     
        <div>
          <DeleteIcon fontSize="small" className='send2' onClick={() => handleSupprimer(params.row.id)} />
          <EditIcon fontSize="small" className='send1 supprimer' onClick={() => handleModifier(params.row.id)} />
          <PrintIcon 
                            sx={{ fontSize: 35 }} 
                            className='send1' 
                            onClick={() => handlePrintIconClick(params.row.id)} // Pass the id to handlePrintIconClick
                        />
        </div>
      ),
    },
    {
      field: 'envoyer',
      headerName: 'Envoyer',
      flex: 1,
      renderCell: (params) => (
        <div>
          <SendIcon onClick={() => handleEnvoyerClick(params.row.id)} fontSize="small" className='send' />
        </div>
      ),
    },
  ];

  return (
    <div className='contbci'>
      <div>
        <div className='groupe1'>
          <h1 className='listedebci'>Liste de BCI</h1>
          <button className='btnajouter' onClick={() => history.push("/Creerbci")}>
            Ajouter
          </button>
        </div>

        <div>
          <div className="cmpt">
            <div style={{ height: 300, width: '100%' }}>
              <DataGrid
                sx={{
                  '.MuiDataGrid-columnSeparator': { display: 'none' },
                  '&.MuiDataGrid-root': { border: 'none' },
                }}
                slots={{ toolbar: GridToolbar }}
                className='grid'
                style={{ height: "66vh" }}
                rows={rows}
                columns={columns}
                rowHeight={70}
                autoPageSize
                getRowClassName={(params) => params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bci;
