import useSWR from "swr";
import {
  ADD_ADMIN,
  ADD_CATEGORY,
  ADD_PRODUCT,
  ADD_SHIPPING,
  ADD_USER,
  ADMIN_FORGOT_PASSWORD,
  ADMIN_LOGIN,
  ADMIN_LOGOUT,
  ADMIN_PROFILE,
  ADMIN_RESET_PASSWORD,
  CANCEL_ORDER,
  COMPLETE_ORDER,
  DELETE_ADMIN,
  DELETE_CATEGORY,
  DELETE_ORDER,
  DELETE_PRODUCT,
  DELETE_SHIPPING,
  DELETE_USER,
  FETCH_ADMINS,
  FETCH_CATEGORIES,
  FETCH_ORDERS,
  FETCH_PRODUCTS,
  FETCH_SHIPPINGS,
  FETCH_SINGLE_ORDER,
  FETCH_SINGLE_PRODUCT,
  FETCH_USERS,
  PEND_ORDER,
  UPDATE_ADMIN,
  UPDATE_CATEGORY,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_COVER_IMG,
  UPDATE_SHIPPING,
  UPDATE_USER,
} from "../constants/routes";
import { mutationRequest } from "./sendData";
import { fetcher, sessionFetcher } from "./fetcher";

export const checkSession = () => {
  const { data, error, mutate } = useSWR(ADMIN_PROFILE, sessionFetcher);
  console.log("data", data);

  return {
    session: data,
    sessionLoading: !error && !data,
    sessionError: error,
    mutate,
  };
};

export const addUser = async (values) => {
  const result = await mutationRequest(ADD_USER, "post", values, true);
  return result;
};
export const updateUser = async (values, id) => {
  const result = await mutationRequest(
    `${UPDATE_USER}/${id}`,
    "put",
    values,
    true
  );
  return result;
};
export const deleteUser = async (id) => {
  const result = await mutationRequest(
    `${DELETE_USER}/${id}`,
    "delete",
    null,
    true
  );
  return result;
};
export const fetchUsers = () => {
  const { data, error, mutate } = useSWR(
    { url: FETCH_USERS, withCredentials: true },
    fetcher
  );
  return {
    users: data,
    usersLoading: !error && !data,
    usersError: error,
    mutate,
  };
};

export const addAdmin = async (values) => {
  const result = await mutationRequest(ADD_ADMIN, "post", values, false);
  return result;
};
export const updateAdmin = async (values, id) => {
  const result = await mutationRequest(
    `${UPDATE_ADMIN}/${id}`,
    "put",
    values,
    false
  );
  return result;
};
export const deleteAdmin = async (id) => {
  const result = await mutationRequest(
    `${DELETE_ADMIN}/${id}`,
    "delete",
    null,
    false
  );
  return result;
};
export const fetchAdmins = () => {
  const { data, error, mutate } = useSWR(
    { url: FETCH_ADMINS, withCredentials: true },
    fetcher
  );
  return {
    admins: data,
    adminsLoading: !error && !data,
    adminsError: error,
    mutate,
  };
};

// Categories
export const addCategory = async (values) => {
  const result = await mutationRequest(ADD_CATEGORY, "post", values, true);
  return result;
};
export const updateCategory = async (values, id) => {
  const result = await mutationRequest(
    `${UPDATE_CATEGORY}/${id}`,
    "put",
    values,
    true
  );
  return result;
};
export const deleteCategory = async (id) => {
  const result = await mutationRequest(
    `${DELETE_CATEGORY}/${id}`,
    "delete",
    null,
    true
  );
  return result;
};
export const fetchCategories = () => {
  const { data, error, mutate } = useSWR(
    { url: FETCH_CATEGORIES, withCredentials: true },
    fetcher
  );
  return {
    categories: data,
    categoriesLoading: !error && !data,
    categoriesError: error,
    mutate,
  };
};

