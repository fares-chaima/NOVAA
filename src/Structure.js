import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SideBar from "./SideBar";
import "./css/AfficherCmpt.css";

const Structure = () => {
  const history = useHistory();
  const [rows, setRows] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:3001/api/data') // Appeler votre API pour récupérer les données
      .then(response => response.json())
      .then(data => setRows(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const columns = [
    {
      field: 'Libelle',
      headerName: 'nom',
      headerClassName: 'hdr',
      flex: 1,
    },
    {
      field: 'responsable',
      headerName: 'le responsable',
      headerClassName: 'hdr',
      flex: 1,
    },
    {
      field: "gérer",
      headerName: 'gérer',
      headerClassName: 'hdr',
      flex: 1,
      renderCell: (cellValues) => {
        return (
          <>
            <div className="change">
              <DeleteIcon className='dlt' sx={{ fontSize: 35 }} />
              <EditIcon className='icon' sx={{ fontSize: 35 }} />
            </div>
          </>
        );
      }
    },
  ];

  return (
    <div className="comptes">
      <SideBar />
      <div className="cmpt">
        <div className="fx1">
          <span>Liste des structures</span>
          <button onClick={() => history.push("/AddStructure")}>+ ajouter</button>
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
            getRowClassName={(params) =>
              params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Structure;
