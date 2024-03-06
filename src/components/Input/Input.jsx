import React, { useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';
import {FormContext} from '../../providers/FormContext'
import './Input.css';
const Input = ({type, id, label, checkOnBlur, placeholder}, ref) => { // ref is a 2nd arg to a component function 
  
    const {formInput , setFormValues} = useContext(FormContext);
    const[isValid, setIsValid] = useState(true);
    const[shake, setShake] = useState(false);
    const[text, setText] = useState("");

    // introduce a local ref => local to component
    const localRef = useRef(null);

    useEffect(() => {
        setIsValid(true);
        setShake(false);
    }, [text]);

    useImperativeHandle(ref, () => {
        return{
            focus : () => localRef.current.focus(),
            setInvalid : () => setIsValid(false),
            shake: () => setShake(true)
        }
    } ,[])

    return (
        <div>
            <input  className={`${(!isValid)  ? 'error-input' : ""} ${(shake) ? 'shake' : ""}`}
                ref={localRef}
                type={type} 
                id={id}
                value={text}
                placeholder={(placeholder) ? placeholder : " "}
                onBlur = {checkOnBlur}
                onChange={(e)=> 
                    {
                        setText(e.target.value); 
                        setFormValues({...formInput, [label]:e.target.value})
                    }}
            />            
        </div>
    );
}

export default React.forwardRef(Input);




