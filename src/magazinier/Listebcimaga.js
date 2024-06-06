import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { useHistory } from 'react-router-dom';
import '../consomateur/Bci.css';



function Listebcimaga() {

    
  const [rows, setRows] = useState([]);
    const [chng, setChng] = useState(true);
    const [etat, setEtat] = useState('prêt');
  
    useEffect(() => {
        // Fetch data from the API endpoint to get directeurs
        fetch('http://localhost:3001/api/directeurs')
            .then(response => response.json())
            .then(data => {
                // Update the rows state with fetched data
                setRows(data);
            })
            .catch(error => console.error('Error fetching directeurs:', error));
    }, []);
    const handleGererClick = (params) => {
        // Call the API to perform the action
        fetch('http://localhost:3001/api/rds', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: params.row.id })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // Perform any additional actions after successful API call
        })
        .catch(error => {
            console.error('Error calling API:', error);
            // Handle error scenarios
        });
    };
    
    const handleIconClick = async (numero) => {
        try {
          const response = await fetch('http://localhost:3001/api/bci/store', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: numero
            
            })
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
          console.log('BCI info stored:', data);
        } catch (error) {
          console.error('Error storing BCI info:', error);
        }
      };

  const history = useHistory();

  const handleEnvoyerClick = (id) => {
    setRows(rows.map((row) => {
      if (row.id === id) {
        return { ...row, etat: 'Envoyée' };
      }
      return row;
    }));
  };

  const handleModifier = (id) => {
    history.push(`/Moddbci/${id}`);
  };

  const columns = [
    { field: 'numero', headerName: 'N° DE BCE', flex: 1 },
    { field: 'date_insertion', headerName: 'Date', flex: 1 },
    {
      field: 'etat',
      headerName: 'État',
      flex: 1,
      renderCell: ({ row: { etat } }) => {
        // Define the background color based on the etat value
        let backgroundColor;
    
        switch (etat) {
            case "prêt":
                backgroundColor = "#7CD992";
                break;
          
            case "validé":
                backgroundColor = "#FFCC00"; // You can choose an appropriate color for "validé"
                break;
            default:
                backgroundColor = "#CCCCCC"; // Default color for unknown status
                break;
        }}
    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      renderCell: (params) => (
        <div>
        
        <EditIcon fontSize="small" className='send1 supprimer' onClick={() => handleModifier(params.row.numero)} />
          <PrintIcon fontSize="small" className='send1'  />
        </div>
      ),
    },
    {
      field: 'envoyer',
      headerName: 'Envoyer',
      flex: 1,
      renderCell: (params) => (
        <div>
            <FaCheck  onClick={() => handleIconClick(params.row.numero)} fontSize="small" className='send' style={{ color: params.row.etat === 'Pret' ? '#7CD992' : '#EB6060',textAlign:'center',fontSize:'30px' }}   />

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
          <div> </div>
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

export default Listebcimaga;