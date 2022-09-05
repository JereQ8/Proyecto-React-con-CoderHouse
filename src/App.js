import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemCount from './componentes/ItemCount';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer nombre="Jeremias"/>
      <ItemCount stock={5} nombreProducto="Lavarropa"/>
    </div>
  );
}

export default App;
