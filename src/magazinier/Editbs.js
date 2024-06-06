import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { useHistory, useParams } from 'react-router-dom';

function Editbs() {
    const [rows, setRows] = useState([]);
    const [direction, setDirection] = useState('');
    const [date, setDate] = useState('');
    const history = useHistory();
    const { id } = useParams(); 

    useEffect(() => {
        // Fetch data from the API endpoint
        fetch(`http://localhost:3001/api/bs/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.error) {
                    console.error(data.error);
                    return;
                }
                
                // Update the rows state with fetched data
                const bdRows = data.bd.map(row => ({ ...row, id: row.bd_id }));
                const bciRows = data.bci.map(row => ({
                    ...row,
                    id: row.bci_id,
                    observations: calculateObservation(row.produit),
                }));

                setRows([...bdRows, ...bciRows]);

                // Set direction and date based on fetched data
                if (data.bd.length > 0) {
                    setDirection(data.bd[0].directeur);
                    setDate(new Date().toISOString().split('T')[0]); // Set current date as default
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);


    const handleButtonClicked = async (rowId, obs, inv) => {
        console.log(`ID: ${rowId}, obs ${obs}, inv : ${inv}`);
        try {
            const response = await fetch('http://localhost:3001/api/updateQ', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ bciId: id, rowId, obs, inv }), // Inclure obs et inv dans la requête
            });
    
            if (!response.ok) {
                throw new Error('Échec de la mise à jour de la quantité accordée');
            }
    
            console.log('Quantité accordée mise à jour avec succès');
        } catch (error) {
            console.error('Erreur lors de la mise à jour de la quantité accordée:', error);
        }
    };
    

    const calculateObservation = (productId) => {
        return productId % 2 === 0 ? 'in stock' : 'out of stock';
    };

    const handleInputChange = (e, rowId, field) => {
        const { value } = e.target;
        setRows(prevRows => prevRows.map(row => row.id === rowId ? { ...row, [field]: value } : row));
        
        // Logique pour envoyer les données au backend
        console.log('ID:', rowId);
        console.log('N° inventaire:', field === 'inve' ? value : '');
        console.log('Observation:', field === 'observation' ? value : '');
    };
    

    const handleButtonClick = (row) => {
        console.log('ID:', row.id);
        console.log('N° inventaire:', row.inve);
        console.log('Observation:', row.observation);
    };

    const columns = [
        { field: 'id', headerName: 'N°', flex: 1 },
        { field: 'produit', headerName: 'Désignation', flex: 1 },
        { field: 'quantite', headerName: 'Quantité demandée', flex: 1 },
        { field: 'quantitee', headerName: 'Quantité Servie', flex: 1, align: 'center', editable: true },
        {
            field: 'inv',
            headerName: 'N° inventaire',
            flex: 1,
            editable: true,
            renderCell: (params) => (
                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <input
                        type="text"
                        value={params.row.inv|| ''}
                        onChange={(e) => handleInputChange(e, params.row.id, 'inve')}
                        style={{ flex: 1 }}
                    />
                  
                </div>
            )
        },
        {
            field: 'obs',
            headerName: 'Observations',
            flex: 1,
            editable: true,
            renderCell: (params) => (
                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <input
                        type="text"
                        value={params.row.obs || ''}
                        onChange={(e) => handleInputChange(e, params.row.id, 'observation')}
                        style={{ flex: 1 }}
                    />
                 
                </div>
            )
        },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 1,
            align: 'center',
            renderCell: (params) => (
              <button onClick={() => handleButtonClicked(params.row.id, params.row.observation, params.row.inve)}>
                Récupérer
              </button>
            )
          }
    ];

    return (
        <div className='contcreerbci'>
            <div className='partie1'>
                <div className='icnbci'>
                    <ReceiptLongIcon fontSize='large' />
                </div>
                <h3 className='titrebci' style={{ paddingTop: '25px' }}>Bon de sortie</h3>
            </div>

            <div className='partiesec'>
                <div>
                    <form className='partieform'>
                        <div className='partieservice'>
                            <label className='servicelab' htmlFor="directionInput">Le Service</label>
                            <input
                                className='serviceinput'
                                type="text"
                                id="directionInput"
                                value={direction}
                                onChange={(e) => setDirection(e.target.value)}
                                placeholder='Comite des oeuvres sociales'
                            />
                        </div>
                        <div className='partieservice partiedate'>
                            <label className='servicelab' htmlFor="dateInput">La Date</label>
                            <input
                                className='serviceinput'
                                type="date"
                                id="dateInput"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                    </form>
                </div>

                <div className='partie3'>
                    <div className='partieproduit'>
                        <MdOutlineProductionQuantityLimits size='2rem' />
                        <h3 className='lesproduits'>Les produits</h3>
                    </div>
                    <div className="cmpt">
                        <div style={{ height: 300, width: '100%' }}>
                            <DataGrid
                                sx={{
                                    '.MuiDataGrid-columnSeparator': { display: 'none' },
                                    '&.MuiDataGrid-root': { border: 'none' },
                                }}
                                slots={{ toolbar: GridToolbar }}
                                className='grid'
                                style={{ height: "66vh" }}
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
                        <button className='annuler' onClick={() => history.goBack()}>annuler</button>
                        <button className='confirmer'>confirmer</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Editbs;
