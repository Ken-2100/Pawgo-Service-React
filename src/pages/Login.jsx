import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Button from "../components/UI/Button";
import Input from "../components/UI/InputBlock";
import { Link } from "react-router-dom";
import logoSVG from './logo-transparent.png';

export default function LoginPage(){
    function handleSubmit(event){
        event.preventDefault();

        // buil-in feature browser offer FormData onject
        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries()); // passing form data ENTRIES will RETURN then an object { email: test@example.com } a key : value pairs 
        // also extract entered by the user into object e.g {full-name : 'ken mark amandoron'}
    }
    return(
        <>
        <Header />
        <div className="form-signup bg-dark">
            <div className="container row">
       
        <form className="col col-md-6 py-5 text-light " onSubmit={handleSubmit}>
            <p className="h2 text-light">Log In</p>
        
            <Input type="email" name='login' id='email'  label='Email or Username'/> 
            <Input type="password" name='password' id='password'  label='Password'/> 
        
        <div className="d-grid col-md-6">
            <Button className="btn-warning" type="submit"> Login </Button>
            </div>
            <p className="">New to Pawgo Shop? <Link className="text-danger link-underline-dark" to='/register'>Sign Up</Link> </p>
  

        
        </form>
        <div className="col col-md-6 d-flex justify-content-center">
        <img src={logoSVG} style={{height:"10rem"}} />
        </div>
        </div>
        </div>
        <Footer />
        </>
    )
}