import './ProductRow.css';
import ProductTag from './ProductTag';

function ProductRow({title, brand, ram, rom, tags, price, imgesrc, link}) {

  return (
    <tr className='ProductRow'>
        <td width={120}><img src={imgesrc} alt={title} /></td>
        <td>
            <h2><a href={link} target="_blank">{title}</a></h2>
            <span>
                {brand}
            </span>
        </td>
        <td>{ram}/{rom}</td>
        <td width={300}>
          <ul className='product__Tags'>
            {
              tags.map( (tagsIn, index) => (
                <ProductTag key={index} tagName = {tagsIn} />
              ))
            }
          </ul>
        </td>
        <td>TK {price}</td>
    </tr>
  )
}

export default ProductRow