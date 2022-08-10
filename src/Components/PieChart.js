import React, { useState } from 'react';
import './PieChart.css'
import Chart from 'react-apexcharts';
import Data from './../UserData.json';

function PieChart() {
    const LabelName = Data.map (data => ([data.brand]))
    const [options, setOptions] = useState({
        title:{ 
            text:"Sources",
            style: {fontSize: 30}
        },
        noData: {
            text: "Empaty data"
        },
        labels: LabelName
    })
    
    
    return (
        <div className='PieChart'>
        <Chart
            type= 'pie'
            width= {500}
            height= {400}
            series= {[54,54,54]}
            options= {options}
        />
    </div>
  )
}

export default PieChart