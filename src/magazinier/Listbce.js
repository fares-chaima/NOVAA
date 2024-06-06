import React,{useState} from 'react'
import MinNavBar from '../MinNavBar'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
import SendIcon from '@mui/icons-material/Send';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useHistory } from 'react-router-dom';
import '../consomateur/Bci.css'
import SideBar from '../SideBar';
import { FaCheck } from "react-icons/fa6";



function Listbce() {

    
    const [rows, setRows] = useState([
        { id: 1, num: 'Commande N° 31', date: '20-04-2023', etat: 'Pret' },
        { id: 2, num: 'Commande N° 32', date: '20-04-2023', etat: 'Pret' },
        { id: 3, num: 'Commande N° 33', date: '20-04-2023', etat: 'Pret' },
        { id: 4, num: 'Commande N° 34', date: '20-04-2023', etat: 'Pret' },
        { id: 5, num: 'Commande N° 35', date: '20-04-2023', etat: 'Pret' },
        { id: 6, num: 'Commande N° 36', date: '20-04-2023', etat: 'Pret' },
        { id: 7, num: 'Commande N° 37', date: '20-04-2023', etat: 'Pret' },
        { id: 8, num: 'Commande N° 338', date: '20-04-2023', etat: 'Pret' },
        { id: 9, num: 'Commande N° 39', date: '20-04-2023', etat: 'Pret' },
        { id: 10, num: 'Commande N° 34', date: '20-04-2023', etat: 'Pret' },
      ]);
    
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
        // Vous pouvez rediriger vers une nouvelle page avec les détails de la commande ici
        history.push(`/details-commande/${id}`);
      };
    
      const columns = [
        { field: 'num', headerName: 'N° DE BCE', flex: 1 },
        { field: 'date', headerName: 'Date', flex: 1 },
        {
          field: 'etat',
          headerName: 'État',
          flex: 1,
          renderCell: (params) => (
            <input type="text" value={params.row.etat} style={{ backgroundColor: params.row.etat === 'Pret' ? '#7CD992' : '#EB6060',borderRadius: '30px', width: '100px',textAlign:'center',color:'black',height:'30px' }} disabled />
          ),
        },
        {
          field: 'action',
          headerName: 'Action',
          flex: 1,
          renderCell: (params) => (
            <div>
            
              <EditIcon fontSize="small" className='send1 supprimer' onClick={() => handleModifier(params.row.id)} />
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
                <FaCheck  onClick={() => handleEnvoyerClick(params.row.id)} fontSize="small" className='send' style={{ color: params.row.etat === 'Pret' ? '#7CD992' : '#EB6060',textAlign:'center',fontSize:'30px' }}   />
    
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










  )
}

export default Listbce
