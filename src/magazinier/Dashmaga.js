import React from 'react';
import '../asa/Dashasa.css';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ArticleIcon from '@mui/icons-material/Article';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import check from "../consomateur/imagesconso/check.svg";
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import './Dashmaga.css'
import { PieChart } from '@mui/x-charts/PieChart';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import vector from './imagesmaga/Vector.svg'
function Dashmaga() {
    
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
     
        <button className="dashboard-button" style={{ marginRight: '180px'}}>
          <ListAltIcon style={{paddingTop:'20px'}} />
        
          <div>   <span>20</span>
          <h2 style={{ color:'#615E83' , fontSize:'16px'}}>BCi recu</h2>    </div>
        </button>
        <button className="dashboard-button" style={{ marginRight: '200px'}} >
          < ReceiptLongIcon style={{paddingTop:'20px'}} />
           <div >  
            <span >10</span>
            <h2 style={{ color:'#615E83', fontSize:'16px'}}>Bon de sortie</h2>  
           </div>
        </button>
        <button className="dashboard-button" >
          <img src={vector} alt="Icon 1" style={{width:'20px', paddingTop:'20px'}} />
          <div>   
            <span>10</span>
          <h2 style={{ color:'#615E83', fontSize:'16px'}}>Bon de decharge</h2>
            </div>
        </button>
      
      </div>
    </div>





    <div className='diagramme'>
    <div className='droite'>
                    <div className='haut'>
                        <div style={{display:'flex' ,justifyContent:'space-between'}}>
                        <div> 
                            <h2 style={{ fontSize:'16px', Color:'#9291A5' ,paddingTop:'20px',paddingLeft:'20px'}}>Statistiques</h2>
                            <p style={{ fontSize:'20px', Color:'black' ,paddingTop:'10px',fontWeight:'700', paddingLeft:'20px'}}>Demographique</p>
                            </div>
                        <div>
                          <div style={{ paddingTop:'20px' , marginRight:'20px'}}>
                            <div style={{display:'flex'}}>
                           <div style={{backgroundColor:'#041F5A' ,paddingTop:'20px',marginTop:'10px' , marginRight:'10px',width:'20px',height:'0px', borderRadius:'360px '}}></div> <p style={{ fontSize:'13px' }}>quant logique</p>
                            </div>

                            <div style={{display:'flex'}}>
                            <div  style={{backgroundColor:'#01C7BE' ,marginTop:'10px' , marginRight:'10px',paddingTop:'20px',width:'20px',height:'0px',borderRadius:'90px '}}></div> <p style={{ fontSize:'13px' }}>quant physique</p>
                            
                            </div>

                          </div>

                        </div>








                        </div>
                    <BarChart
      xAxis={[{ scaleType: 'band', data: ['2021', '2022', '2023'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }]}
      width={500}
      height={300}
    />

                        
                </div>
                <div className='bas'>
                <div className='bar'>
        <h2 style={{ fontSize:'16px', Color:'#9291A5' ,paddingTop:'20px'}}>Statistiques</h2>
      <p style={{ fontSize:'20px', Color:'black' ,paddingTop:'10px',fontWeight:'700'}}>Les produits les plus demandés</p>
          <BarChart
           height={300}
          
           width={200}
            borderRadius={14}
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'product', barGapRatio: 1.5,  categoryGapRatio: 0.6, }]}
      series={[{ dataKey: 'demand', label: 'Product Demand', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
    
        
        </div>
            
                    

                        
                    </div>


        
    </div>



<div className='gauche'>
    <div> 
        <h2 style={{ fontSize:'16px', Color:'#9291A5' ,paddingTop:'20px',paddingLeft:'20px'}}>Statistiques</h2>
      <p style={{ fontSize:'20px', Color:'black' ,paddingTop:'10px',fontWeight:'700',paddingLeft:'20px'}}>Total viewers</p>
      </div>
    <div className='border'>  <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }} >
      
      <Gauge width={300} height={300} value={60} startAngle={-90} endAngle={90}    innerRadius="72%"
  outerRadius="96%" />
    </Stack></div>
     <div>
     <div>
     <div>
     <div  style={{display:'flex'}} className='border'> 
     <div style={{display:'flex' ,marginLeft:'90px'}}>
                           <div style={{backgroundColor:'#01C7BE' ,paddingTop:'20px',marginTop:'10px' , marginRight:'10px',width:'20px',height:'0px', borderRadius:'360px '}}></div> <p style={{ fontSize:'13px' }}>Quant Livrée</p><p  style={{display:'flex' ,marginLeft:'150px', fontWeight:'400'}}>513</p>
     </div>
      
      </div>
      



     </div>
     

     </div>
     <div  style={{marginLeft:'30px'}}>
     <h2 style={{ fontSize:'16px', Color:'#9291A5' ,paddingTop:'80px'}}>Statistiques</h2>
      <p style={{ fontSize:'20px', Color:'black' ,paddingTop:'10px',fontWeight:'700'}}>Nombre de BR</p>
     </div>




     </div>
    <div className='border' >
    <div style={{display:'flex' ,marginLeft:'90px'}}>
                           <p style={{ fontSize:'22px' , fontWeight:'700', color:'#01C7BE'}}>05</p><p  style={{display:'flex' ,marginLeft:'150px', fontSize:'13px',color:'#615E83' }}>Bon de reception</p>
     </div>

    </div>


        
</div>

    </div>



      
    </div>
  )
}

export default Dashmaga
