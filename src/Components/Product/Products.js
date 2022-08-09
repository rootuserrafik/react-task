import React from 'react';
import ProductRow from './ProductRow';
import './Products.css';
import Data from './../../UserData.json';

function Products() {
  return (
    <div className='Product__View'>
      <div className="Seaction__Header">
          <h3>All Products</h3>
          <span className="Product__Filter">
            Sort by: 
            <select className="Filter__Short" name="" id="">
              <option value="">All Products</option>
              <option value="">Best Value</option>
              <option value="">Best Performance</option>
              <option value="">Best Camera</option>
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