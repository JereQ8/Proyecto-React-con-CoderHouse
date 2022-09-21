import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ContenedorItemsStock from './componentes/ContenedorItemsStock';
import ItemsList from './componentes/ItemsList';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Cart from './componentes/Cart';



function App() {
  return (
    <div className="App">
      <BrowserRouter> 

      
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer nombre="Jeremias"/>}/>
        <Route path='/productosStock' element={<ContenedorItemsStock/>}/>
        <Route path='/productosConDetalles' element={<ItemDetailContainer />}/>
        <Route path='/ListaProductos' element={<ItemsList/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
      
      

      </BrowserRouter>

    </div>
  );
}

export default App;
