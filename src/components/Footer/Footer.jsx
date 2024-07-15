import './Footer.css';
import logoIcon from './logo-transparent.png';

export default function Footer() {
    return(

        <footer id='custom-bg-color' className='container-fluid' >
       
  <div className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top container">
    <p className="col-md-4 mb-0 text-body-secondary">© 2024 Kodego Students, Ken & John</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
    <img src={logoIcon} alt="" style={{height:"4rem"}} />
    </a>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="#Services" className="nav-link px-2 text-body-secondary">Service</a></li>
      <li className="nav-item"><a href="#AboutUs" className="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
  </div>

        </footer>

    );
}