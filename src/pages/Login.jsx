import Button from "../components/UI/Button";
import Input from "../components/UI/InputBlock";

export default function LoginPage(){
    function handleSubmit(event){
        event.preventDefault();

        // buil-in feature browser offer FormData onject
        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries()); // passing form data ENTRIES will RETURN then an object { email: test@example.com } a key : value pairs 
        // also extract entered by the user into object e.g {full-name : 'ken mark amandoron'}
    }
    return(
        <div className="form-signup bg-dark ">
       
        <form className="py-5 text-light " onSubmit={handleSubmit}>
            <p className="h2 text-center text-light">Sign up</p>
        
            <Input type="email" name='login' id='email'  label='Email or Username'/> 
            <Input type="password" name='password' id='password'  label='Password'/> 
        
            <Button className="btn btn-primary" type="submit"> Login </Button>
            <p className=""></p>
  

        
        </form>
        </div>
    )
}