

 
function ItemListContainer(props){

  return (
    <div className="cont-saludo"> 
        <h2>Bienvenido {props.nombre}!</h2>
        <button>Loguearse</button>
    </div>
  )
}

export default ItemListContainer