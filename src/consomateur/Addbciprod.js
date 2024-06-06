import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Addbciprod.css';

function Addbciprod({ onSelectRow }) {
  const [rows, setRows] = useState([]);
  const [lastId, setLastId] = useState(null);
  const history = useHistory();

  useEffect(() => {
    // Fetch the product data from your API endpoint
    fetch('http://localhost:3001/rssx')
      .then((response) => response.json())
      .then((data) => setRows(data))
      .catch((error) => console.error('Error fetching product data:', error));

    // Initialize the last ID table and get the lastId
    fetch('http://localhost:3001/initializeLastIdTable', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setLastId(data.lastId))
      .catch((error) => console.error('Error initializing last ID table:', error));
  }, []);

  const handleCellEditCommit = (params) => {
    // Logic to handle cell edit commit
    const updatedRows = rows.map((row) =>
      row.id === params.id ? { ...row, [params.field]: params.value } : row
    );
    setRows(updatedRows);
  };
  const handleQuantityChange = (id, newValue) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, quantity: newValue } : row
    );
    setRows(updatedRows);
  };
  
  const handleSelectClick = (id) => {
    const selectedRow = rows.find((row) => row.id === id);

    // Make a POST request to the /addp endpoint with the selected product details
    fetch('http://localhost:3001/addp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lastId,
        produitId: selectedRow.id,
        produit: selectedRow.name,
        quantit: selectedRow.quantity,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add product');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Product added successfully:', data);
        // Optionally, update the UI or state here
      })
      .catch((error) => {
        console.error('Error adding product:', error);
        // Handle error
      });
  };

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'name', headerName: 'Produit', flex: 1 },
    {
      field: 'quantity',
      headerName: 'Quantité demandée',
      flex: 1,
      renderCell: (params) => (
        <input
          type="number"
          value={params.value}
          onChange={(e) => handleQuantityChange(params.id, e.target.value)}
        />
      ),
    },
    {
      field: 'selection',
      headerName: 'Sélection',
      flex: 1,
      align: 'center',
      renderCell: (params) => (
        <button
          className="selectbtn"
          onClick={() => handleSelectClick(params.row.id)}
          style={{
            color: 'white',
            fontSize: '15px',
            height: '38px',
            width: '120px',
            marginRight: '70px',
          }}
        >
          Sélectionner
        </button>
      ),
    },
  ];

  return (
    <div className='contaddpro'>
      <div className='ajouterproduit'>
        <h3>Ajouter un produit</h3>
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
              onCellEditCommit={handleCellEditCommit}
            />
          </div>
        </div>
      </div>
      <div className='btngroup'>
        <button className='annuler'>annuler</button>
        <button className='confirmer'>confirmer</button>
      </div>
    </div>
  );
}

export default Addbciprod;
