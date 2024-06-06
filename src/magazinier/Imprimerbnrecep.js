import React from 'react'
import './Imprimerbnrecep.css'
function Imprimerbnrecep() {
  return (
  

    <div class="container">
    <div class="header">
        <h1>BON DE RECEPTION</h1>
        <p>N° 17 Date 26-03-2024</p>
      
        <p style={{ marginLeft:'-475px', fontSize:'17px' }}>Fournisseur: Sarl PC STORE</p>
       <div style={{ display:'flex', fontSize:'15px', justifyContent:'space-around'}}>  
       <p style={{ fontSize:'17px'}}>N° du Bon de commande : 32</p>
        <p style={{  fontSize:'17px'}}>Date du Bon de Commande : 12-02-2024</p></div>
       </div>
    <div class="items">
        <table>
            <tr>
                <th>N°</th>
                <th>Désignation</th>
                <th>Quantité</th>
            </tr>
            <tr>
                <td>1</td>
                <td>PC de bureauRAM 16 GB DDR4-2400 SDRAM</td>
                <td>1</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Laptop I7 9eme Gen, 16GO de ram, SSD 256 GO</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Onduleur 1 KVA</td>
                <td>8</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Switch 24 ports SG112-24-EU</td>
                <td>1</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Switch niveau 2 2960X 24 ports 1G</td>
                <td>4</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Disque dur SAS 2.5 , 1To , 7200 RPM pour serveur DL380 Gen9</td>
                <td>2</td>
            </tr>
            <tr>
                <td>7</td>
                <td>Carte Graphique GEFORCE RTX 3050</td>
                <td>1</td>
            </tr>
        </table>
    </div>
    <p style={{fontWeight:'600',marginLeft:'600px',marginTop:'50px'}}>Le Magazinier</p>
</div>
  )
}

export default Imprimerbnrecep
