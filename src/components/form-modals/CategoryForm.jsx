import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormModalInputField from "./FormModalInputField";
import { addCategory, fetchCategories, updateCategory } from "../../api";
import { validateAddCategory } from "../../utils/validate";
import { errorNotification, successNotification } from "../../utils/helpers";

const CategoryForm = ({ type, data, setOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validateAddCategory),
  });

  const { mutate } = fetchCategories();

  const onSubmit = handleSubmit(async (fData) => {
    console.log(fData);
    const response =
      type === "create"
        ? await addCategory(fData)
        : await updateCategory(fData, data._id);
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
          ? "Create a new admin data"
          : `Update ${data?.category}'s data`}
      </h1>
      <span className="text-xs text-gray-200 font-medium">
        General Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <FormModalInputField
          label="Category"
          name="category"
          defaultValue={data?.category}
          register={register}
          error={errors?.category}
        />
      </div>

      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default CategoryForm;
