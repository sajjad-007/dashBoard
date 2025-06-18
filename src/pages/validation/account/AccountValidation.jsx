import * as Yup from "yup";
const emailRegx =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const firstNameregex = /^[a-zA-Z ]{2,30}$/;
const AccountValidation = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .matches(emailRegx, "Check your email format")
    .required("Please enter your email"),
  newPassword: Yup.string()
    .min("minimum 5 characters")
    .max("maximum 15 character")
    .required("Please enter your password"),
//   firstName: Yup.string()
//     .matches(firstNameregex, "Invalid name")
//     .required("Please enter your firstName"),
});

export default AccountValidation;
