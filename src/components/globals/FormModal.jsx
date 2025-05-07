import { useState } from "react";
import UserForm from "../form-modals/UserForm";
import TokenForm from "../form-modals/TokenForm";
import {
  cancelOrder,
  completeOrder,
  deleteAdmin,
  deleteCategory,
  deleteOrder,
  deleteProduct,
  deleteShipping,
  deleteUser,
  pendOrder,
} from "../../api";
import AdminForm from "../form-modals/AdminForm";
import CategoryForm from "../form-modals/CategoryForm";
import ProductForm from "../form-modals/ProductForm";
import { FaCheck, FaDoorClosed, FaPause } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ShippingForm from "../form-modals/ShippingForm";

const FormModal = ({ table, type, data, id, mutate, categories }) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-titusYellow"
      : type === "cancel"
      ? "bg-red-300"
      : type === "complete"
      ? "bg-green-300"
      : type === "update"
      ? "bg-titusSky"
      : "bg-[#D8D5FF]";

  const history = useNavigate();

  const forms = {
    token: (type, data) => (
      <TokenForm type={type} data={data} setOpen={setOpen} />
    ),
    user: (type, data) => (
      <UserForm type={type} data={data} setOpen={setOpen} />
    ),
    admin: (type, data) => (
      <AdminForm type={type} data={data} setOpen={setOpen} />
    ),
    category: (type, data) => (
      <CategoryForm type={type} data={data} setOpen={setOpen} />
    ),
    product: (type, data) =>
      categories ? (
        <ProductForm
          type={type}
          data={data}
          setOpen={setOpen}
          categories={categories}
        />
      ) : null,
    order: (type, data) => (
      <CategoryForm type={type} data={data} setOpen={setOpen} />
    ),
    shipping: (type, data) => (
      <ShippingForm type={type} data={data} setOpen={setOpen} />
    ),
  };

  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    const response =
      table === "user"
        ? await deleteUser(id)
        : table === "admin"
        ? await deleteAdmin(id)
        : table === "category"
        ? await deleteCategory(id)
        : table === "product"
        ? await deleteProduct(id)
        : table === "order"
        ? await deleteOrder(id)
        : table === "shipping"
        ? await deleteShipping(id)
        : null;
    console.log("response", response);
    if (response?.status === 200) {
      successNotification(response.data.message);
      setOpen(false);
      mutate();
    } else {
      errorNotification(response?.data?.error);
    }
  };

  const handleComplete = async () => {
    const response = table === "order" ? await completeOrder(id) : null;
    console.log("response", response);
    if (response?.status === 200) {
      successNotification(response.data.message);
      setOpen(false);
      mutate();
      table === "order" && setTimeout(() => history("/orders/completed"), 1000);
    } else {
      errorNotification(response?.data?.error);
    }
  };
  const handleCancel = async () => {
    const response = table === "order" ? await cancelOrder(id) : null;
    console.log("response", response);
    if (response?.status === 200) {
      successNotification(response.data.message);
      setOpen(false);
      mutate();
      table === "order" && setTimeout(() => history("/orders/canceled"), 1000);
    } else {
      errorNotification(response?.data?.error);
    }
  };

  const handlePend = async () => {
    const response = table === "order" ? await pendOrder(id) : null;
    console.log("response", response);
    if (response?.status === 200) {
      successNotification(response.data.message);
      setOpen(false);
      mutate();
      table === "order" && setTimeout(() => history("/orders/pending"), 1000);
    } else {
      errorNotification(response?.data?.error);
    }
  };

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <button
          onClick={handleDelete}
          className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center"
        >
          Delete {table}
        </button>
      </form>
    ) : type === "complete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          Are you sure you want to mark this {table} as "Completed"?
        </span>
        <button
          onClick={handleComplete}
          className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center"
        >
          Complete {table}
        </button>
      </form>
    ) : type === "cancel" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          Are you sure you want Cancel this {table}?
        </span>
        <button
          onClick={handleCancel}
          className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center"
        >
          Cancel {table}
        </button>
      </form>
    ) : type === "pend" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          Are you sure you want Pend this {table}?
        </span>
        <button
          onClick={handlePend}
          className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center"
        >
          Pend {table}
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "Form not found!"
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor} `}
        onClick={() => setOpen(true)}
      >
        {type === "complete" ? (
          <FaCheck className="text-black" />
        ) : type === "cancel" ? (
          <FaDoorClosed className="text-black" />
        ) : type === "pend" ? (
          <FaPause className="text-black" />
        ) : (
          // <div className="text-black font-">x</div>
          <img
            src={`/assets/images/${type}.png`}
            alt=""
            width={16}
            height={16}
          />
        )}
      </button>

      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-65 z-50 flex items-center justify-center">
          <div className="bg-titusDarkGray p-4 md:p-6 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <img
                src="/assets/images/close.png"
                alt=""
                width={14}
                height={14}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
