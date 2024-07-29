import logoSVG from "./logo-transparent.png";
import userIcon from "./user-login-icon-removebg-preview.png";
import cartIcon from "./Untitled_design-removebg-preview.png";
import "./Header.css";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import UserProgressContext from "../../store/UserProgressContext";
import myOrderIcon from "./place-holder.png";

function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalItems, item) => {
    return totalItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <>
      <header className="navbar navbar-expand-md mb-3 border-bottom row">
        <div className="container-fluid d-flex justify-content-between">
          <div className="col-md">
            <Link
              to="/"
              className="d-flex link-body-emphasis text-decoration-none"
            >
              <img src={logoSVG} style={{ height: "3rem" }} />
              <p className="h2 text-warning-emphasis">PawGo</p>
            </Link>
          </div>

          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          <div className="navbar-collapse collapse" id="navbarCollapse">
            <ul className="navbar-nav col-3 col-md-6 mb-2 mb-md-0">
              <li>
                <Link to="/home" className="nav-link px-2 link-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="nav-link px-2 link-secondary">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/aboutUs" className="nav-link px-2 link-secondary">
                  About
                </Link>
              </li>
              <Button
                className="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Feedback
              </Button>
              <div className="dropdown">
                <ul className="dropdown-menu ">
                  <li>
                    <Link to="/feedback" className="dropdown-item">
                      Give Feedback
                    </Link>
                  </li>
                  <li>
                    <Link to="/userfeedback" className="dropdown-item">
                      User's Feedback
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>

            <div className="d-flex align-itemscenter">
              <Button
                onClick={handleShowCart}
                className="nav-link px-1 link-secondary"
              >
                <img src={cartIcon} style={{ height: "2rem" }} />(
                {totalCartItems})
              </Button>
              <Button className="nav-link px-1 link-secondary">
                <img src={myOrderIcon} style={{ height: "4rem" }} />
              </Button>
              <Button className="nav-link px-1 link-secondary">
                <Link to="/login">
                  {" "}
                  <img src={userIcon} style={{ height: "2rem" }} />
                </Link>
              </Button>
            </div>
            <ul className="nav col-12 col-md-auto mb-2 mb-md-0 align-items-center">
              <li>
                <Link to="/login" className="nav-link px-2 link-secondary">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="nav-link px-2 link-secondary">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
