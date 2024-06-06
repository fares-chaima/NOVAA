
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useState } from 'react';
import { LuEye } from "react-icons/lu";
import { useHistory } from 'react-router-dom';
import '../consomateur/Bci.css';
import './Listbs.css';


function Listbs() {

    const [rows, setRows] = useState([]);
    const [selectedReceipt, setSelectedReceipt] = useState('');
    const history = useHistory();
  
    useEffect(() => {
      fetch('http://localhost:3001/api/bss')
          .then(response => response.json())
          .then(data => setRows(data))
          .catch(error => console.error('Erreur lors de la récupération des données de la table bd :', error));
  }, []);

  const handleRowClick = (num) => {
      setSelectedReceipt(num);
  };

    const handleConsulter = (id) => {
     
      history.push(`/Consulterbs/${id}`)
      console.log(`Générer le bon de sortie pour l'ID : ${id}`);}
  
    const handleSupprimer = (id) => {
      setRows(rows.filter((row) => row.id !== id));
    };
  
    const handleModifier = (id) => {
      // Vous pouvez rediriger vers une nouvelle page avec les détails de la commande ici
      history.push(`/Editbs/${id}`);
    };
  
    const columns = [
      { field: 'id', headerName: 'N° DE Bs', flex: 1 },
      { field: 'date_insertion', headerName: 'Date', flex: 1 },
      
      {
        field: 'action',
        headerName: 'Action',
        flex: 1,
        renderCell: (params) => (
          <div>
            <DeleteIcon fontSize="small" className='send2' onClick={() => handleSupprimer(params.row.id)} />
            <EditIcon fontSize="small" className='send1 supprimer' onClick={() => handleModifier(params.row.id)} />
            <PrintIcon fontSize="small" className='send1' />
          </div>
        ),
      },
      {
        field: 'consulter',
        headerName: 'consulter',
        flex: 1,
        renderCell: (params) => (
          <div>
             
               <LuEye  onClick={() => handleConsulter(params.row.id)} fontSize="small" className='send' style={{ marginLeft:'50px'}} />

          </div>
        ),
      },
    ];
  
    return (
      <div className='contbci'>
        <div>
          <div className='groupe1'>
            <h1 className='listedebs'>Liste de Bon de sortie</h1>
           
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
                  style={{height: "66vh"}}
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

export default Listbs
