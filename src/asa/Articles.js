import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../css/AfficherCmpt.css";
import AsaSideBar from "./AsaSideBar";

const Articles = () => {
  const history = useHistory();
  const [chapitres, setChapitres] = useState([]); 

  // Définition de la fonction fetchChapitres
  const fetchChapitres = async () => {
      try {
          const response = await fetch('http://localhost:3001/articles'); 
          if (!response.ok) {
              throw new Error('Erreur lors de la récupération des chapitres');
          }
          const data = await response.json(); 
          setChapitres(data); 
      } catch (error) {
          console.error(error);
      }
  };

  // Appel de fetchChapitres dans useEffect
  useEffect(() => {
      fetchChapitres(); 
  }, []); 

  const handleModify = (id) => {
    history.push(`/Modifarticle/${id}`);
  };

  const destroyChapter = async (id) => {
    try {
        const response = await fetch(`http://localhost:3001/articles/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la suppression du article');
        }
        toast.success('article supprimé avec succès');
        return { success: true };
    } catch (error) {
        console.error('Erreur lors de la suppression du chapitre :', error.message);
        return { success: false, error: error.message };
    }
  };

  const columns = [
    {
      field: 'id',
      headerName: 'id',
      headerClassName: 'hdr',
      flex: 1,
    },
    {
      field: 'nom',
      headerName: 'nom',
      headerClassName: 'hdr',
      flex: 1,
    },
    {
      field: 'description',
      headerName: 'description',
      headerClassName: 'hdr',
      flex: 1,
    },
    {
      field: 'nom_chapitre',
      headerName: 'chapitre',
      headerClassName: 'hdr',
      flex: 1,
    },
    {
      field: "gérer",
      headerName: 'gérer',
      headerClassName: 'hdr',
      flex: 1,
      renderCell: (cellValues) => {
        const handleDelete = async () => {
            const id = cellValues.row.id;
            const result = await destroyChapter(id);
            if (result.success) {
                // Mettez à jour les chapitres après la suppression
                fetchChapitres();
            }}
        return (
          <>
            <div className="change">
            <DeleteIcon className='dlt' sx={{ fontSize: 35 }} onClick={handleDelete} />
            <EditIcon className='icon' sx={{ fontSize: 35 }} onClick={() => handleModify(cellValues.row.id)} />
            </div>
          </>
        );
      }
    },
  ];
  
  return ( 
    <div className="comptes">    
      <AsaSideBar />
      <div className="cmpt">   
      <div className="fx1">   
    <span>Liste des articles</span>
        <button onClick={()=> history.push("/AddArticle")}>+ ajouter</button> 
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
            rows={chapitres} 
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
 
export default Articles;
