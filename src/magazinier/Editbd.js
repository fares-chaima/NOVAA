import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useState } from 'react';
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useHistory, useParams } from 'react-router-dom';
import '../consomateur/Creerbci.css';
import './Editbs.css';

function Editbd() {
    const [rowData, setRowData] = useState([]);
    const { id } = useParams(); // Access the id parameter from the URL
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:3001/api/bd/${id}`) // Include the id in the URL
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Generate unique id for each row in bd and bci arrays
                const updatedData = {
                    bd: data.bd.map(row => ({ ...row, id: `${row.id}` })),
                    bci: data.bci.map(row => ({ ...row, id: `${row.id}` }))
                };
                setRowData(updatedData);
            })
            .catch(error => console.error('Erreur lors de la récupération des données de la table bd :', error));
    }, [id, setRowData]); // Include setRowData in the dependency array

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRowData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const columns = [
        { field: 'bci_id', headerName: 'ID', flex: 1 },
        { field: 'produit', headerName: 'Nom produit', flex: 1 },
        { field: 'demandeur', headerName: 'Demandeur', flex: 1,   renderCell: (params) => (
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <input
                    type="text"
                    value={rowData.bd[0].demandeur }
               
                    style={{ flex: 1 }}
                />
              
            </div>
        ) },
    ];

    return (
        <div className='contcreerbci'>
            <div className='partie1'>
                <div className='icnbci'>
                    <ReceiptLongIcon fontSize='large' />
                </div>
                <h3 className='titrebci' style={{ paddingTop: '25px' }}>Bon de décharge N°: {rowData.bd && rowData.bd.length > 0 ? rowData.bd[0].id.split('_')[1] : ''}</h3>
            </div>

            <div className='partiesec'>
                <div>
                    <div >
                        <form className='partieform'>
                            <div className='partieservice partiepreneur'>
                                <label className='servicelab' htmlFor="textInput">Le Preneur</label>
                                <input className='serviceinput'
                                    type="text"
                                    id="textInput"
                                    name="demandeur"
                                    value={rowData.bd && rowData.bd.length > 0 ? rowData.bd[0].demandeur : ''}
                                    onChange={handleInputChange}
                                    placeholder='Comite des oeuvres sociales'
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className='partie3'>
                    <div className='partieproduit'>
                        <div>
                            <MdOutlineProductionQuantityLimits size='2rem' />
                        </div>
                        <h3 className='lesproduits' >Les produits</h3>
                    </div>
                    <div className="cmpt">
                        <div style={{ height: 300, width: '100%' }}>
                            {rowData.bd && rowData.bd.length > 0 && (
                                <DataGrid
                                    sx={{
                                        '.MuiDataGrid-columnSeparator': { display: 'none' },
                                        '&.MuiDataGrid-root': { border: 'none' },
                                    }}
                                    slots={{ toolbar: GridToolbar }}
                                    className='grid '
                                    style={{ height: "66vh" }}
                                    rows={rowData.bci || rowData.bd }
                                    columns={columns}
                                    rowHeight={70}
                                    autoPageSize
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className='partiebouton'>
                    <div className='btngroup'>
                        <button className='annuler' onClick={() => history.push("/Listbd")}>annuler</button>
                        <button className='confirmer' onClick={() => history.push("/Listbd")}>confirmer</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Editbd;
