import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './style/index.scss'
import Product from './pages/Product';
import Contacts from './pages/Contacts';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
