import React, { useState, useEffect } from 'react'
import signUp from '../styles/signup.sass'
import SignUpSchema from '../helpers/SignUpSchema'
import * as yup from 'yup';
import axios from 'axios'
import { Container } from 'react-bootstrap';


const initialFormValues={
    firstName:'',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
}

const initialErrors={
    firstName:'',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',

}
export default function SignUp() {
    const [form, setForm] = useState(initialFormValues)
    const [errors, setErrors] = useState(initialErrors)
    const [buttonDisabled, setButtonDisabled] = useState(true)

    useEffect(() => {
        SignUpSchema.isValid(form).then(valid => {
          setButtonDisabled(!valid);
        });
    }, [form]);

    
    const onChange = (e) => {
        e.persist()
       const name = e.target.name
       const value = e.target.value;

       yup
       .reach(SignUpSchema, name)
       .validate(value)
       .then(valid => {
           setErrors({
               ...errors,
               [name]: ''
           })
       })
       .catch(err => {
           setErrors({
               [name]: err.errors[0]
           })
       })

        setForm({
        ...form,
        [name] : value
        })
    }
  
    const handleSubmit = (e) =>{
        e.preventDefault()
        const newUser ={
            firstName: form.firstName.trim(),
            lastName: form.lastName.trim(),
            email: form.email.trim(),
            password: form.password.trim(),
        }
        postNewUser(newUser)
        setForm(initialFormValues)
    }

  const postNewUser = user => {
    // dispatch({ type: SIGN_UP_START })
    axios.post('https://cors-anywhere.herokuapp.com/https://wonderlist-backend.herokuapp.com/register', user)
    .then(res =>{
    //   dispatch({ type: SIGN_UP_SUCCESS, payload: user})
      window.localStorage.setItem('token', res.data.access_token)
      window.localStorage.setItem('username', form.username);
    //   push('/home')
    })
    .catch(err =>{
      debugger
    //   dispatch({ type: SIGN_UP_FAIL, payload: err })
    //   if ( reqErr.includes("status code 500")){
    //     setErrors("Sorry, that username has already been taken")
        setForm({
          ...form,
          username: initialFormValues.username
        })
    
    })
  }

    return (
        <section className='sign-up'>
            <Container>
                <h2>Create An Account</h2> 
                <form className='form' onSubmit={handleSubmit}>
                    <label htmlFor="firstName" >
                        <input 
                            name="firstName"
                            placeholder="First Name"
                            type="text"
                            onChange= { onChange }
                            value={form.firstName}
                            />
                    </label>
                    < br />
                    <label htmlFor="lastName" >
                        <input 
                            name="lastName"
                            placeholder="Last Name"
                            type="text"
                            onChange= { onChange }
                            value={form.lastName}
                            />
                    </label>
                    < br />
                    <label htmlFor="email" >
                        <input 
                            name="email"
                            placeholder="Enter your email"
                            type="text"
                            onChange= { onChange }
                            value={form.email}
                            />
                    </label>
                    < br />
                    <label htmlFor="password" >
                        <input 
                            name="password"
                            placeholder="Enter your password"
                            type="password"
                            onChange= { onChange }
                            value={form.password}
                        />
                    </label>
                    <br />
                    <label htmlFor="passwordConfirmation" >
                        <input 
                            name="passwordConfirmation"
                            placeholder="Confirm password"
                            type="password"
                            onChange= { onChange }
                            value={form.passwordConfirmation}
                        />
                        <p>{errors.passwordConfirmation}</p>
                    </label>
                    <br />
                    <button type="submit" disabled={buttonDisabled}>Submit</button>
                </form>
            </Container>
        </section>
    )
}
