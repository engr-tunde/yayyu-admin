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

export const validateAddCoin = z.object({
  name: z.string().min(1, { message: "Token name is missing!" }),
  symbol: z.string().min(1, { message: "Token symbol is missing!" }),
  address: z.string().min(1, { message: "Token contract address is missing!" }),
  chainId: z.string().min(1, { message: "Token chain ID is missing!" }),
  decimal: z.string().min(1, { message: "Token decimal is missing!" }),
  type: z.enum(["buy-sell", "swap", "p2p"], {
    message: "Token listing type is required!",
  }),
  // logoURI: z.any().refine((files) => files?.length >= 1, {
  //   message: "logo URI is required!",
  // }),
});

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
  const validationSchema = yup.object({
    oldPassword: yup.string().required("Old Password is required"),
    newPassword: yup
      .string()
      .required("Account Password is required")
      .min(8, "Password is too short"),
    confirmNewPassword: yup
      .string()
      .required("Confirm Account Password")
      .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
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

export const validateRequestService = () => {
  const validationSchema = yup.object({
    walletValue: yup
      .string()
      .trim()
      .required("What is the estimated wallet value?"),
    social: yup
      .string()
      .trim()
      .required("Select a social network we can reach you through"),
    socialHandle: yup
      .string()
      .trim()
      .required("Provide your social media username"),
    walletAddress: yup.string().trim().required("Wallet address is missing"),
  });
  return validationSchema;
};

// Trade
export const validateP2pTrade = (selectedTrade) => {
  const validationSchema = yup.object().shape({
    pay: yup
      .string()
      .trim()
      .required("How much are you paying?")
      .test(
        "isLarger",
        `Amount already more than trade total quanity ${selectedTrade?.order?.quantity}`,
        (value, selectedTrade2) => {
          if (selectedTrade?.order?.quantity < value) return false;
          return true;
        }
      )
      .test(
        "isLarger",
        `Amount cannot be more than ${selectedTrade?.order?.max_limit}`,
        (value, selectedTrade2) => {
          if (selectedTrade?.order?.max_limit < value) return false;
          return true;
        }
      )
      .test(
        "isLower",
        "Amount cannot be less than the trade min limit",
        (value, selectedTrade2) => {
          if (selectedTrade?.order?.min_limit > value) return false;
          return true;
        }
      ),
  });
  return validationSchema;
};

export const validateTradeChat = () => {
  const validationSchema = yup.object().shape({
    message: yup.string().trim().required("Message is empty"),
  });
  return validationSchema;
};

export const validateAddBank = () => {
  const validationSchema = yup.object().shape({
    account_name: yup.string().trim().required("Account name is empty"),
    account_number: yup.string().trim().required("Account number is empty"),
    bank_name: yup.string().trim().required("Bank name is empty"),
  });
  return validationSchema;
};

export const validateAddMobileMoney = () => {
  const validationSchema = yup.object().shape({
    operator: yup.string().trim().required("Operator name is empty"),
    name: yup.string().trim().required("Account name is empty"),
    phone_number: yup.string().trim().required("Phone number is empty"),
  });
  return validationSchema;
};
