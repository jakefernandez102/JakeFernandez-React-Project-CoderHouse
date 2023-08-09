import { Link } from "react-router-dom";
import { formatMoney } from "../helpers/MoneyFormat";


const ItemList = ({product}) => {
    const {id,name, price, quantity, image} = product
  return (
    <div 
      className='card bg-white shadow-lg w-full '
    >
      <Link to={`/item/${id}`}>
        <img 
          src={image} 
          alt={`${name} image`} 
          width={200} 
          height={200} 
          className='cursor-pointer'
          
          />
      </Link>

      <div className='p-5'>
        <h3 className='uppercase font-black'>{name}</h3>
        <p>{formatMoney(price)}</p>
      </div>

    </div>
  )
}

export default ItemList