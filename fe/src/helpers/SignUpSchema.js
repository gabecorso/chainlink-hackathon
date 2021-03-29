import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup
    .string()
    .required('Name is required'),
    lastName: Yup
    .string()
    .required('Name is required'),
    email: Yup
    .string()
    .required('Email is required')
    .email('Please input a valid email'),
    password: Yup
    .string()
    .required('Password is required'),
    passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('please confirm your password')
})

export default SignupSchema;
