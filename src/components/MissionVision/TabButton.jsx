export default function TabButton({children, onSelect}) {

    return( <>
        <button onClick={onSelect} className="btn btn-dark me-2" style={{width : "10rem"}}>{children}</button>
    </>
    ) ;
        

}