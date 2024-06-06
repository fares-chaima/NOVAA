import ArticleIcon from '@mui/icons-material/Article';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import React from 'react';
import '../asa/Dashasa.css';
import check from "../consomateur/imagesconso/check.svg";
import './Dashconso.css';
function Dashconso() {

    const data = [
        { id: 0, value: 10, label: 'en cours', color: '#01C7BE'},
        { id: 1, value: 15, label: 'traité', color:'#041F5A' },
        
      ];
      
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
     
        <button className="dashboard-button" style={{ marginRight: '140px'}}>
          <ArticleIcon style={{paddingTop:'20px'}} />
        
          <div>   <span>20</span>
          <h2 style={{ color:'#615E83' , fontSize:'16px'}}>Commande interne</h2>    </div>
        </button>
        <button className="dashboard-button" style={{ marginRight: '160px'}}>
          <  AssignmentReturnIcon style={{paddingTop:'20px'}} />
           <div >  
            <span >10</span>
            <h2 style={{ color:'#615E83', fontSize:'16px'}}>Produit à retourner</h2>  
           </div>
        </button>
        <button className="dashboard-button" >
          <img src={check} alt="Icon 1" style={{width:'25px', paddingTop:'20px'}} />
          <div>   
            <span>10</span>
          <h2 style={{ color:'#615E83', fontSize:'16px'}}>Produits consommés</h2>
            </div>
        </button>
      
      </div>
    </div>
    
         <div className="section2">
         <div style={{display:'flex'}}> 
      <h2>Les produits consommés</h2>
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
      <p style={{ fontSize:'20px', Color:'black' ,paddingTop:'10px',fontWeight:'700'}}>Les produits les plus consommés</p>
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
      <p style={{ fontSize:'20px', Color:'black' ,paddingTop:'10px',fontWeight:'700', paddingBottom:'20px'}}>Les états des BCI</p>
      <div>
        
        <div className='right'>
        <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          innerRadius: 74,
          outerRadius: 97,
          paddingAngle: -8,
          cornerRadius: -1,
          startAngle: -181,
          endAngle: 180,
          cx: 150,
          cy: 99,
        },
      ]}
      height={200}
    />
          </div>
        </div>
    
    </div>

        
    </div>
    
    
    
    
        
        
    </div>
  )
}

export default Dashconso
