import React from 'react'
import Chart from 'react-apexcharts';

function BarChart() {
  return (
    <div>
        <Chart
            type='bar'
            width={600}
            height={400}
            series={[
                {
                    name:"Value",
                    data:[544, 445, 244, 505]
                }
            ]}
            options={{
                title:{ 
                    text:"Conditions",
                    style: {fontSize: 30}
                },
                style:{fontSize:30},
                colors: "#0095A0",
                xaxis:{
                    categories: ["Official", "Unofficial", "Without warranty", "Used"]
                },
                yaxis:{
                    labels:{
                        formatter:(val)=>{return `$${val}`}
                    }
                },
                dataLabels:{
                    formatter:(val)=>{return `$${val}`}
                }
            }}

            
        />
    </div>
  )
}

export default BarChart