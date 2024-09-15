import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Username must be at least 4 characters long.")
    .matches(/^(?!^\d+$).*/, "Username cannot contain only numbers.") // Yalnızca sayılardan oluşmasını engelle
    .required("Username is required"),
  password: Yup.string()
    .min(4, "Please enter at least 4 characters")
    .matches(/^(?!^\d+$).*/, "Password cannot contain only numbers.") // Yalnızca sayılardan oluşmasını engelle
    .required("Password is required"),
});
