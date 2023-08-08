import NavButton from './NavButton';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';

const OPTIONS =['Home','Categories','Price','Brand']

const NavBar = () => {
  return (

        <aside className='md:w-1/4  h-screen bg-cyan-200'>
            <a href={ '/' }><img src='img/Logo.png'  alt='Logo image' width={100} className='mx-auto py-5' rel='noreferrer'/></a>
            <nav >
                <ul className='h-screen flex flex-col items-start gap-3  '>
                    {OPTIONS.map((option,i) => (
                        <NavButton
                        key={i}
                        option={option}
                        />
                        ))}
                </ul>
            </nav>
        </aside>
        
  )
}

export default NavBar