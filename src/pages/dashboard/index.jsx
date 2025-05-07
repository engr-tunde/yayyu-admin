import UserCard from "../../components/globals/UserCard";
import {
  fetchOrders,
  fetchProducts,
  fetchShipping,
  fetchUsers,
} from "../../api";
import Loader from "../../components/globals/Loader";
import ErrorWidget from "../../components/globals/ErrorWidget";
import DashCategoriesTable from "../../components/dashboard/CategoriesTable";
import DashPendingOrdersTable from "../../components/dashboard/DashPendingOrdersTable";
import DashProductsTable from "../../components/dashboard/DashProductsTable";

const DashboardPage = () => {
  const { users, usersLoading, usersError } = fetchUsers();
  const { products, productsLoading, productsError } = fetchProducts();
  const { orders, ordersLoading, ordersError } = fetchOrders();
  const { shipping, shippingLoading, shippingError } = fetchShipping();

  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDs */}
        <div className="flex gap-4 justify-between flex-wrap">
          {users ? (
            <UserCard type="user" data={users?.data} url="/users" />
          ) : usersLoading ? (
            <Loader />
          ) : (
            usersError && <ErrorWidget error={usersError} />
          )}

          {products ? (
            <UserCard type="product" data={products?.data} url="/products" />
          ) : productsLoading ? (
            <Loader />
          ) : (
            productsError && <ErrorWidget error={productsError} />
          )}

          {orders ? (
            <UserCard type="order" data={orders?.data} url="/orders" />
          ) : ordersLoading ? (
            <Loader />
          ) : (
            ordersError && <ErrorWidget error={ordersError} />
          )}

          {shipping ? (
            <UserCard type="shipping" data={shipping?.data} url="/shipping" />
          ) : shippingLoading ? (
            <Loader />
          ) : (
            shippingError && <ErrorWidget error={shippingError} />
          )}
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            {/* <CountChart /> */}
            <DashCategoriesTable />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <DashPendingOrdersTable />
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <DashProductsTable />
      </div>
    </div>
  );
};

export default DashboardPage;
