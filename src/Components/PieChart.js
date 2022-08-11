import React, { useState } from 'react';
import './PieChart.css'
import Chart from 'react-apexcharts';
import Data from './../data.json';

function PieChart() {
    const LabelName = Data.slice(0, 5).map (data => (data.seller_name));
    const uniqueLabel = [...new Set (LabelName)];
    
    function testFun(value){
        const geArrLen = value.length
        console.log(geArrLen);
        
    }
    uniqueLabel.forEach(testFun);
    
    const series = [45,54,74];
    const [options, setOptions] = useState({
        title:{ 
            text:"Sources",
            style: {fontSize: 30}
        },
        noData: {
            text: "Empaty data"
        },
        labels: uniqueLabel
    })
    
    return (
        <div className='PieChart'>
        <Chart
            type= 'pie'
            width= {500}
            height= {400}
            series= {series}
            options= {options}
        />
    </div>
  )
}

export default PieChart