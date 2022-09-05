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
      <ItemCount stock={3} nombreProducto="Microonda"/>
      <ItemCount stock={8} nombreProducto="Tostadora"/>
      <ItemCount stock={1} nombreProducto="Plancha"/>
      <ItemCount stock={4} nombreProducto="Maquina afeitadora"/>
    </div>
  );
}

export default App;
