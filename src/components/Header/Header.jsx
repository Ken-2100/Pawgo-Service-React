import logoSVG from './logo-transparent.png';
import userIcon from './user-login-icon-removebg-preview.png';
import './Header.css';

function Header() {
    return(
        <>
        <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/" className="d-flex link-body-emphasis text-decoration-none">
       <img src={logoSVG} style={{height:"3rem"}} />
       <p className='h2 text-warning-emphasis

'>PawGo</p>
        </a>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#Services" className="nav-link px-2 link-secondary">Service</a></li>
        <li><a href="#AboutUs" className="nav-link px-2 link-secondary">About</a></li>
      </ul>

      <div className="col-md-3 text-end">
      <ul className="nav col-12 col-md-auto mb-2 justify-content-end mb-md-0">
        <li><a href="#" className="nav-link px-1 link-secondary"> <img src={userIcon} style={{height:"2rem"}} /></a></li>

        {/* Future appointment log after successful payment */}
        {/* <li><a href="#" className="nav-link px-1 link-secondary"><img src={} style={{height:"2rem"}} /></a></li> */}
      </ul>
      </div>
    </header>
  </div>
        </>
    );
}

export default Header;