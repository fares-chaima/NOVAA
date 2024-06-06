import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useState } from 'react'; // Importez useState et useEffect
 // Importez useState et useEffect
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../css/AfficherCmpt.css";
import AsaSideBar from "./AsaSideBar";

const Chapitres = () => {
    const history = useHistory();
    const [chapitres, setChapitres] = useState([]); // État pour stocker les chapitres
    const handleModify = (id) => {
      history.push(`/Modifchapitre/${id}`);
  };
    // Fonction pour récupérer les chapitres depuis l'API
    const fetchChapitres = async () => {
        try {
            const response = await fetch('http://localhost:3001/chappters'); // Effectuez la requête GET
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des chapitres');
            }
            const data = await response.json(); // Analysez la réponse JSON
            setChapitres(data); // Mettez à jour l'état avec les chapitres récupérés
        } catch (error) {
            console.error(error);
        }
    };

    const destroyChapter = async (id) => {
      try {
          const response = await fetch(`http://localhost:3001/chapters/${id}`, {
              method: 'DELETE',
          });
          if (!response.ok) {
              throw new Error('Erreur lors de la suppression du chapitre');
          }
          // Si la suppression réussit, affichez un message toast.success
          toast.success('Chapitre supprimé avec succès');
          return { success: true };
      } catch (error) {
          console.error('Erreur lors de la suppression du chapitre :', error.message);
          return { success: false, error: error.message };
      }
  };
  
    useEffect(() => {
        fetchChapitres(); // Appelez fetchChapitres une fois que le composant est monté
    }, []); // Videz le tableau de dépendances pour appeler fetchChapitres une seule fois

    const columns = [
    
      {
        field: 'id',
        headerName: 'id',
        headerClassName: 'hdr',
        flex: 1,
      },
      {
        field: 'name',
        headerName: 'name',
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
                }
            };
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
    <span>Liste des chapitres</span>
        <button onClick={()=> history.push("/AddChapitre")}>+ ajouter</button> 
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
                    rows={chapitres} // Utilisez les chapitres récupérés pour peupler les lignes
                    columns={columns}    
                    rowHeight={70}
                    autoPageSize
                    disableRowSelectionOnClick
                    getRowClassName={(params) => params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'}
                />
            </div>
        </div>
        </div>
    );
}
 
export default Chapitres;
