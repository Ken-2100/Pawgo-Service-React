import { useState } from 'react';

export default function TextInput({placeholderValue}) {
    const [text, setText] = useState(" ");

    const labelName = placeholderValue;
  
  
    return (
      <form>
        <label>{`${labelName}`}
          <input
            type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeHolder={`Enter ${placeholderValue}`}
            required
          />
        </label>
      </form>
    )
  }