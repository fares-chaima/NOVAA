import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
import SendIcon from '@mui/icons-material/Send';
import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import "../css/AfficherCmpt.css";
import SideBarRdsDirect from "./SideBarRdsDirect";

const ListeBCIDirect = () => {
    const [rows, setRows] = useState([]);
    const [chng, setChng] = useState(true);
    const [etat, setEtat] = useState('prêt');
    const history = useHistory();
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
        fetch('http://localhost:3001/api/magasin', {
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
    const handleModifier = (id) => {
        history.push(`/Modbci/${id}`);
      };
    
    const handleEnvoyerClick = async (numero) => {
        try {
          const response = await fetch('http://localhost:3001/api/magasin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ numero })
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
    const columns = [
        {
            field: 'numero',
            headerName: 'N° de BCI',
            headerClassName: 'hdr',
            flex: 1,
        },
        {
            field: 'date_insertion',
            headerName: 'Date',
            headerClassName: 'hdr',
            flex: 1,
        },
        {
            field: 'etat',
            headerName: 'Etat',
            headerClassName: 'hdr',
            flex: 1,
            renderCell: ({ row: { etat } }) => {
                // Define the background color based on the etat value
                let backgroundColor;
            
                switch (etat) {
                    case "prêt":
                        backgroundColor = "#7CD992";
                        break;
                  
                        case "Envoyé":
                            backgroundColor = "#EB6060CC"; // You can choose an appropriate color for "validé"
                            break;
                    case "validé":
                        backgroundColor = "#FFCC00"; // You can choose an appropriate color for "validé"
                        break;
                    default:
                        backgroundColor = "#CCCCCC"; // Default color for unknown status
                        break;
                }
            
                return (
                    <Box
                        width="75%"
                        p="5px"
                        marginLeft="-10px"
                        marginTop="5%"
                        backgroundColor={backgroundColor}
                        borderRadius="24px"
                    >
                        <Typography color="#222020" id="etat">
                            {etat}
                        </Typography>
                    </Box>
                );
           }   },

        {
            field: "action",
            headerName: 'Action',
            headerClassName: 'hdr',
            flex: 1,
            renderCell: (params) => {
                return (
                    <>
                        <div className="change">
                        <EditIcon fontSize="small" className='send1 supprimer' onClick={() => handleModifier(params.row.numero)} />
                            <PrintIcon className='icon1' sx={{ fontSize: 30 }} />
                        </div>
                    </>
                );
            }
        },
        {
            field: "envoyer",
            headerName: 'Envoyer',
            headerClassName: 'hdr',
            flex: 1,
            renderCell: (params) => {
                return (
                  <div className="env">
                    <SendIcon className='icon' sx={{ fontSize: 30 }} onClick={() => handleEnvoyerClick(params.row.numero)} />
                  </div>
                );
              }
        },
    ];

   
      

    const getCellClassName = (params) => {
        if (params.field === 'envoyer' && params.row.etat === 'envoyé') {
            return 'action-pret'; // CSS class name for the styling you want
        }
        if (params.field === 'action' && params.row.etat === 'envoyé') {
            return 'action-pret'; // CSS class name for the styling you want
        }
        return '';
    };

    return (
        <div className="comptes">
            <SideBarRdsDirect />
            <div className="cmpt">
                <div className="fx1">
                    <span>Liste des BCI</span>
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
                        style={{ height: "66vh" }}
                        rows={rows}
                        columns={columns}
                        rowHeight={70}
                        autoPageSize
                        disableRowSelectionOnClick
                        getRowClassName={(params) => params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'}
                        getCellClassName={getCellClassName}
                    />
                </div>
            </div>
        </div>
    );
}

export default ListeBCIDirect;
