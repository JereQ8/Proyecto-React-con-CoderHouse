import React from 'react'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'
import logoEcomm from '../imgs/eclogo.png'


const NavBar = () => {


  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand cont-logo" href="index.html"><img className='logoNetflix' src={logoEcomm} alt="Logo"/></a>
          <a href='index.html'>  </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink> 
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/productosStock">Productos Stock</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/productosConDetalles">Pruductos con Detalles</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ListaProductos">Pruductos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">Carrito</NavLink>
              </li>
              <CartWidget/>
              
              
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar