
import { useState } from 'react';
import ItemList from './ItemList';

const PRODUCTS = [
    {
        id:1,
        name:'Nike SB',
        price:50000,
        quantity:10,
        image:'img/nike-sb.jpeg'
    },
    {
        id:2,
        name:'Nike SB',
        price:60000,
        quantity:11,
        image:'img/nike-sb.jpeg'
    },
    {
        id:3,
        name:'Nike SB',
        price:70000,
        quantity:14,
        image:'img/nike-sb.jpeg'
    },
    {
        id:4,
        name:'Nike SB',
        price:80000,
        quantity:1,
        image:'img/nike-sb.jpeg'
    },
    {
        id:5,
        name:'Nike SB',
        price:90000,
        quantity:21,
        image:'img/nike-sb.jpeg'
    },
    {
        id:6,
        name:'Nike SB',
        price:100000,
        quantity:21,
        image:'img/nike-sb.jpeg'
    },
    {
        id:7,
        name:'Nike SB',
        price:110000,
        quantity:19,
        image:'img/nike-sb.jpeg'
    },
    {
        id:8,
        name:'Nike SB',
        price:120000,
        quantity:31,
        image:'img/nike-sb.jpeg'
    },
    {
        id:9,
        name:'Nike SB',
        price:130000,
        quantity:11,
        image:'img/nike-sb.jpeg'
    },
    {
        id:10,
        name:'Nike SB',
        price:140000,
        quantity:51,
        image:'img/nike-sb.jpeg'
    },
]

const ItemListContainer = () => {

  const [promise, setPromise] = useState(true)

  // const listToLoad = new Promise((resolve)=>{

    

  //   setTimeout(() => {
  //     resolve('Lista Cargada')
  //     setPromise(true)
  //   },500);
    

  // })
  // listToLoad.then(msg => alert(msg))
  //           .catch(err => alert(err))
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 bg-slate-100'>
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