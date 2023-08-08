
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';

function App ()
{
  return (
    <>
      <div className='flex'>
        <NavBar />
        <div className='container flex flex-col w-full'>
          <CartWidget />
          <ItemListContainer />
        </div>
      </div>
    </>
  );
}

export default App;
