
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import { useLocation, useParams } from 'react-router-dom';
import Item from './pages/Item';

function App ()
{
  const param = useParams();
  const location = useLocation();
  console.log( location );
  return (
    <>
      <div className='flex'>
        <NavBar />
        <div className='container flex flex-col w-full'>
          <CartWidget />
          {
            location.pathname === `/item/${ param.id }` ? <Item /> : <ItemListContainer />
          }
        </div>
      </div>
    </>
  );
}

export default App;
