import React from "react";
import * as Yup from "yup";

const LoginValidation = Yup.object({
  emailOrphoneNumber: Yup.string()
    .required("Please enter your email or phoneNumber"),
  password: Yup.string()
    .min(5, "minimum 5 characters required ")
    .max(14, "maximum 14 characters")
    .required("Please enter your password"),
});

export default LoginValidation;
