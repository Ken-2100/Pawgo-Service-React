export default function Input({label,id, ...props}){
    return <div className="control">
        <label htmlFor={id}>{label}</label>
        <input  id={id} name={id} {...props} placeholder={`Enter ${label}`} required/>
    </div>
}

