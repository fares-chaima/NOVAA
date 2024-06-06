import React, { useEffect, useState } from 'react';
import { FaList } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { MdProductionQuantityLimits } from "react-icons/md";
import './Bnreception.css';
function Bnreception() {
  const [data, setData] = useState([]);
  const [fournisseur, setFournisseur] = useState();
  const [numero, setNumero] = useState(null);
  const [quantite, setQuantite] = useState();
  useEffect(() => {
 
    const fetchData = () => {
      fetch('http://localhost:3001/fares')
          .then(response => {
              if (!response.ok) {
                  throw new Error('Failed to fetch data from /fares');
              }
              return response.json();
          })
          .then(data => {
              // Handle the received data here
              console.log('Received data from /fares', data);
              // Update state or perform any other actions with the received data
              setFournisseur(data.fournisseur);
          })
          .catch(error => {
              console.error('Error fetching data from /fares', error);
              // Handle the error appropriately
          });
  };
  
  // Call fetchData to fetch the fournisseur
  fetchData();
  

 
}, []); // Ensure this effect runs only once on component mount


  useEffect(() => {
      // Call fetchData with the desired ID
     
 
  
  
  
      fetch('http://localhost:3001/lire-table')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error('Error fetching data:', error));
  }, []);
  const handleQuantiteChange = (event) => {
    setQuantite(event.target.value);
};
const handleFormSubmit = (event, productId) => {
  event.preventDefault();




  fetch('http://localhost:3001/update-quantite', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantite,productId }),
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Erreur lors de la mise à jour de la quantité');
      }
      return response.json();
  })
  .then(data => {
      console.log('Quantité mise à jour avec succès:', data);
  })
  .catch(error => {
      console.error('Erreur lors de la mise à jour de la quantité:', error);
  });
};
  return (
    <div>
       <div class="container">
        <div className='g1'>
        <div className='g11'>
        <FaList size='2rem'/>
            
   
        </div>
        <h1 className='g111'>Bon de Réception</h1>



        </div>
      
        <div class="supplier-input">

        <div className='g2'>
            <div className='g22'>
            <FaPerson size='2rem'/>
            
             </div>
             <label className='supplier' for="supplier"> Le nom du fournisseur:</label>
   
        </div>
        <input 
    value={fournisseur || 'hi'} 
    onChange={(e) => setFournisseur(e.target.value)} 
    className='g222' 
    id="sup" 
    name="verification_responsable" 
/>
          
            
            
        </div>
      
        <div class="products">

        <div className='g3'>
            <div className='g33'>

                
       <MdProductionQuantityLimits size='2rem' />
            </div>

            <h2 className='g333' >Les produits reçus :</h2>

            
        </div>

        <table id="productTable">
  <thead>

    <tr>
      <th className='first-row'>N° produit</th>
      <th className='first-row'>Nom de produit</th>
      <th className='first-row'>Quantité demandée</th>
      <th className='first-row'>Quantité reçue</th>
      <th className='first-row'>Quantité livrée</th>
    </tr>
  </thead>
  <tbody>
                {data.map((item, index) => (
                    <tr key={index}  className="table-row">
                      
                        <td>{item.id}</td>
                        <td>{item.produit}</td>
                        <td>{item.quantite}</td>
                        <td>{item.accor}</td>
                        <td className='reduire' style={{ display: 'flex', gap: '5px' }}> 
                        <form onSubmit={(event) => handleFormSubmit(event, item.id)}>
                        <input name='quantite' onChange={handleQuantiteChange}  value={quantite}   className='reduireinp' type="number"  />
                     
                       <div>       <button type='submit' className='m' disabled={item.quantite === item.accor}>Confirmer</button>
                       </div> </form>
                        </td>

                    </tr> 
                    
                ) )}
            </tbody>
</table>




           
           
        </div>
    </div>















    </div>
  )
}

export default Bnreception
