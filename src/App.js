import { Routes, Route} from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';
import { ProductList } from './Components/ProductList';
import { ProductDetail } from './Components/ProductDetail';
import {Contact} from './Components/Contact'
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='App'>
     <Header/>
      <main>
          <Routes>
              <Route path='/' element= {<Home/>}></Route>
              <Route path='/products' element= {<ProductList/>}></Route>
              <Route path='/products/1001' element= {<ProductDetail/>}></Route>
              <Route path='/contact' element= {<Contact/>}></Route>
            </Routes> 
        </main>
     <Footer/>
    </div>
  );
}

export default App;
