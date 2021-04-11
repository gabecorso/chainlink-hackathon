import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  
    email: Yup
    .string()
    .required('Email is required')
    .email('Please input a valid email'),
    password: Yup
    .string()
    .required('Password is required'),
})

export default SignupSchema;
