import {createPortal} from 'react-dom';
import { useRef, useEffect } from 'react';

export default function Modal({children, open, className = ''}){
    const dialog = useRef(); // to connect to the element e.g <dialog> using its built-in prop 'ref='
    useEffect(()=>{
        const modal = dialog.current;
        if(open){
            modal.showModal(); // this is built in method to show <dialog> element
         console.log('opening modal');
        }
        return () => modal.close() ; //cleanUp function
      
      
    }, [open]);

    return createPortal(<dialog ref={dialog} className={`simple-modal h-50 w-25 ${className}`}>{children}</dialog>, document.getElementById('modal'))

}

    