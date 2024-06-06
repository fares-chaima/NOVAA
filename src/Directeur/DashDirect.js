import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import * as React from 'react';
import "../css/DashDirect.css";
import SideBarRdsDirect from './SideBarRdsDirect';
const DashDirect = () => {
    //le nombre de produits consommees
    const QuantPrd = [5, 25, 15, 40, 12,35,50,10,14,5,40,35,55];
    //les donnees de consomation de produit par chaque structure
    const dataset = [
        {
          quant: 75    ,
         
          produit: 'Struct1',
        },
        {
            quant: 100 ,
          
          produit: 'Struct2',
        },
        {
            quant: 15,
         
          produit: 'Struct3',
        },
        {
            quant: 45,
         
          produit: 'Struct4',
        },
        {
            quant: 30,
         
          produit: 'Struct5',
        },
        {
            quant: 90,
         
          produit: 'Struct6',
        },
        {
            quant: 15,
         
          produit: 'Struct7',
        },
        
        
      ];
      
      //les donnees de BCI recu
      const BCI =[
        { id: 0, value: 10, label: 'traité' },
        { id: 1, value: 15, label: 'en cours de traitement' },
        
      ];
      
    return ( 
        <div className="comptes">    
        <SideBarRdsDirect />
<div className="cmpt">   

<div className="top">
    <div className="d1">
        <ListAltOutlinedIcon  fontSize='large'/>
        <div className="txt">
            <span>50</span>
            <p>BCI recu</p>
        </div>
    </div>
    <div className="d1">
          <Inventory2OutlinedIcon fontSize='large'/> 
    <div className="txt">
        <span>500</span>
        <p>Produit en stock</p>
    </div>
    </div>
    <div className="d1">
          <InventoryOutlinedIcon fontSize='large'/> 
    <div className="txt">
        <span>20</span>
        <p>BCI traité</p>
    </div>
    </div>
</div>
<div className="btmm">
<div className="lft">
        <div className="chrt1">
        <div className="ttl">
                <p className='chrtp'>Statistiques</p>
                    <span className='chrtT'>la consommation des structures</span>
                </div>
                <hr />
                <div className="fltr2">
                        <select>
                            <option value="sd">structure1</option>
                            
                        </select>
                    </div>

                    <LineChart

                
      xAxis={[{  scaleType: 'point', data: [ '','JAN', 'FEB', 'MAR', 'APR', 'MAY','JUN', 'JUL', 'AUG','SEP', 'OCT','NOV','DEC'] }]}
      series={[
        {
            //les donneed de y
            curve: "linear", data: QuantPrd,color: ['#04F2E7']
        },
      ]}
      width={775}
      height={310}
      
      grid={{  horizontal: true }}
    />
        </div>

        <div className="chrt2">
        <div className="ttl">
                <p className='chrtp'>Statistiques</p>
                    <span className='chrtT'>Les états des BCI</span>
                </div>
                <hr />
                <div className="PieChart">
                <PieChart 
               
      series={[
        {
          data: BCI, colorMap:{colors:['#041F5A', '#01C7BE']} , innerRadius: 70,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      colors= {['#01C7BE ','#041F5A']}
      width={700}
      height={190}
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
<div className="rgt">
          <div className="ttl">
                <p className='chrtp'>Statistiques</p>
                    <span className='chrtT'>La consommation des produits</span>
                </div>
                <hr />
  <div className="fltr1">
                        <select>
                            <option value="sd">produit1</option>
                            
                        </select>
                    </div>
                <div className="chrt">

                <BarChart
                sx={{padding:'46px'}}
                className='tmprs'
                
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'produit' ,categoryGapRatio: '0.6', colorMap:{colors: ['#041F5A', '#0F868D', '#2DB4BC','#01C7BE','#04F2E7','#C5FBF8','#D4E3E3'], type: 'ordinal', 
        
     
      }}]}
      series={[{ dataKey: 'quant'  }]}
      layout="horizontal"
     
      width={350}
      height={650}

    >
        
 </BarChart>
                </div>
</div>

</div>
 </div>
        
</div>



     
     );
}
 
export default DashDirect;