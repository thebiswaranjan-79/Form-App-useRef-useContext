import React, { useContext, useState } from 'react';
import {FormContext} from '../../providers/FormContext'
import './Input.css';
const Input = ({type, id, label, inputRef}) => {
  
    const {formInput , setFormValues} = useContext(FormContext);
    const[isValid, setIsValid] = useState(true);
    const[text, setText] = useState("");

    return (
        <div>
            <input  className={(!isValid)  ? 'error-input' : ""}
                ref={inputRef}
                type={type} 
                id={id}
                value={text}
                onChange={(e)=> 
                    {
                        setText(e.target.value); 
                        setFormValues({...formInput, [label]:e.target.value})
                    }}
            />            
        </div>
    );
}

export default Input;




