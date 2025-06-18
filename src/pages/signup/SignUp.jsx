import React, { useState } from "react";
import Button from "../../component/button/Button.jsx";
import login from "../../assets/login/login.png";
import { useFormik } from "formik";
import RegValidation from "../validation/auth/RegValidation.jsx";
import { FaEyeSlash } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { toastError, toastSuccess } from "../../component/utility/Toastify";
import {
  toastError,
  toastInfo,
  toastSuccess,
} from "../../component/utility/toastify";
import { ThreeDots } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
// import { axiosinstance } from "../../../helper/axios.js";

const SignUp = () => {
  const [showHide, setShowHide] = useState(false);
  const [loading, setLoading] = useState(false);
  //initialValues user given value from input
  const initialValues = {
    firstName: "",
    email: "",
    phoneNumber: "",
    password: "",
    termAccept: false,
  };

  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: RegValidation,
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const handleHideShow = () => {
    setShowHide(!showHide);
  };
  return (
    <div className="main pt-[60px] pb-36">
      <ToastContainer />
      <div className="container">
        <div className="flex gap-[80px] justify-between my-7">
          {/* image part */}
          <div className="Img_part w-[64%] h-[601px] overflow-hidden relative left-[-42px]">
            <img
              src={login}
              alt="not found"
              className="w-full h-full object-fill"
            />
          </div>

          {/* log in part */}
          <div className="text_part w-[36%]">
            <div className="flex flex-col gap-12">
              {/* Heading part */}
              <div className="headings flex flex-col gap-6">
                <h1 className="font-inter text-text2-black text-4xl font-medium leading-8 traking-[1.44px]">
                  Sign Up
                </h1>
                <h4 className="font-poppins font-medium text-text2-black text-base leading-6">
                  Enter your details below
                </h4>
              </div>
              {/* inputs and button part */}
              <form onSubmit={Formik.handleSubmit}>
                <div className="body_parts flex flex-col gap-8 ">
                  {/* Name section */}
                  <input
                    type="text"
                    name="firstName"
                    placeholder="firstName"
                    onChange={Formik.handleChange}
                    value={Formik.values?.firstName}
                    className="w-[370px] border-b border-solid border-b-slate-300 py-2 font-poppins font-normal text-text2-black text-base leading-6"
                  />
                  {Formik.touched.firstName && Formik.errors.firstName ? (
                    <p className="text-red-500">{Formik.errors.firstName}</p>
                  ) : null}
                  {/* Email  section start*/}
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={Formik.handleChange}
                    value={Formik.values.email}
                    className="w-[370px] border-b border-solid border-b-slate-300 py-2 font-poppins font-normal text-text2-black text-base leading-6"
                  />
                  {Formik.touched.email && Formik.errors.email ? (
                    <p className="text-red-500">{Formik.errors.email}</p>
                  ) : null}
                  {/* Email  section start End*/}

                  {/*  Phone number section start*/}
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    onChange={Formik.handleChange}
                    value={Formik.values.phoneNumber}
                    className="w-[370px] border-b border-solid border-b-slate-300 py-2 font-poppins font-normal text-text2-black text-base leading-6"
                  />
                  {Formik.touched.phoneNumber && Formik.errors.phoneNumber ? (
                    <p className="text-red-500">{Formik.errors.phoneNumber}</p>
                  ) : null}
                  {/*  Phone number section End*/}

                  {/* Password section start*/}
                  <div className="relative">
                    <input
                      type={`${showHide ? "text" : "password"}`}
                      placeholder="Password"
                      name="password"
                      onChange={Formik.handleChange}
                      value={Formik.values.password}
                      className="w-[370px] border-b border-solid border-b-slate-300 py-2 font-poppins font-normal text-text2-black text-base leading-6 "
                    />
                    {showHide ? (
                      <span
                        className="absolute right-[5%] top-[20%] translate-y-[20%]  text-xl cursor-pointer"
                        onClick={handleHideShow}
                      >
                        <IoEye />
                      </span>
                    ) : (
                      <span
                        className="absolute right-[5%] top-[20%] translate-y-[20%] text-xl cursor-pointer"
                        onClick={handleHideShow}
                      >
                        <FaEyeSlash />
                      </span>
                    )}
                  </div>
                  {Formik.touched.password && Formik.errors.password ? (
                    <p className="text-red-600">{Formik.errors.password}</p>
                  ) : null}
                  {/* Password section end */}

                  {/* Checkbox terms and condtion start */}
                  <div className="flex gap-4 ">
                    <input
                      type="checkbox"
                      name="termAccept"
                      onChange={Formik.handleChange}
                      value={Formik.values.termAccept}
                      className="w-7 h-7"
                    />
                    <p className="font-poppins font-normal text-text-7d8 text-sm leading-6">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </p>
                  </div>

                  <p className="font-poppins font-normal text-text-7d8 text-sm leading-6">
                    By creating an account, you agree to our{" "}
                    <span className="text-text2-black">
                      terms and conditions
                    </span>{" "}
                    and <span className="text-text2-black">privacy policy</span>
                  </p>

                  {/* Checkbox terms and condtion End */}

                  {/* Button start */}
                  <div className="flex flex-col items-center gap-4">
                    {loading ? (
                      <ThreeDots
                        visible={true}
                        height="60"
                        width="60"
                        color="#4fa94d"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />
                    ) : (
                      <Button
                        type="submit"
                        text="Sign Up"
                        className="common_btn py-4 px-12 w-full"
                      />
                    )}

                    <div className="w-full common_btn text-text2-black bg-transparent border-text-7d8 hover:text-primary-fff hover:bg-button-red hover:border-button-red py-4 px-12 flex gap-4 items-center justify-center">
                      <span className="text-2xl">
                        <FcGoogle />
                      </span>
                      <p className="text-base"> Sign up with Google </p>
                    </div>
                    <div className="flex gap-3 mt-7">
                      <p className="font-poppins font-normal text-text-7d8 text-base leading-6 capitalize ">
                        Already have account?
                      </p>
                      <Link
                        to="/login"
                        className="font-poppins font-medium text-text-7d8 text-base leading-6 capitalize underline"
                      >
                        login
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
