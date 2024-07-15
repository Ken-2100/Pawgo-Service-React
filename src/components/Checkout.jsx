import { useContext } from "react";
import Modal from "./UI/Modal";
import Input from "./UI/InputBlock";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export default function Checkout(){
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce((totalPrice, item)=>
        totalPrice + item.quantity * item.price
     , 0);
    return <Modal open={userProgressCtx.progress === 'checkout'}>
        <form >
            <h2>Checkout</h2>
            <p>total Amount{cartTotal}</p>

            <Input label='Full Name' type='text' id='full-name'/>
           <Input label='Email' type='email' id='email'/>
           <Input label='Street' type='text' id='street'/>
           <div className="control-row">
            <Input label="Postal Code" type="text" id="postal-code" />
            <Input label='City' type='text' id='city' /> 
           </div>
           <ul>
            <Button type='button' onClick={()=>userProgressCtx.hideCheckout()}>
                Close</Button>
            <Button onClick={()=>alert('Order Submitted')}>Submit Order</Button>
           </ul>
        </form>
    </Modal>
}