import * as Yup from 'yup';

const signupValidation = Yup.object({
    name: Yup.string().required("required"),
    email: Yup.string().required("required"),
    password: Yup.string().required("required").min(6, "password is short"),
    confirmPassword: Yup.string().required("required").min(6, "password is short"),
    address: Yup.string().required("required"),
    // country: Yup.string().required("required"),
    role: Yup.string().required("required")

})
export default signupValidation;