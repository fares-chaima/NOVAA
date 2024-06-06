import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
import SendIcon from '@mui/icons-material/Send';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import "../css/AfficherCmpt.css";
import AsaSideBar from "./AsaSideBar";
const ListeBce = () => {
    const history = useHistory();
    const [rows, setRows] = useState([]);

    useEffect(() => {
        // Effectuer une requête GET pour récupérer les données de la table bandc
        fetch('http://localhost:3001/lire-tabl')
            .then(response => response.json())
            .then(data => {
                // Mettre à jour l'état des lignes avec les données récupérées
                setRows(data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données de la table bandc :', error);
            });
    }, []);
   
    const handleSendClick = (id) => {
        // Send the id to your Node.js backend
        fetch('http://localhost:3001/your-api-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
        .then(response => {
            // Handle response
        })
        .catch(error => {
            // Handle error
        });
    };
    const handlePrintIconClick = (id) => {
        // Construct the filename dynamically using the id
        const pdfFilePath = process.env.PUBLIC_URL + `/pdf/BandeCammande${id}.pdf`;
        // Open the PDF file in a new tab
        window.open(pdfFilePath, '_blank');
    };

    const handleDelete = (id) => {
        // Send the ID to the backend for deletion
        fetch(`http://localhost:3001/delete/${id}`, {
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
    const handleButtonClick = () => {
        fetch('http://localhost:3001/creer-table', {
            method: 'POST'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to create table');
            }
            console.log('Table created successfully');
            history.push('/AddBce');
        })
        .catch(error => {
            console.error('Error creating table:', error);
        });
    };

    const columns = [
        {
            field: 'id',
            headerName: 'N° DE BCE',
            headerClassName: 'hdr',
            flex: 1,
        },
        {
            field: 'attribut_date',
            headerName: 'Date',
            headerClassName: 'hdr',
            flex: 1,
        },
        {
            field: "action",
            headerName: 'Action',
            headerClassName: 'hdr',
            flex: 1,
            renderCell: (cellValues) => {
                const id = cellValues.row.id;
        
               
              
                return (
                    <div className="change">
                        <DeleteIcon 
                            sx={{ fontSize: 35 }}
                            className='send2' 
                            onClick={() => handleDelete(id)} // Pass the id to handleDelete
                        />
                        <Link to={`/Modifband/${id}`}>
                            <EditIcon sx={{ fontSize: 35 }} className='send1' />
                        </Link>
                        <PrintIcon 
                            sx={{ fontSize: 35 }} 
                            className='send1' 
                            onClick={() => handlePrintIconClick(id)} // Pass the id to handlePrintIconClick
                        />
                    </div>
                );
            }
        },
        {
            field: "valider",
            headerName: 'Valider',
            headerClassName: 'hdr',
            flex: 0,
            renderCell: (cellValues) => {
                const id = cellValues.row.id;
        
                const handleSendClick = () => { // No need to pass 'id' here
                    // Send the id to your Node.js backend
                    fetch('http://localhost:3001/your-api-endpoint', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ id: id }) // Using the captured 'id' value
                    })
                    .then(response => {
                        // Handle response
                    })
                    .catch(error => {
                        // Handle error
                    });
                };
        
                return (
                    <div className="change">
                        <SendIcon 
                            sx={{ fontSize: 35 }} 
                            className='send'      
                            onClick={handleSendClick}  // Pass the handleSendClick function directly
                        />
                    </div>
                );
            }
        },
    ];

    return ( 
        <div className="comptes">    
            <AsaSideBar />
            <div className="cmpt">           
            <div className="fx1">   
    <span>Liste des BCE</span>
                <button  onClick={handleButtonClick}>+ ajouter</button>
                </div>  
                <div style={{ height: 300, width: '100%' }}>
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
                        rows={rows}
                        columns={columns}    
                        rowHeight={70}
                        autoPageSize
                        getRowClassName={(params) =>
                            params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
                        }
                    />
                </div>
            </div>
        </div>
    );
}
 
export default ListeBce;
