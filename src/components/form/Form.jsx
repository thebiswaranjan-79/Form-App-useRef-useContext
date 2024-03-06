import React, { useContext, useRef } from 'react';
import '../form/Form.css'
import Input from '../Input/Input';
import { FormContext } from '../../providers/FormContext';
import validateEmail from '../../helper/emailValidator';
import validatePassword from '../../helper/passwordValidator'
const Form = () => {

    const {formInput} = useContext(FormContext);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        // we have acces to formInput , that means validations occur here
        handleInvlidEmail();
        handleInvlidPassword();
    } 

    const handleInvlidEmail = () =>{
        if(!validateEmail(formInput.email)){
            emailRef.current.setInvalid();
            emailRef.current.shake();
        }
    }   
    const handleInvlidPassword = () =>{
        if(!validatePassword(formInput.password)){
            passwordRef.current.setInvalid();
            passwordRef.current.shake();
        }
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
                        ref = {emailRef}
                        checkOnBlur ={handleInvlidEmail}
                    />
                </div>

                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <Input
                        id="password-input"
                        type="password"
                        label = "password"
                        ref = {passwordRef}
                        checkOnBlur ={ handleInvlidPassword}

                    />
                </div>

                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default Form;