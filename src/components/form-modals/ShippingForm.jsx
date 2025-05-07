import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormModalInputField from "./FormModalInputField";
import { addShipping, fetchShipping, updateShipping } from "../../api";
import { validateAddShipping } from "../../utils/validate";
import { errorNotification, successNotification } from "../../utils/helpers";

const ShippingForm = ({ type, data, setOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validateAddShipping),
  });

  const { mutate } = fetchShipping();

  const onSubmit = handleSubmit(async (fData) => {
    console.log(fData);
    const response =
      type === "create"
        ? await addShipping(fData)
        : await updateShipping(fData, data._id);
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
          ? "Create a new shipping data"
          : `Update ${data?.location}'s data`}
      </h1>
      <span className="text-xs text-gray-200 font-medium">
        General Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <FormModalInputField
          label="Location"
          name="location"
          defaultValue={data?.location}
          register={register}
          error={errors?.location}
        />
      </div>
      <div className="flex justify-between flex-wrap gap-4">
        <div className="w-[45%]">
          <FormModalInputField
            label="Delivery Duration"
            name="delivery_duration"
            defaultValue={data?.delivery_duration}
            register={register}
            error={errors?.delivery_duration}
          />
        </div>
        <div className="w-[45%]">
          <FormModalInputField
            type="number"
            label="Shipping Fee"
            name="fee"
            defaultValue={data?.fee}
            register={register}
            error={errors?.fee}
          />
        </div>
      </div>

      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default ShippingForm;
