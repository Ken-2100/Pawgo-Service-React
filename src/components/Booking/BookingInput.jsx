import TextInput from "./TextInput";
import { INPUTLABEL } from "./InputLabelData";

export default function BookingInput(){
    return(
        <>
        {/* Complete name, address,Date, Dog/Cat ,Name of the pet , age , Type of Service */}
        <div className="row g-2 ">

        {/* <label htmlFor="Fullname" className="me-2">Fullname </label>
        <input type="text" id="Fullname" name="Fullname" placeholder="Enter Fullname" required></input>

        <label htmlFor="Address" className="me-2">Address </label>
        <input type="text" id="Adress" name="Address" placeholder="Enter Address" required></input> */}
        <TextInput 
            placeholderValue = {INPUTLABEL.fullname.name}
        />
        <TextInput 
         placeholderValue = {INPUTLABEL.fulladdress.address}
          />

        
     <label htmlFor="Date" className="me-2">Date </label>
        <input type="Date" id="Date" name="Date" required></input>

        <label htmlFor="Pet" className="me-2">What Pet? </label>
        <select type="choice" id="Pet" name="Pet" required>
        <option value="saab">Both</option>
        <option value="volvo">Dog</option>
        <option value="saab">Cat</option>
        </select>

        
        <label htmlFor="Pname" className="me-2">Pet Name </label>
        <input type="text" id="Pname" name="Pname" placeholder="Enter Pet name" required></input>

        <label htmlFor="Page" className="me-2">Pet Name </label>
        <input type="text" id="Page" name="Page" placeholder="Enter Pet age" required></input>

        </div>
        </>
    )
}