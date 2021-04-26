import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  
    fullName: Yup
    .string()
    .required('Name is required'),
    email: Yup
    .string()
    .required('Email is required')
    .email('Please input a valid email'),
    password: Yup
    .string()
    .min(8, 'Password is too short')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Must contain at least 8 characters, including 1 letter, 1 number, and 1 special character.')
    .required('Password is required'),
    passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('please confirm your password')
})

export default SignupSchema;
