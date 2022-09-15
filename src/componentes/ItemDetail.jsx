import "../css/itemDetail.css"

function ItemDetail({ nombre, colores, precio, cuotas }) {
  return (
    <div className='item-detail' >
      <h4>{nombre}</h4>
      <p>{colores}</p>
      <p>{precio}</p>
      <p>{cuotas}</p>
    </div>
  )
}

export default ItemDetail
