
const Item = ({product}) => {

  console.log(product);
  const {name, price, quantity, image} = product
  return (
    <div 
      className='card bg-white shadow-lg w-full p-14'
    >

      <p 
        className='px-2 py-3 border-b text-center uppercase font-black'
      >{name}</p>
      <div className="flex">
        <div 
          className='flex gap-5 px-2 py-3'
          >
          <p className='font-bold'>Quantity</p>
          <p>{quantity}</p>
        </div>
        <div
          className='flex gap-5 px-2 py-3'
          >
          <p className='font-bold'>Price:</p>
          <p>{price}</p>
        </div>
      </div>

      <img src={image} alt={`${name} image`} />
    
    </div>
  )
}

export default Item