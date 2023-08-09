import React, { useState } from 'react'

const NavButton = ({option}) => {
    const [isActive,setIsActive] = useState(false)
  return (
    <li className={'transition-all duration-300  ease flex flex-col w-full'}>
         <a 
            href= "#"
            onClick={()=>setIsActive(!isActive)}
            className='uppercase text-xl font-bold hover:bg-cyan-300 w-full p-3'
        >
            {option} {option === 'Categories' ? '+' : ''}</a>
        {
            option ==='Categories' && isActive &&
            <div className={'transition-all duration-300 ease flex flex-col gap-3'}>
            {' '}
                <ul>
                    <li className='transition-all duration-300  ease uppercase text-xl font-bold pl-5 hover:bg-cyan-300'><a href="#">Sport</a></li>
                    <li className='transition-all duration-300  ease uppercase text-xl font-bold pl-5 hover:bg-cyan-300'><a href="#">Casual</a></li>
                    <li className='transition-all duration-300  ease uppercase text-xl font-bold pl-5 hover:bg-cyan-300'><a href="#">Sneaker</a></li>
                </ul>
            </div> 
        }
    </li>
  )
}

export default NavButton