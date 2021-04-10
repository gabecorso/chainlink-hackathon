import React, { useState, useEffect } from 'react'
import signUp from '../../styles/signup.sass'
import SignUpSchema from '../../helpers/SignUpSchema'
import * as yup from 'yup';
import axios from 'axios'
import { Container, Modal } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';
import Layout from '../common/Layout';

const initialFormValues={
    fullName:'',
    email: '',
    password: '',
    passwordConfirmation: '',
}

const initialErrors={
    fullName:'',
    email: '',
    password: '',
    passwordConfirmation: '',

}

export default function SignUp() {
    const [form, setForm] = useState(initialFormValues)
    const [errors, setErrors] = useState(initialErrors)
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [hasSubmitted, setHasSubmitted] = useState(true)

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
        console.log()
        e.preventDefault()
        const newUser ={
            firstName: form.fullName.split(' ')[0],
            lastName: form.fullName.split(' ')[-1],
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
    //     setHasSubmitted(true)
    //     window.localStorage.setItem('token', res.data.access_token);
    //     window.localStorage.setItem('username', form.username);

        const goLogin = setTimeout(()=> history.push('/login'), 1500);
    // })
    // .catch(err =>{
    //     debugger
  
    //     setForm({
    //       ...form,
    //       username: initialFormValues.username
    //     })
    
    // })
  }

    return (
        <Layout showMobileFooter={false} showNav={false} cName='sign-up'>
            { hasSubmitted && 
                <Modal className="success-dialog">
                    <Modal.Header closeButton>
                        <Modal.Title>Congrats!</Modal.Title>
                        <Modal.Body>
                            <p>You've signed up, woohoo! now go ahead and log in. We'll send you a confirmation email (eventually). </p>
                        </Modal.Body>
                    </Modal.Header>
                </Modal>
            }
            <Container>
                <h2>Make An Account</h2> 
                <form className='form' onSubmit={handleSubmit}>
                    <label htmlFor="fullName" >
                        Full Name
                        <input 
                            name="fullName"
                            placeholder="Ada Lovelace"
                            type="text"
                            onChange= { onChange }
                            value={form.lastName}
                            />
                    </label>
                    < br />
                    <label htmlFor="email" >
                        Email
                        <input 
                            name="email"
                            placeholder="thinking.machine@gmail.com"
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
                        placeholder="Choose a secret phrase"
                        type="password"
                        onChange= { onChange }
                        value={form.password}
                    />
                    </label>
                    <br />
                    <label htmlFor="passwordConfirmation" >
                        Confirm password
                    <input 
                        name="passwordConfirmation"
                        placeholder="Keep it safe!"
                        type="password"
                        onChange= { onChange }
                        value={form.passwordConfirmation}
                        />
                    </label>
                    <br />
                    <div className={'form-footer d-flex justify-content-end mt-3'}>
                        <p className={'mr-4'}>
                            Already have an account?  <br/>
                            <Link to="/login">Sign in.</Link>
                        </p>
                        <button type="submit" disabled={buttonDisabled}>Submit</button>
                    </div>
                </form>
            </Container>
        </Layout>
    )
}
