import ArticleIcon from '@mui/icons-material/Article';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import React from 'react';
import Box from "../consomateur/imagesconso/Box.svg";
import './Dashasa.css';
function Dashasa() {

    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'sem 1',
  'sem 2',
  'sem 3',
  'sem 4',
  'sem 5',
  'sem 6',
  'sem 7',
];

  

const chartSetting = {
  xAxis: [
    {
      label: 'Demand (%)',
    },
  ],
  width: 500,
  height: 400,
};
const dataset = [
  {
    product: 'Produit 1',
    demand: 71,
  },
  {
    product: 'Produit 2',
    demand: 50,
    fontSize:'14 px',
  },
  {
    product: 'Produit 3',
    demand: 45,
  },
  {
    product: 'Produit 4',
    demand: 30,
  },
]
  const valueFormatter = (value) => `${value}mm`;

  
  
  return (
    
    <div className="dashasa">

    <div className="section1">
      <div className="button-container">
        <button className="dashboard-button">
          <LibraryBooksIcon style={{paddingTop:'20px'}} />
           <div >  
            <span >10</span>
            <h2 style={{ color:'#615E83'}}>Chapitres</h2>  
           </div>
        </button>
        <button className="dashboard-button">
          <ArticleIcon style={{paddingTop:'20px'}} />
        
          <div>   <span>20</span>
          <h2 style={{ color:'#615E83'}}>Articles</h2>    </div>
        </button>
        <button className="dashboard-button">
          <img src={Box} alt="Icon 1" style={{width:'35px', paddingTop:'20px'}} />
          <div>   
            <span>10</span>
          <h2 style={{ color:'#615E83'}}>Produit en stock</h2>
            </div>
        </button>
        <button className="dashboard-button">
          <  ListAltIcon style={{paddingTop:'20px'}}/>
           <div> 
            <span>20</span>
          <h2 style={{ color:'#615E83'}}>BCE etablie</h2> 
            </div>
        </button>
        {/* Ajoutez d'autres boutons de la même manière */}
      </div>
    </div>
    
         <div className="section2">
         <div style={{display:'flex'}}> 
      <h2>Les produits demandés</h2>
    <div>
    <select id="mois" name="mois" className='mois'>
        <option value="01" selected>Janvier</option>
        <option value="02">Février</option>
        <option value="03">Mars</option>
        <option value="04">Avril</option>
        <option value="05">Mai</option>
        <option value="06">Juin</option>
        <option value="07">Juillet</option>
        <option value="08">Août</option>
        <option value="09">Septembre</option>
        <option value="10">Octobre</option>
        <option value="11">Novembre</option>
        <option value="12">Décembre</option>
    </select>
    </div>
    </div>
    <LineChart
    
          width={1000}
          height={500}
          series={[
            { data: pData, label: 'pv', curve: "linear",  },
            
           
          ]}
          grid={{horizontal: true }}
          xAxis={[{ scaleType: 'point', data: xLabels }]}
        />
          </div>

        

          <div className="section3">
        <div className='bar'>
        <h2 style={{ fontSize:'16px', Color:'#9291A5' ,paddingTop:'20px'}}>Statistiques</h2>
      <p style={{ fontSize:'20px', Color:'black' ,paddingTop:'10px',fontWeight:'700'}}>Les produits les plus demandés</p>
          <BarChart
           height={400}
          
           width={200}
            borderRadius={14}
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'product', barGapRatio: 1.5,  categoryGapRatio: 0.6, }]}
      series={[{ dataKey: 'demand', label: 'Product Demand', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
    
        
        </div>
            
            
          
          
     
    
       
        <div className="section">
       
      <h2 style={{ fontSize:'16px', Color:'#9291A5' ,paddingTop:'20px'}}>Statistiques</h2>
      <p style={{ fontSize:'20px', Color:'black' ,paddingTop:'10px',fontWeight:'700', paddingBottom:'20px'}}>Les derniers fournisseurs</p>
      <div>
        
        <div className='right'>
          <div className='ligne'>
            <div>EURL YAPAP</div>
            <div>28 Rue Ghrab Mohamed Mascara</div>
            <div>048-74-17-17</div>
          </div>
          <div className='ligne'>
            <div>EURL YAPAP</div>
            <div>28 Rue Ghrab Mohamed Mascara</div>
            <div>048-74-17-17</div>
          </div>
          <div className='ligne'>
            <div>EURL YAPAP</div>
            <div>28 Rue Ghrab Mohamed Mascara</div>
            <div>048-74-17-17</div>
          </div>
          <div className='ligne'>
            <div>EURL YAPAP</div>
            <div>28 Rue Ghrab Mohamed Mascara</div>
            <div>048-74-17-17</div>
          </div>
        </div>
    
    </div>

        </div>
    </div>
    
    
    
    
        
        
    </div>
    
  );
}

export default Dashasa
