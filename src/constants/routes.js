const ADMIN_FORGOT_PASSWORD = "/admin-auth/forgot-password";
const ADMIN_RESET_PASSWORD = "/admin-auth/reset-password";
const ADMIN_LOGIN = "/admin-auth/login";

const ADMIN_LOGOUT = "/admin-auth/logout";
const ADMIN_PROFILE = "/admin-auth/get-admin";

const ADD_USER = "/user-management/add-user";
const UPDATE_USER = "/user-management/update-user";
const FETCH_USERS = "/user-management/fetch-all-users";
const DELETE_USER = "/user-management/delete-user";

const ADD_ADMIN = "/admin-management/add-admin";
const UPDATE_ADMIN = "/admin-management/update-admin";
const FETCH_ADMINS = "/admin-management/fetch-all-admins";
const DELETE_ADMIN = "/admin-management/delete-admin";

const ADD_CATEGORY = "/shop-management/add-category";
const UPDATE_CATEGORY = "/shop-management/update-category";
const FETCH_CATEGORIES = "/shop-management/fetch-categories";
const DELETE_CATEGORY = "/shop-management/delete-category";

const ADD_PRODUCT = "/shop-management/add-product";
const UPDATE_PRODUCT = "/shop-management/update-product";
const UPDATE_PRODUCT_COVER_IMG = "/shop-management/update-product-cover-img";
const FETCH_PRODUCTS = "/shop-management/fetch-all-products";
const FETCH_SINGLE_PRODUCT = "/shop-management/single-product";
const DELETE_PRODUCT = "/shop-management/delete-product";

const FETCH_ORDERS = "/shop-management/fetch-all-orders";
const FETCH_SINGLE_ORDER = "/shop-management/fetch-order";
const COMPLETE_ORDER = "/shop-management/complete-order";
const CANCEL_ORDER = "/shop-management/cancel-order";
const PEND_ORDER = "/shop-management/pend-order";
const DELETE_ORDER = "/shop-management/delete-order";

const ADD_SHIPPING = "/shop-management/add-shipping";
const UPDATE_SHIPPING = "/shop-management/update-shipping";
const FETCH_SHIPPINGS = "/shop-management/fetch-shipping-data";
const DELETE_SHIPPING = "/shop-management/delete-shipping";

export {
  ADD_USER,
  UPDATE_USER,
  FETCH_USERS,
  DELETE_USER,

  //
  ADD_ADMIN,
  UPDATE_ADMIN,
  FETCH_ADMINS,
  DELETE_ADMIN,

  //
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  FETCH_CATEGORIES,
  DELETE_CATEGORY,

  //
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_COVER_IMG,
  FETCH_PRODUCTS,
  FETCH_SINGLE_PRODUCT,
  DELETE_PRODUCT,

  //
  FETCH_ORDERS,
  FETCH_SINGLE_ORDER,
  COMPLETE_ORDER,
  CANCEL_ORDER,
  PEND_ORDER,
  DELETE_ORDER,

  //
  ADD_SHIPPING,
  UPDATE_SHIPPING,
  FETCH_SHIPPINGS,
  DELETE_SHIPPING,

  //
  ADMIN_FORGOT_PASSWORD,
  ADMIN_RESET_PASSWORD,
  ADMIN_LOGIN,
  ADMIN_LOGOUT,
  ADMIN_PROFILE,
};
