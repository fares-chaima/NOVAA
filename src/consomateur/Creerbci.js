import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useState } from 'react';
import { IoMdListBox } from "react-icons/io";
import { MdOutlinePerson, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useHistory } from 'react-router-dom';
import './Creerbci.css';



function Creerbci() {
  const [rows, setRows] = useState([
    { id: 1, produit: 'Produit A', quantiteDemandee: 10, quantiteaccordée: 50 },
    { id: 2, produit: 'Produit A', quantiteDemandee: 10, quantiteaccordée: 50 },
    { id: 3, produit: 'Produit A', quantiteDemandee: 10, quantiteaccordée: 50 },
    { id: 4, produit: 'Produit A', quantiteDemandee: 10, quantiteaccordée: 50 },
  ]);

  const [direction, setDirection] = useState('');
  const [demendeur, setDemendeur] = useState('');
  const [reste, setReste] = useState('');

  const history = useHistory();
  const handleAjouteClick = () => {
    // Make a POST request to the initializeLastIdTable endpoint
    fetch('http://localhost:3001/initializeLastIdTable', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    history.push("/Addbciprod");
    
  };
  
  const handleAjouterClick = () => {
    fetch('http://localhost:3001/addbci', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ direction, demendeur, reste }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add BCI entry');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // Update your state or perform any necessary actions after successfully adding the BCI entry
      })
      .catch((error) => {
        console.error('Error adding BCI entry:', error);
        // Handle error
      });
  };

  const columns = [
    { field: 'id', headerName: 'id', flex: 1 },
    { field: 'produit', headerName: 'Produit', flex: 1 },
 
   
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
                        <div  className='partie2'>
                                            <div className='icndemandeur'>
                                            <MdOutlinePerson size = '2rem' />

                                            </div>
                                            <h3 className='titredemandeur' style={{paddingTop:'20px'}} >Information de demandeur</h3>
                         </div>
                         <div >
                            <form className='partieform'>
                            <div className='partiedircetion'>
                                <label className='labeldirection' htmlFor="textInput">Direcetion</label>
                            
                                <input className='inputdirection'
                                    type="text"
                                    id="textInput"
                                    value={direction}
                                    onChange={(e) => setDirection(e.target.value)}
                                   
                                    placeholder='secretriat generale'
                                />
                                        
                                
      
                            </div>
                            <div className='partiedemandeur'>
                            <label className='labeldemandeur' htmlFor="textInput">Le demandeur</label>
                            
                            <input className='inputdemandeur'
                                type="text"
                                id="textInput"
                                value={demendeur}
                                onChange={(e) => setDemendeur(e.target.value)}
                                placeholder='Comite des ouevre sociales'
                            />
      
                            </div>
                            <div className='partierestant'>
                            <label  className='labelrestant' htmlFor="textInput">Les produits reste à  l'école</label>
                            <select className='inputrestant'
        id="selectList"  value={reste}
        onChange={(e) => setReste(e.target.value)}
       
>
  <option value=""></option>
  <option value="1">Oui</option>
  <option value="0">Non</option>
</select>
      
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
        <div >
          {/*  <IoMdAdd size="1rem" style={{paddingTop:"20px"}} /> */}
       
          <button className='ajouter' onClick={handleAjouteClick}>Ajouter</button>

        </div>
        <div className='btngroup'>
    
        <button className='annuler'>annuler</button>
        <button className='confirmer' onClick={handleAjouterClick}>Confirmer</button>
            
            </div>
      
      </div>



      
    </div>















      
    </div>
  )
}

export default Creerbci
