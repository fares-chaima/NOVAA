import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SideBar from "./SideBar";
import "./css/AfficherCmpt.css";

const AfficherComptes = () => {
  const history = useHistory();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend API
    fetch('http://localhost:3001/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleDeleteUser = (userId) => {
    // Appeler votre API backend pour supprimer l'utilisateur avec l'ID spécifié
    fetch(`http://localhost:3001/ussers/${userId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          // Mettre à jour la liste des utilisateurs après la suppression
          setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
        } else {
          throw new Error('Erreur lors de la suppression de l\'utilisateur');
        }
      })
      .catch(error => console.error('Error deleting user:', error));
  };


  const handleModUser = (userId) => {
    history.push(`/ModifProfile/${userId}`);
    
  };






  const columns = [
    {
      field: 'firstname',
      headerName: 'Nom',
      headerClassName: 'hdr',
      flex: 1,
    },
    {
      field: 'lastname',
      headerName: 'Prénom',
      headerClassName: 'hdr',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      headerClassName: 'hdr',
      type: '',
      flex: 1,
    },
    {
      field: 'role',
      headerName: 'Role',
      headerClassName: 'hdr',
      flex: 1,
    },
    {
      field: "gérer",
      headerName: 'Gérer',
      headerClassName: 'hdr',
      flex: 1,
      renderCell: (cellValues) => {
        return (
          <div className="change">
            <DeleteIcon className='dlt' sx={{ fontSize: 35 }} onClick={() => handleDeleteUser(cellValues.row.id)} />
            <EditIcon className='icon' sx={{ fontSize: 35 }}  onClick={() => handleModUser(cellValues.row.id)}  />
          </div>
        );
      }
    },
  ];

  return (
    <div className="comptes">
      <SideBar />
      <div className="cmpt">
        <div className="fx1">
          <span>Liste des comptes</span>
          <button onClick={() => history.push("/AddCmpt")}>+ Ajouter</button>
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
            rows={users}
            columns={columns}
            rowHeight={70}
            autoPageSize
            disableRowSelectionOnClick
            getRowClassName={(params) =>
              params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
            }
          />
        </div>
      </div>
    </div>
  );
}

export default AfficherComptes;
