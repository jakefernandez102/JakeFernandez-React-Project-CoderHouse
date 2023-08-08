
import { useState } from 'react';
import ItemList from './ItemList';

const PRODUCTS = [
    {
        id:1,
        name:'Nike SB',
        price:'$500',
        quantity:1,
        image:'img/nike-sb.jpeg'
    },
    {
        id:2,
        name:'Nike SB',
        price:'$500',
        quantity:1,
        image:'img/nike-sb.jpeg'
    },
    {
        id:3,
        name:'Nike SB',
        price:'$500',
        quantity:1,
        image:'img/nike-sb.jpeg'
    },
    {
        id:4,
        name:'Nike SB',
        price:'$500',
        quantity:1,
        image:'img/nike-sb.jpeg'
    },
    {
        id:5,
        name:'Nike SB',
        price:'$500',
        quantity:1,
        image:'img/nike-sb.jpeg'
    },
    {
        id:6,
        name:'Nike SB',
        price:'$500',
        quantity:1,
        image:'img/nike-sb.jpeg'
    },
    {
        id:7,
        name:'Nike SB',
        price:'$500',
        quantity:1,
        image:'img/nike-sb.jpeg'
    },
    {
        id:8,
        name:'Nike SB',
        price:'$500',
        quantity:1,
        image:'img/nike-sb.jpeg'
    },
    {
        id:9,
        name:'Nike SB',
        price:'$500',
        quantity:1,
        image:'img/nike-sb.jpeg'
    },
    {
        id:10,
        name:'Nike SB',
        price:'$500',
        quantity:1,
        image:'img/nike-sb.jpeg'
    },
]

const ItemListContainer = () => {

  const [promise, setPromise] = useState(false)

  const listToLoad = new Promise((resolve)=>{

    

    setTimeout(() => {
      resolve('Lista Cargada')
      setPromise(true)
    }, 5000);
    

  })
  listToLoad.then(msg => alert(msg))
            .catch(err => alert(err))
  return (
    <div className='grid grid-cols-3 gap-5 p-5 bg-slate-100'>
      {
      PRODUCTS.map(product => (

        promise && <ItemList
          key={product.id}
          product={product}
          />
      ))}
    </div>
    
  )
}

export default ItemListContainer