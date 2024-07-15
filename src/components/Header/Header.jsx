import logoSVG from './logo-transparent.png';
import userIcon from './user-login-icon-removebg-preview.png';
import cartIcon from './Untitled_design-removebg-preview.png';
import './Header.css';
import {Link} from 'react-router-dom';
import Button from '../UI/Button';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import UserProgressContext from '../../store/UserProgressContext';

function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalItems,item)=>{
    return totalItems + item.quantity;
  }, 0);

function handleShowCart(){
  userProgressCtx.showCart();
}

    return(
        <>
        <div className="container  bg-light">
    <header className="navbar navbar-expand-lg mb-3 border-bottom justify-content-between ">

        <Link to="/" className="d-flex link-body-emphasis text-decoration-none">
       <img src={logoSVG} style={{height:"3rem"}} />
       <p className='h2 text-warning-emphasis'>PawGo</p>
        </Link>

    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-expanded="false">
            <span className="navbar-toggler-icon justify-content-center"></span>
        </button>

    <div className='navbar-collapse collapse justify-content-end' id='navbarCollapse'>


      <ul className="navbar-nav col-12 col-md-auto mb-2 mb-md-0">
        <li><Link to="/home" className="nav-link px-2 link-secondary">Home</Link></li>
        <li><Link to="/shop" className="nav-link px-2 link-secondary">Shop</Link></li>        
        <li><Link to="/aboutUs" className="nav-link px-2 link-secondary">About</Link></li>
      </ul>
 
     
      <div className="col-md-3 ">
      <ul className="nav col-12 col-md-auto mb-2 mb-md-0 justify-content-end">
        <Button className="nav-link px-1 link-secondary"><Link to="/login" > <img src={userIcon} style={{height:"2rem"}} /></Link></Button>
        <Button onClick={handleShowCart}><img src={cartIcon} style={{height:"2rem"}} />({totalCartItems})</Button>
      </ul>
      </div>
      </div>
      
    
      

    </header>
  </div>
        </>
    );
}

export default Header;