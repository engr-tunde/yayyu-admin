import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormModalInputField from "./FormModalInputField";
import { addUser, fetchUsers, updateUser } from "../../api";
import { validateAddUser } from "../../utils/validate";
import { errorNotification, successNotification } from "../../utils/helpers";

const UserForm = ({ type, data, setOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validateAddUser),
  });

  const { mutate } = fetchUsers();

  const onSubmit = handleSubmit(async (fData) => {
    console.log(fData);
    const response =
      type === "create"
        ? await addUser(fData)
        : await updateUser(fData, data._id);
    console.log("response", response);
    if (response?.status === 200) {
      successNotification(response.data.message);
      setOpen(false);
      mutate();
    } else {
      errorNotification(response?.data?.error);
    }
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create"
          ? "Create a new student data"
          : `Update ${data?.first_name} ${data?.last_name}'s data`}
      </h1>
      <span className="text-xs text-gray-200 font-medium">
        Name Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <div className="w-[40%]">
          <FormModalInputField
            label="First Name"
            name="first_name"
            defaultValue={data?.first_name}
            register={register}
            error={errors?.first_name}
          />
        </div>
        <div className="w-[40%]">
          <FormModalInputField
            label="Last Name"
            name="last_name"
            defaultValue={data?.last_name}
            register={register}
            error={errors?.last_name}
          />
        </div>
      </div>

      <span className="text-xs text-gray-200 font-medium">
        Contact Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <div className="w-[40%]">
          <FormModalInputField
            label="Phone"
            name="phone"
            defaultValue={data?.phone}
            register={register}
            error={errors?.phone}
          />
        </div>
        <div className="w-[40%]">
          <FormModalInputField
            label="Email"
            name="email"
            defaultValue={data?.email}
            register={register}
            error={errors?.email}
          />
        </div>
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default UserForm;
