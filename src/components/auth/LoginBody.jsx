import React from "react";
import InputField from "../forms/InputField";
import CustomFormik from "../../utils/CustomFormik";
import { validateLogin } from "../../utils/validate";
import { loginValues } from "../../utils/initialValues";
import SubmitButton from "../forms/SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import { errorNotification, successNotification } from "../../utils/helpers";
import axios from "axios";
axios.defaults.withCredentials = true;

const LoginBody = () => {
  const initialValues = loginValues();
  const validationSchema = validateLogin();
  const history = useNavigate();

  const handleSubmit = async (values) => {
    console.log(values);

    const payload = {
      email: values.email,
      password: values.password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/user-auth/login`,
      payload
    );
    console.log(response);
    try {
      if (response.status === 200) {
        const data = response.data;
        if (data.message === "Unverified email") {
          console.log(data.userId);
          errorNotification("Account not yet verified.");
          const otpRes = await axios.post(
            `${import.meta.env.VITE_API_URL}/user-auth/resend-verification-otp`,
            { userId: data.userId }
          );
          setTimeout(() => {
            if (otpRes.status === 200) {
              const otpData = response.data;
              successNotification(
                "OTP has been sent to your email address. Provide the OTP in the next screen"
              );
              setTimeout(
                () =>
                  history("/verify-account", {
                    state: { userId: otpData.userId },
                  }),
                3000
              );
            } else {
              errorNotification(otpRes?.data?.error);
            }
          }, 2000);
        } else {
          successNotification(data.message);
          setTimeout(() => history("/dashboard"), 1500);
        }
      } else {
        errorNotification(response?.data?.error);
      }
    } catch (error) {
      errorNotification(error?.response?.data?.error);
    }
  };

  return (
    <>
      <div className="w-[100wv] h-[100vh] bg-titusDarkBG">
        <div className="max-w-[500px] h-full mx-auto px-10 md:px-7 flex flex-col items-center justify-center pt-[90px] pb-[150px] md:py-0">
          <div className="flex flex-col items-center px-3 w-full">
            <Link
              to="/"
              className="flex gap-2 items-center justify-center mb-2"
            >
              <img
                src="/assets/images/logo.png"
                alt=""
                className="w-[40px] md:w-[50px]"
              />
              <div className="flex flex-col items-start gap-0 text-white">
                <span className="text-[11px] md:text-[12px] font-bold uppercase p-0 m-0 leading-[0.9em] text-start">
                  TiTus
                </span>
                <span className="text-[8px] md:text-[8px] font-medium uppercase">
                  Exchange
                </span>
              </div>
            </Link>
            <div className="text-[24px] text-center mb-1 font-bold text-[#fff]"></div>

            <div className="text-[14px] mb-5 text-[#ffffffc9]">
              Login to your account
            </div>
          </div>
          <div className="py-2 w-full">
            <CustomFormik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <div className="font-bold text-[14.5px] md:text-[18px] grid grid-cols-1 gap-5 md:grid-cols-1 w-[100%] mb-2">
                <InputField name="email" placeholder="Your email address" />
                <InputField
                  name="password"
                  placeholder="Account password"
                  type="password"
                />
                <div className="text-[14px] md:text-[16px] text-center mt-0 flex justify-end gap-2">
                  <Link
                    to="/forgot-password"
                    className="text-[#fff] font-[300]"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <SubmitButton title="Login" className="mt-6 w-[100%]" />
              <div className="text-[14px] md:text-[16px] text-center mt-[20px] flex justify-between gap-2">
                Don't have an account yet?
                <Link to="/register" className="text-[#fff]">
                  Register
                </Link>
              </div>
            </CustomFormik>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginBody;
