import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormModalInputField from "./FormModalInputField";
import { validateAddCoin } from "../../utils/validate";
import FormModalSelectField from "./FormModalSelectField";
// import { addListingToken, updateListingToken } from "../../api";
import { errorNotification, successNotification } from "./../../utils/helpers";
import { useState } from "react";
import FormModalFileInputField from "./FormModalFileInputField";

const TokenForm = ({ type, data }) => {
  const [logoURI, setlogoURI] = useState();
  const [logoURIError, setlogoURIError] = useState("");
  const [logoURIText, setlogoURIText] = useState("");
  const handleLogoURIChange = (e) => {
    const file = e.target.files[0];
    setlogoURI(file);
    setlogoURIError("");
    setlogoURIText(file.name);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validateAddCoin),
  });

  const onSubmit = handleSubmit(async (fdata) => {
    setlogoURIError("");
    console.log("data");
    console.log(fdata);
    const formData = new FormData();
    // for (let i = 0; i < images.length; i++) {
    //   formData.append(`images`, images[i]);
    // }
    formData.append("name", fdata.name);
    formData.append("symbol", fdata.symbol);
    formData.append("address", fdata.address);
    formData.append("chainId", fdata.chainId);
    formData.append("decimal", fdata.decimal);
    formData.append("type", fdata.type);
    formData.append("logoURI", logoURI);
    console.log("formData", ...formData);

    // const response =
    //   type === "create"
    //     ? await addListingToken(formData)
    //     : await updateListingToken(formData, data._id);
    // console.log("response", response);
    // if (response?.status === 200) {
    //   successNotification(response.data.message);
    // } else {
    //   errorNotification(response?.data?.error);
    // }
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create"
          ? "List token for Trading"
          : `Update ${data?.name} ${data?.symbol}'s data`}
      </h1>
      <span className="text-xs text-gray-200 font-medium -mb-5">
        General Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <FormModalSelectField
          label="Token Type"
          name="type"
          defaultValue={data?.type}
          register={register}
          error={errors?.type}
          options={["buy-sell", "swap", "p2p"]}
        />
        <FormModalInputField
          label="Token Name"
          name="name"
          defaultValue={data?.name}
          register={register}
          error={errors?.name}
        />
        <FormModalInputField
          label="Symbol"
          name="symbol"
          defaultValue={data?.symbol}
          register={register}
          error={errors?.symbol}
        />
      </div>

      <span className="text-xs text-gray-200 font-medium -mb-5">
        Other Information
      </span>
      <div className="w-full flex justify-between flex-wrap gap-4">
        <FormModalInputField
          label="Contract address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors?.address}
        />

        <FormModalInputField
          label="Chain ID"
          name="chainId"
          defaultValue={data?.chainId}
          register={register}
          error={errors?.chainId}
        />
        <FormModalInputField
          label="Decimal"
          name="decimal"
          type="number"
          defaultValue={data?.decimal}
          register={register}
          error={errors?.decimal}
        />
      </div>

      <FormModalFileInputField
        handleChange={handleLogoURIChange}
        label="Token logo"
        name={logoURI}
        nameText={logoURIText}
        error={logoURIError}
      />
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default TokenForm;
