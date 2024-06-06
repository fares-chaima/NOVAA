import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';


function Listbnrecep() {
    const [rows, setRows] = useState([]);
    const history = useHistory();

    useEffect(() => {
        // Fetching data from the server when the component mounts
        fetch('http://localhost:3001/bandr-data')
            .then(response => response.json())
            .then(data => {
                // Updating the state with the received data
                // Formatting the date before setting the state
                const formattedData = data.map(row => ({
                    ...row,
                    date: formatDate(row.date)
                }));
                setRows(formattedData);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données de la table bandr:', error);
            });
    }, []); // Empty dependency array ensures the effect runs only once

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const handleDelete = (id) => {
      // Send the ID to the backend for deletion
      fetch(`http://localhost:3001/dellete/${id}`, {
          method: 'DELETE',
      })
      .then(response => {
          if (response.ok) {
              // Handle successful deletion
              // You might want to update the UI accordingly
              console.log(`Item with ID ${id} deleted successfully`);
              // Update rows state after deletion if necessary
          } else {
              // Handle errors if any
              console.error('Failed to delete item:', response.statusText);
          }
      })
      .catch(error => {
          console.error('Error deleting item:', error);
      });
  };
    const handleEnvoyerClick = (id) => {
        // Implement your logic here to handle "Envoyer" action
    };

    const handleSupprimer = (id) => {
        // Implement your logic here to handle deletion
    };

 
    const handleModifier = (id) => {
      // Redirecting to the Bnreception page with the ID as a URL parameter
      history.push(`/Bnreception/${id}`);

      // Sending the ID to the backend
      fetch(`http://localhost:3001/bnreception/${id}`, {
          method: 'POST', // or 'PUT' or 'PATCH' depending on your API
          headers: {
              'Content-Type': 'application/json',
              // Add any additional headers if needed
          },
          body: JSON.stringify({ id: id }), // Convert the ID to JSON format
      })
      .then(response => response.json())
      .then(data => {
          console.log('Success:', data);
          // Handle success response from the backend if needed
      })
      .catch(error => {
          console.error('Error:', error);
          // Handle error response from the backend if needed
      });
  };

    const columns = [
        { field: 'id', headerName: 'N° DE BL', flex: 1 },
        { field: 'date_insertion', headerName: 'Date', flex: 1 },
        {
            field: 'action',
            headerName: 'Action',
            flex: 1,
            renderCell: (params) => (
              <div>
                  <DeleteIcon fontSize="small" className='send2' onClick={() => handleDelete(params.row.id)} />
                  <EditIcon fontSize="small" className='send1 supprimer' onClick={() => handleModifier(params.row.id)} />
                  <PrintIcon fontSize="small" className='send1' />
              </div>
            ),
        },
       
    ];

    return (
        <div className='contbci'>
            <div>
                <div className='groupe1'>
                    <h1 className='listedebci'>Liste Bon de reception</h1>
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

export default Listbnrecep;