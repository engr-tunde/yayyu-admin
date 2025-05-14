import * as yup from "yup";
import { z } from "zod";

export const validateAddUser = z.object({
  first_name: z.string().min(1, { message: "First name is missing!" }),
  last_name: z.string().min(1, { message: "Last name is missing!" }),
  email: z.string().email({ message: "Invalid email adress" }),
  phone: z.string().optional(),
});

export const validateAddAdmin = z
  .object({
    username: z.string().min(1, { message: "Username is missing!" }),
    email: z.string().email({ message: "Invalid email adress" }),
    password: z.string().optional(),
    confirmPassword: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const validateAddCategory = z.object({
  category: z.string().min(1, { message: "Category is missing!" }),
});

export const validateAddProduct = (cats) =>
  z.object({
    item_name: z.string().min(1, { message: "Product name is missing!" }),
    category: z.enum(cats, {
      message: "Product category is required!",
    }),
    description: z
      .string()
      .min(1, { message: "Product description is missing!" }),
    specification: z
      .string()
      .min(1, { message: "Product specification is missing!" }),
    original_price: z.string().min(1, { message: "Product price is missing!" }),
    new_price: z.string().optional(),
    sizes: z.string().optional(),
    colors: z.string().optional(),
  });

export const validateAddShipping = z.object({
  location: z.string().min(1, { message: "Location is missing!" }),
  delivery_duration: z
    .string()
    .min(1, { message: "Delivery duration is missing!" }),
  fee: z.coerce.number().min(1, { message: "Delivery fee is missing!" }),
});

export const validateLogin = () => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email")
      .required("Account email is missing"),
    password: yup
      .string()
      .trim()
      .min(8, "Password is too short")
      .required("Account password is missing"),
  });
  return validationSchema;
};

export const validateSignup = () => {
  // const phoneRegExp = /^+?[0-9]{6,15}$/;
  const phoneRegExp = /^[\d|\+|\(]+[\)|\d|\s|-]*[\d]$/;
  const validationSchema = yup.object({
    name: yup.string().trim().required("Name is missing"),
    email: yup.string().email("Invalid email").required("Email is missing"),
    // phone: yup
    //   .string()
    //   .matches(phoneRegExp, 'Invalid phone number. Follow the sample: +11255678765')
    //   .required('Phone number is missing'),
    // wallet: yup.string().trim().required('wallet is missing'),
    // network: yup.string().trim().required('Blockchain network is missing'),
    // country: yup.string().trim().required('Please select your country'),
    password: yup
      .string()
      .trim()
      .min(8, "Password is too short")
      .required("Password is missing"),
    confirmPassword: yup
      .string()
      .required("Confirm Account Password")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  return validationSchema;
};

export const validateUpdateProfile = () => {
  const phoneRegExp = /^[\d|\+|\(]+[\)|\d|\s|-]*[\d]$/;
  const validationSchema = yup.object({
    name: yup.string().trim().required("Name is missing"),
    country: yup.string().trim().required("Please select your country"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Invalid phone number. Follow the sample")
      .required("Phone number is missing"),
  });
  return validationSchema;
};

export const validateUpdatePassword = () => {
  const validationSchema = z
    .object({
      oldPassword: z.string().min(1, { message: "Old password is missing!" }),
      newPassword: z.string().optional(),
      confirmNewPassword: z.string().optional(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    });
  return validationSchema;
};

export const validateForgotPassword = () => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email")
      .required("Account email is missing"),
  });
  return validationSchema;
};

export const validateResetPassword = () => {
  const validationSchema = yup.object({
    password: yup
      .string()
      .trim()
      .min(8, "Password is too short")
      .required("Password is missing"),
    confirmPassword: yup
      .string()
      .required("Confirm Account Password")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  return validationSchema;
};

export const validateOtp = () => {
  const validationSchema = yup.object().shape({
    otp: yup
      .string()
      .trim()
      .min(4, "OTP is incomplete")
      .max(5, "OTP digits cannot be more than 4 characters long")
      .required("Please provide the OTP"),
  });
  return validationSchema;
};
