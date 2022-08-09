import React from 'react'
import PieChart from '../Components/PieChart'
import Products from '../Components/Product/Products'
import './Dashboard.css';

function Dashboard() {
  return (
    <div className='Dashboard'>
      <div className="Chart">
        <PieChart />
      </div>
      <div className="Product__List">
        <Products />
      </div>
    </div>
  )
}

export default Dashboard