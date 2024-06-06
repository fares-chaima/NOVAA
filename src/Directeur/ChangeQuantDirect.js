import AssignmentIcon from '@mui/icons-material/Assignment';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import * as React from 'react';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import "../css/AfficherCmpt.css";
import SideBarRdsDirect from './SideBarRdsDirect';
const ChangeQuantDirect = () => {
    const [modal, setModal] = useState(false);
    
    const [article, setArticle] = useState("");
   
    
    const columns = [
    
        {
          field: 'id',
          headerName: 'N° ',
          headerClassName: 'hdr',
          flex: 1,
        },
        {
          field: 'produit',
          headerName: 'Produit',
          headerClassName: 'hdr',
          flex: 1,
        },
        {
          field: 'quantDmd',
          headerName: 'Quantité  demandée',
          headerClassName: 'hdr',
          flex: 1,
         
        },
        {
          field: 'quantAcc',
          headerName: ' Quantité  accordée',
          headerClassName: 'hdr',
          flex: 1,
          renderCell: (cellValues) => {
            
            return (
                <>
                <div  className="quantAcc">
               
                <input type="number"  />
                </div>
                </>
              );
                }
        },
 
      ];
      const rows = [
        { id: 1,  produit: 'produit1' , quantDmd:200,  },
   
       
      ];
       //les donnees de produits ajoutes dans le bce


      
    return (
        <>
        
<div className="comptes">    
        <SideBarRdsDirect />
<div className="cmpt">   
<div className="titl">
  <AssignmentIcon fontSize='large' />
<h1>Bon de Commande Interne</h1>
</div>

           <div className="bci">     
 

          <div className="d6">
          
            <div className="lft">
            <span>Le Demandeur:</span>
                <input type="text" value='Comite des oeuvre sociales ' />
            </div>
            <div className="rght">
            <span>les produits reste au niveau de l’ecole:   </span>
                <input type="text"  value='oui'/>
            </div>
               
                
           
          </div>

          <div className="d4">
            <div className="sd1">
            <span className='prdt'>Produit :</span>
            <div className="sd3">
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
        disableRowSelectionOnClick
       getRowClassName={(params) =>
    params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
  }   
      />

      </div>
      </div>
          </div>
          
          <div className="btnn">
       <button className="close-modal">
         Annuler
        </button>
        <button className="cnr"> Confirmer</button>
        </div>

          </div>   
 </div>
        
</div>



     
</> 
      );
}
 
export default ChangeQuantDirect;