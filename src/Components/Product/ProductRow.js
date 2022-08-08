import React from 'react'

function ProductRow({title, brand, ram, rom, tags, price}) {
  return (
    <tr className='ProductRow'>
        <td>
            <img src="" alt="" />
            <span>
                <h2>{title}</h2>
                {brand}
            </span>
        </td>
        <td>{ram}/{rom}</td>
        <td>{tags}</td>
        <td>TK {price}</td>
    </tr>
  )
}

export default ProductRow