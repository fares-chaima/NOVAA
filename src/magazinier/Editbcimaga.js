
import React,{useState} from 'react';
import '../consomateur/Bci.css';
import { IoMdListBox } from "react-icons/io";
import { MdOutlinePerson } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useHistory } from 'react-router-dom';
import './Editbcimaga.css';
import { IoMdAdd } from "react-icons/io";
function Editbcimaga() {

  
  
    const [rows, setRows] = useState([
        { id: 1, produit: 'Produit A', quantiteDemandee: 10, quantiteaccordée: 50},
        { id: 2, produit: 'Produit A', quantiteDemandee: 10, quantiteaccordée: 50 },
        { id: 3, produit: 'Produit A', quantiteDemandee: 10, quantiteaccordée: 50 },
        { id: 4, produit: 'Produit A', quantiteDemandee: 10, quantiteaccordée: 50 },
       
      ]);
    
      const history = useHistory();
    
     
    
     
    
      const columns = [
        { field: 'id', headerName: 'id', flex: 1 },
        { field: 'produit', headerName: 'Produit', flex: 1 },
        { field: 'quantiteDemandee', headerName: 'quantitée demandée', flex: 1, editable: true },
        { 
          field: 'quantiteaccordée', 
          headerName: 'quantitée accordée', 
          flex: 1, align: 'center',
          
          editable: true,
          cellRenderer: 'agAnimateShowChangeCellRenderer', // Optionnel, cela ajoute une animation pour montrer les changements de valeur
         


          cellRendererParams: {
            renderCell: (params) => (
                <input type="number" value={params.value} onChange={(e) => {
                    // Mettre à jour la valeur lorsqu'elle change
                    const newValue = parseInt(e.target.value);
                    params.setValue(newValue);
                }} />
            )
        }


        
        },
    
        
       
      ];
    
      
    
    
    
    
    
    
    
    
      return (
        <div className='contcreerbci'>
    
          <div className='partie1' >
                        <div className='icnbci' >
                        <IoMdListBox size='2rem'/>
                        </div>
                        <h3 className='titrebci' style={{paddingTop:'25px'}}>Bon de commande interne</h3>
          </div>
    
          <div className='partiesec'>
                            <div>
                           
                             <div >
                                <form className='partieform'>
                               
                                            
                                    
          
                              
                                <div className='partiedemande'>
                                <label className='demandelab' htmlFor="textInput" >Le Demandeur:</label>
                                
                                <input className='demandeinput'
                                    type="text"
                                    id="textInput"
                                    value=''
                                    onChange=''
                                    placeholder='Comite des ouevre sociales'
                                />
          
                                </div>
                             
    
    
                                </form>
          
                             </div>
    
                           
                            
                            </div>
    
    
                            <div className='partie3'>
                            <div className='partieproduit'>
                                                <div>
                                                <MdOutlineProductionQuantityLimits size='2rem'   />
    
                                                </div>
                                                <h3 className='lesproduits' >Les produits</h3>
                             </div>
                           
    
                             <div className="cmpt">
                <div style={{ height: 300, width: '100%' }}>
                  <DataGrid
                    sx={{
                      '.MuiDataGrid-columnSeparator': { display: 'none' },
                      '&.MuiDataGrid-root': { border: 'none' },
                    }}
                    slots={{ toolbar: GridToolbar }}
                    className='grid '
                    style={{height: "66vh"}}
                    rows={rows}
                    columns={columns}
                    rowHeight={70}
                    autoPageSize
                  />
                </div>
              </div>
    
    
    
    
          
                            </div>
          <div className='partiebouton'>
          
            <div className='btngroup'>
        
            <button className='annuler'onClick={() => history.push("/Listbs")}>annuler</button>
            <button className='confirmer' onClick={() => history.push("/Listbs")}>confirmer</button>
                
                </div>
          
          </div>
    
    
    
          
        </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
          
        </div>
      )
    }
    
export default Editbcimaga
