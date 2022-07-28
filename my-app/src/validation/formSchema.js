import * as yup from "yup";

const formSchema = yup.object().shape({
    firstname: yup
       .string()
       .trim()
       .required('First Name is required')
       .min(3, 'First Name must be 3 characters long'),

    lastname: yup
       .string()
       .trim()
       .required('Last Name is required')
       .min(3, 'Last Name must be 3 characters long'),
       
    email: yup
       .string()
       .email('Must be a valid email address')
       .required('Email is required'),

    password: yup
       .string()
       .required('Pass Word is required')
       .min(6, 'Pass Word must be at least 6 characters long'),

    tos: yup
       .string()
       .oneOf([true], 'Must accept terms and conditions')
})

export default formSchema