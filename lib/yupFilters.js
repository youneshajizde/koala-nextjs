import * as yup from "yup";

const definedPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/;

export const basicSchema = yup.object().shape({
  email: yup.string().email("please enter a valid email").required("required"),
  password: yup
    .string()
    .min(5)
    .matches(definedPassword, { message: "please create a stronger password" })
    .required("required"),
});
