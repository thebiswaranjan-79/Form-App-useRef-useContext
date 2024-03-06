import { useState } from 'react'
import './App.css'
import Form from './components/form/Form'
import { FormContext } from './providers/FormContext'

function App() {
  
    const[formInput, setFormValues] = useState({});
  return (
    <>
        Form Application
        <FormContext.Provider value={{formInput, setFormValues}}>
             <Form/>
        </FormContext.Provider>
      
    </>
  )
}

export default App
