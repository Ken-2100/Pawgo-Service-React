import {createContext, useReducer} from 'react';

const CartContext = createContext({
items: [],
addItem: (item) => {},
removeItem: (id) => {}
});

//return updated state & the param. 'action' will tell the fuction how to update the state
function cartReducer(state, action){
if(action.type === 'ADD_ITEM'){
    // I now update the state to add a food item
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id );
const updatedItem = [...state.items]; //i just create a new item array avoid mutating data

    if(existingCartItemIndex > -1){
        const existingFoodItem = state.items[existingCartItemIndex];
        const updatedItem = {
            ...existingFoodItem,
            quantity: existingFoodItem.quantity + 1 
        };
        updatedItem[existingCartItemIndex] = updatedItem;

    } else {
        updatedItem.push({...action.item, quantity: 1});

    }
    return {...state, items : updatedItem};
} 

if(action.type === 'REMOVE_ITEM'){
    // REMOVE item from the state
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id );
    const existingCartItem = state.items[existingCartItemIndex];

   const updatedItem = [...state.items];
    if(existingCartItem.quantity === 1){
     
        updatedItem.splice(existingCartItemIndex, 1);

    }else {
        const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity - 1,
        };
        updatedItem [existingCartItemIndex] = updatedItem;
    }
    return {...state, items : updatedItem};

}
return state; // then will return the UNCHANGE state 
}

export function CartContextProvider({children}) {
    //add stateful logic to manage the add and remove items function defined above
    //prefer to use Hook useReducer which is simpler than useState feature to more complex state and to make it easier to move the state out of this component function
    const [cart, dispatchCartAction ]= useReducer(cartReducer,{ items: [] });


    function addItem(item){
dispatchCartAction({type: 'ADD_ITEM', item });
    }

    function removeItem(id) {
        dispatchCartAction({type: 'REMOVE_ITEM', id })

    }

    const cartContext = {
        items : cart.items,
        addItem,
        removeItem //javascript shortcut of removeItem : removeItem
    };
    console.log(cartContext);
    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
};

export default CartContext;