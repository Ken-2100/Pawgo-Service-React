import { createContext , useState} from "react";

const UserProgressContext = createContext({
    progress: '',
    showCart: ()=> {},
    hideCart: ()=> {},
    showCheckout: ()=> {},
    hideCheckout: ()=> {},
    showFeedback: ()=> {},
    hideFeedback: ()=> {}
});

export function UserProgressContextProvider({children}){
    const [userProgress, setUserProgress] = useState('');

    function showCart(){
        setUserProgress('cart');
    }

    function hideCart(){
        setUserProgress('');
    }

    function showCheckout(){
        setUserProgress('checkout');
    }
    function hideCheckout(){
        setUserProgress('');
    }
    function showFeedback(){
        setUserProgress('feedback');
    }
    function hideFeedback(){
        setUserProgress('');
    }
    

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
        showFeedback,
        hideFeedback
    };

    return (
    <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
);
}
export default UserProgressContext;