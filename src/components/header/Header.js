import './Header.css';
import NavCart from "../navCart/NavCart"


function Header() {
    return (
      <>
      <header>
        <h5>kiosc</h5>
        <nav>
          <a href="#">Productos</a>
          <a href="#">Ofertas</a>
          <a href="#">Formas de pago</a>
          <a href="#">Sucursales</a>
          <NavCart/>
        </nav>
      </header>
      </>
    );
  }
  export default Header