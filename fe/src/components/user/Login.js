import React, { useState, useEffect } from 'react'
import signUp from '../../styles/signup.sass'
import { useHistory, Link } from 'react-router-dom'
import * as yup from 'yup';
import SignUpSchema from '../../helpers/SignUpSchema'
import axios from 'axios'
import { Container } from 'react-bootstrap';
import Layout from '../common/Layout';

const initialFormValues={
    email: '',
    password: '',
}

const initialErrors={
    email: '',
    password: '',
}

export default function SignUp() {

    const [form, setForm] = useState(initialFormValues)
    const [errors, setErrors] = useState(initialErrors)
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const history = useHistory();

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
            email: form.email.trim(),
            password: form.password.trim(),
        }
        postNewUser(newUser)
        setForm(initialFormValues)
    }

  const postNewUser = user => {
    // dispatch({ type: SIGN_UP_START })

    // axios.post('https://cors-anywhere.herokuapp.com/https://wonderlist-backend.herokuapp.com/register', user)
    // .then(res =>{
        history.push('/dashboard');
    // })
    // .catch(err =>{
    //     debugger
    //     setForm({
    //         ...form,
    //         username: initialFormValues.username
    //     })
    
    // })
  }

    return (
        <Layout showMobileFooter={false} cName='log-in'>
            <Container>
                <h2>Log In</h2> 
                <form className='form' onSubmit={handleSubmit}>
                    <label htmlFor="email" >
                        Email
                        <input 
                            name="email"
                            placeholder="you@xyz.com"
                            type="text"
                            onChange= { onChange }
                            value={form.email}
                            />
                    </label>
                    < br />
                    <label htmlFor="password" >
                        Password
                    <input 
                        name="password"
                        placeholder="enter your secret phrase"
                        type="password"
                        onChange= { onChange }
                        value={form.password}
                    />
                    </label>
                    <br />
                    <div className={'form-footer d-flex justify-content-end mt-3'}>
                        <p className={'mr-4'}>
                            Or if you need,  <br/>
                            <Link to="/sign-up">make an account.</Link>
                        </p>
                        <button type="submit" disabled={buttonDisabled}>Submit</button>
                    </div>
                </form>
            </Container>
        </Layout>
    )
}
