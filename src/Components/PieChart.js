import React, { useState } from 'react';
import './PieChart.css'
import Chart from 'react-apexcharts';
import Data from './../UserData.json';

function PieChart() {
    const LabelName = Data.map (data => ([data.brand]))
    const [options, setOptions] = useState({
        title: {
            text: "Sources"
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
            height= {500}
            series= {[54,54,54]}
            options= {options}
        />
        {
            Data.map ( data => (
                <li key={data.id}>{data.brand}</li>
            ) )
        }
    </div>
  )
}

export default PieChart