import './ProductRow.css';

function ProductRow({title, brand, ram, rom, tags, price, imgesrc}) {
  return (
    <tr className='ProductRow'>
        <td><img src={imgesrc} alt={title} /></td>
        <td>
            <h2>{title}</h2>
            <span>
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