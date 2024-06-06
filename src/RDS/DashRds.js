import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import React, { useEffect, useState } from 'react';

import "../css/DashRds.css";
import SideBarRds from "./SideBarRds";

const DashRds = () => {
  const [bciCount, setBciCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [processedBciCount, setProcessedBciCount] = useState(0);
  const [bciStateFourCount, setBciStateFourCount] = useState(0);
  const [bciStateNotFourCount, setBciStateNotFourCount] = useState(0);
  useEffect(() => {
    // Fetch data from API endpoints
    fetch('http://localhost:3001/api/bci/count')
        .then(response => response.json())
        .then(data => setBciCount(data.count))
        .catch(error => console.error('Error fetching BCI count:', error));

    fetch('http://localhost:3001/api/products/count')
        .then(response => response.json())
        .then(data => setProductCount(data.count))
        .catch(error => console.error('Error fetching product count:', error));

    fetch('http://localhost:3001/api/processed-bci/count')
        .then(response => response.json())
        .then(data => setProcessedBciCount(data.count))
        .catch(error => console.error('Error fetching processed BCI count:', error));

    fetch('http://localhost:3001/api/bci/state-four/count')
        .then(response => response.json())
        .then(data => setBciStateFourCount(data.count))
        .catch(error => console.error('Error fetching BCI count with state four:', error));

    fetch('/api/bci/state-not-four/count')
        .then(response => response.json())
        .then(data => setBciStateNotFourCount(data.count))
        .catch(error => console.error('Error fetching BCI count with state not four:', error));
}, []);
    //le nombre de produits consommees
    const QuantPrd = [5, 25, 15, 40, 12];
    //les donne de temps de consomation
    const dataset = [
        {
          prcntg: 75    ,
         
          period: '1j',
        },
        {
            prcntg: 10 ,
          
          period: '2-3j',
        },
        {
            prcntg: 15,
         
          period: '+3j',
        },
        
      ];
      ///les donnees de prodiuts le plus consommees
      const dataset1 = [
        {
          quant: 150    ,
         
          produit: 'produit1',
        },
        {
            quant: 100 ,
          
            produit: 'produit2',
        },
        {
            quant: 50,
         
            produit: 'produit3',
        },
        {
            quant: 30,
         
            produit: 'produit4',
        },
      ];
      //les donnees de BCI recu
      const BCI =[
        { id: 0, value:processedBciCount, label: 'traité' },
        { id: 1, value: bciCount, label: 'en cours de traitement' },
        
      ];
      
      
    return ( 
       
        
        <div className="comptes">    
                <SideBarRds/>
        <div className="cmpt">   
        
        <div className="top">
            <div className="d1">
                <ListAltOutlinedIcon  fontSize='large'/>
                <div className="txt">
                <span>{bciCount}</span>
                    <p>BCI recu</p>
                </div>
            </div>
            <div className="d1">
                  <Inventory2OutlinedIcon fontSize='large'/> 
            <div className="txt">
            <span>{productCount}</span>
                <p>Produit en stock</p>
            </div>
            </div>
            <div className="d1">
                  <InventoryOutlinedIcon fontSize='large'/> 
            <div className="txt">
            <span>{processedBciCount}</span>
                <p>BCI traité</p>
            </div>
            </div>
        </div>
        <div className="middle">
            <div className="chart1">
                <div className="ttl">
                    <div className="">
                    <p className='chrtp'>Statistiques</p>
                    <span className='chrtT'>La consommation des produits</span>
                    </div>

<div className="fltr">
                    <div className="fltr3">
                        <select name="" id=""><option value="pr">Produit1</option></select>
                    </div>
                    <div className="fltr3">
                        <select name="" id=""><option value="pr">Janv</option></select>
                    </div>
                    </div>
                </div>
                <hr />
                
                <div className="chrt">
                <LineChart

                className='linechrt'
      xAxis={[{  scaleType: 'point', data: [ '','Sem1', 'Sem2', 'Sem3', 'Sem4'] }]}
      series={[
        {
            //les donneed de y
            curve: "linear", data: QuantPrd,color: ['#04F2E7']
        },
      ]}
      width={700}
      height={310}
      
      grid={{  horizontal: true }}
    />
                </div>
            </div>
            <div className="chart2">
                
                <div className="ttl">
                <p className='chrtp'>Statistiques</p>
                    <span className='chrtT'>Le temps de réponse</span>
                </div>
                <hr />
                <div className="chrt">
                <BarChart
                className='tmprs'
                sx={{ rx: 15 }}
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'period' ,categoryGapRatio: '0.6', colorMap:{colors: ['#041F5A', '#01C7BE', '#04F2E7'], type: 'ordinal', 
        
     
      }}]}
      series={[{ dataKey: 'prcntg'  }]}
      layout="horizontal"
     
      width={300}
      height={300}

    >
        
 </BarChart>
                </div>
                <p className='prcn'>%</p>
                
            </div>
        </div>
        <div className="bottom">
            <div className="chart3">
            <div className="ttl">
                <p className='chrtp'>Statistiques</p>
                    <span className='chrtT'>Les produits les plus Consommés</span>
                </div>
                <hr />
                <div className="chrt">
                <BarChart
                sx={{padding:'16px'}}
                className='tmprs'
                
      dataset={dataset1}
      yAxis={[{ scaleType: 'band', dataKey: 'produit' ,categoryGapRatio: '0.6', colorMap:{colors: ['#041F5A', '#01C7BE', '#04F2E7', '#C5FBF8'], type: 'ordinal', 
        
     
      }}]}
      series={[{ dataKey: 'quant'  }]}
      layout="horizontal"
     
      width={625}
      height={300}

    >
        
 </BarChart>
 
                </div>
                
            </div>
            <div className="chart4">
            <div className="ttl">
                <p className='chrtp'>Statistiques</p>
                    <span className='chrtT'>Les états des BCI</span>
                </div>
                <hr />
<div className="PieChart">
                <PieChart
                sx={{ "& .MuiChartsLegend-series text": { borderRadius: "100%" } }}
      series={[
        {
          data: BCI, colorMap:{colors:['#041F5A', '#01C7BE']} , innerRadius: 70,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' }
        },
      ]}
      colors= {['#01C7BE ','#041F5A']}
      width={550}
      height={200}
      slotProps={{
        legend: {
          direction: 'column',
          position: { vertical: 'top', horizontal: 'right' },
          padding: -5,
          labelStyle: {
            fontSize: 14,
            fill: '#615E83',
            fontWeight: '700',
          
          },
        },
        
      }}
    />
</div>
            </div>
        </div>
           
         </div>
                
        </div>
        
        
        
             
        
     );
}
 
export default DashRds;