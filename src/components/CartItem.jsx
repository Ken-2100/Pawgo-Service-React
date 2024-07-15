export default function CartItem({name,quantity,price, onIncrease, onDecrease}){
    return <li className="cart-item">
        <p>
        {name} - {quantity} x {`₱ ${price}`}
        </p>
        <div className="cart-item-actions">
            <button oncClick={onDecrease}>-</button>
            <span> {quantity}</span>
            <button onClick={onIncrease}>+</button>
        </div>

    
    </li>
}