// Products
export const addProduct = async (values) => {
  const result = await mutationRequest(ADD_PRODUCT, "post", values, true);
  return result;
};
export const updateProduct = async (values, id) => {
  const result = await mutationRequest(
    `${UPDATE_PRODUCT}/${id}`,
    "put",
    values,
    true
  );
  return result;
};
export const updateProductCoverImg = async (values, id) => {
  const result = await mutationRequest(
    `${UPDATE_PRODUCT_COVER_IMG}/${id}`,
    "put",
    values,
    true
  );
  return result;
};
export const deleteProduct = async (id) => {
  const result = await mutationRequest(
    `${DELETE_PRODUCT}/${id}`,
    "delete",
    null,
    true
  );
  return result;
};
export const fetchSingleProduct = (id) => {
  const { data, error, mutate } = useSWR(
    { url: `${FETCH_SINGLE_PRODUCT}/${id}`, withCredentials: true },
    fetcher
  );
  return {
    product: data,
    productLoading: !error && !data,
    productError: error,
    mutate,
  };
};
export const fetchProducts = () => {
  const { data, error, mutate } = useSWR(
    { url: FETCH_PRODUCTS, withCredentials: true },
    fetcher
  );
  return {
    products: data,
    productsLoading: !error && !data,
    productsError: error,
    mutate,
  };
};

// Order
export const fetchOrders = () => {
  const { data, error, mutate } = useSWR(
    { url: FETCH_ORDERS, withCredentials: true },
    fetcher
  );
  return {
    orders: data,
    ordersLoading: !error && !data,
    ordersError: error,
    mutate,
  };
};
export const fetchSingleOrder = (id) => {
  const { data, error, mutate } = useSWR(
    { url: `${FETCH_SINGLE_ORDER}/${id}`, withCredentials: true },
    fetcher
  );
  return {
    order: data,
    orderLoading: !error && !data,
    orderError: error,
    mutate,
  };
};
export const completeOrder = async (id) => {
  const result = await mutationRequest(
    `${COMPLETE_ORDER}/${id}`,
    "put",
    null,
    true
  );
  return result;
};
export const cancelOrder = async (id) => {
  const result = await mutationRequest(
    `${CANCEL_ORDER}/${id}`,
    "put",
    null,
    true
  );
  return result;
};
export const pendOrder = async (id) => {
  const result = await mutationRequest(
    `${PEND_ORDER}/${id}`,
    "put",
    null,
    true
  );
  return result;
};
export const deleteOrder = async (id) => {
  const result = await mutationRequest(
    `${DELETE_ORDER}/${id}`,
    "delete",
    null,
    true
  );
  return result;
};

// Shipping
export const addShipping = async (values) => {
  const result = await mutationRequest(ADD_SHIPPING, "post", values, true);
  return result;
};
export const updateShipping = async (values, id) => {
  const result = await mutationRequest(
    `${UPDATE_SHIPPING}/${id}`,
    "put",
    values,
    true
  );
  return result;
};
export const deleteShipping = async (id) => {
  const result = await mutationRequest(
    `${DELETE_SHIPPING}/${id}`,
    "delete",
    null,
    true
  );
  return result;
};
export const fetchShipping = () => {
  const { data, error, mutate } = useSWR(
    { url: FETCH_SHIPPINGS, withCredentials: true },
    fetcher
  );
  return {
    shipping: data,
    shippingLoading: !error && !data,
    shippingError: error,
    mutate,
  };
};

export const adminLogin = async (values) => {
  const result = await mutationRequest(ADMIN_LOGIN, "post", values, true);
  return result;
};

// Profile
export const adminProfile = () => {
  const { data, error, mutate } = useSWR(
    { url: ADMIN_PROFILE, withCredentials: true },
    fetcher
  );
  return {
    admin: data,
    adminLoading: !error && !data,
    adminError: error,
    mutate,
  };
};
export const userForgotPassword = async (values) => {
  const result = await mutationRequest(
    ADMIN_FORGOT_PASSWORD,
    "post",
    values,
    false
  );
  return result;
};
export const userResetPassword = async (id, token, values) => {
  const result = await mutationRequest(
    `${ADMIN_RESET_PASSWORD}?id=${id}&token=${token}`,
    "post",
    values,
    false
  );
  return result;
};
export const adminLogout = async () => {
  const result = await mutationRequest(ADMIN_LOGOUT, "post", null, true);
  return result;
};
