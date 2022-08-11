import React, { useState } from 'react';
import ProductRow from './ProductRow';
import './Products.css';
import Data from './../../data.json';

function Products() {
  const [selectedOption, setSelectedOption] = useState([]);  
  const phoneTags = ["Best Camara", "Best Performance", "Best value"];  
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
          Data.slice(0, 20).map( data =>(
            <ProductRow
              key = {data._id}
              title = {data.phone_title}
              link = {data.phone_link}
              brand = {data.brand}
              ram = {data.ram}
              rom = {data.storage}
              tags = {phoneTags}
              price = {data.phone_price}
              imgesrc = {data.phone_images[0]}
            />
          ))
        }
      </table>
    </div>
  )
}

export default Products