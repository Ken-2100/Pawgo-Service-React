export default function CartItem({itemName,quantity,price, onIncrease, onDecrease}){
    return <li className="cart-item">
        <p>
        {itemName} - {quantity}x {`₱${price}`}
        </p>
        <div className="cart-item-actions">
            <button onClick={onDecrease}>-</button>
            <span> {quantity}</span>
            <button onClick={onIncrease}>+</button>
        </div>

    
    </li>
}