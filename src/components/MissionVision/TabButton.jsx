export default function TabButton({children, onSelect}) {

    return( <>
        <button onClick={onSelect} className="btn btn-dark" style={{width : "10rem"}}>{children}</button>
    </>
    ) ;
        

}