import React from 'react'
import ProductRow from './ProductRow'
import Data from './../../../UserData.json'

function Products() {
  return (
    <table className='Products'>
      {
        Data.map(()=>(
          <ProductRow
            title = {Data.title}
            brand = {Data.brand}
            ram = {Data.ram}
            rom = {Data.rom}
            tags = {Data.tags}
            price = {Data.price}
          />
        ))
      }
    </table>
  )
}

export default Products