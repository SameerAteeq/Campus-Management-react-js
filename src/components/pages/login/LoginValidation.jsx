import * as Yup from "yup";
const LoginValidation = Yup.object({
    email: Yup.string().required("required"),
    password: Yup.string().required("required")
})
export default LoginValidation;