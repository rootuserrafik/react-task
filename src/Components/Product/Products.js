import React, { useState } from 'react';
import ProductRow from './ProductRow';
import './Products.css';
import Data from './../../UserData.json';

function Products() {
  const [selectedOption, setSelectedOption] = useState([]);  
  return (
    <div className='Product__View'>
      <div className="Seaction__Header">
          <h3>All Products {selectedOption}</h3>
          <span className="Product__Filter">
            Sort by: 
            <select value={selectedOption} onChange={e=>setSelectedOption(e.target.value)} className="Filter__Short" name="" id="">
              <option>All Products</option>
              <option>Best Value</option>
              <option>Best Performance</option>
              <option>Best Camera</option>
            </select>
          </span>
      </div>
      <table className='Products'>
        <tr>
          <th>Model</th>
          <th></th>
          <th>Ram/Rom</th>
          <th>Tags</th>
          <th>Price</th>
        </tr>
        {
          Data.map( data =>(
            <ProductRow
              key = {data.id}
              title = {data.title}
              brand = {data.brand}
              ram = {data.ram}
              rom = {data.rom}
              tags = {data.tags}
              price = {data.price}
              imgesrc = {data.imges}
            />
          ))
        }
      </table>
    </div>
  )
}

export default Products