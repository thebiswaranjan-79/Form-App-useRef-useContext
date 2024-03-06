import React, { useContext, useRef } from 'react';
import '../form/Form.css'
import Input from '../Input/Input';
import { FormContext } from '../../providers/FormContext';

const Form = () => {

    const {formInput} = useContext(FormContext);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        // we have acces to formInput , that means validations occur here
        console.log(formInput);
        emailRef.current.focus(); // asssume form is not validated 
    } 

    return (
        <>

            <form  onSubmit={handleFormSubmit} noValidate className="form-container">
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <Input
                        id="email-input"
                        type="text"
                        label = "email"
                        inputRef = {emailRef}
                    />
                </div>

                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <Input
                        id="password-input"
                        type="password"
                        label = "password"
                        inputRef = {passwordRef}
                    />
                </div>

                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default Form;