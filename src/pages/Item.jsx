import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatMoney } from '../helpers/MoneyFormat.js';

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

const Item = () => {

  const [item, setItem] =useState({})

  const param = useParams();
  
  useEffect(()=>{

     const selectedItem =  PRODUCTS.filter( item=> {
        
      return item.id === parseInt(param.id)
      })
     
    setItem(selectedItem[0])
  },[])
  const {name,price, quantity, image} = item;
  return (
    <div className='flex justify-center items-center h-screen'>
      <section className='flex gap-10 p-5 justify-center items-center'>
        <div>
          <img src={image} alt={`${name} image`} width={500} height={700} />
        </div>
        
        <aside className='flex flex-col   '>
          <div className='flex flex-col gap-6 border border-black p-10'>
            <h3>{name}</h3>
            <p>{formatMoney(price)}</p>
            <p>{quantity}</p>

          </div>
          <div className='flex flex-col gap-10 border border-black p-10'>
            <p>Blue</p>
            <ul className='flex gap-3 '>
              <li className='border border-black inline-block p-5 hover:bg-slate-200 cursor-pointer'>S</li>
              <li className='border border-black inline-block p-5 hover:bg-slate-200 cursor-pointer'>M</li>
              <li className='border border-black inline-block p-5 hover:bg-slate-200 cursor-pointer'>L</li>
            </ul>
            <p>Choose your size</p>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default Item