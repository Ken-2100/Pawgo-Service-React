import { useContext } from "react";
import Modal from "./UI/Modal";
import Input from "./UI/input";

export default function Checkout(){

    const cartTotal = cartCtx.items.reduce((totalPrice, item)=>
        totalPrice + item.quantity * item.price
     , 0);
useContext(cartContext);
    return <Modal>
        <form >
            <h2>Checkout</h2>
            <p>total Amount{cartTotal}</p>

            <Input label='Full Name' type='text' id='full-name'/>
           <Input label='Email' type='email' id='email'/>
           <Input label='Street' type='text' id='street'/>


        </form>
    </Modal>
}